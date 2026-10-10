// Site-wide configuration
import webIcon from "../assets/homeAssets/web.svg";
import appIcon from "../assets/homeAssets/app.svg";
import uiuxIcon from "../assets/homeAssets/uiux.svg";
import aiIcon from "../assets/homeAssets/ai.svg";
import cloudIcon from "../assets/homeAssets/cloud.svg";
import saasIcon from "../assets/homeAssets/saas.svg";
import digitalMarketingIcon from "../assets/homeAssets/digitalMarketing.svg";

export const siteConfig = {
  name: "Encova Solutions",
  tagline: "Transforming Ideas into Digital Excellence",
  description:
    "Leading IT solutions and consulting company specializing in web development, mobile apps, UI/UX design, AI, and graphic design.",

  contact: {
    email: "info@encovasolutions.com",
    phone: "+92 311 9093 230",
    address: "Office No. TF 200, Deans Trade Center, Cantt Peshawar, Pakistan",
    mapLink: "https://maps.google.com",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/encova-solutions-pvt-limited/",
    instagram: "https://www.instagram.com/encovasolutions/",
    twitter: "#",
    facebook: "https://www.facebook.com/share/1EeGD1twAH/?mibextid=wwXIfr",
  },

  services: [
    {
      id: "web",
      name: "Web Development",
      firstname: "Web",
      secondname: "Development",
      shortDesc: "Custom web solutions built with cutting-edge technologies",
      description:
        "We create responsive, scalable, and high-performance web applications tailored to your business needs. From corporate websites to complex web platforms, our team delivers excellence.",
      icon: webIcon,
      features: [
        "Responsive web design for all devices",
        "Progressive Web Applications (PWA)",
        "Single Page Applications (SPA)",
        "E-commerce platform development",
        "Content Management Systems (CMS)",
        "Custom web portals and dashboards",
        "API integration and development",
        "Performance optimization",
      ],
      technologies: [
        "React",
        "Next.js",
        "Angular",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Nest.js",
        "Nuxt.js",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Supabase",
        "Typescript",
        "Prisma",
        "Mongoose",
        "Sequelize",
        "AWS",
        "GraphQL",
        "Docker",
        "Tailwind CSS",
        "Redux",
        "REST APIs",
        "Firebase Cloud Messaging",
        "Socket.IO",
      ],
    },
    {
      id: "app",
      name: "App Development",
      firstname: "App",
      secondname: "Development",
      shortDesc: "Native and cross-platform mobile applications",
      description:
        "Build powerful, feature-rich mobile applications for iOS and Android platforms. We create intuitive mobile experiences that engage users and drive business growth.",
      icon: appIcon,
      features: [
        "Native iOS and Android development",
        "Cross-platform mobile apps",
        "Mobile UI/UX Design",
        "App Store and Play Store deployment",
        "Push Notifications",
        "Offline functionality",
        "Location-based services",
        "In-app purchases and subscriptions",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      id: "uiux",
      name: "UI/UX Designing",
      firstname: "UI/UX ",
      secondname: "Design",
      shortDesc: "User-centered design that converts",
      description:
        "Create stunning, user-centered designs that delight your customers and drive engagement. We combine beautiful aesthetics with intuitive functionality to deliver exceptional user experiences.",
      icon: uiuxIcon,
      features: [
        "User research and persona development",
        "Information Architecture",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Interaction Design",
        "Usability Testing",
        "Design systems and style guides",
        "Responsive and adaptive design",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Principle",
        "Framer",
        "Photoshop",
        "Illustrator",
        "Canva",
      ],
    },
    {
      id: "ai",
      name: "AI Solutions",
      firstname: "AI ",
      secondname: "Solutions",
      shortDesc: "Intelligent systems powered by machine learning",
      description:
        "Build intelligent AI solutions that drive automation, advanced analytics, and data-driven decision-making, delivering scalable systems that adapt and create real business value.",
      icon: aiIcon,
      features: [
        "Machine Learning models",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Intelligent chatbots",
        "AI process automation",
        "Recommendation engines",
        "Anomaly detection",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Hugging Face",
        "LangChain",
        "NumPy",
        "Pandas",
        "SciPy",
        "Google Vertex AI",
      ],
    },
    {
      id: "saas",
      name: "SaaS Development",
      firstname: "SaaS ",
      secondname: "Development",
      shortDesc: "Scalable subscription-based platforms for modern businesses",
      description:
        "Build scalable, secure, and feature-rich Software-as-a-Service platforms. We develop end-to-end SaaS solutions with subscription management, multi-tenancy, and enterprise-grade features.",
      icon: saasIcon,
      features: [
        "Multi-tenant architecture",
        "Subscription and billing management",
        "Role-based access control (RPAC)",
        "Analytics and reporting dashboards",
        "API development and documentation",
        "Scalable cloud infrastructure",
        "Data security and encryption",
        "Third-party integrations",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "AWS",
        "Docker",
        "Kubernetes",
        "Redis",
        "GraphQL",
        "Typescript",
        "Microservices",
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      firstname: "Cloud &",
      secondname: "DevOps",
      shortDesc: "Reliable cloud infrastructure and automated delivery pipelines",
      description:
        "Architected and maintained cloud-native environments on AWS, Azure, and GCP with fully automated CI/CD pipelines, enabling faster releases, high availability, and operational efficiency.",
      icon: cloudIcon,
      features: [
        "Cloud infrastructure setup and management",
        "CI/CD pipeline configuration",
        "CI/CD pipeline configuration",
        "Infrastructure as Code (IaC)",
        "Monitoring and logging solutions",
        "Auto-scaling and load balancing",
        "Security implementation & audits",
        "Disaster recovery planning",
      ],
      technologies: [
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Jenkins",
        "Prometheus",
        "Grafana",
        "Gitlab CI/CD",
        "ELK Stack",
      ],
    },
    {
      id: "digital-marketing",
      name: "Digital Marketing",
      firstname: "Digital",
      secondname: "Marketing",
      shortDesc: "Growth-focused campaigns that increase visibility and leads",
      description:
        "We create data-driven digital marketing strategies that help your brand reach the right audience, generate qualified leads, and grow across search, social, and paid channels.",
      icon: digitalMarketingIcon,
      features: [
        "Search engine optimization (SEO)",
        "Social media marketing",
        "Paid ads campaign management",
        "Content strategy and planning",
        "Lead generation funnels",
        "Email marketing campaigns",
        "Analytics and performance reporting",
        "Conversion rate optimization",
      ],
      technologies: [
        "Google Ads",
        "Meta Ads",
        "Google Analytics",
        "Google Search Console",
        "SEMrush",
        "Ahrefs",
        "Mailchimp",
        "HubSpot",
        "Canva",
        "LinkedIn Ads",
      ],
    },
  ],

  portfolio: [
    {
      id: 1,
      title: "Gym Management System",
      category: "saas",
      description: `Developed a full-stack gym management system to streamline and organize daily gym operations. The system allows efficient handling of member records, subscription plans, attendance tracking, and payment management through a structured and user-friendly interface.

It improves overall workflow by centralizing all essential gym activities into a single system, making management more efficient and reliable. The system is designed to provide a smooth and efficient experience for managing gym operations in a centralized way.`,
      image: "/GMS.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "JKD Pakistan",
      category: "web",
      description: `Developed a dynamic organization website designed to manage both informational content and interactive user features. The platform includes a dedicated student portal where users can access relevant information and manage their activities efficiently.

Additionally, an event booking system is integrated, allowing users to browse events and complete bookings directly through the website. The system is built to provide a smooth, organized, and user-friendly experience while handling real-world use cases like registrations and event management`,
      image: "/JKD.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Study Studio",
      // category: 'graphics',
      category: "ai",

      description:
        "I developed the frontend for StudyStudio, an AI-driven study platform that lets students create personalized AI tutors, manage courses, and get real-time homework help. My work included building responsive UI screens, user dashboards, and subscription/payment flows, all fully integrated with backend APIs. I focused on delivering a clean design, smooth user experience, and fast, scalable frontend architecture to ensure the platform is both intuitive and high-performing.",
      image: "/StudyStudio.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },

    {
      id: 4,
      title: "Exodus",
      category: "uiux",
      description:
        "Crafted intuitive UI/UX design for Exodus gaming web and app focusing on user-friendly navigation, modern aesthetics, and seamless experience.",
      image: "/Exodus.png",
      technologies: ["Figma", "Adobe XD", "Principle"],
    },
    {
      id: 5,
      title: "AI Tool Finder",
      category: "ai",
      description:
        "I built AI Tool Finder, a platform that helps users explore and discover AI tools across categories like audio, video, coding, writing, and marketing. It makes finding the right AI solutions simple and efficient. The platform allows users to compare features, pricing, and usability, helping them make informed decisions. Users can also build a customized AI stack tailored to their needs. AI Tool Finder keeps you updated on the latest and most effective AI tools in the market.",
      image: "/AIToolFinder.png",
      technologies: ["Next.js", "PostgreSQL", "AWS", "Mapbox"],
    },
    {
      id: 6,
      title: "School Management System",
      category: "saas",
      description: `Designed and developed a full-stack School Management System to streamline academic and administrative operations. The platform centralizes student records, teacher profiles, class schedules, attendance tracking, fee management, and performance monitoring. It enables administrators to manage admissions, generate reports, and handle secure fee transactions through a web-based system. Built with modern web technologies, the application features responsive design, role-based access control, and scalable data management to improve communication and reduce manual processes.`,
      image: "/SchoolMangement.png",
      technologies: ["React.js", "MongoDB", "AWS", "Express JS ", "Node.js"],
    },
    {
      id: 7,
      title: "Modern fitness website",
      category: "web",
      description: `A modern fitness website designed to showcase workout programs, trainers, and membership plans in a clear and user-friendly way. The layout is clean and visually appealing, making it easy for users to explore different sections and find relevant information.
The website focuses on smooth navigation and an engaging user experience, providing a professional look suitable for a real-world fitness brand.`,
      image: "/gym3.jpeg",
      technologies: ["React.js", "MongoDB", "AWS", "Express JS ", "Node.js"],
    },
    {
      id: 8,
      title: "Apex",
      category: "web",
      description: `Developed a digital investment platform using APEX that enables users to deposit funds and earn profits based on their investment plans. The application provides secure user account management, investment tracking, profit calculation, and transaction monitoring through an interactive web interface. It streamlines financial operations by automating investment processes, maintaining transparent records, and delivering real-time updates for users and administrators. The system was designed with a focus on data security, usability, and efficient financial management.`,
      image: "/Apex.jpeg",
      technologies: ["React.js", "MongoDB", "AWS", "Express JS ", "Node.js"],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Jahanzeb Khan Dhakki",
      position: "CEO, JKD Pakistan",
      content:
        "Working with Encova Solutions was an absolute pleasure. They developed a custom web application for our business that has significantly improved our operations and customer engagement. Their team is professional, responsive, and truly cares about delivering quality results.",
      avatar: "/images/testimonials/avatar1.jpg",
    },
    {
      id: 2,
      name: "Nuzhat Rasheed Qureshi",
      position: "Founder, Marketing Agency",
      content:
        "Working with Encova was a game-changer for our startup. They developed our mobile app with precision and creativity, resulting in a 200% increase in user engagement.",
      avatar: "/images/testimonials/avatar2.jpg",
    },
    {
      id: 3,
      name: "Nurzhol",
      position: "Manager, Tech Startup",
      content:
        "Encova Solutions delivered an exceptional web application that exceeded our expectations. Their attention to detail and commitment to quality is unmatched.",
      avatar: "/images/testimonials/avatar3.jpg",
    },
    // {
    //   id: 4,
    //   name: "William Brown",
    //   position: "Manager, E-commerce Solutions",
    //   content:
    //     "Encova Solutions transformed our e-commerce platform with their expert development and design. The new site is faster, more user-friendly, and has significantly boosted our sales.",
    //   avatar: "/images/testimonials/avatar4.jpg",
    // },
  ],

  team: [
    {
      id: 1,
      name: "Abdul Basit",
      position: "CEO & Founder",
      bio: "Visionary leader with 4+ years in Tech Industry",
      image: "./ceo.png",
      social: { linkedin: "https://www.linkedin.com/in/abdul-basit-1039b522b" },
    },
    {
      id: 2,
      name: "Talha Ahmad",
      position: "Co-Founder",
      bio: "Shaping businesses with executive foresight.",
      image: "./talha.png",
      social: { linkedin: "https://www.linkedin.com/in/talhan-ahmad" },
    },
    // {
    //   id: 3,
    //   name: "Abdul Samad",
    //   position: "Chief Technology Officer",
    //   bio: "Building reliable systems requires both technical depth and strategic vision.",
    //   image: "./Samad.jpeg",
    //   social: {
    //     linkedin: "https://www.linkedin.com/in/abdul-samad-912882284/",
    //   },
    // },
    {
      id: 4,
      name: "M. Hanzala",
      position: "Senior Software Engineer",
      bio: "Efficient solutions stem from clean architecture and thoughtful design.",
      image: "./hanzala.png",
      social: { linkedin: "https://www.linkedin.com/in/mhk47/" },
    },
  ],

  careers: [
    {
      id: 1,
      title: "Associate Software Engineer",
      type: "Full-time",
      experience: "Minimum 1 year",
      stack: "MERN Stack",
      description:
        "We are looking for a talented software engineer with experience in MongoDB, Express, React, and Node.js to join our development team.",
      requirements: [
        "1+ years of experience with MERN stack",
        "Strong understanding of JavaScript/ES6+",
        "Experience with RESTful APIs",
        "Knowledge of Git and version control",
        "Good problem-solving skills",
      ],
    },
    {
      id: 2,
      title: "UI/UX Developer",
      type: "Full-time",
      experience: "1 year",
      stack: "Figma, Adobe XD, React",
      description:
        "Join our design team to create beautiful and functional user interfaces that delight our clients and their users.",
      requirements: [
        "1+ year of UI/UX design experience",
        "Proficiency in Figma and Adobe XD",
        "Understanding of React components",
        "Strong portfolio demonstrating design skills",
        "Knowledge of responsive design principles",
      ],
    },
    {
      id: 3,
      title: "MERN Stack Intern",
      type: "Internship",
      experience: "Fresh/Student",
      stack: "MERN Stack",
      description:
        "Perfect opportunity for students or fresh graduates to learn and grow with hands-on experience in full-stack development.",
      requirements: [
        "Basic knowledge of JavaScript",
        "Familiarity with React",
        "Eagerness to learn",
        "Good communication skills",
        "Available for 3-6 months",
      ],
    },
    {
      id: 4,
      title: "UI/UX Design Intern",
      type: "Internship",
      experience: "Fresh/Student",
      stack: "Figma, Adobe XD",
      description:
        "Learn from experienced designers and work on real projects while developing your design skills.",
      requirements: [
        "Basic understanding of design principles",
        "Familiarity with Figma or Adobe XD",
        "Creative mindset",
        "Portfolio or design samples",
        "Available for 3-6 months",
      ],
    },
    {
      id: 5,
      title: "Graphic Design Intern",
      type: "Internship",
      experience: "Fresh/Student",
      stack: "Adobe Suite",
      description:
        "Work on diverse graphic design projects including branding, marketing materials, and digital assets.",
      requirements: [
        "Knowledge of Adobe Illustrator and Photoshop",
        "Understanding of color theory and typography",
        "Creative portfolio",
        "Attention to detail",
        "Available for 3-6 months",
      ],
    },
    {
      id: 6,
      title: "Front-end Developer Intern",
      type: "Internship",
      experience: "Fresh/Student",
      stack: "React.js",
      description:
        "Build modern web applications using React and learn industry best practices from senior developers.",
      requirements: [
        "Basic knowledge of HTML, CSS, JavaScript",
        "Familiarity with React.js",
        "Understanding of responsive design",
        "Problem-solving skills",
        "Available for 3-6 months",
      ],
    },
  ],

  howWeWork: [
    {
      step: 1,
      title: "Discussion and Analysis",
      description:
        "We begin by understanding your business goals, target audience, and project requirements through detailed consultations.",
      objectives: [
        "Understand client requirements",
        "Identify project scope",
        "Define success metrics",
        "Assess technical feasibility",
      ],
      deliverables: [
        "Requirements document",
        "Project proposal",
        "Timeline and budget estimate",
      ],
      team: ["Project Manager", "Business Analyst", "Technical Lead"],
      icon: "💬",
    },
    {
      step: 2,
      title: "Planning and Design",
      description:
        "Strategic planning and architectural design to create a solid foundation for your project.",
      objectives: [
        "Create project roadmap",
        "Define system architecture",
        "Plan resource allocation",
        "Establish milestones",
      ],
      deliverables: [
        "Project plan",
        "System architecture diagram",
        "Resource allocation plan",
        "Risk assessment",
      ],
      team: ["Project Manager", "Solution Architect", "UI/UX Designer"],
      icon: "📋",
    },
    {
      step: 3,
      title: "Software Design",
      description:
        "Creating intuitive and visually appealing designs that align with your brand and user needs.",
      objectives: [
        "Design user interface",
        "Create user experience flow",
        "Develop design system",
        "Ensure brand consistency",
      ],
      deliverables: [
        "Wireframes",
        "High-fidelity mockups",
        "Interactive prototypes",
        "Design specifications",
      ],
      team: ["UI/UX Designer", "Graphic Designer", "Creative Director"],
      icon: "🎨",
    },
    {
      step: 4,
      title: "Software Development",
      description:
        "Building robust and scalable solutions using modern technologies and best practices.",
      objectives: [
        "Implement features",
        "Write clean code",
        "Integrate APIs",
        "Optimize performance",
      ],
      deliverables: [
        "Working software",
        "Source code",
        "Technical documentation",
        "API documentation",
      ],
      team: ["Frontend Developers", "Backend Developers", "DevOps Engineer"],
      icon: "💻",
    },
    {
      step: 5,
      title: "Quality Assurance",
      description:
        "Rigorous testing to ensure your product is bug-free, secure, and performs optimally.",
      objectives: [
        "Identify and fix bugs",
        "Ensure security",
        "Test across devices",
        "Validate functionality",
      ],
      deliverables: [
        "Test reports",
        "Bug fixes",
        "Performance optimization",
        "Security audit",
      ],
      team: ["QA Engineers", "Security Specialist", "Performance Analyst"],
      icon: "🔍",
    },
    {
      step: 6,
      title: "Maintenance",
      description:
        "Ongoing support and updates to keep your solution running smoothly and up-to-date.",
      objectives: [
        "Monitor system health",
        "Provide technical support",
        "Implement updates",
        "Ensure scalability",
      ],
      deliverables: [
        "Regular updates",
        "Performance reports",
        "Bug fixes",
        "Feature enhancements",
      ],
      team: ["Support Team", "DevOps Engineer", "System Administrator"],
      icon: "🔧",
    },
  ],
};

export default siteConfig;
