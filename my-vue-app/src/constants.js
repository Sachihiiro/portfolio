// src/constants.js

export const deepBlue = "#1666BA";
export const lightBlue = "#DEECFB";

export const navItems = [
  { text: "Home", to: "#home" },
  { text: "Projects", to: "#projects" },
  { text: "Services", to: "#services" },
  { text: "Experience", to: "#experience" },
  { text: "About", to: "#about" },
];

export const projects = [
  {
    title: "Smart Agriculture Dashboard",
    description:
      "IoT-powered platform for real-time farm monitoring and analytics.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    demo: "https://smart-agri-demo.com",
    github: "https://github.com/yourusername/smart-agriculture-dashboard",
    techStack: "Vue.js, Node.js, AWS IoT, DynamoDB",
    period: "2023 (6 months)",
    details: `  
      <p><strong>Overview:</strong> Developed a dashboard using Vue.js and AWS IoT for real-time visualization of sensor data from smart farms.</p>  
      <ul>  
        <li>Integrated with AWS Lambda and DynamoDB for backend processing.</li>  
        <li>Implemented real-time notifications and data analytics.</li>  
        <li><strong>Impact:</strong> Helped increase yields for 50+ local farmers.</li>  
      </ul>  
    `,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern, responsive web portfolio for showcasing my skills and projects.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    demo: "https://yourname.com",
    github: "https://github.com/yourusername/portfolio",
    techStack: "Vue.js, Vuetify, Netlify",
    period: "2024 (Ongoing)",
    details: `  
      <p>Designed and built my personal developer portfolio with Vue and Vuetify, featuring:</p>  
      <ul>  
        <li>Animated transitions and mobile-first design</li>  
        <li>Contact form integration with email notification</li>  
        <li>Dynamic project and experience sections</li>  
      </ul>  
    `,
  },
  {
    title: "E-commerce API Service",
    description:
      "Scalable backend API for online stores with payment integration.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    demo: "",
    github: "https://github.com/yourusername/ecommerce-api",
    techStack: "Node.js, Express, PostgreSQL, AWS",
    period: "2022 (3 months)",
    details: `  
      <p>Developed a RESTful API service supporting multiple store fronts:</p>  
      <ul>  
        <li>Authentication, payment integration, inventory management</li>  
        <li>Deployed on AWS with CI/CD pipelines</li>  
      </ul>  
    `,
  },
];

export const services = [
  {
    title: "Custom Web Applications",
    description:
      "Fullstack development using Vue, Node.js, and REST APIs. From design to deployment.",
    icon: "mdi-web",
  },
  {
    title: "Frontend Development",
    description:
      "Modern, responsive UIs with Vue, React, or plain JavaScript. Pixel-perfect and user-friendly.",
    icon: "mdi-cellphone",
  },
  {
    title: "Backend Development",
    description:
      "API design and development, database integration, authentication, and server-side logic.",
    icon: "mdi-server",
  },
  {
    title: "Deployment & DevOps",
    description:
      "CI/CD setup, cloud deployment (Vercel, Netlify, AWS), Docker, and server management.",
    icon: "mdi-cloud",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing bug fixes, feature enhancements, and performance optimization.",
    icon: "mdi-tools",
  },
];

