import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  starbucks,
  threejs,
  redux,
} from "../assets";

import mec from '../assets/mec.png'
import aruna from '../assets/aruna.png'
import beschi from '../assets/beschi.png'
import flutter from '../assets/flutter.png'
import django from '../assets/django.png'
import powerbi from '../assets/powerbi.png'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'



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
    title: "React JS Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "Data-Base Management",
    icon: mongodb,
  },
  {
    title: "Data Analyst",
    icon: powerbi,
  },
  {
    title:"Flutter Developer",
    icon: flutter,
  },
  {
    title:"Django Framework ",
    icon: django,
  },
  {
    title:"App Developer",
    icon: mobile,

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
    name: "React JS",
    icon: reactjs,
  },
  { 
    name: "Three JS",
    icon: threejs,
    
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
    name: "Flutter",
    icon: flutter,
    
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PowerBI",
    icon: powerbi,
  },
  
];

const experiences = [
  {
    title: "Data Scientist/ Data Analyst",
    company_name: "Power BI , Python ML/AI",
    icon: starbucks,
    iconBg: "#383E56",
    date: " Explorer(2022 - Present) ",
    points: [
      "Created a Various DashBoards by using PowerBI Analytics tool",
      "Projects in the Various library's using NUMPY , MATPLOTLIB , PANDAS etc..",
      "Created a Jarvis Assistant using Python",
    ],
  },
  {
    title: "Fluter Developer",
    company_name: "Flutter",
    icon: flutter,
    iconBg: "#e7e7e7",
    date: "Explorer(Jan 2023 - Present)",
    points: [
      "Developing and maintaining web applications using Flutter and other related technologies.",
      "Collaborating with cross-functional frameworks with backend of Firebase , Django and NodeJS .",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "React , NodeJS , MongoDB , HTML/CSS/BOOTSRAP etc..",
    icon: redux,
    iconBg: "#e7e7e7",
    date: "Explorer(Jan 2022 - Present)",
    points: [
      "Designed a Personal Portfolio for mine using the following technologies of HTML , CSS , Bootsrap , React and Django for Backend..",
      "Lively Published and Hosted a Domain with Real - timelive Server ",
      "Made a Project for Customers from E-commerce Site & Professional Trainer Portfolio site with Full Responsive ",
    
      
    ],
  },

  {
    title: "B.E - Mechanical Engineering",
    company_name: "Mailam Engineering College",
    icon: mec,
    iconBg: "#e7e7e7 ",
    date: "Nov 2020 - Present",
    points: [
   
      "Toppper of Department and Got Merit Certificate during the 6th Semester",
      "CGPA - 8.74",
    ],
  },
  {
    title: "HSC",
    company_name: "Aruna Hr.Sec School",
    icon: aruna,
    iconBg: "#e7e7e7",
    date: " 2019 - 2020",
    points: [
      "State Board - 82.5 %",
      "Got School Second Position - Shield from Lions Club"
   
    ],
  },
  {
    title: "SSLC",
    company_name: "Beschi Hr.Sec School",
    icon: beschi,
    iconBg: "#e7e7e7",
    date: " 2017 - 2018",
    points: [
      "State Board - 84.2 %",
      
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
    name: "E - Commerce",
    description:
      "Web-based platform that allows to View and Purchase similiar to Grocery and All Products are Available here!",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: proj1,
    source_code_link: "https://faecal-billets.000webhostapp.com/#home",
  },
  {
    name: "Portfolio",
    description:
      "Web application that enables to view my Details and Progress which gives Full Responsively Designed ",
    tags: [
      {
        name: "Bootsrap",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: proj2,
    source_code_link: "http://chandrudevaraj.000webhostapp.com/",
  },
  {
    name: "Professional Trainer Portfolio",
    description:
      "A Career Grooming Site which a Person handles multiple domain of Verbal Tutor , Aptitude Trainer and Softskills Trainer .",
    tags: [
      {
        name: "Bootrsap",
        color: "blue-text-gradient",
      },
      {
        name: "HTML / CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: proj3,
    source_code_link: "http://trthameemahamed.000webhostapp.com",
  },

  {
    name: "Power BI Dashboard",
    description:
      "A complete Students and Course Enrolled Management System Analysis Dashboard which is used to create by Power BI.",
    tags: [
      {
        name: "CSV",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "PowerBI",
        color: "pink-text-gradient",
      },
    ],
    image: proj4,
    source_code_link: "https://drive.google.com/file/d/1QwCHeOk-jRem4dfuHVFuzzOPsHwxNCmg/view?usp=sharing", 
  },

  {
    name: "Advanced Portfolio",
    description:
      "A Fully deeped Site by using React and Django for Data Storing & accessing files for my Details.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: proj5,
    source_code_link: "https://github.com/devdru/my-portfolio",
  },

  {
    name: "A Chocolate Factory Insights",
    description:
      "It Gives a Full Insights of Chocolate company which includes Number of productions and sales in a year , Varieties of highly saled .",
    tags: [
      {
        name: "CSV",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "Power BI",
        color: "pink-text-gradient",
      },
    ],
    image: proj6,
    source_code_link: "https://drive.google.com/file/d/1vxuI2JKmEsyDhEl8XNL1qiQJ1FDWItOy/view?usp=drive_link",
  },
];

export { services, technologies, experiences, testimonials, projects };
