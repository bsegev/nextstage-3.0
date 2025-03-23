import { GalleryItem } from './types';

export const sampleItems: GalleryItem[] = [
  {
    id: '12',
    type: 'audio',
    title: 'Waves of Insight',
    description: 'A balanced background track with lyrics that perfectly complements professional explainer videos.',
    src: '/audio/waves-of-insight.mp3',
    thumbnail: '/images/gen-ai-art/audio-waveform.png',
    date: '2024-04-01',
    tags: ['audio', 'music', 'corporate', 'background', 'vocals'],
    dimensions: { width: 4, height: 3 },
    prompt: {
      text: "Create an upbeat but calming background song for an explainer video with inspirational lyrics about innovation and progress.",
      model: 'Suno',
      version: 'v3'
    }
  },
  {
    id: '0',
    type: 'audio',
    title: 'Creative Fusion',
    description: 'An AI-generated audio composition blending electronic and orchestral elements with dynamic progression.',
    src: '/audio/creative-fusion.mp3',
    thumbnail: '/images/gen-ai-art/audio-waveform.png', // Placeholder image - will use a fallback
    date: '2024-03-22',
    tags: ['audio', 'music', 'electronic', 'orchestral'],
    dimensions: { width: 4, height: 3 },
    prompt: {
      text: "Create a modern instrumental track blending electronic beats with orchestral elements and emotional progression.",
      model: 'Suno',
      version: 'v3'
    }
  },
  {
    id: '1',
    type: 'image',
    title: 'Global Minimalism',
    description: 'Elegant metallic globe sculpture capturing modern design aesthetics.',
    src: '/images/gen-ai-art/desk-top.png',
    thumbnail: '/images/gen-ai-art/desk-top.png',
    featured: true,
    date: '2024-03-20',
    tags: ['product', 'minimalist', 'metallic', 'featured'],
    dimensions: { width: 1, height: 1 },
    prompt: {
      text: "Minimalist metallic world globe sculpture on circular base, 3D cutout continents with highly reflective polished silver finish. Clean lines and geometric design, shallow depth of field with soft focus background. High-key lighting creating subtle reflections on desk surface. Product photography style with neutral gray tones. Shot with macro lens at f/2.8, studio lighting setup. Inspired by modern luxury desk accessories and executive office decor.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '2',
    type: 'image',
    title: 'Crystal Gardens',
    description: 'Ethereal crystalline formations with iridescent light refractions.',
    src: '/images/gallery/crystal-garden-1.jpg',
    thumbnail: '/images/gallery/crystal-garden-1.jpg',
    additionalImages: [
      '/images/gallery/crystal-garden-2.jpg',
      '/images/gallery/crystal-garden-4.jpg'
    ],
    featured: true,
    date: '2024-03-15',
    tags: ['abstract', 'crystal', 'ethereal', 'featured'],
    dimensions: { width: 4, height: 4 },
    prompt: {
      text: "Ultra close-up macro photography of crystal mineral formations with translucent properties. Vibrant blue and teal color palette with organic structures and growth patterns. Dramatic side lighting creating internal reflections and refractions. Sharp focus on crystalline edges with visible facets catching light. Multiple layers creating depth with backlit glow effect. Professional mineral specimen photography, shot on medium format digital camera with 120mm macro lens, f/4, studio lighting with colored gels and light painting techniques.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '3',
    type: 'image',
    title: 'Neon Dreams',
    description: 'A cinematic view of a rain-soaked cyberpunk street at night.',
    src: '/images/gallery/neon-dreams-1.jpg',
    thumbnail: '/images/gallery/neon-dreams-1.jpg',
    additionalImages: [
      '/images/gallery/neon-dreams-3.jpg',
      '/images/gallery/neon-dreams-4.jpg'
    ],
    date: '2024-03-15',
    tags: ['cityscape', 'cyberpunk', 'neon', 'night'],
    dimensions: { width: 4, height: 4 },
    prompt: {
      text: "Cinematic cyberpunk street scene at night with atmospheric foggy conditions. Neon-lit urban landscape with dominant blue, purple and red color palette. Large illuminated billboards and holographic advertisements casting colored reflections on wet surfaces. Dense urban architecture with futuristic Asian-inspired signage and storefronts. Rain-soaked streets with puddles reflecting neon lights. Cinematic composition with atmospheric perspective. Shot with anamorphic lens creating lens flares, high contrast night photography emulating Blade Runner 2049 cinematography.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '4',
    type: 'image',
    title: 'Zen Space',
    description: 'A minimalist meditation space that blends natural elements with modern design.',
    src: '/images/gen-ai-art/zen-space.png',
    thumbnail: '/images/gen-ai-art/zen-space.png',
    featured: true,
    date: '2024-03-15',
    tags: ['interior', 'minimalist', 'featured'],
    dimensions: { width: 4, height: 5 },
    prompt: {
      text: "A minimalist zen meditation space with huge floor-to-ceiling windows. Natural light streaming through, creating gentle shadows. Light bamboo flooring. Small indoor water feature with smooth stones. Low platform with meditation cushion. One potted bonsai tree. Matte white walls. Architectural photography style, wide angle lens, f/8, soft natural lighting.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '5',
    type: 'image',
    title: 'Luxury Watch Editorial',
    description: 'High-end product photography capturing the essence of luxury timepieces.',
    src: '/images/gen-ai-art/watch-shoot.png',
    thumbnail: '/images/gen-ai-art/watch-shoot.png',
    featured: true,
    date: '2024-03-14',
    tags: ['product', 'luxury', 'featured'],
    dimensions: { width: 4, height: 3 },
    prompt: {
      text: "Ultra-detailed luxury watch product photography on polished white marble surface. Dramatic side lighting creating precise shadows. Reflections on glass and metal surfaces. Mechanical watch with visible intricate movement. 8K resolution, studio product photography, 90mm macro lens, f/16, multiple diffused strobes, commercial advertising style similar to Rolex advertisements.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '6',
    type: 'image',
    title: 'Tennis in Motion',
    description: 'Dynamic sports photography capturing the intensity of tennis.',
    src: '/images/gen-ai-art/tennis-shoot.png',
    thumbnail: '/images/gen-ai-art/tennis-shoot.png',
    date: '2024-03-13',
    tags: ['sports', 'action'],
    dimensions: { width: 3, height: 4 },
    prompt: {
      text: "Professional tennis player mid-serve at golden hour, dynamic freeze-frame action shot. Tennis ball just released from hand, racket poised to strike. Low angle perspective from court level. Dramatic rim lighting from setting sun. Motion blur in background, player in sharp focus. Sweat droplets visible. Shot with Canon 1DX Mark III, 70-200mm f/2.8 lens, 1/2000 second shutter speed. Sports photography in style of Neil Leifer.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '7',
    type: 'image',
    title: 'Pop Art Portrait',
    description: 'Contemporary pop art style portrait with vibrant colors.',
    src: '/images/gen-ai-art/pop-model.png',
    thumbnail: '/images/gen-ai-art/pop-model.png',
    featured: true,
    date: '2024-03-12',
    tags: ['portrait', 'art', 'featured'],
    dimensions: { width: 4, height: 5 },
    prompt: {
      text: "Pop art style portrait of a fashion model with bold, non-realistic colors. Split-complementary color scheme with vibrant blue, magenta, and yellow. Halftone pattern overlay. Strong black outlines. Graphic elements like dots and geometric shapes in background. Clean vector-like appearance. Fashion photography composition with direct gaze. Inspired by Roy Lichtenstein and modern fashion editorials by Hassan Hajjaj.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '8',
    type: 'image',
    title: 'Luxury Perfume Store',
    description: 'High-end retail space design for luxury fragrances.',
    src: '/images/gen-ai-art/perfume-store.png',
    thumbnail: '/images/gen-ai-art/perfume-store.png',
    date: '2024-03-11',
    tags: ['interior', 'retail', 'luxury'],
    dimensions: { width: 16, height: 9 },
    prompt: {
      text: "Luxurious perfume store interior with backlit glass display cases arranged in symmetrical layout. Mood lighting with warm, amber undertones. Herringbone wood flooring. Brass accents and fixtures. Minimal product placement with strategic spotlighting on featured fragrances. High ceilings with subtle chandelier. No people visible. Wide angle architectural photography, f/11, perfectly exposed. Inspired by Dior and Chanel boutiques.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '9',
    type: 'image',
    title: 'Modern Workspace',
    description: 'Contemporary desk setup with a focus on minimalism and productivity.',
    src: '/images/gen-ai-art/zen-space.png',
    thumbnail: '/images/gen-ai-art/zen-space.png',
    date: '2024-03-10',
    tags: ['workspace', 'minimal'],
    dimensions: { width: 16, height: 9 },
    prompt: {
      text: "Modern minimalist desk setup from overhead perspective. White oak desk surface. MacBook Pro aligned perfectly with desk edge. Single premium monitor on slim stand. Ergonomic keyboard and mouse. Small succulent plant in concrete planter. Leather desk pad. Wireless charger. One coffee cup with steam. Natural daylight from left side. No visible cables. Product photography with soft shadows, 35mm lens, f/5.6, styled like Kinfolk magazine.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '10',
    type: 'image',
    title: 'Dance in Motion',
    description: 'Capturing the fluid movement and grace of contemporary dance.',
    src: '/images/gen-ai-art/dance-scene.png',
    thumbnail: '/images/gen-ai-art/dance-scene.png',
    date: '2024-03-09',
    tags: ['dance', 'motion', 'art'],
    dimensions: { width: 4, height: 5 },
    prompt: {
      text: "Contemporary dancer in mid-leap, capturing peak moment of fluid motion. Flowing fabric costume creating dramatic trails through air. Empty studio with polished dark floor reflecting movement. Low-key lighting with single spotlight. Long exposure technique showing motion blur path. Female dancer with perfect form and pointed feet. Dance photography in style of Lois Greenfield, shot with Sony A7S III, 24-70mm lens at 35mm, ISO 1600.",
      model: 'DALL-E',
      version: '3'
    }
  },
  {
    id: '11',
    type: 'image',
    title: 'Architectural Vision',
    description: 'Modern architectural rendering with bold geometric forms.',
    src: '/images/gen-ai-art/archi-render.png',
    thumbnail: '/images/gen-ai-art/archi-render.png',
    date: '2024-03-08',
    tags: ['architecture', 'modern'],
    dimensions: { width: 16, height: 9 },
    prompt: {
      text: "Modern architectural design rendering with bold geometric forms and cantilevered sections. Floor-to-ceiling glass facades reflecting clouds. Integrated green terraces with mature trees. Concrete and steel structural elements visible as design features. Dramatic perspective from below. Golden hour lighting creating long shadows. Hyper-realistic 3D rendering style with perfect lighting, 8K resolution. Inspired by Zaha Hadid and Bjarke Ingels.",
      model: 'DALL-E',
      version: '3'
    }
  }
]; 