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
      title: "Acerca de mi",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Desarrollo Web",
      icon: web,
    },
    {
      title: "Desarrollo con Bootstrap",
      icon: mobile,
    },
    {
      title: "Desarrollo con ReactJs",
      icon: backend,
    },
    {
      title: "Desarrollo con Nodejs",
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
      title: "Desarrollador Web",
      company_name: "Soluciones Integrales AKEI S.C. ",
      icon: starbucks,
      iconBg: "#383E56",
      date: " Febrero 2024 - Mayo 2024",
      points: [
        "Desarrollo de sitios Web con Bootstrap.",
        "Mantenimiento a proyectos existentes .",
        "Debugging a código en PHP.",
        " Ajuste de layout con Bootstrap y PHP.",
      ],
    },
    {
      title: "Desarrollador Web",
      company_name: "Grupo Oyarde",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: " Abril 2023 - Septiembre2023",
      points: [
        "Desarrollo de sitios Web con Wordpress y Elementor.",
        "Creación de e-commerce con Woocommerce.",
        "Manejo y respaldo de base de datos en Cpanel y Hostinger.",
        "Modificación de plantillas Wordpress para cursos en línea.",
        "esarrollo de animaciones con JavaScript, JQuery y CSS.",
        "Configuración de servidores web.",
        "Respaldo de sitios web y mantenimiento.",
        "Uso de Wordpress, Elementor Pro, Wp Bakery, plugins y temas.",
      ],
    },
    {
      title: "Freelance: Proyectos para negocio de agencia de viajes Cancún",
      company_name: "Freelance",
      icon: shopify,
      iconBg: "#383E56",
      date: "Octubre 2022 - Febrero 2023",
      points: [
        "Desarrollo de maquetación con HTML y CSS para presentación con clientes.",
        "Desarrollo de operaciones CRUD con Javascript.",
        "Diseño y desarrollo de backend con Nodejs.",
        "Integración con base de datos MongoDB",
        "Uso de controlador de versiones Bitbucket."
      ],
    },
    {
      title: "Bootcamp Full-Stack Kodemia",
      company_name: "Kodemia",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Agosto 2021 - Julio 2022",
      points: [
        "Desarrollo de aplicaciones Full-Stack.",
        "CUso de React como libreria principal de Frontend.",
        "Aprendizaje de NodeJs para desarrollo de backend.",
        "Uso de controlador de versiones Git.",
        "Aprendizaje de metodología Scrum.",
        "Aprendizaje de base de datos no relacionales."
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
      name: "Full-Stack e-commerce Sanity CMS",
      description:
        "Aplicación web creada con React y Next, para gestión de contenidos y pagos en línea con stripe. Implementada con Sanity como principal CMS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://ecommerce-sanity-stripe-zzinue.vercel.app/",
    },
    {
      name: "Modern Bank Interface Tailwind CSS",
      description:
        "Moderna Interfaz para bancos creada con React y Tailwind CSS. 100% responsiva.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://bank-modern-app.vercel.app/",
    },
    {
      name: "Bootstrap Landing Page",
      description:
        "Página web desarrollada con las tecnologías de Bootstrap, HTML y CSS3.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://boostrap-bootcamp-page.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };