'use client';

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FolderPlus, X, Paintbrush } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/button";

const PlayCodeCompare = dynamic(() => import('./PlayCodeCompare').then(mod => ({ default: mod.PlayCodeCompare })), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center">
      <div className="text-gray-500 font-mono text-sm">Loading code comparison...</div>
    </div>
  )
});

interface FeatureCardProps {
  title: string;
  description: string;
  featuredLink: string;
  allLink: string;
  thumbnails?: string[];
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, featuredLink, allLink, thumbnails = [], children }) => {
  return (
    <div className="h-full bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl md:leading-snug text-gray-800 font-serif font-bold mb-3">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Content Area */}
        <div className="relative mb-6 bg-gradient-to-br from-purple-600/[0.02] via-blue-500/[0.02] to-cyan-400/[0.02] rounded-xl overflow-hidden flex-grow">
          {children}
        </div>

        {/* Enhanced CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <LinkPreview
            url={featuredLink}
            title={title === "Better LLM Prompting" ? "The Art of the Prompt" : 
                  title === "Micro Projects & MVPs" ? "Digital Paint: Interactive Canvas" :
                  title === "Generative AI Art" ? "AI Art Gallery: Latest Works" :
                  title === "One Day Brand Builds" ? "Featured Brand: Ethereal" :
                  `Featured ${title}`}
            description={title === "Better LLM Prompting" 
              ? "A step-by-step guide to crafting effective prompts and unlocking the full potential of large language models."
              : title === "Micro Projects & MVPs"
              ? "Experiment with our interactive digital canvas. Create, blend, and explore with intuitive drawing tools."
              : title === "Generative AI Art"
              ? "Explore our latest AI-generated artworks, from abstract concepts to photorealistic scenes."
              : title === "One Day Brand Builds"
              ? "See how we transformed Ethereal's vision into a complete brand identity in 24 hours."
              : "View featured projects and experiments in this category."}
            thumbnailUrl={thumbnails?.[0]}
          >
            <div className="group relative px-6 py-4 bg-[#2b3036] hover:bg-[#2b3036]/90 transition-all duration-300 rounded-xl overflow-hidden shadow-md text-center cursor-pointer">
              <span className="relative z-10 font-mono text-base text-white flex items-center justify-center gap-2">
                <span>
                  {title === "Better LLM Prompting" ? "Get the Book" :
                   title === "Micro Projects & MVPs" ? "Try Digital Paint" :
                   title === "Generative AI Art" ? "View Gallery" :
                   title === "One Day Brand Builds" ? "See Case Study" :
                   "View Featured"}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </LinkPreview>
          
          <LinkPreview
            url="#coming-soon"
            disabled={true}
            title={title === "Better LLM Prompting" ? "Prompt Engineering Resources" :
                  title === "Micro Projects & MVPs" ? "Explore All Experiments" :
                  title === "Generative AI Art" ? "Digital Art Museum" :
                  title === "One Day Brand Builds" ? "Brand Build Process" :
                  `All ${title} Projects`}
            description={title === "Better LLM Prompting"
              ? "Explore additional resources, examples, and advanced techniques for prompt engineering."
              : title === "Micro Projects & MVPs"
              ? "Discover our collection of experimental tools, prototypes, and interactive demos."
              : title === "Generative AI Art"
              ? "Experience our full collection across different AI tools, styles, and mediums."
              : title === "One Day Brand Builds"
              ? "Learn about our rapid brand development process and explore other brand transformations."
              : "Explore the complete collection of projects in this category."}
            thumbnailUrl="/images/coming-soon.jpg"
          >
            <div 
              onClick={(e) => {
                e.preventDefault();
                const tooltip = document.createElement('div');
                tooltip.className = 'fixed z-50 px-4 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg transition-all duration-300';
                tooltip.style.left = `${e.clientX}px`;
                tooltip.style.top = `${e.clientY - 40}px`;
                tooltip.textContent = '🚧 Coming soon! Check back in a few days.';
                document.body.appendChild(tooltip);
                
                // Fade in
                requestAnimationFrame(() => {
                  tooltip.style.opacity = '1';
                });

                // Animate out and remove
                setTimeout(() => {
                  tooltip.style.opacity = '0';
                  tooltip.style.transform = 'translateY(-10px)';
                  setTimeout(() => tooltip.remove(), 300);
                }, 2000);
              }}
              className="group relative px-6 py-4 bg-white hover:bg-white/90 transition-all duration-300 rounded-xl overflow-hidden shadow-sm border border-gray-200 text-center cursor-help"
            >
              <span className="relative z-10 font-mono text-base text-gray-800 flex items-center justify-center gap-2">
                <span>
                  {title === "Better LLM Prompting" ? "Explore Resources" :
                   title === "Micro Projects & MVPs" ? "All Experiments" :
                   title === "Generative AI Art" ? "Visit Museum" :
                   title === "One Day Brand Builds" ? "See Process" :
                   "View All"}
                </span>
                <FolderPlus className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </LinkPreview>
        </div>
      </div>
    </div>
  );
};

export function PlayExperiments() {
  const features = [
    {
      title: "Micro Projects & MVPs",
      description: "Quick, impactful experiments that show what's possible. Building small but interactive tools guided by curiosity and fun.",
      featuredLink: "/play/paint",
      allLink: "/play/micro-projects",
      thumbnails: [
        "/images/ai-x-design.png",
        "/images/micro-projects/project2.png",
        "/images/micro-projects/project3.png",
        "/images/micro-projects/project4.png",
      ],
      content: (
        <div className="relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 mx-2">
            <div className="relative w-full h-full bg-white shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/images/ai-x-design.png"
                alt="AI and Design Systems"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Generative AI Art",
      description: "Exploring the frontiers of visual creation with Midjourney, DALL-E, and Sora. Transforming concepts into striking images and videos through AI-powered tools.",
      featuredLink: "/play/gallery",
      allLink: "/play/ai-art/gallery",
      thumbnails: [
        "/images/gen-ai-art/zen-space.png",
        "/images/gen-ai-art/watch-shoot.png",
        "/images/gen-ai-art/tennis-shoot.png",
        "/images/gen-ai-art/pop-model.png",
        "/images/gen-ai-art/perfume-store.png",
        "/images/gen-ai-art/desk-top.png",
        "/images/gen-ai-art/dance-scene.png",
        "/images/gen-ai-art/archi-render.png"
      ],
      content: (
        <div id="gallery" className="relative h-[300px] md:h-[400px] overflow-hidden">
          <div className="relative w-full h-full p-4">
            {/* First Row */}
            <div className="flex flex-row -ml-4 sm:-ml-20">
              {[
                "/images/gen-ai-art/zen-space.png",
                "/images/gen-ai-art/watch-shoot.png",
                "/images/gen-ai-art/tennis-shoot.png",
                "/images/gen-ai-art/pop-model.png"
              ].map((src, idx) => (
                <motion.div
                  key={`first-${src}`}
                  className="rounded-xl -mr-1 sm:-mr-4 mt-4 p-1 bg-white/50 border border-gray-100 flex-shrink-0 overflow-hidden"
                  initial={{
                    rotate: idx % 2 === 0 ? 12 : -12,
                    translateY: idx * 10,
                    scale: 1,
                    zIndex: idx === 3 ? 1 : 'auto'
                  }}
                  whileHover={{
                    rotate: 0,
                    scale: 1.1,
                    zIndex: 10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  <Image
                    src={src}
                    alt="AI generated art"
                    width={100}
                    height={100}
                    sizes="(max-width: 640px) 100px, 160px"
                    className="rounded-lg object-cover pointer-events-none w-[100px] h-[100px] sm:w-[160px] sm:h-[160px]"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>

            {/* Second Row */}
            <div className="flex flex-row -ml-2 sm:-ml-12 mt-4">
              {[
                "/images/gen-ai-art/perfume-store.png",
                "/images/gen-ai-art/desk-top.png",
                "/images/gen-ai-art/dance-scene.png",
                "/images/gen-ai-art/archi-render.png"
              ].map((src, idx) => (
                <motion.div
                  key={`second-${src}`}
                  className="rounded-xl -mr-1 sm:-mr-4 mt-4 p-1 bg-white/50 border border-gray-100 flex-shrink-0 overflow-hidden"
                  initial={{
                    rotate: idx % 2 === 0 ? -10 : 10,
                    translateY: -idx * 5,
                    scale: 1,
                    zIndex: idx === 0 ? 1 : 'auto'
                  }}
                  whileHover={{
                    rotate: 0,
                    scale: 1.1,
                    zIndex: 10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  <Image
                    src={src}
                    alt="AI generated art"
                    width={100}
                    height={100}
                    sizes="(max-width: 640px) 100px, 160px"
                    className="rounded-lg object-cover pointer-events-none w-[100px] h-[100px] sm:w-[160px] sm:h-[160px]"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>

            {/* Gradient overlays */}
            <div className="absolute left-0 z-[100] inset-y-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent h-full pointer-events-none" />
          </div>
        </div>
      )
    },
    {
      title: "One Day Brand Builds",
      description: "Rapid brand development experiments. Creating complete brand identities, from logo to design system, in just 24 hours.",
      featuredLink: "/play/brand-builds/featured",
      allLink: "/play/brand-builds",
      content: (
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-purple-600/[0.02] via-blue-500/[0.02] to-cyan-400/[0.02] overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center transform hover:scale-[1.02] transition-all duration-700">
            {/* Glow Platform Effect */}
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-blue-400/50 blur-sm transition-all duration-500 group-hover:w-[95%] group-hover:blur-md" />
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-blue-300 shadow-glow transition-all duration-500 group-hover:w-[85%]" />
            
            {/* Image Container */}
            <div className="relative w-full h-full transform perspective-1000 transition-all duration-700 hover:scale-[1.4] hover:rotate-[15deg] hover:rotate-y-[15deg] hover:translate-y-4">
              <div className="w-full h-full overflow-hidden rounded-xl">
                <Image
                  src="/images/branding-sprint.jpg"
                  alt="Brand Sprint Process"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover drop-shadow-[0_20px_50px_rgba(0,170,255,0.25)] transition-all duration-700 hover:drop-shadow-[0_40px_80px_rgba(0,170,255,0.4)]"
                  priority
                  quality={100}
                />
                
                {/* Premium Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10 mix-blend-overlay transition-opacity duration-700 hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-blue-500/10 mix-blend-overlay transition-opacity duration-700 hover:opacity-90" />
              </div>
            </div>

            {/* Background Circuit Pattern */}
            <div className="absolute inset-[-100%] bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
          </div>
        </div>
      )
    },
    {
      title: "Better LLM Prompting",
      description: "Experimenting with advanced prompt engineering techniques. Developing frameworks for more effective AI interactions and automation workflows.",
      featuredLink: "/play/prompting/featured",
      allLink: "/play/prompting",
      thumbnails: [
        "/images/artoftheprompt_book.png",
        "/images/artoftheprompt_book.png"
      ],
      content: (
        <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-gradient-to-br from-purple-600/[0.02] via-blue-500/[0.02] to-cyan-400/[0.02]">
          <div className="relative w-full h-full flex items-center justify-center transform hover:scale-[1.05] hover:-translate-y-2 transition-all duration-500">
            {/* Glow Platform Effect */}
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-blue-400/50 blur-sm transition-all duration-500 group-hover:w-[95%] group-hover:blur-md" />
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-blue-300 shadow-glow transition-all duration-500 group-hover:w-[85%]" />
            
            {/* Book with Enhanced Shadow */}
            <div className="relative w-full max-w-[600px] transform rotate-y-[-5deg] perspective-1000 transition-all duration-500 hover:rotate-y-[-8deg]">
              <Image
                src="/images/artoftheprompt_book.png"
                alt="The Art of the Prompt Book"
                width={800}
                height={1000}
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,170,255,0.25)] transition-all duration-500 hover:drop-shadow-[0_30px_60px_rgba(0,170,255,0.35)]"
                priority
                quality={100}
              />
              
              {/* Premium Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10 mix-blend-overlay transition-opacity duration-500 hover:opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-blue-500/10 mix-blend-overlay transition-opacity duration-500 hover:opacity-75" />
            </div>

            {/* Background Circuit Pattern */}
            <div className="absolute inset-[-100%] bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.02] via-blue-500/[0.02] to-cyan-400/[0.02]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Main Header */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mb-32 mx-auto sm:mx-0 text-center sm:text-left"
            >
              {/* Label */}
              <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm mb-6">
                Experimental Lab
              </div>

              {/* Main Heading with Gradient */}
              <div className="relative mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 font-bold leading-tight">
                  Creative Playground{' '}
                  <span className="block mt-4 sm:mt-5">
                     <span className="animated-gradient">& Digital Experiments</span>
                  </span>
                </h2>
              </div>

              {/* Subheading */}
              <p className="font-sans text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto sm:mx-0 leading-relaxed">
                A collection of creative explorations, technical experiments, and passion projects that push the boundaries of what's possible at the intersection of design and technology.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    featuredLink={feature.featuredLink}
                    allLink={feature.allLink}
                    thumbnails={feature.thumbnails}
                  >
                    {feature.content}
                  </FeatureCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <PlayCodeCompare />
      
      {/* CTA Section */}
      <section className="w-full py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm mb-4">
              Join the Creative Lab
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              Ready to bring your own
              <span className="block mt-2 sm:mt-3">
                <span className="animated-gradient">ideas to life</span>?
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether you have a project in mind or just want to collaborate on something experimental, let's connect and build something extraordinary together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white hover:scale-[1.02] transition-transform duration-300 font-bold text-lg px-8 py-7 shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 w-full sm:w-auto"
                >
                  Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/play/gallery">
                <Button 
                  size="lg"
                  className="inline-flex items-center justify-center px-8 py-7 text-base font-bold rounded-lg bg-transparent text-blue-600 hover:bg-blue-500 hover:text-white hover:scale-[1.02] transition-all duration-300 border border-blue-200 hover:border-blue-500 shadow-sm hover:shadow-lg hover:shadow-blue-500/20 w-full sm:w-auto"
                >
                  See More Experiments
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 
