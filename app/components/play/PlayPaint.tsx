import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Paintbrush, Eraser, Save, ArrowLeft, ArrowRight, Trash, PaintBucket } from 'lucide-react';

const MAX_HISTORY = 20; // Limit history size to prevent memory bloat
const CANVAS_WIDTH = 1800;
const CANVAS_HEIGHT = 1800;

const colors = [
  '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080', '#808040', '#004040', '#0080FF', '#004080', '#8000FF', '#804000',
  '#FFFFFF', '#C0C0C0', '#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#FFFF80', '#00FF80', '#80FFFF', '#8080FF', '#FF0080', '#FF8040'
];

export function PlayPaint() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [tool, setTool] = useState<'brush' | 'eraser' | 'bucket'>('brush');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [showTools, setShowTools] = useState(true);
  const [canvasHeight, setCanvasHeight] = useState(500);

  // Check if device is mobile and adjust canvas height
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Adjust canvas container height based on screen size
      if (canvasContainerRef.current) {
        const viewportHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        
        if (mobile) {
          // On mobile, make canvas height smaller
          setCanvasHeight(Math.min(400, screenWidth * 0.9));
        } else if (screenWidth < 1024) {
          // On tablets
          setCanvasHeight(Math.min(500, viewportHeight * 0.6));
        } else {
          // On desktop
          setCanvasHeight(Math.min(600, viewportHeight * 0.6));
        }
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize canvas and context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    contextRef.current = context;
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Save initial state
    const initialState = context.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    setHistory([initialState]);
    setCurrentStep(0);

    // Cleanup function
    return () => {
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      contextRef.current = null;
      setHistory([]);
      setCurrentStep(-1);
    };
  }, []);

  const saveToHistory = () => {
    const context = contextRef.current;
    if (!context) return;

    const currentState = context.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Limit history size by removing oldest entries when exceeding MAX_HISTORY
    const newHistory = history.slice(Math.max(0, currentStep + 1 - MAX_HISTORY), currentStep + 1);
    newHistory.push(currentState);
    
    setHistory(newHistory);
    setCurrentStep(Math.min(currentStep + 1, MAX_HISTORY - 1));
  };

  const undo = () => {
    if (currentStep > 0) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');
      if (!context) return;

      const previousState = history[currentStep - 1];
      context.putImageData(previousState, 0, 0);
      setCurrentStep(currentStep - 1);
    }
  };

  const redo = () => {
    if (currentStep < history.length - 1) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');
      if (!context) return;

      const nextState = history[currentStep + 1];
      context.putImageData(nextState, 0, 0);
      setCurrentStep(currentStep + 1);
    }
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = 'my-painting.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height);
    saveToHistory();
  };

  // Mouse event handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    if (tool === 'bucket') {
      context.fillStyle = color;
      context.fillRect(0, 0, canvas.width, canvas.height);
      saveToHistory();
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    context.beginPath();
    context.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    context.lineTo(x, y);
    context.strokeStyle = tool === 'eraser' ? '#FFFFFF' : color;
    context.lineWidth = tool === 'eraser' ? 30 : 4;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();
  };

  // Touch event handlers
  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault(); // Prevent scrolling while drawing
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    if (tool === 'bucket') {
      context.fillStyle = color;
      context.fillRect(0, 0, canvas.width, canvas.height);
      saveToHistory();
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
    
    context.beginPath();
    context.moveTo(x, y);
    setIsDrawing(true);
  };

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault(); // Prevent scrolling while drawing
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
    
    context.lineTo(x, y);
    context.strokeStyle = tool === 'eraser' ? '#FFFFFF' : color;
    context.lineWidth = tool === 'eraser' ? 30 : 4;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      saveToHistory();
    }
    setIsDrawing(false);
  };

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // Disable dragging on mobile
    setDragging(true);
    setPosition({
      x: e.clientX - (containerRef.current?.offsetLeft || 0),
      y: e.clientY - (containerRef.current?.offsetTop || 0)
    });
  };

  const onDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // Disable dragging on mobile
    if (dragging) {
      const left = e.clientX - position.x;
      const top = e.clientY - position.y;
      if (containerRef.current) {
        containerRef.current.style.left = `${left}px`;
        containerRef.current.style.top = `${top}px`;
      }
    }
  };

  const stopDragging = () => {
    setDragging(false);
  };

  const toggleTools = () => {
    setShowTools(!showTools);
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <div 
        ref={containerRef}
        className="relative mx-auto bg-white border border-gray-100 rounded-lg shadow-md w-full sm:w-auto" 
        style={{ maxWidth: '100%' }}
      >
        {/* Title Bar */}
        <div 
          className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white px-4 py-2 flex justify-between items-center cursor-move rounded-t-lg"
          onMouseDown={startDragging}
          onMouseMove={onDrag}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >
          <div className="flex items-center">
            <Paintbrush className="w-4 h-4 mr-2" />
            <span className="font-medium">Digital Paint</span>
          </div>
          
          {isMobile && (
            <Button 
              variant="ghost" 
              onClick={toggleTools}
              className="h-8 px-3 text-xs text-white hover:bg-white/10 rounded-md"
            >
              {showTools ? 'Hide Tools' : 'Show Tools'}
            </Button>
          )}
          
          {!isMobile && (
            <div className="flex gap-2">
              <Button variant="ghost" className="h-6 w-6 p-0 min-w-0 text-white hover:bg-white/10 rounded-sm">_</Button>
              <Button variant="ghost" className="h-6 w-6 p-0 min-w-0 text-white hover:bg-white/10 rounded-sm">□</Button>
              <Button variant="ghost" className="h-6 w-6 p-0 min-w-0 text-white hover:bg-white/10 rounded-sm">×</Button>
            </div>
          )}
        </div>
        
        {/* Menu Bar - Hide on mobile or when tools are shown */}
        {(!isMobile || !showTools) && (
          <div className="bg-slate-50 px-4 py-2 text-sm border-b border-gray-100 flex gap-6">
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">File</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Edit</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">View</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Image</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Help</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row">
          {/* Mobile Toolbar - Horizontal on top for mobile */}
          {isMobile && showTools && (
            <div className="w-full bg-slate-50 p-3 border-b border-gray-100 flex justify-center gap-2 flex-wrap">
              <Button
                variant="ghost"
                className={`w-9 h-9 p-0 min-w-0 rounded-md ${
                  tool === 'brush' 
                    ? 'bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 text-blue-600 font-medium border border-gray-200 shadow-sm' 
                    : 'hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5'
                }`}
                onClick={() => setTool('brush')}
              >
                <Paintbrush className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className={`w-9 h-9 p-0 min-w-0 rounded-md ${
                  tool === 'eraser' 
                    ? 'bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 text-blue-600 font-medium border border-gray-200 shadow-sm' 
                    : 'hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5'
                }`}
                onClick={() => setTool('eraser')}
              >
                <Eraser className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className={`w-9 h-9 p-0 min-w-0 rounded-md ${
                  tool === 'bucket' 
                    ? 'bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 text-blue-600 font-medium border border-gray-200 shadow-sm' 
                    : 'hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5'
                }`}
                onClick={() => setTool('bucket')}
              >
                <PaintBucket className="w-4 h-4" />
              </Button>
              <div className="h-9 w-px bg-gray-200 mx-1" />
              <Button
                variant="ghost"
                className="w-9 h-9 p-0 min-w-0 rounded-md hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5 disabled:opacity-40"
                onClick={undo}
                disabled={currentStep <= 0}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className="w-9 h-9 p-0 min-w-0 rounded-md hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5 disabled:opacity-40"
                onClick={redo}
                disabled={currentStep >= history.length - 1}
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="h-9 w-px bg-gray-200 mx-1" />
              <Button
                variant="ghost"
                className="w-9 h-9 p-0 min-w-0 rounded-md hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5"
                onClick={saveCanvas}
              >
                <Save className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className="w-9 h-9 p-0 min-w-0 rounded-md hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5"
                onClick={clearCanvas}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Desktop Toolbar - Vertical on side for desktop */}
          {!isMobile && (
            <div className="w-12 bg-slate-50 p-2 border-r border-gray-100 flex flex-col gap-2">
              <Button
                variant="ghost"
                className={`w-8 h-8 p-0 min-w-0 rounded-md ${
                  tool === 'brush' 
                    ? 'bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 text-blue-600 font-medium border border-gray-200 shadow-sm' 
                    : 'hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5'
                }`}
                onClick={() => setTool('brush')}
              >
                <Paintbrush className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className={`w-8 h-8 p-0 min-w-0 rounded-md ${
                  tool === 'eraser' 
                    ? 'bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 text-blue-600 font-medium border border-gray-200 shadow-sm' 
                    : 'hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5'
                }`}
                onClick={() => setTool('eraser')}
              >
                <Eraser className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className={`w-8 h-8 p-0 min-w-0 rounded-md ${
                  tool === 'bucket' 
                    ? 'bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 text-blue-600 font-medium border border-gray-200 shadow-sm' 
                    : 'hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5'
                }`}
                onClick={() => setTool('bucket')}
              >
                <PaintBucket className="w-4 h-4" />
              </Button>
              <div className="h-px w-full bg-gray-200 my-2" />
              <Button
                variant="ghost"
                className="w-8 h-8 p-0 min-w-0 rounded-md hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5 disabled:opacity-40"
                onClick={undo}
                disabled={currentStep <= 0}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className="w-8 h-8 p-0 min-w-0 rounded-md hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5 disabled:opacity-40"
                onClick={redo}
                disabled={currentStep >= history.length - 1}
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="h-px w-full bg-gray-200 my-2" />
              <Button
                variant="ghost"
                className="w-8 h-8 p-0 min-w-0 rounded-md hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5"
                onClick={saveCanvas}
              >
                <Save className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className="w-8 h-8 p-0 min-w-0 rounded-md hover:bg-gradient-to-r hover:from-purple-600/5 hover:via-blue-500/5 hover:to-cyan-400/5"
                onClick={clearCanvas}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Canvas */}
          <div 
            ref={canvasContainerRef}
            className="flex-grow overflow-auto bg-white"
            style={{ height: `${canvasHeight}px` }}
          >
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseOut={stopDrawing}
              onTouchStart={startDrawingTouch}
              onTouchMove={drawTouch}
              onTouchEnd={stopDrawing}
              onTouchCancel={stopDrawing}
              className="w-full h-full touch-none"
            />
          </div>
        </div>

        {/* Color Palette */}
        <div className="flex bg-slate-50 p-2 border-t border-gray-100">
          <div className="flex flex-wrap gap-1.5 mx-auto">
            {colors.map((c) => (
              <Button
                key={c}
                variant="ghost"
                className={`w-7 h-7 p-0 min-w-0 rounded-md transition-all ${
                  color === c 
                    ? 'ring-2 ring-purple-500/40 ring-offset-1 ring-offset-white scale-110' 
                    : 'hover:scale-105'
                }`}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </div>

        {/* Status Bar - Hide on mobile */}
        {!isMobile && (
          <div className="bg-slate-50 px-4 py-2 text-xs text-muted-foreground border-t border-gray-100 rounded-b-lg flex justify-between items-center">
            <span>
              {tool === 'brush' ? 'Brush Selected' : tool === 'eraser' ? 'Eraser Selected' : 'Fill Tool Selected'}
            </span>
            <div className="flex items-center gap-3 text-xs">
              <span className="px-2 py-1 bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5 rounded-md border border-gray-200 text-xs">
                {CANVAS_WIDTH} × {CANVAS_HEIGHT} px
              </span>
              <span className="px-2 py-1 bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5 rounded-md border border-gray-200 text-xs">
                {history.length} states
              </span>
            </div>
          </div>
        )}
        
        {isMobile && (
          <div className="bg-slate-50 px-4 py-2 text-xs text-muted-foreground border-t border-gray-100 rounded-b-lg text-center">
            Tap and drag to draw
          </div>
        )}
      </div>
    </div>
  );
}

// Also export as default for backward compatibility
export default PlayPaint;

