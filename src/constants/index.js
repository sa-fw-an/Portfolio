import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    react,
    tailwind,
    nodejs,
    mongodb,
    cpp,
    java,
    sql,
    python,
    c,
    pro1,
    pro2,
    meta,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "CS Undergrad",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "ReactJS",
      icon: react,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "TailwindCSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Project 1",
      description:
        "Description of project 1",
      tags: [
        {
          name: "Lang 1",
          color: "blue-text-gradient",
        },
        {
          name: "Lang 2",
          color: "green-text-gradient",
        },
        {
          name: "Lang 3",
          color: "pink-text-gradient",
        },
        {
          name: "Lang 4",
          color: "blue-text-gradient",
        },
      ],
      image: pro1,
      source_code_link: "https://github.com",
    },
    {
      name: "Project 2",
      description:
        "Description of project 2",
      tags: [
        {
          name: "Lang 1",
          color: "blue-text-gradient",
        },
        {
          name: "Lang 2",
          color: "green-text-gradient",
        },
        {
          name: "Lang 3",
          color: "pink-text-gradient",
        },
        {
          name: "Lang 4",
          color: "blue-text-gradient",
        },
      ],
      image: pro2,
      source_code_link: "https://github.com",
    },
  ];
  
  export { services, technologies, experiences, projects };