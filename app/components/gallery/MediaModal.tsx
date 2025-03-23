"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Info, Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import Image from 'next/image';
import { GalleryItem } from '@/app/components/play/gallery/types';

interface MediaModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

// Custom AudioPlayer component
function AudioPlayer({ src, title }: { src: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);
  const [audioData, setAudioData] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const volumeBarRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Format time in mm:ss
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Initialize Web Audio API
  const initAudio = () => {
    if (!audioRef.current) return;
    
    try {
      // Create audio context if not existing
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const audioContext = audioContextRef.current;
      
      // Create analyzer node
      if (!analyserRef.current) {
        analyserRef.current = audioContext.createAnalyser();
        analyserRef.current.fftSize = 512; // Higher resolution for better visualization
        
        const bufferLength = analyserRef.current.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);
        
        // Connect audio element to the Web Audio API
        if (!sourceRef.current) {
          sourceRef.current = audioContext.createMediaElementSource(audioRef.current);
          sourceRef.current.connect(analyserRef.current);
          analyserRef.current.connect(audioContext.destination);
        }
      }
    } catch (error) {
      console.error("Web Audio API initialization error:", error);
    }
  };

  // Handle play/pause
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    // Initialize audio on first play
    if (!audioContextRef.current) {
      initAudio();
    }
    
    // Resume audio context if suspended (browser autoplay policies)
    if (audioContextRef.current?.state === 'suspended') {
      audioContextRef.current.resume();
    }
    
    if (isPlaying) {
      audioRef.current.pause();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    } else {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
    setIsPlaying(!isPlaying);
  };

  // Progress animation
  const whilePlaying = () => {
    if (!audioRef.current) return;
    if (!isDraggingProgress) {
      setCurrentTime(audioRef.current.currentTime);
    }
    drawVisualizer();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // Drawing the audio visualizer with real-time data
  const drawVisualizer = () => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;
    
    if (!canvas || !analyser || !dataArray) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Get real-time frequency data
    analyser.getByteFrequencyData(dataArray);
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set dimensions
    const width = canvas.width;
    const height = canvas.height;
    
    // Create gradient for the waveform - more refined with subtle transitions
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#60a5fa');  // blue-400
    gradient.addColorStop(0.5, '#8b5cf6'); // purple-500
    gradient.addColorStop(1, '#3b82f6');   // blue-500
    
    // Bar width calculation - slightly thinner bars for more detail
    const barWidth = (width / dataArray.length) * 2.2;
    let barHeight;
    let x = 0;
    
    // Draw the frequency bars with subtle animations
    for (let i = 0; i < dataArray.length; i++) {
      // Make the bars responsive to volume and frequency
      barHeight = dataArray[i] * (height / 256) * 0.85;
      
      // Apply gradient fill
      ctx.fillStyle = gradient;
      
      // Draw bar with rounded tops for a more refined look
      ctx.beginPath();
      ctx.roundRect(x, height - barHeight, barWidth - 1, barHeight, 2);
      ctx.fill();
      
      // Add subtle glow effect for active frequencies
      if (barHeight > height * 0.3) {
        ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
        ctx.shadowBlur = 5;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.roundRect(x, height - barHeight, barWidth - 1, 4, 2);
        ctx.fill();
      }
      
      // Reset shadow
      ctx.shadowBlur = 0;
      
      // Add spacing between bars
      x += barWidth;
    }
    
    // Draw time position indicator as a subtle pulsing line
    const position = (currentTime / duration) * width;
    const indicatorAlpha = Math.sin(Date.now() * 0.01) * 0.2 + 0.7;
    ctx.fillStyle = `rgba(255, 255, 255, ${indicatorAlpha})`;
    ctx.fillRect(position, 0, 2, height);
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Start dragging handlers
  const startDraggingProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingProgress(true);
    handleProgressChange(e);
    document.addEventListener('mousemove', handleProgressDrag);
    document.addEventListener('mouseup', stopDraggingProgress);
  };

  const startDraggingVolume = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingVolume(true);
    handleVolumeChange(e);
    document.addEventListener('mousemove', handleVolumeDrag);
    document.addEventListener('mouseup', stopDraggingVolume);
  };

  // Drag handlers
  const handleProgressDrag = (e: MouseEvent) => {
    if (!isDraggingProgress || !progressBarRef.current || !audioRef.current) return;
    
    const bounds = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    const percentage = Math.min(Math.max(x / width, 0), 1);
    
    setCurrentTime(percentage * duration);
    // We don't update audio.currentTime until mouseup for smoother dragging
  };

  const handleVolumeDrag = (e: MouseEvent) => {
    if (!isDraggingVolume || !volumeBarRef.current || !audioRef.current) return;
    
    const bounds = volumeBarRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    const percentage = Math.min(Math.max(x / width, 0), 1);
    
    setVolume(percentage);
    audioRef.current.volume = percentage;
  };

  // Stop dragging handlers
  const stopDraggingProgress = () => {
    if (isDraggingProgress && audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
    setIsDraggingProgress(false);
    document.removeEventListener('mousemove', handleProgressDrag);
    document.removeEventListener('mouseup', stopDraggingProgress);
  };

  const stopDraggingVolume = () => {
    setIsDraggingVolume(false);
    document.removeEventListener('mousemove', handleVolumeDrag);
    document.removeEventListener('mouseup', stopDraggingVolume);
  };

  // Handle progress bar click
  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current) return;
    
    const bounds = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    const percentage = Math.min(Math.max(x / width, 0), 1);
    
    setCurrentTime(percentage * duration);
    if (!isDraggingProgress) {
      audioRef.current.currentTime = percentage * duration;
    }
  };

  // Handle volume change
  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!volumeBarRef.current || !audioRef.current) return;
    
    const bounds = volumeBarRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    const percentage = Math.min(Math.max(x / width, 0), 1);
    
    setVolume(percentage);
    audioRef.current.volume = percentage;
  };

  // Handle seeking
  const handleSeek = (amount: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += amount;
  };

  // Effect to handle canvas setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas dimensions to match its display size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    
    // Add resize handler for responsive canvas
    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to handle audio element events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedData = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    const handleTimeUpdate = () => {
      if (!isDraggingProgress) {
        setCurrentTime(audio.currentTime);
      }
    };

    // Add event listeners
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    // Set initial volume
    audio.volume = volume;

    return () => {
      // Clean up event listeners
      audio?.removeEventListener('loadeddata', handleLoadedData);
      audio?.removeEventListener('ended', handleEnded);
      audio?.removeEventListener('timeupdate', handleTimeUpdate);
      
      // Clean up audio context
      if (sourceRef.current) {
        sourceRef.current.disconnect();
      }
      
      if (analyserRef.current) {
        analyserRef.current.disconnect();
      }
      
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
      
      // Cancel animation frame if playing
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      
      // Clean up drag listeners
      document.removeEventListener('mousemove', handleProgressDrag);
      document.removeEventListener('mouseup', stopDraggingProgress);
      document.removeEventListener('mousemove', handleVolumeDrag);
      document.removeEventListener('mouseup', stopDraggingVolume);
    };
  }, [isDraggingProgress]);

  return (
    <div className="w-full h-full bg-transparent rounded-md overflow-hidden flex flex-col justify-between">
      {/* Audio element */}
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Title and visualizer section */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-white text-2xl font-serif font-bold mb-5 text-center tracking-tight">{title}</h3>
        
        {/* Waveform visualization canvas - improved visual design */}
        <div 
          className="relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-md mb-6 overflow-hidden border border-gray-700/30 mx-auto flex-grow shadow-inner cursor-pointer w-full" 
          style={{ minHeight: '220px' }}
          onClick={togglePlayPause}
        >
          <canvas 
            ref={canvasRef} 
            className="w-full h-full"
            style={{ display: 'block' }}
          />
          
          {/* Subtle glow effect for visualization */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-500/5 to-transparent"></div>
          
          {/* Overlay play icon indicator when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center">
                <Play className="w-8 h-8 text-white/70 ml-1" />
              </div>
            </div>
          )}
        </div>
        
        {/* Progress bar with interactive drag handle */}
        <div className="mb-4 px-1">
          <div 
            ref={progressBarRef}
            className="w-full h-2 bg-gray-700/80 rounded-full cursor-pointer mb-2 relative group"
            onClick={handleProgressChange}
            onMouseDown={startDraggingProgress}
          >
            {/* Progress track shadow */}
            <div className="absolute inset-0 rounded-full shadow-inner"></div>
            
            {/* Progress fill with gradient and animation */}
            <div 
              className={`absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all ${isDraggingProgress ? 'duration-0' : 'duration-100'}`}
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            
            {/* Progress bar glow effect */}
            <div 
              className="absolute top-0 left-0 h-full rounded-full opacity-20 blur-[2px] bg-blue-400"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            
            {/* Drag handle with hover and active states */}
            <div 
              className={`absolute top-1/2 -mt-2 -ml-2 w-4 h-4 rounded-full bg-white shadow-[0_0_10px_rgba(59,130,246,0.7)] border-2 border-blue-500 transform ${isDraggingProgress ? 'scale-110' : 'scale-0 group-hover:scale-100'} transition-transform duration-200`}
              style={{ left: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          
          {/* Time indicators */}
          <div className="flex justify-between text-xs font-mono">
            <span className="text-gray-300">{formatTime(currentTime)}</span>
            <span className="text-gray-400">{formatTime(duration)}</span>
          </div>
        </div>
        
        {/* Controls - refined with better spacing and hover states */}
        <div className="flex items-center justify-between bg-gray-800/80 backdrop-blur-sm p-3 rounded-md shadow-md border border-gray-700/30 mx-auto w-full mb-3">
          <div className="flex items-center space-x-5">
            {/* Skip backward button */}
            <button 
              onClick={() => handleSeek(-10)} 
              className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="Skip back 10 seconds"
            >
              <SkipBack size={18} />
            </button>
            
            {/* Play/Pause button - refined with subtle animation */}
            <button 
              onClick={togglePlayPause} 
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 shadow-lg"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? 
                <Pause size={22} className="transition-transform duration-200" /> : 
                <Play size={22} className="ml-1 transition-transform duration-200" />
              }
            </button>
            
            {/* Skip forward button */}
            <button 
              onClick={() => handleSeek(10)} 
              className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="Skip forward 10 seconds"
            >
              <SkipForward size={18} />
            </button>
          </div>
          
          {/* Volume control - improved slider similar to progress bar */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleMute} 
              className="text-gray-300 hover:text-white transition-all duration-200"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            
            <div 
              ref={volumeBarRef}
              className="w-20 h-1.5 bg-gray-700/80 rounded-full cursor-pointer relative group"
              onClick={handleVolumeChange}
              onMouseDown={startDraggingVolume}
            >
              {/* Volume track shadow */}
              <div className="absolute inset-0 rounded-full shadow-inner"></div>
              
              {/* Volume fill with gradient */}
              <div 
                className={`absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all ${isDraggingVolume ? 'duration-0' : 'duration-100'}`}
                style={{ width: `${volume * 100}%` }}
              />
              
              {/* Volume handle with hover effect */}
              <div 
                className={`absolute top-1/2 -mt-1.5 -ml-1.5 w-3 h-3 rounded-full bg-white shadow-md border border-blue-400 transform ${isDraggingVolume ? 'scale-110' : 'scale-0 group-hover:scale-100'} transition-transform duration-200`}
                style={{ left: `${volume * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MediaModal({ item, onClose, onNext, onPrevious }: MediaModalProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [currentView, setCurrentView] = useState<string | null>(null);
  
  // Set the initial view to the main item src
  useEffect(() => {
    if (item) {
      setCurrentView(item.src);
    }
  }, [item]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrevious) onPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNext, onPrevious]);

  // Helper to check if an image is the current view
  const isCurrentView = (src: string) => currentView === src;

  if (!item) return null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-0.5 bg-gradient-to-r from-transparent via-gray-400/10 to-transparent"></div>
          </div>
          
          {/* Close button - redesigned */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white hover:bg-black/60 hover:border-white/20 transition-all duration-300 flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Navigation buttons - redesigned */}
          {onPrevious && (
            <motion.button
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 group flex items-center"
              aria-label="Previous item"
            >
              <div className="rounded-full bg-black/40 border border-white/10 p-3 text-white group-hover:bg-black/60 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300">
                <ChevronLeft className="w-6 h-6" />
              </div>
              <div className="bg-black/40 py-1 px-2 text-white text-xs rounded-md absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity">Previous</div>
            </motion.button>
          )}
          
          {onNext && (
            <motion.button
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 group flex items-center"
              aria-label="Next item"
            >
              <div className="rounded-full bg-black/40 border border-white/10 p-3 text-white group-hover:bg-black/60 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300">
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="bg-black/40 py-1 px-2 text-white text-xs rounded-md absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity">Next</div>
            </motion.button>
          )}
          
          {/* Main content container with side-by-side layout */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 overflow-y-auto py-16"
          >
            {/* Left side: Media content */}
            <div className={`w-full ${item.type === 'audio' ? 'lg:w-1/2' : 'lg:w-3/5'} flex items-center justify-center relative`}>
              <div className="w-full max-w-4xl">
                {/* Content type label - Removed */}
                
                {item.type === 'image' && (
                  <div className="relative aspect-square max-w-full overflow-hidden">
                    {/* Museum-quality frame */}
                    <div className="relative bg-white shadow-2xl p-6 rounded-sm h-full flex items-center justify-center">
                      {/* Subtle pinstripe texture overlay */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none bg-repeat" style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0zm1 5v1H5V5z'/%3E%3C/g%3E%3C/svg%3E")` 
                      }}></div>
                      
                      {/* Inset shadow for depth */}
                      <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
                      
                      {/* Image with crossfade animation */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentView}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="relative max-w-full max-h-full"
                        >
                          <Image
                            src={currentView || item.src}
                            alt={item.title}
                            width={1000}
                            height={1000}
                            className="object-contain max-h-full max-w-full"
                            priority
                          />

                          {/* Matting border around image */}
                          <div className="absolute inset-1 border border-gray-200/70 pointer-events-none"></div>
                          
                          {/* Frame corner accents - more sophisticated */}
                          <div className="absolute top-0 left-0 w-8 h-8">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-800 to-transparent"></div>
                            <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-gray-800 to-transparent"></div>
                          </div>
                          <div className="absolute top-0 right-0 w-8 h-8">
                            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-gray-800 to-transparent"></div>
                            <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-gray-800 to-transparent"></div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-8 h-8">
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-800 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-gray-800 to-transparent"></div>
                          </div>
                          <div className="absolute bottom-0 right-0 w-8 h-8">
                            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-gray-800 to-transparent"></div>
                            <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-gray-800 to-transparent"></div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                )}
                
                {item.type === 'video' && (
                  <div className="relative aspect-square max-w-full overflow-hidden">
                    {/* Museum-quality frame */}
                    <div className="relative bg-white shadow-2xl p-6 rounded-sm h-full flex items-center justify-center">
                      {/* Subtle pinstripe texture overlay */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none bg-repeat" style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0zm1 5v1H5V5z'/%3E%3C/g%3E%3C/svg%3E")` 
                      }}></div>
                      
                      <div className="relative bg-black/90 w-full h-full flex items-center justify-center overflow-hidden">
                        <video 
                          src={item.src} 
                          controls 
                          autoPlay 
                          className="max-w-full max-h-full"
                        />
                        
                        {/* Frame corner accents - more sophisticated */}
                        <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-800 to-transparent"></div>
                          <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-gray-800 to-transparent"></div>
                        </div>
                        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-gray-800 to-transparent"></div>
                          <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-gray-800 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none">
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-800 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-gray-800 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
                          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-gray-800 to-transparent"></div>
                          <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-gray-800 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {item.type === 'audio' && (
                  <div className="relative aspect-square max-w-full overflow-hidden">
                    {/* Audio player frame with premium finish */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black shadow-2xl p-6 rounded-sm h-full">
                      {/* Subtle texture overlay */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 2h4v4h4v4H8v-4H4V2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundSize: '8px 8px'
                      }}></div>
                      
                      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 h-full rounded-sm border border-gray-700/20 flex items-center justify-center">
                        <div className="w-full h-full flex flex-col">
                          <AudioPlayer src={item.src} title={item.title} />
                        </div>
                        
                        {/* Frame corner accents - with brand color gradients */}
                        <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                          <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
                        </div>
                        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
                          <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none">
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-purple-500 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
                          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-500 to-transparent"></div>
                          <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-purple-500 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right side: Info panel */}
            <div className={`w-full ${item.type === 'audio' ? 'lg:w-1/2' : 'lg:w-2/5'} bg-gradient-to-b from-gray-900 to-black/95 backdrop-blur-md rounded-md max-h-[80vh] overflow-y-auto relative`}>
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.5' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '16px 16px'
              }}></div>
              
              <div className="p-8 relative z-10">
                {/* Title with decorative element */}
                <div className="mb-8 relative">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                  <h2 className="text-white text-3xl font-serif font-bold">{item.title}</h2>
                  <p className="text-gray-300 mt-4 leading-relaxed">{item.description}</p>
                </div>
                
                <div className="space-y-8">
                  {/* Prompt Engineering Section */}
                  <div>
                    <h3 className="text-white text-lg mb-4 font-mono font-bold flex items-center">
                      <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></span>
                      Prompt Engineering
                    </h3>
                    <div className="bg-black/50 p-5 rounded-md mb-4 border border-gray-800">
                      <p className="text-gray-300 font-mono text-sm whitespace-pre-wrap leading-relaxed">{item.prompt.text}</p>
                    </div>
                    
                    {/* Best Practices Accordion */}
                    <BestPracticesAccordion modelName={item.prompt.model} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-white text-lg mb-3 font-mono font-bold flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        Created With
                      </h3>
                      <div className="bg-black/30 rounded-md border border-gray-800 p-3 inline-flex items-center">
                        <div className="w-2 h-8 bg-blue-500 rounded-l-sm -ml-3 mr-3"></div>
                        <span className="text-gray-300">{item.prompt.model} {item.prompt.version || ''}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-white text-lg mb-3 font-mono font-bold flex items-center">
                        <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                        Created On
                      </h3>
                      <div className="bg-black/30 rounded-md border border-gray-800 p-3 inline-flex items-center">
                        <div className="w-2 h-8 bg-purple-500 rounded-l-sm -ml-3 mr-3"></div>
                        <span className="text-gray-300">{new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>
                  </div>
                  
                  {item.additionalImages && item.additionalImages.length > 0 && (
                    <div>
                      <h3 className="text-white text-lg mb-4 font-mono font-bold flex items-center">
                        <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></span>
                        Additional Views
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div 
                          className={`relative aspect-square rounded-md overflow-hidden ${isCurrentView(item.src) ? 'ring-2 ring-blue-500 scale-105 z-10' : 'ring-1 ring-gray-700 hover:ring-blue-400'} transition-all duration-300 cursor-pointer`}
                          onClick={() => setCurrentView(item.src)}
                        >
                          <Image
                            src={item.src}
                            alt={`Main view`}
                            fill
                            className="object-cover"
                          />
                          {isCurrentView(item.src) && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs py-1 text-center font-medium">
                              Current
                            </div>
                          )}
                        </div>
                        {item.additionalImages.map((img, i) => (
                          <div 
                            key={i} 
                            className={`relative aspect-square rounded-md overflow-hidden ${isCurrentView(img) ? 'ring-2 ring-blue-500 scale-105 z-10' : 'ring-1 ring-gray-700 hover:ring-blue-400'} transition-all duration-300 cursor-pointer`}
                            onClick={() => setCurrentView(img)}
                          >
                            <Image
                              src={img}
                              alt={`Additional view ${i+1}`}
                              fill
                              className="object-cover"
                            />
                            {isCurrentView(img) && (
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs py-1 text-center font-medium">
                                Current
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Best Practices Accordion Component
function BestPracticesAccordion({ modelName }: { modelName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Determine best practices content based on model
  const getBestPractices = () => {
    if (modelName.toLowerCase().includes('dalle')) {
      return (
        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
          <li>Be highly specific about what you want to see</li>
          <li>Use descriptive adjectives and clear instructions</li>
          <li>Reference specific styles or techniques when possible</li>
        </ul>
      );
    }
    
    if (modelName.toLowerCase().includes('midjourney')) {
      return (
        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
          <li>Use parameters like --ar, --stylize, --chaos for fine control</li>
          <li>Start with subject, details, style, then artist references</li>
          <li>Include mood, lighting, and camera specifications</li>
        </ul>
      );
    }
    
    if (modelName.toLowerCase().includes('stable')) {
      return (
        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
          <li>Weight important terms with (term:1.2) syntax</li>
          <li>Include seed values for reproducible results</li>
          <li>Specify negative prompts to avoid unwanted elements</li>
        </ul>
      );
    }
    
    if (modelName.toLowerCase().includes('suno')) {
      return (
        <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
          <li>Describe the overall genre, mood, and instrumentation</li>
          <li>Structure by sections (intro, verse, chorus, etc.)</li>
          <li>Reference specific artists or musical styles for influence</li>
        </ul>
      );
    }
    
    // Default case
    return (
      <ul className="text-xs text-gray-400 list-disc pl-4 space-y-1">
        <li>Be highly specific about what you want to see</li>
        <li>Use descriptive adjectives and clear instructions</li>
        <li>Reference specific styles or techniques when possible</li>
      </ul>
    );
  };
  
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-md border border-gray-700/50 overflow-hidden">
      {/* Accordion Header */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between text-left transition-all"
      >
        <span className="text-xs text-gray-400 italic flex items-center">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
          Best practices for {modelName} prompts
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      
      {/* Accordion Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-0">
          {getBestPractices()}
        </div>
      </div>
    </div>
  );
} 