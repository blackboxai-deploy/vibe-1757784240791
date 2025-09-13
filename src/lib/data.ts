// Portfolio data for the website

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    subtitle: "Creating digital experiences that make a difference",
    bio: "I'm a passionate full-stack developer with 5+ years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies, helping businesses transform their ideas into scalable digital solutions.",
    email: "alex@example.com",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    resume: "/resume.pdf"
  },

  // Social Links
  social: {
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    website: "https://alexjohnson.dev"
  },

  // Skills organized by category
  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 80 },
      { name: "JavaScript", level: 95 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 78 }
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Jest", level: 88 }
    ]
  },

  // Work Experience
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Lead development of enterprise web applications serving 100K+ users. Implemented microservices architecture and improved performance by 40%.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built responsive web applications and mobile-first designs. Collaborated with design team to create seamless user experiences.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Junior Developer",
      company: "WebAgency Pro",
      period: "2019 - 2020",
      description: "Developed custom websites and e-commerce solutions for small to medium businesses. Gained experience in full-stack development.",
      technologies: ["JavaScript", "PHP", "WordPress", "MySQL"]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57e1bcc7-ed1c-4248-abd2-2ab790fc39b8.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      category: "fullstack",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cd61b8c4-b688-4a89-8fb4-53661b7bc55f.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9a07a91b-f9d0-41ea-a941-b9007f1eb8a1.png",
      technologies: ["React", "D3.js", "Weather API", "Geolocation"],
      category: "frontend",
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "A scalable API gateway with rate limiting, authentication, and monitoring for microservices architecture.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c3088ca-618a-4378-864a-374e19d0d741.png",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
      category: "backend",
      githubUrl: "https://github.com/alexjohnson/api-gateway",
      liveUrl: "",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies and optimized for performance.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/63e33d03-7771-4199-9089-862525a87cd7.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      githubUrl: "https://github.com/alexjohnson/portfolio",
      liveUrl: "https://alexjohnson.dev",
      featured: false
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with group conversations, file sharing, and emoji reactions.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eeddb0b2-7d98-4e2e-9cf2-175f2862f7ca.png",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      githubUrl: "https://github.com/alexjohnson/chat-app",
      liveUrl: "https://chat-app-demo.vercel.app",
      featured: false
    }
  ],

  // Services
  services: [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly",
        "Cross-browser Compatible"
      ],
      icon: "code"
    },
    {
      title: "Full-Stack Development",
      description: "Complete end-to-end solutions from database design to user interface.",
      features: [
        "Database Design",
        "API Development",
        "Frontend Integration",
        "Deployment & Hosting"
      ],
      icon: "layers"
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance on technology choices, architecture, and development strategy.",
      features: [
        "Technology Assessment",
        "Architecture Planning",
        "Code Review",
        "Team Mentoring"
      ],
      icon: "users"
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      content: "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the project a huge success.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5f2f30b9-b12e-4ce7-a9f1-d171bee369a2.png"
    },
    {
      name: "Mike Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Alex was a game-changer for our startup. He built our entire frontend from scratch and exceeded all expectations.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54b53970-00ca-4202-8ff8-cd1b0ec825de.png"
    },
    {
      name: "Emma Thompson",
      role: "Designer",
      company: "Creative Agency",
      content: "Alex perfectly translated our designs into pixel-perfect, responsive websites. His collaboration skills are outstanding.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f010bf2-3963-4243-b40b-1278be9e5bab.png"
    }
  ],

  // Statistics
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Code Commits", value: "1000+" }
  ]
};

// Helper functions
export const getProjectsByCategory = (category: string) => {
  if (category === "all") return portfolioData.projects;
  return portfolioData.projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return portfolioData.projects.filter(project => project.featured);
};