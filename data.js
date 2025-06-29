// data.js
const data = {
  // Personal Information
  name: "Muhammad Rohaib",
  title: "Senior Full-Stack Engineer & AI Specialist",
  currentCompany: "Example Corp",
  currentCompanyUrl: "#",
  aboutText: [
    "Hello! I'm Muhammad, a passionate software engineer with expertise in full-stack development and artificial intelligence. My journey in tech began when I built my first website at 16, and since then I've been obsessed with creating digital solutions that make an impact.",
    "With over 5 years of professional experience, I've had the privilege to work with startups, enterprises, and digital agencies across the globe. Currently, I'm leading a team of developers at Example Corp where we're building next-generation web applications.",
    "When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or mentoring aspiring developers through my YouTube channel and online courses."
  ],
  
  // Skills
  skills: [
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Sass", "Redux", "GraphQL"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express", "Python", "Django", "Flask", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Google Cloud", "Azure", "Nginx", "Linux"]
    },
    {
      category: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "GPT-3", "OpenAI", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      category: "Design & Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Git", "VS Code", "Jira", "Agile", "Scrum"]
    }
  ],
  
  // Experience
  experience: [
    {
      company: "Example Corp",
      position: "Senior Full Stack Engineer",
      duration: "January 2022 - Present",
      responsibilities: [
        "Led a cross-functional team of 8 engineers to develop a scalable SaaS platform serving 100,000+ monthly active users, resulting in a 40% increase in customer retention",
        "Architected and implemented a microservices backend using Node.js, Express, and MongoDB, improving API response times by 65%",
        "Spearheaded the migration from legacy AngularJS to React, reducing bundle size by 35% and improving Lighthouse scores by 50 points",
        "Implemented CI/CD pipelines using GitHub Actions and Docker, reducing deployment times from 15 minutes to under 2 minutes",
        "Mentored 5 junior developers through code reviews and technical workshops, improving team velocity by 25%"
      ]
    },
    {
      company: "StartUp Co",
      position: "Frontend Lead",
      duration: "March 2020 - December 2021",
      responsibilities: [
        "Built the company's flagship product from scratch using React, TypeScript, and Redux, which processed over $5M in transactions in its first year",
        "Designed and implemented a component library with Storybook that reduced development time by 40% across all projects",
        "Optimized web performance through code splitting, lazy loading, and image optimization, achieving a 90+ Lighthouse score",
        "Integrated with REST and GraphQL APIs, implementing robust error handling and data caching strategies",
        "Collaborated with designers to create a responsive, accessible UI that improved user engagement metrics by 35%"
      ]
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "June 2018 - February 2020",
      responsibilities: [
        "Developed 20+ websites and web applications for clients across various industries using modern JavaScript frameworks and CMS platforms",
        "Created responsive, mobile-first designs that improved client conversion rates by an average of 25%",
        "Built custom WordPress themes and plugins for clients with specific content management needs",
        "Implemented SEO best practices that increased organic traffic by 60% for multiple clients",
        "Managed all aspects of projects from initial consultation to deployment and maintenance"
      ]
    },
    {
      company: "University",
      position: "Computer Science Tutor",
      duration: "September 2017 - May 2018",
      responsibilities: [
        "Tutored 50+ students in data structures, algorithms, and web development fundamentals",
        "Conducted weekly workshops on JavaScript, Python, and Java programming concepts",
        "Assisted professors with grading assignments and providing constructive feedback",
        "Helped students debug code and understand complex computer science concepts"
      ]
    }
  ],
  
  // Projects
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution with product management, cart functionality, secure checkout, and admin dashboard.",
      image: "assets/projects/ecommerce.jpg",
      categories: ["web"],
      tech: ["React", "Redux", "Node.js", "MongoDB", "Stripe API"],
      links: {
        demo: "#",
        demoText: "Live Demo",
        code: "#"
      },
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team functionality, and progress tracking.",
      image: "assets/projects/task-manager.jpg",
      categories: ["web", "mobile"],
      tech: ["React", "TypeScript", "Firebase", "Material UI", "PWA"],
      links: {
        demo: "#",
        demoText: "Live Demo",
        code: "#"
      }
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered tool that generates high-quality content for blogs, social media, and marketing materials.",
      image: "assets/projects/ai-content.jpg",
      categories: ["ai"],
      tech: ["Python", "GPT-3 API", "Flask", "React", "Tailwind CSS"],
      links: {
        demo: "#",
        demoText: "Live Demo",
        code: "#"
      },
      featured: true
    },
    {
      title: "Design System",
      description: "A comprehensive design system with reusable components, design tokens, and documentation for product teams.",
      image: "assets/projects/design-system.jpg",
      categories: ["design"],
      tech: ["Figma", "Storybook", "React", "Styled Components", "Design Tokens"],
      links: {
        demo: "#",
        demoText: "View Prototype",
        code: "#"
      }
    },
    {
      title: "Portfolio Generator",
      description: "A tool that allows developers to generate and customize their own portfolio website with minimal configuration.",
      image: "assets/projects/portfolio-generator.jpg",
      categories: ["web"],
      tech: ["Next.js", "Tailwind CSS", "Markdown", "Vercel", "GitHub API"],
      links: {
        demo: "#",
        demoText: "Live Demo",
        code: "#"
      }
    },
    {
      title: "AI Chatbot",
      description: "A conversational AI chatbot that can answer questions, provide recommendations, and engage in natural dialogue.",
      image: "assets/projects/ai-chatbot.jpg",
      categories: ["web", "ai"],
      tech: ["Python", "TensorFlow", "NLTK", "Flask", "React"],
      links: {
        demo: "#",
        demoText: "Live Demo",
        code: "#"
      }
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      content: "Muhammad is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are unmatched. He transformed our web application into a modern, performant platform that our users love.",
      author: {
        name: "Sarah Johnson",
        position: "CTO, Tech Solutions Inc.",
        avatar: "assets/testimonials/sarah.jpg"
      }
    },
    {
      content: "Working with Muhammad was a game-changer for our startup. He not only built our MVP quickly but also provided valuable insights that shaped our product roadmap. His technical expertise and communication skills are top-notch.",
      author: {
        name: "Michael Chen",
        position: "Founder, StartUp Co",
        avatar: "assets/testimonials/michael.jpg"
      }
    },
    {
      content: "I've hired Muhammad for multiple projects over the years, and he never disappoints. He understands business requirements quickly and translates them into elegant technical solutions. Highly recommended for any complex web project.",
      author: {
        name: "Emma Rodriguez",
        position: "Director, Digital Agency",
        avatar: "assets/testimonials/emma.jpg"
      }
    }
  ],
  
  // Blog Posts
  blogPosts: [
    {
      title: "Optimizing React Performance in 2023",
      excerpt: "Learn the latest techniques to make your React applications faster and more efficient with these proven optimization strategies.",
      date: "June 15, 2023",
      image: "assets/blog/react-performance.jpg",
      link: "#"
    },
    {
      title: "Microservices Architecture: Best Practices",
      excerpt: "A comprehensive guide to designing and implementing microservices that scale while maintaining developer productivity.",
      date: "May 28, 2023",
      image: "assets/blog/microservices.jpg",
      link: "#"
    },
    {
      title: "Integrating AI into Web Applications",
      excerpt: "Practical approaches to enhance your web apps with AI capabilities using modern tools and frameworks.",
      date: "April 10, 2023",
      image: "assets/blog/ai-web.jpg",
      link: "#"
    }
  ],
  
  // Social Links
  socialLinks: [
    { icon: "fab fa-github", url: "#" },
    { icon: "fab fa-linkedin-in", url: "#" },
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-instagram", url: "#" },
    { icon: "fab fa-codepen", url: "#" },
    { icon: "fab fa-youtube", url: "#" }
  ]
};