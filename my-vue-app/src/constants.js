// src/constants.js

export const deepBlue = "#1666BA";
export const lightBlue = "#DEECFB";

export const navItems = [
  { text: "Home", to: "#home" },
  { text: "Projects", to: "#projects" },
  { text: "Experience", to: "#experience" },
  { text: "Services", to: "#services" },
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
