import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Java developer",
    icon: backend,
  },
  {
    title: "SQL ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js",
    company_name: "react with harry",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2024 - january 5",
    points: [
      " Strong understanding of React components, state management, hooks, and lifecycle methods to build efficient, scalable, and maintainable web applications",
      " Experienced in using Redux for centralized state management, ensuring consistent data flow and improved performance across large React applications.",
      " Expertise in designing reusable and modular components, enabling faster development and better code organization in large-scale projects.",
      " Skilled in integrating RESTful APIs and GraphQL to fetch and manage data within React applications, ensuring seamless user experiences.",
    ],
  },
  {
    title: "Java",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - April 2025",
    points: [
      "Strong understanding of core Java concepts such as object-oriented programming (OOP), data structures, and algorithms, enabling efficient and optimized code.",
      "Experience in implementing multithreading to build responsive and high-performance applications, leveraging Java's concurrency utilities for better resource management.",
      "Familiar with popular Java frameworks like Spring and Hibernate for building scalable and maintainable backend applications with database integration.",
      "Knowledge of Java Database Connectivity (JDBC) for integrating Java applications with relational databases like MySQL and PostgreSQL, handling CRUD operations effectively.",
    ],
  },
  {
    title: "Web Developement",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      " Proficient in HTML, CSS, and JavaScript to build responsive, mobile-friendly, and visually appealing user interfaces. Experienced with frontend frameworks like React.js to create dynamic and interactive web applications.",
      "Knowledgeable in server-side programming using Java and Node.js to build RESTful APIs and handle backend logic, ensuring smooth communication between the frontend and the database.",
      "Skilled in implementing responsive web design techniques using CSS frameworks like Bootstrap and Tailwind CSS, ensuring optimal user experience across various devices and screen sizes.",
      "Experienced in using Git and GitHub for version control, collaboration, and code management in team-based development environments.",
    ],
  },
  {
    title: "SQL & NoSQL",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023  - Jan 2024",
    points: [
      "Proficient in designing and managing relational databases, including creating tables, relationships, and constraints to ensure data integrity and efficient storage.",
      "Skilled in writing complex SQL queries (SELECT, JOIN, UNION, etc.) to retrieve and manipulate data, along with optimizing queries for better performance using indexing and query execution plans.",
      "Experienced in writing and managing stored procedures, functions, and triggers to automate business logic and improve database efficiency.",
      "Familiar with using SQL for data analysis and reporting, including aggregating data, generating insights, and creating views to present data in a structured and actionable format.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bank Management System",
    description:
      "The Bank Management System is a software application designed to manage and automate banking operations. It allows users to perform tasks such as account creation, deposits, withdrawals, and balance inquiries. The system also supports transaction management, loan processing, and user authentication for secure access. The goal is to streamline banking processes, improve efficiency, and enhance customer service.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "swings",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "NewsMonkey",
    description:
      " **NewsMonkey** is a dynamic web application that delivers real-time news updates to users from various categories. It allows users to browse, read, and navigate through the latest news articles with a simple, user-friendly interface. The app includes features like previous and next buttons for easy navigation and ensures up-to-date content by pulling news from reliable sources through APIs. Designed for quick access and seamless user experience, NewsMonkey keeps users informed with the most relevant and trending news at their fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NewsApi",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: " E-commerce Platform for Product Sale",
    description:
      "This platform allows businesses or individuals to sell products online. It will feature user-friendly interfaces for customers to browse, add products to the cart, and make secure purchases. Admins can manage the inventory, track orders, and update product listings. The platform will also support features like user authentication, payment integration, and product reviews.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
