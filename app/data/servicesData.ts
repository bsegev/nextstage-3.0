export interface ServiceData {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
  fullDescription: string[];
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
  cta: {
    text: string;
    action: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    id: "website-development",
    iconName: "Globe",
    title: "Website Development",
    description: "Responsive, high-converting websites that showcase your brand and drive engagement.",
    color: "cyan",
    fullDescription: [
      "Our website development service delivers visually stunning, highly functional websites optimized for conversion and user engagement.",
      "We create responsive designs that look exceptional on all devices, with intuitive navigation and strategic calls-to-action that guide visitors toward conversion.",
      "Each site we build incorporates modern SEO best practices, fast loading speeds, and is built with scalability in mind."
    ],
    benefits: [
      "Increase credibility and brand trust with a professional online presence",
      "Convert more visitors into leads and customers",
      "Ensure your site works perfectly across all devices and screen sizes",
      "Reduce bounce rates with fast-loading, engaging pages",
      "Own a site that can grow with your business"
    ],
    features: [
      {
        title: "Custom Design",
        description: "Tailored visuals that align perfectly with your brand identity"
      },
      {
        title: "Responsive Layout",
        description: "Flawless performance on smartphones, tablets, and desktops"
      },
      {
        title: "Conversion Optimization",
        description: "Strategic CTAs and user journeys designed to convert"
      },
      {
        title: "SEO Foundation",
        description: "Built-in search optimization to improve visibility"
      }
    ],
    cta: {
      text: "Ready for a website that works as hard as you do?",
      action: "Schedule a discovery call"
    }
  },
  {
    id: "brand-identity",
    iconName: "Award",
    title: "Brand Identity",
    description: "Distinctive visual identity and messaging that makes your business instantly recognizable.",
    color: "cyan",
    fullDescription: [
      "Our brand identity service creates cohesive, memorable brand systems that help your business stand out in a crowded marketplace.",
      "We craft unique visual identities—including logos, color palettes, and typography—paired with compelling messaging that resonates with your target audience.",
      "The result is a consistent, professional brand presence that builds trust and recognition across all touchpoints."
    ],
    benefits: [
      "Stand out from competitors with a unique visual identity",
      "Build instant recognition in your market",
      "Create emotional connections with your audience",
      "Maintain consistency across all marketing channels",
      "Command premium pricing through perceived value"
    ],
    features: [
      {
        title: "Logo Design",
        description: "Distinctive, versatile logos that capture your essence"
      },
      {
        title: "Visual System",
        description: "Comprehensive color, typography, and imagery guidelines"
      },
      {
        title: "Brand Voice",
        description: "Defined tone and messaging that speaks to your audience"
      },
      {
        title: "Brand Guidelines",
        description: "Detailed documentation for consistent implementation"
      }
    ],
    cta: {
      text: "Ready to build a brand that gets remembered?",
      action: "Start your brand journey"
    }
  },
  {
    id: "content-strategy",
    iconName: "BookOpen",
    title: "Content Strategy",
    description: "Compelling messaging and content plans that communicate your value proposition clearly.",
    color: "indigo",
    fullDescription: [
      "Our content strategy service develops a comprehensive plan for creating, publishing, and managing content that resonates with your audience and drives business goals.",
      "We analyze your target audience, identify key messaging priorities, and create frameworks for content creation that ensure consistency and effectiveness across all channels.",
      "The result is content that not only attracts attention but converts interest into action."
    ],
    benefits: [
      "Communicate your value proposition clearly and consistently",
      "Attract and engage your target audience more effectively",
      "Build trust and authority in your industry",
      "Save time with a structured approach to content creation",
      "Improve SEO and digital visibility through strategic content"
    ],
    features: [
      {
        title: "Audience Analysis",
        description: "Deep understanding of who you're talking to and what they need"
      },
      {
        title: "Messaging Framework",
        description: "Structured approach to what you say and how you say it"
      },
      {
        title: "Content Calendar",
        description: "Strategic planning of what to publish and when"
      },
      {
        title: "Channel Strategy",
        description: "Tailored approach for each platform and touchpoint"
      }
    ],
    cta: {
      text: "Ready to tell your story more effectively?",
      action: "Start your content strategy"
    }
  },
  {
    id: "linkedin-optimization",
    iconName: "Linkedin",
    title: "LinkedIn Optimization",
    description: "Strategic profile and content optimization to build authority and attract opportunities.",
    color: "cyan",
    fullDescription: [
      "Our LinkedIn optimization service transforms your profile and company page into powerful lead generation tools that attract your ideal clients.",
      "We optimize every element of your presence, from profile headlines and about sections to regular content that positions you as a thought leader in your industry.",
      "The result is a strategic LinkedIn presence that builds your personal brand and opens doors to new business opportunities."
    ],
    benefits: [
      "Appear in more LinkedIn searches from potential clients",
      "Build credibility and authority in your industry",
      "Generate inbound leads without cold outreach",
      "Nurture relationships with your ideal prospects",
      "Stand out from competitors in your space"
    ],
    features: [
      {
        title: "Profile Optimization",
        description: "Strategic enhancement of all profile elements for maximum impact"
      },
      {
        title: "Content Strategy",
        description: "Planned approach to sharing valuable insights that build authority"
      },
      {
        title: "Engagement Plan",
        description: "Structured approach to building meaningful connections"
      },
      {
        title: "Performance Analysis",
        description: "Tracking and optimization of results over time"
      }
    ],
    cta: {
      text: "Ready to transform your LinkedIn presence?",
      action: "Get started today"
    }
  },
  {
    id: "marketing-materials",
    iconName: "Megaphone",
    title: "Marketing Materials",
    description: "Cohesive marketing assets that amplify your message and drive customer acquisition.",
    color: "indigo",
    fullDescription: [
      "Our marketing materials service creates powerful, consistent assets that communicate your value proposition and drive customer action.",
      "We develop everything from digital ads and sales presentations to brochures and product sheets, all designed to work together in a cohesive system.",
      "Each piece is crafted with strategic messaging and compelling design to move prospects through your marketing funnel."
    ],
    benefits: [
      "Present a consistent, professional image across all touchpoints",
      "Convert more prospects with persuasive sales materials",
      "Save time with ready-to-use marketing assets",
      "Adapt materials easily for different channels and campaigns",
      "Scale your marketing efforts with a comprehensive toolkit"
    ],
    features: [
      {
        title: "Digital Assets",
        description: "Online materials including ads, email templates, and social graphics"
      },
      {
        title: "Print Materials",
        description: "Physical collateral from business cards to brochures"
      },
      {
        title: "Sales Support",
        description: "Presentations, one-pagers, and proposal templates"
      },
      {
        title: "Asset Management",
        description: "Organized system for accessing and utilizing materials"
      }
    ],
    cta: {
      text: "Ready to elevate your marketing materials?",
      action: "Let's create your toolkit"
    }
  },
  {
    id: "user-research",
    iconName: "Users",
    title: "User Research",
    description: "Customer insights and market validation that ensure your product resonates.",
    color: "purple",
    fullDescription: [
      "Our user research service reveals critical insights about your target audience to ensure your products and services meet real customer needs.",
      "We conduct interviews, surveys, usability tests, and other research methods to understand user behaviors, preferences, and pain points.",
      "The result is data-driven insights that reduce risk and guide product development toward what your market actually wants."
    ],
    benefits: [
      "Build products people actually want and will pay for",
      "Reduce development costs by focusing on validated features",
      "Increase user satisfaction and reduce churn",
      "Make confident decisions backed by real user data",
      "Identify opportunities competitors have missed"
    ],
    features: [
      {
        title: "Customer Interviews",
        description: "In-depth conversations to understand needs and motivations"
      },
      {
        title: "Usability Testing",
        description: "Observation of how users interact with your product"
      },
      {
        title: "Surveys & Questionnaires",
        description: "Quantitative data collection at scale"
      },
      {
        title: "Competitive Analysis",
        description: "Understanding how alternatives solve user problems"
      }
    ],
    cta: {
      text: "Ready to truly understand your users?",
      action: "Start your research"
    }
  },
  {
    id: "competitive-analysis",
    iconName: "Gauge",
    title: "Competitive Analysis",
    description: "Deep market research that identifies opportunities and positions you for success.",
    color: "blue",
    fullDescription: [
      "Our competitive analysis service provides an in-depth understanding of your market landscape and identifies strategic opportunities for differentiation and growth.",
      "We analyze direct and indirect competitors, examine their strengths and weaknesses, and uncover gaps in the market that your business can fill.",
      "The result is actionable insights that help you position your offerings effectively and develop a sustainable competitive advantage."
    ],
    benefits: [
      "Identify untapped market opportunities and whitespace",
      "Understand competitive strengths to defend against and weaknesses to exploit",
      "Develop more effective positioning and messaging",
      "Make strategic decisions based on market realities",
      "Stay ahead of emerging trends and competitive moves"
    ],
    features: [
      {
        title: "Competitor Profiling",
        description: "Detailed analysis of direct and indirect competitors"
      },
      {
        title: "SWOT Analysis",
        description: "Evaluation of strengths, weaknesses, opportunities, and threats"
      },
      {
        title: "Gap Analysis",
        description: "Identification of unmet needs and market openings"
      },
      {
        title: "Positioning Strategy",
        description: "Recommendations for effective market positioning"
      }
    ],
    cta: {
      text: "Ready to gain a competitive edge?",
      action: "Start your analysis"
    }
  },
  {
    id: "growth-strategy",
    iconName: "TrendingUp",
    title: "Growth Strategy",
    description: "Data-driven roadmaps and market positioning that turn your vision into actionable growth plans.",
    color: "indigo",
    fullDescription: [
      "Our growth strategy service creates clear, actionable plans to scale your business and achieve your revenue goals.",
      "We analyze your current position, identify the most promising growth opportunities, and develop strategic roadmaps with specific initiatives and metrics.",
      "The result is a focused approach to growth that leverages your strengths and addresses the most impactful opportunities."
    ],
    benefits: [
      "Focus your resources on high-impact growth opportunities",
      "Clarify priorities and eliminate distractions",
      "Accelerate revenue growth through strategic initiatives",
      "Create alignment around clear growth objectives",
      "Measure progress with meaningful metrics and KPIs"
    ],
    features: [
      {
        title: "Opportunity Assessment",
        description: "Evaluation of potential growth vectors and markets"
      },
      {
        title: "Strategic Roadmap",
        description: "Phased plan for executing growth initiatives"
      },
      {
        title: "Resource Planning",
        description: "Identification of capabilities and investments needed"
      },
      {
        title: "Metrics Framework",
        description: "KPIs and measurement systems to track progress"
      }
    ],
    cta: {
      text: "Ready to accelerate your growth?",
      action: "Develop your strategy"
    }
  },
  {
    id: "mvp-prototypes",
    iconName: "Cpu",
    title: "MVP Prototypes",
    description: "From concept to clickable prototype, built to validate your ideas and attract early adopters.",
    color: "blue",
    fullDescription: [
      "Our MVP prototype service transforms your business concept into a functional minimum viable product that validates your idea with real users.",
      "We focus on building just enough functionality to test core assumptions, gather meaningful feedback, and demonstrate value to potential investors or customers.",
      "The result is a lean, focused product that helps you validate your concept before investing in full-scale development."
    ],
    benefits: [
      "Test business assumptions with minimal investment",
      "Gather real user feedback before full development",
      "Demonstrate your concept to investors and stakeholders",
      "Identify critical issues early when changes are less costly",
      "Create a foundation for iterative product development"
    ],
    features: [
      {
        title: "Concept Refinement",
        description: "Clarification and prioritization of core functionality"
      },
      {
        title: "Interactive Prototype",
        description: "Clickable demo that simulates key user journeys"
      },
      {
        title: "User Testing",
        description: "Structured feedback collection from target users"
      },
      {
        title: "Development Roadmap",
        description: "Plan for evolving from MVP to full product"
      }
    ],
    cta: {
      text: "Ready to bring your idea to life?",
      action: "Start prototyping"
    }
  },
  {
    id: "explainer-videos",
    iconName: "Video",
    title: "Explainer Videos",
    description: "Engaging animated videos that simplify complex ideas and captivate your audience.",
    color: "purple",
    fullDescription: [
      "Our explainer video service creates engaging, concise animations that communicate your complex value proposition in a way that's instantly understandable and memorable.",
      "We develop compelling scripts, professional voiceovers, and custom animations that simplify complex concepts and highlight the benefits of your product or service.",
      "The result is a powerful communication tool that increases conversion rates and helps customers quickly understand what you offer."
    ],
    benefits: [
      "Explain complex products or services in a simple, engaging way",
      "Increase website conversion rates and reduce bounce rates",
      "Enhance email campaigns and social media engagement",
      "Provide sales teams with powerful demonstration tools",
      "Create versatile content usable across multiple channels"
    ],
    features: [
      {
        title: "Strategic Script",
        description: "Compelling narrative that simplifies complex concepts"
      },
      {
        title: "Professional Voiceover",
        description: "Clear, engaging narration that enhances your message"
      },
      {
        title: "Custom Animation",
        description: "Unique visuals that bring your story to life"
      },
      {
        title: "Music & Sound Design",
        description: "Audio elements that create emotional impact"
      }
    ],
    cta: {
      text: "Ready to explain your offering more effectively?",
      action: "Create your video"
    }
  },
  {
    id: "pitch-decks",
    iconName: "Presentation",
    title: "Pitch Decks",
    description: "Narratives that grip and designs that dazzle, crafted to make your story unforgettable.",
    color: "purple",
    fullDescription: [
      "Our pitch deck service creates compelling visual presentations that tell your story, highlight your opportunity, and persuade investors to back your vision.",
      "We develop a clear narrative structure, create professional slide designs, and craft persuasive content that addresses investor priorities and showcases your unique value.",
      "The result is a polished, professional presentation that builds credibility and maximizes your chances of securing funding."
    ],
    benefits: [
      "Increase investor interest and engagement with your opportunity",
      "Present a professional, credible image to potential backers",
      "Communicate complex business models with clarity",
      "Stand out from competing investment opportunities",
      "Save time with a ready-to-present professional deck"
    ],
    features: [
      {
        title: "Narrative Development",
        description: "Compelling story structure that engages investors"
      },
      {
        title: "Visual Design",
        description: "Professional slides that enhance your credibility"
      },
      {
        title: "Data Visualization",
        description: "Clear presentation of metrics and projections"
      },
      {
        title: "Presentation Coaching",
        description: "Guidance on delivering your pitch effectively"
      }
    ],
    cta: {
      text: "Ready to create a pitch that wins investment?",
      action: "Build your pitch deck"
    }
  },
  {
    id: "investor-materials",
    iconName: "Landmark",
    title: "Investor Materials",
    description: "Comprehensive fundraising collateral that tells your story and showcases your potential.",
    color: "blue",
    fullDescription: [
      "Our investor materials service creates a comprehensive set of documents and presentations designed to support your fundraising efforts and showcase your business potential.",
      "We develop everything from executive summaries and financial models to due diligence documents and investor updates, all designed to build confidence in your venture.",
      "The result is a professional package of materials that addresses investor questions, demonstrates your preparation, and supports successful fundraising conversations."
    ],
    benefits: [
      "Present a professional, thorough case to potential investors",
      "Answer key investor questions before they're asked",
      "Build credibility with polished, consistent materials",
      "Save time with ready-to-use documents for various stages",
      "Maintain investor interest with professional updates"
    ],
    features: [
      {
        title: "Executive Summary",
        description: "Concise overview of your business and opportunity"
      },
      {
        title: "Financial Projections",
        description: "Professional models that demonstrate growth potential"
      },
      {
        title: "Due Diligence Package",
        description: "Comprehensive documentation to accelerate the process"
      },
      {
        title: "Investor Updates",
        description: "Templates for maintaining communication post-investment"
      }
    ],
    cta: {
      text: "Ready to create materials that attract investment?",
      action: "Prepare for fundraising"
    }
  },
  {
    id: "landing-pages",
    iconName: "Layout",
    title: "Landing Pages",
    description: "High-converting landing pages designed to turn visitors into leads and customers.",
    color: "blue",
    fullDescription: [
      "Our landing page service creates focused, conversion-optimized pages that drive specific actions from your visitors.",
      "We combine persuasive copywriting, strategic design, and psychological triggers to guide users toward your desired conversion goal, whether that's signing up, making a purchase, or requesting information.",
      "Each landing page is built with A/B testing capabilities and analytics integration to continuously improve performance over time."
    ],
    benefits: [
      "Increase conversion rates with focused, distraction-free designs",
      "Generate more qualified leads from your marketing campaigns",
      "Improve ROI on your advertising spend",
      "Test different messaging and offers to optimize performance",
      "Create consistent experiences for specific audience segments"
    ],
    features: [
      {
        title: "Conversion-Focused Design",
        description: "Layouts engineered to guide visitors toward action"
      },
      {
        title: "Persuasive Copywriting",
        description: "Compelling headlines and content that drive engagement"
      },
      {
        title: "Mobile Optimization",
        description: "Perfect performance across all devices and screen sizes"
      },
      {
        title: "A/B Testing Setup",
        description: "Framework for testing and optimizing different elements"
      }
    ],
    cta: {
      text: "Ready to convert more visitors into customers?",
      action: "Create your landing page"
    }
  },
  {
    id: "e-commerce-site",
    iconName: "ShoppingCart",
    title: "E-Commerce Website",
    description: "Custom online stores that provide seamless shopping experiences and drive sales.",
    color: "cyan",
    fullDescription: [
      "Our e-commerce website service builds custom online stores that turn browsers into buyers with intuitive shopping experiences.",
      "We create tailored e-commerce solutions with secure payment processing, inventory management, and mobile-optimized designs that make purchasing easy on any device.",
      "Each store is built with conversion optimization in mind, from product page layouts to streamlined checkout processes that minimize abandonment."
    ],
    benefits: [
      "Sell products 24/7 without geographical limitations",
      "Create seamless shopping experiences that increase conversion rates",
      "Build customer trust with secure, professional storefronts",
      "Gain valuable insights through integrated analytics",
      "Scale your business with a platform that grows with you"
    ],
    features: [
      {
        title: "Custom Product Catalogs",
        description: "Organized, filterable product displays with rich media"
      },
      {
        title: "Secure Checkout",
        description: "Streamlined payment processes with multiple options"
      },
      {
        title: "Inventory Management",
        description: "Tools to track and manage your product inventory"
      },
      {
        title: "Mobile Shopping",
        description: "Responsive design for shopping on any device"
      }
    ],
    cta: {
      text: "Ready to start selling online?",
      action: "Build your online store"
    }
  },
  {
    id: "website-audit",
    iconName: "Search",
    title: "Website Audit",
    description: "Comprehensive analysis of your website's performance, usability, and conversion potential.",
    color: "indigo",
    fullDescription: [
      "Our website audit service provides a detailed analysis of your current website's strengths and weaknesses, with actionable recommendations for improvement.",
      "We evaluate everything from technical performance and SEO to user experience and conversion optimization, identifying specific opportunities to enhance results.",
      "The audit delivers a prioritized roadmap of improvements that will have the greatest impact on your business goals."
    ],
    benefits: [
      "Identify hidden issues that may be hurting your performance",
      "Discover opportunities to improve conversion rates",
      "Understand how your site compares to competitors",
      "Prioritize improvements based on potential impact",
      "Get expert recommendations backed by data and best practices"
    ],
    features: [
      {
        title: "Technical Analysis",
        description: "Evaluation of speed, mobile responsiveness, and code quality"
      },
      {
        title: "UX Assessment",
        description: "Review of user flows, navigation, and overall experience"
      },
      {
        title: "SEO Evaluation",
        description: "Analysis of on-page and technical SEO factors"
      },
      {
        title: "Conversion Review",
        description: "Assessment of calls-to-action and conversion paths"
      }
    ],
    cta: {
      text: "Ready to unlock your website's full potential?",
      action: "Request your audit"
    }
  },
  {
    id: "web-app-development",
    iconName: "Layers",
    title: "Web App Development",
    description: "Custom web applications that automate processes and deliver powerful functionality.",
    color: "blue",
    fullDescription: [
      "Our web application development service creates custom software solutions that solve specific business challenges and enhance operational efficiency.",
      "We build scalable, secure web applications with intuitive interfaces that make complex processes simple for users, whether they're customers, employees, or partners.",
      "Each application is developed with modern frameworks and best practices to ensure reliability, security, and future extensibility."
    ],
    benefits: [
      "Automate manual processes to increase efficiency",
      "Create custom solutions tailored to your exact needs",
      "Improve data management and accessibility",
      "Enhance collaboration across teams and departments",
      "Scale your operations with software that grows with you"
    ],
    features: [
      {
        title: "Custom Development",
        description: "Tailored solutions built for your specific requirements"
      },
      {
        title: "User-Centered Design",
        description: "Intuitive interfaces that minimize training needs"
      },
      {
        title: "Integration Capabilities",
        description: "Seamless connections with your existing systems"
      },
      {
        title: "Scalable Architecture",
        description: "Robust foundations that support future growth"
      }
    ],
    cta: {
      text: "Ready to transform your business with custom software?",
      action: "Start your project"
    }
  },
  {
    id: "logo-design",
    iconName: "Paintbrush",
    title: "Logo Design",
    description: "Distinctive, memorable logos that capture your brand essence and build recognition.",
    color: "pink",
    fullDescription: [
      "Our logo design service creates distinctive visual identities that capture your brand's essence and make a lasting impression on your audience.",
      "We develop unique, versatile logos through a collaborative process that explores your brand values, industry context, and target audience preferences.",
      "The result is a professional, memorable mark that works across all applications and sets the foundation for your entire brand identity."
    ],
    benefits: [
      "Stand out from competitors with a unique visual identity",
      "Build instant brand recognition in your market",
      "Create a professional first impression with customers",
      "Establish a strong foundation for your brand system",
      "Receive versatile files for all applications and media"
    ],
    features: [
      {
        title: "Brand Discovery",
        description: "Exploration of your values, audience, and competitive landscape"
      },
      {
        title: "Concept Development",
        description: "Multiple creative directions to explore possibilities"
      },
      {
        title: "Refinement Process",
        description: "Collaborative iteration to perfect your chosen direction"
      },
      {
        title: "Comprehensive Files",
        description: "Complete package of formats for all applications"
      }
    ],
    cta: {
      text: "Ready for a logo that gets remembered?",
      action: "Start your logo project"
    }
  },
  {
    id: "ui-ux-design",
    iconName: "MousePointer",
    title: "UI/UX Design",
    description: "Intuitive, engaging user experiences that delight customers and drive business results.",
    color: "pink",
    fullDescription: [
      "Our UI/UX design service creates intuitive, engaging digital experiences that delight users while achieving your business objectives.",
      "We combine user research, information architecture, and visual design to develop interfaces that are both beautiful and highly functional.",
      "The result is a seamless user experience that reduces friction, increases engagement, and drives conversions across all your digital touchpoints."
    ],
    benefits: [
      "Increase user satisfaction and reduce frustration",
      "Improve conversion rates through optimized user flows",
      "Reduce development costs by solving problems early",
      "Build customer loyalty through delightful experiences",
      "Create consistent experiences across all platforms"
    ],
    features: [
      {
        title: "User Research",
        description: "Understanding your users' needs, goals, and pain points"
      },
      {
        title: "Information Architecture",
        description: "Logical organization of content and functionality"
      },
      {
        title: "Wireframing & Prototyping",
        description: "Interactive models to test and refine experiences"
      },
      {
        title: "Visual Design",
        description: "Attractive, on-brand interface elements and layouts"
      }
    ],
    cta: {
      text: "Ready to create exceptional user experiences?",
      action: "Start your UI/UX project"
    }
  },
  {
    id: "infographics",
    iconName: "PieChart",
    title: "Infographics",
    description: "Visual data storytelling that simplifies complex information and increases engagement.",
    color: "orange",
    fullDescription: [
      "Our infographics service transforms complex data and concepts into visually compelling stories that are instantly understandable and shareable.",
      "We combine data visualization, graphic design, and strategic messaging to create infographics that educate your audience and strengthen your brand.",
      "Each infographic is designed to be both informative and visually distinctive, helping your content stand out in a crowded digital landscape."
    ],
    benefits: [
      "Simplify complex information for quick understanding",
      "Increase engagement with your content across channels",
      "Enhance credibility through professional data visualization",
      "Improve retention of key information and messages",
      "Create highly shareable content for social media and beyond"
    ],
    features: [
      {
        title: "Data Analysis",
        description: "Identification of key insights and narrative threads"
      },
      {
        title: "Visual Storytelling",
        description: "Compelling narrative structure that guides viewers"
      },
      {
        title: "Custom Illustrations",
        description: "Unique visual elements that enhance understanding"
      },
      {
        title: "Multi-format Delivery",
        description: "Versions optimized for different platforms and uses"
      }
    ],
    cta: {
      text: "Ready to visualize your data story?",
      action: "Create your infographic"
    }
  },
  {
    id: "blog-articles",
    iconName: "Edit3",
    title: "Blog Articles",
    description: "Expert-written content that establishes authority, drives traffic, and engages your audience.",
    color: "orange",
    fullDescription: [
      "Our blog article service creates high-quality, strategic content that positions your brand as an authority while driving organic traffic to your website.",
      "We develop well-researched, engaging articles that address your audience's key questions and challenges, optimized for both readers and search engines.",
      "Each piece is crafted to support your broader marketing goals, from lead generation to thought leadership, with clear calls-to-action that move readers through your funnel."
    ],
    benefits: [
      "Establish authority and credibility in your industry",
      "Drive organic traffic through SEO-optimized content",
      "Nurture leads with valuable, relevant information",
      "Build a content library that continues to perform over time",
      "Save time and resources on content creation"
    ],
    features: [
      {
        title: "Topic Research",
        description: "Strategic selection of high-value content opportunities"
      },
      {
        title: "Expert Writing",
        description: "Well-crafted articles that engage and inform"
      },
      {
        title: "SEO Optimization",
        description: "Content structured to perform well in search results"
      },
      {
        title: "Strategic CTAs",
        description: "Clear next steps that guide readers through your funnel"
      }
    ],
    cta: {
      text: "Ready to build your content authority?",
      action: "Start your content plan"
    }
  },
  {
    id: "email-campaigns",
    iconName: "Mail",
    title: "Email Campaigns",
    description: "Strategic email marketing that nurtures leads, drives conversions, and builds relationships.",
    color: "orange",
    fullDescription: [
      "Our email campaign service creates strategic, conversion-focused email sequences that nurture relationships and drive specific business outcomes.",
      "We develop targeted campaigns with compelling copy, attractive design, and clear calls-to-action, all optimized for engagement and conversion.",
      "Each campaign is built with careful attention to audience segmentation, timing, and testing to maximize performance and ROI."
    ],
    benefits: [
      "Nurture leads through your sales funnel automatically",
      "Build lasting relationships with customers and prospects",
      "Drive consistent revenue with targeted promotions",
      "Deliver personalized content based on user behavior",
      "Measure and optimize performance with detailed analytics"
    ],
    features: [
      {
        title: "Campaign Strategy",
        description: "Goal-oriented planning for maximum impact"
      },
      {
        title: "Copywriting & Design",
        description: "Compelling messages with attractive visuals"
      },
      {
        title: "Audience Segmentation",
        description: "Targeted content based on user characteristics"
      },
      {
        title: "Performance Optimization",
        description: "Testing and refinement to improve results"
      }
    ],
    cta: {
      text: "Ready to elevate your email marketing?",
      action: "Launch your campaign"
    }
  },
  {
    id: "social-media-content",
    iconName: "Share2",
    title: "Social Media Content",
    description: "Engaging posts and graphics that build your brand presence and drive audience engagement.",
    color: "orange",
    fullDescription: [
      "Our social media content service creates engaging, on-brand posts that build your presence and drive meaningful engagement across platforms.",
      "We develop a strategic mix of content types—from educational posts to engaging graphics—tailored to each platform's unique audience and format requirements.",
      "Each piece of content is designed to support specific business goals while maintaining a consistent brand voice and visual identity."
    ],
    benefits: [
      "Build a consistent, professional presence across platforms",
      "Save time with ready-to-publish content calendars",
      "Increase engagement with your target audience",
      "Drive traffic to your website and other conversion points",
      "Establish thought leadership in your industry"
    ],
    features: [
      {
        title: "Platform Strategy",
        description: "Tailored approach for each social channel"
      },
      {
        title: "Content Calendar",
        description: "Planned posting schedule with strategic themes"
      },
      {
        title: "Custom Graphics",
        description: "On-brand visuals that capture attention"
      },
      {
        title: "Engagement Copy",
        description: "Compelling captions that drive interaction"
      }
    ],
    cta: {
      text: "Ready to elevate your social media presence?",
      action: "Start creating content"
    }
  },
  {
    id: "marketing-strategy",
    iconName: "Target",
    title: "Marketing Strategy",
    description: "Comprehensive marketing plans that align your tactics with business goals and target audience needs.",
    color: "purple",
    fullDescription: [
      "Our marketing strategy service creates comprehensive, data-driven plans that align your marketing efforts with your business objectives and audience needs.",
      "We analyze your market position, competitive landscape, and customer journey to develop strategic frameworks that guide all your marketing activities.",
      "The result is a clear roadmap that ensures your marketing investments deliver measurable results and sustainable growth."
    ],
    benefits: [
      "Align all marketing activities with clear business goals",
      "Focus resources on the highest-impact opportunities",
      "Create consistency across all marketing channels",
      "Make confident decisions based on strategic frameworks",
      "Measure success with meaningful metrics and KPIs"
    ],
    features: [
      {
        title: "Market Analysis",
        description: "Deep understanding of your industry and competition"
      },
      {
        title: "Audience Insights",
        description: "Clear definition of target segments and their needs"
      },
      {
        title: "Channel Strategy",
        description: "Prioritized approach to marketing channels and tactics"
      },
      {
        title: "Measurement Framework",
        description: "KPIs and analytics plan to track performance"
      }
    ],
    cta: {
      text: "Ready for a strategic approach to marketing?",
      action: "Develop your strategy"
    }
  },
  {
    id: "go-to-market-plan",
    iconName: "Rocket",
    title: "Go-to-Market Plan",
    description: "Strategic launch plans that position your product for success and maximize market impact.",
    color: "purple",
    fullDescription: [
      "Our go-to-market planning service creates comprehensive launch strategies that position your new product or service for maximum market impact.",
      "We develop detailed roadmaps covering everything from market positioning and messaging to channel strategy and sales enablement, all aligned with your business objectives.",
      "The result is a coordinated, effective launch that accelerates adoption and sets the foundation for long-term success."
    ],
    benefits: [
      "Accelerate market adoption of your new offering",
      "Coordinate all launch activities for maximum impact",
      "Align your team around clear launch objectives",
      "Minimize risks through careful planning and preparation",
      "Establish effective measurement of launch success"
    ],
    features: [
      {
        title: "Market Positioning",
        description: "Strategic differentiation in your competitive landscape"
      },
      {
        title: "Launch Roadmap",
        description: "Detailed timeline of pre and post-launch activities"
      },
      {
        title: "Channel Strategy",
        description: "Optimized approach to reaching your target audience"
      },
      {
        title: "Sales Enablement",
        description: "Tools and training to support your sales process"
      }
    ],
    cta: {
      text: "Ready to launch with confidence?",
      action: "Plan your market entry"
    }
  },
  {
    id: "funding-strategy",
    iconName: "DollarSign",
    title: "Funding Strategy",
    description: "Strategic fundraising plans that help you secure the capital needed to fuel your growth.",
    color: "green",
    fullDescription: [
      "Our funding strategy service creates comprehensive plans to help you secure the capital needed to achieve your business objectives.",
      "We develop tailored approaches for each stage of your growth, from identifying the right funding sources to creating compelling investment materials and preparing you for investor conversations.",
      "The result is a clear roadmap that maximizes your chances of securing funding on favorable terms while aligning with your long-term vision."
    ],
    benefits: [
      "Identify the most appropriate funding sources for your stage",
      "Develop a compelling investment narrative that resonates",
      "Prepare thoroughly for investor meetings and due diligence",
      "Optimize your valuation and deal terms",
      "Create a long-term funding roadmap aligned with your goals"
    ],
    features: [
      {
        title: "Funding Assessment",
        description: "Analysis of your capital needs and optimal sources"
      },
      {
        title: "Investor Targeting",
        description: "Identification of ideal investors for your business"
      },
      {
        title: "Pitch Development",
        description: "Creation of compelling investment materials"
      },
      {
        title: "Preparation Coaching",
        description: "Guidance for investor meetings and negotiations"
      }
    ],
    cta: {
      text: "Ready to secure funding for your vision?",
      action: "Develop your funding strategy"
    }
  },
  {
    id: "pitch-coaching",
    iconName: "MessageCircle",
    title: "Pitch Coaching",
    description: "Expert guidance to help you deliver compelling pitches that win over investors and partners.",
    color: "green",
    fullDescription: [
      "Our pitch coaching service prepares you to deliver compelling, confident presentations that resonate with investors and secure the funding you need.",
      "We work with you to refine your narrative, strengthen your delivery, anticipate tough questions, and project the confidence that investors look for in founders.",
      "The result is a polished, authentic pitch that effectively communicates your vision and maximizes your chances of fundraising success."
    ],
    benefits: [
      "Develop a clear, compelling narrative that resonates with investors",
      "Build confidence in your delivery and presentation skills",
      "Prepare for tough questions and objections",
      "Refine your pitch based on expert feedback",
      "Increase your chances of securing investment"
    ],
    features: [
      {
        title: "Narrative Development",
        description: "Crafting a compelling story that engages investors"
      },
      {
        title: "Delivery Coaching",
        description: "Guidance on presentation style and techniques"
      },
      {
        title: "Q&A Preparation",
        description: "Practice handling challenging investor questions"
      },
      {
        title: "Video Analysis",
        description: "Detailed feedback on recorded practice sessions"
      }
    ],
    cta: {
      text: "Ready to deliver a winning pitch?",
      action: "Start your coaching"
    }
  },
  {
    id: "financial-projections",
    iconName: "LineChart",
    title: "Financial Projections",
    description: "Credible financial models that demonstrate your growth potential and support fundraising efforts.",
    color: "green",
    fullDescription: [
      "Our financial projections service creates credible, well-structured financial models that demonstrate your business potential to investors and support strategic planning.",
      "We develop comprehensive models with revenue forecasts, expense projections, cash flow analysis, and key metrics tailored to your specific business model and industry.",
      "The result is a powerful tool that not only supports fundraising efforts but also provides valuable insights for strategic decision-making."
    ],
    benefits: [
      "Build investor confidence with professional financial models",
      "Understand key drivers of your business performance",
      "Plan effectively for cash needs and fundraising timing",
      "Test different scenarios to inform strategic decisions",
      "Establish meaningful metrics to track your progress"
    ],
    features: [
      {
        title: "Revenue Modeling",
        description: "Detailed forecasts based on realistic growth assumptions"
      },
      {
        title: "Expense Projections",
        description: "Comprehensive cost structure analysis and forecasting"
      },
      {
        title: "Cash Flow Analysis",
        description: "Clear visibility into your future cash position"
      },
      {
        title: "Scenario Planning",
        description: "Multiple projections based on different assumptions"
      }
    ],
    cta: {
      text: "Ready to model your financial future?",
      action: "Build your projections"
    }
  },
  {
    id: "product-roadmap",
    iconName: "Map",
    title: "Product Roadmap",
    description: "Strategic product development plans that align features with user needs and business goals.",
    color: "cyan",
    fullDescription: [
      "Our product roadmap service creates strategic development plans that align your product evolution with user needs and business objectives.",
      "We prioritize features and enhancements based on user research, market opportunities, and resource constraints to create a clear path forward for your product team.",
      "The result is a practical, flexible roadmap that guides development while communicating your product vision to stakeholders."
    ],
    benefits: [
      "Align product development with strategic business goals",
      "Prioritize features based on user value and business impact",
      "Create clarity and focus for your development team",
      "Communicate product direction to stakeholders and investors",
      "Balance short-term wins with long-term vision"
    ],
    features: [
      {
        title: "User Research Integration",
        description: "Incorporating customer needs into product decisions"
      },
      {
        title: "Feature Prioritization",
        description: "Strategic ranking of potential enhancements"
      },
      {
        title: "Timeline Development",
        description: "Realistic scheduling based on resources and dependencies"
      },
      {
        title: "Stakeholder Alignment",
        description: "Tools for communicating product direction effectively"
      }
    ],
    cta: {
      text: "Ready to map your product's future?",
      action: "Create your roadmap"
    }
  },
  {
    id: "mobile-app-development",
    iconName: "Smartphone",
    title: "Mobile App Development",
    description: "Custom mobile applications that deliver exceptional user experiences on iOS and Android.",
    color: "cyan",
    fullDescription: [
      "Our mobile app development service creates custom applications that deliver exceptional user experiences while achieving your business objectives.",
      "We build native or cross-platform apps with intuitive interfaces, robust functionality, and seamless performance across iOS and Android devices.",
      "Each app is developed with a focus on user engagement, technical excellence, and long-term scalability to support your evolving needs."
    ],
    benefits: [
      "Reach users on their most personal devices",
      "Create engaging experiences that build customer loyalty",
      "Leverage mobile-specific features like location and notifications",
      "Establish new revenue streams and business models",
      "Collect valuable user data to inform business decisions"
    ],
    features: [
      {
        title: "UX/UI Design",
        description: "Intuitive, engaging interfaces optimized for mobile"
      },
      {
        title: "Cross-Platform Development",
        description: "Consistent experiences across iOS and Android"
      },
      {
        title: "Backend Integration",
        description: "Seamless connection with your existing systems"
      },
      {
        title: "Analytics Implementation",
        description: "Data collection to track usage and performance"
      }
    ],
    cta: {
      text: "Ready to build your mobile experience?",
      action: "Start app development"
    }
  },
  {
    id: "saas-development",
    iconName: "Cloud",
    title: "SaaS Development",
    description: "Cloud-based software solutions that create recurring revenue and scalable business models.",
    color: "blue",
    fullDescription: [
      "Our SaaS development service creates cloud-based software solutions that enable recurring revenue models and deliver ongoing value to your customers.",
      "We build scalable, secure platforms with subscription management, user authentication, and the infrastructure needed to support growing user bases.",
      "Each solution is designed with a focus on user experience, technical performance, and the business model fundamentals that drive SaaS success."
    ],
    benefits: [
      "Create predictable, recurring revenue streams",
      "Scale your business model efficiently",
      "Deliver continuous value and updates to customers",
      "Collect valuable usage data to inform product decisions",
      "Build business value through subscriber relationships"
    ],
    features: [
      {
        title: "Architecture Design",
        description: "Scalable, secure foundations for growth"
      },
      {
        title: "Subscription Management",
        description: "Systems for handling payments and user tiers"
      },
      {
        title: "User Experience Design",
        description: "Intuitive interfaces that drive adoption"
      },
      {
        title: "Analytics Integration",
        description: "Data collection for business and product insights"
      }
    ],
    cta: {
      text: "Ready to build your SaaS platform?",
      action: "Start SaaS development"
    }
  },
  {
    id: "product-analytics",
    iconName: "Activity",
    title: "Product Analytics",
    description: "Data-driven insights that reveal user behavior and guide product optimization.",
    color: "purple",
    fullDescription: [
      "Our product analytics service implements comprehensive measurement frameworks that reveal how users interact with your product and where opportunities for improvement exist.",
      "We set up tracking systems, create insightful dashboards, and provide ongoing analysis that translates raw data into actionable product decisions.",
      "The result is a data-driven approach to product development that increases engagement, reduces churn, and drives business growth."
    ],
    benefits: [
      "Understand exactly how users interact with your product",
      "Identify friction points and opportunities for improvement",
      "Make confident product decisions based on data",
      "Measure the impact of new features and changes",
      "Increase conversion rates and reduce user churn"
    ],
    features: [
      {
        title: "Tracking Implementation",
        description: "Setup of comprehensive event and user tracking"
      },
      {
        title: "Custom Dashboards",
        description: "Visual displays of your most important metrics"
      },
      {
        title: "Funnel Analysis",
        description: "Identification of conversion bottlenecks"
      },
      {
        title: "Insight Generation",
        description: "Translation of data into actionable recommendations"
      }
    ],
    cta: {
      text: "Ready to make data-driven product decisions?",
      action: "Set up analytics"
    }
  },
  {
    id: "business-plan",
    iconName: "FileText",
    title: "Business Plan",
    description: "Comprehensive business plans that articulate your vision, strategy, and financial projections.",
    color: "green",
    fullDescription: [
      "Our business plan service creates professional, investor-ready documents that clearly articulate your business model, market opportunity, and growth strategy.",
      "We develop comprehensive plans with executive summaries, market analyses, operational details, and financial projections tailored to your specific business and industry.",
      "The result is a powerful tool that not only supports fundraising efforts but also provides a strategic roadmap for your business growth."
    ],
    benefits: [
      "Present a professional, thorough business case to potential investors",
      "Clarify your business model and growth strategy",
      "Identify potential challenges and opportunities early",
      "Create alignment among founders and stakeholders",
      "Establish a strategic roadmap for business execution"
    ],
    features: [
      {
        title: "Executive Summary",
        description: "Compelling overview of your business and opportunity"
      },
      {
        title: "Market Analysis",
        description: "In-depth research on your industry and target customers"
      },
      {
        title: "Financial Projections",
        description: "Detailed forecasts with revenue, expenses, and cash flow"
      },
      {
        title: "Operational Strategy",
        description: "Clear plans for execution and resource allocation"
      }
    ],
    cta: {
      text: "Ready to create a roadmap for your business?",
      action: "Develop your business plan"
    }
  },
  {
    id: "investor-pitch-training",
    iconName: "Briefcase",
    title: "Investor Pitch Training",
    description: "Intensive preparation for investor meetings that builds confidence and improves outcomes.",
    color: "green",
    fullDescription: [
      "Our investor pitch training service prepares founders for high-stakes investor meetings through intensive practice, feedback, and refinement.",
      "We conduct simulated pitch sessions, challenging Q&A preparation, and detailed feedback on everything from your narrative flow to body language and vocal delivery.",
      "The result is a confident, polished presentation style that effectively communicates your vision and maximizes your chances of securing investment."
    ],
    benefits: [
      "Build confidence in high-pressure investor situations",
      "Anticipate and prepare for challenging investor questions",
      "Refine your pitch based on expert feedback",
      "Develop a compelling narrative that resonates with investors",
      "Increase your chances of securing investment"
    ],
    features: [
      {
        title: "Mock Pitch Sessions",
        description: "Realistic simulations of investor presentations"
      },
      {
        title: "Q&A Preparation",
        description: "Practice handling difficult investor questions"
      },
      {
        title: "Delivery Coaching",
        description: "Guidance on presentation style and techniques"
      },
      {
        title: "Video Analysis",
        description: "Detailed feedback on recorded practice sessions"
      }
    ],
    cta: {
      text: "Ready to nail your investor pitch?",
      action: "Start your training"
    }
  }
] 