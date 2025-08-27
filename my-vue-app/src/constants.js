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
    title: "Blue Portfolio",
    description: "A portfolio template using only two blue hues.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/yourusername/blue-portfolio",
  },
  {
    title: "Vue Weather App",
    description: "Weather app using Vue 3 and a blue UI.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/yourusername/vue-weather-app",
  },
  {
    title: "Minimal Blog",
    description: "A blog platform built with Vue and Firebase.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/yourusername/minimal-blog",
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
  },
  {
    company: "Webify Solutions",
    role: "Junior Web Developer",
    period: "2020 – 2022",
    description:
      "Built and maintained client websites using HTML, CSS, and JavaScript. Improved site performance and accessibility.",
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
  { name: "JavaScript", icon: "mdi-github" },
  { name: "TypeScript", icon: "mdi-language-typescript" },
  { name: "Vue.js", icon: "mdi-vuejs" },
  { name: "Node.js", icon: "mdi-nodejs" },
  { name: "AWS", icon: "mdi-aws" },
  { name: "Docker", icon: "mdi-docker" },
  { name: "HTML5", icon: "mdi-language-html5" },
  { name: "CSS3", icon: "mdi-language-css3" },
  { name: "Git", icon: "mdi-git" },
];

export const articles = [
  {
    title: "Building a Portfolio with Vue & Vuetify",
    date: "June 2024",
    summary:
      "A step-by-step guide to creating a professional portfolio site using Vue.js and Vuetify.",
    link: "#",
  },
  {
    title: "Deploying Vue Apps on AWS",
    date: "May 2024",
    summary:
      "Learn how to deploy your Vue applications on AWS using S3, CloudFront, and CI/CD.",
    link: "#",
  },
  {
    title: "Mastering Vue 3 Composition API",
    date: "April 2024",
    summary:
      "An in-depth look at the Vue 3 Composition API for scalable front-end apps.",
    link: "#",
  },
  {
    title: "State Management in Vue with Pinia",
    date: "March 2024",
    summary:
      "A modern approach to state management using Pinia in Vue applications.",
    link: "#",
  },
  {
    title: "Testing Vue Components with Vitest",
    date: "February 2024",
    summary:
      "How to write fast and reliable tests for your Vue components using Vitest.",
    link: "#",
  },
  {
    title: "Integrating REST APIs with Axios in Vue",
    date: "January 2024",
    summary: "A guide to connecting your Vue apps to RESTful APIs with Axios.",
    link: "#",
  },
  {
    title: "Vue Router Advanced Patterns",
    date: "December 2023",
    summary:
      "Learn about lazy loading, nested routes, and navigation guards in Vue Router.",
    link: "#",
  },
  {
    title: "Building Reusable Components in Vue",
    date: "November 2023",
    summary:
      "Best practices for making your Vue components reusable and maintainable.",
    link: "#",
  },
  {
    title: "Optimizing Vue Apps for Performance",
    date: "October 2023",
    summary: "Tips and tricks to make your Vue apps faster and more efficient.",
    link: "#",
  },
  {
    title: "Styling Vue Apps with Vuetify",
    date: "September 2023",
    summary: "Harness the full power of Vuetify for beautiful, responsive UIs.",
    link: "#",
  },
];

export const certifications = [
  {
    title: "Vue Mastery Certificate",
    issuer: "Vue Mastery",
    description: "Completed Advanced Vue.js Course.",
    logo: "", // leave empty to use an icon
    icon: "mdi-vuejs", // use a relevant MDI icon!
    date: "Jan 2024",
    link: "https://cert-url.com/vue-mastery",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Cloud fundamentals and AWS services.",
    logo: "", // leave empty to use an icon
    icon: "mdi-aws",
    date: "May 2024",
    link: "https://cert-url.com/aws-cp",
  },
  {
    title: "Google Professional Cloud Architect",
    issuer: "Google",
    description: "Designs and manages secure cloud solutions.",
    logo: "",
    icon: "mdi-google-cloud",
    date: "Apr 2023",
    link: "https://cert-url.com/google-cloud",
  },
  {
    title: "General Certificate",
    issuer: "My University",
    description: "Awarded for academic excellence.",
    logo: "",
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
