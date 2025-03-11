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
    iconName: "Palette",
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
    iconName: "FileText",
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
    iconName: "Compass",
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
    iconName: "BarChart3",
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
    iconName: "Code2",
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
    iconName: "Play",
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
    iconName: "LineChart",
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
  }
] 