export const experiences = [
  {
    company: "TechCorp",
    role: "Frontend Developer",
    period: "2022 – Present",
    description:
      "Developing user interfaces with Vue and Vuetify. Collaborated with designers to create seamless web experiences.",
    responsibilities: [
      "Implement responsive layouts and reusable components.",
      "Optimize application performance and accessibility.",
      "Coordinate with backend team for API integration.",
    ],
    achievements: [
      "Reduced page load times by 35%.",
      "Led migration to Vuetify 3.",
    ],
    tech: ["Vue", "Vuetify", "JavaScript", "TypeScript", "SASS"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    current: true,
  },
  {
    company: "Webify Solutions",
    role: "Junior Web Developer",
    period: "2020 – 2022",
    description:
      "Built and maintained client websites using HTML, CSS, and JavaScript. Improved site performance and accessibility.",
    responsibilities: [
      "Developed landing pages and custom widgets.",
      "Conducted code reviews and troubleshooting.",
      "Ensured cross-browser compatibility.",
    ],
    achievements: [
      "Recognized for delivering projects ahead of deadlines.",
      "Enhanced site accessibility for major clients.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    current: false,
  },
];

export const socials = [
  { label: "GitHub", icon: "mdi-github", link: "https://github.com/" },
  { label: "Linkedin", icon: "mdi-linkedin", link: "https://linkedin.com/" },
  { label: "Instagram", icon: "mdi-instagram", link: "https://instagram.com/" },
  { label: "Email", icon: "mdi-email", link: "mailto:your.email@example.com" }, // Replace with your actual email
  // Add more as needed
];

export const skills = [
  { name: "JavaScript", icon: "mdi-github", years: 3 },
  { name: "TypeScript", icon: "mdi-language-typescript", years: 2 },
  { name: "Vue.js", icon: "mdi-vuejs", years: 2 },
  { name: "Node.js", icon: "mdi-nodejs", years: 1 },
  { name: "AWS", icon: "mdi-aws", years: 1 },
  { name: "Docker", icon: "mdi-docker", years: 2 },
  { name: "HTML5", icon: "mdi-language-html5", years: 3 },
  { name: "CSS3", icon: "mdi-language-css3", years: 3 },
  { name: "Git", icon: "mdi-git", years: 3 },
];

export const articles = [
  {
    title: "Building a Portfolio with Vue & Vuetify",
    date: "June 2024",
    summary:
      "A step-by-step guide to creating a professional portfolio site using Vue.js and Vuetify.",
    link: "#",
    image: "https://picsum.photos/seed/vue1/600/400",
  },
  {
    title: "Deploying Vue Apps on AWS",
    date: "May 2024",
    summary:
      "Learn how to deploy your Vue applications on AWS using S3, CloudFront, and CI/CD.",
    link: "#",
    image: "https://picsum.photos/seed/aws/600/400",
  },
  {
    title: "Mastering Vue 3 Composition API",
    date: "April 2024",
    summary:
      "An in-depth look at the Vue 3 Composition API for scalable front-end apps.",
    link: "#",
    image: "https://picsum.photos/seed/composition/600/400",
  },
  {
    title: "State Management in Vue with Pinia",
    date: "March 2024",
    summary:
      "A modern approach to state management using Pinia in Vue applications.",
    link: "#",
    image: "https://picsum.photos/seed/pinia/600/400",
  },
  {
    title: "Testing Vue Components with Vitest",
    date: "February 2024",
    summary:
      "How to write fast and reliable tests for your Vue components using Vitest.",
    link: "#",
    image: "https://picsum.photos/seed/vitest/600/400",
  },
  {
    title: "Integrating REST APIs with Axios in Vue",
    date: "January 2024",
    summary: "A guide to connecting your Vue apps to RESTful APIs with Axios.",
    link: "#",
    image: "https://picsum.photos/seed/axios/600/400",
  },
  {
    title: "Vue Router Advanced Patterns",
    date: "December 2023",
    summary:
      "Learn about lazy loading, nested routes, and navigation guards in Vue Router.",
    link: "#",
    image: "https://picsum.photos/seed/router/600/400",
  },
  {
    title: "Building Reusable Components in Vue",
    date: "November 2023",
    summary:
      "Best practices for making your Vue components reusable and maintainable.",
    link: "#",
    image: "https://picsum.photos/seed/components/600/400",
  },
  {
    title: "Optimizing Vue Apps for Performance",
    date: "October 2023",
    summary: "Tips and tricks to make your Vue apps faster and more efficient.",
    link: "#",
    image: "https://picsum.photos/seed/performance/600/400",
  },
  {
    title: "Styling Vue Apps with Vuetify",
    date: "September 2023",
    summary: "Harness the full power of Vuetify for beautiful, responsive UIs.",
    link: "#",
    image: "https://picsum.photos/seed/vuetify/600/400",
  },
];

export const certifications = [
  {
    title: "Vue Mastery Certificate",
    issuer: "Vue Mastery",
    description: "Completed Advanced Vue.js Course.",
    logo: "", // Add a logo URL here if available
    icon: "mdi-vuejs",
    date: "Jan 2024",
    link: "https://cert-url.com/vue-mastery",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Cloud fundamentals and AWS services.",
    logo: "", // Add logo URL for AWS if available
    icon: "mdi-aws",
    date: "May 2024",
    link: "https://cert-url.com/aws-cp",
  },
  {
    title: "Google Professional Cloud Architect",
    issuer: "Google",
    description: "Designs and manages secure cloud solutions.",
    logo: "", // Add logo URL for Google if available
    icon: "mdi-google-cloud",
    date: "Apr 2023",
    link: "https://cert-url.com/google-cloud",
  },
  {
    title: "General Certificate",
    issuer: "My University",
    description: "Awarded for academic excellence.",
    logo: "", // Add logo URL for university if available
    icon: "mdi-certificate",
    date: "June 2022",
    link: "#",
  },
];
export const testimonials = [
  {
    name: "Alice Johnson",
    role: "Project Manager at Acme Corp",
    text: "Working with you was a fantastic experience! Your attention to detail and dedication made our project a success.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Bob Smith",
    role: "Lead Developer at Example Inc.",
    text: "You delivered high quality code and were always proactive in solving problems.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  // Add more testimonials as needed
];
