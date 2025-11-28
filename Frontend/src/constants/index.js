import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  arcject,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  Ajspire,
  threejs,
  render,
  mui,
  Ecode,
  Chatteraibox,
  Spotifyui,
  Simonsay,
  Quora
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video editor",
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
    name: "Arcject",
    icon: arcject,
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
    name: "Material-Ui",
    icon: mui,
  },
  {
    name: "Render",
    icon: render,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Aspire Software Web",
    icon: Ajspire, // replace with your icon
    iconBg: "#383E56",
    date: "Jul 2022 – Aug 2022",
    points: [
      "Built responsive web pages using HTML, CSS, Bootstrap, and JavaScript.",
      "Improved UI layouts for better mobile experience and faster loading.",
      "Worked with designers and developers to fix UI and usability issues.",
      "Used Git and GitHub for version control and project collaboration."
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Aspire Software Web",
    icon: Ajspire, // replace with your icon
    iconBg: "#383E56",
    date: "Jul 2022 – Aug 2022",
    points: [
      "Developed the frontend for a PHP-based Student Management System.",
      "Designed clean and responsive UI using Bootstrap and Tailwind CSS.",
      "Integrated forms, handled validation, and improved user dashboard flows.",
      "Enhanced overall user experience by fixing layout issues and reducing UI bugs."
    ],
  }
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
    name: "E-Code Solutions 🌿 ",
    description:
    "E-Code Solutions ♻️ is a full-stack E-Commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows Users to add products, while Customers and Companies can browse and purchase them with ease",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Ecode,
    source_code_link: "https://github.com/awadi99/E---Code-Solutions.git",
    source_code_Live_link:"https://e-code-solutions-srr9.onrender.com"
  },
  {
    name: "Chatter Ai Box 🤖",
    description:
      "Chatter AI Box is a ⚙️ real-time chat application built using the MERN stack. It supports AI-powered messaging, real-time translation, image sharing, JWT authentication, and email invitations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: Chatteraibox,
    source_code_link: "https://github.com/awadi99/Chatter-Ai-Box.git",
    source_code_Live_link:"https://chatter-ai-box-frontend.onrender.com"

  },
  {
    name: "Quora-Post 📬 ",
    description:
      "A simple Node.js + Express + EJS web application that allows users to create, read, update, and delete posts (CRUD) like a mini Quora. The project uses RESTful routes and is styled with TailwindCss.",
    tags: [
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: Quora,
    source_code_link: "https://github.com/awadi99/awadi99-quora-post-project-with-restfuI-api.git",
    source_code_Live_link:"https://awadi99-quora-post-project-with-restfui.onrender.com"
  },

  {
    name: "Simon Say Game 🎮 ",
    description:
      "A modern and animated 🗽version of the classic Simon Says memory game using HTML, CSS, and JavaScript. Simon Says Game – A classic memory challenge built using HTML, CSS, and JavaScript. Press any key to start, watch the color sequence, and repeat it by clicking the buttons. With each level, the sequence gets longer and harder. Test your memory and see how high you can score!",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Simonsay,
    source_code_link: "https://github.com/awadi99/Simon-Says-Game.git",
    source_code_Live_link:"https://codepen.io/awadi99/pen/OPypdjg"
  },
  {
    name: "Spotify UI 📱 ",
    description:
      "🔰A responsive navigation bar. Album art displays. Media controls with clean layouts. Visually appealing color schemes and fonts. No JavaScript or frameworks were used, making this project a demonstration of the power of pure HTML and CSS in creating modern, user-friendly web designs.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Spotifyui,
    source_code_link: "https://github.com/awadi99/tutorial-spotify-ui-design-clone.git",
    source_code_Live_link:"https://spotify-ui-design-clone-made-by-aw.onrender.com"
  },
];

export { services, technologies, experiences, testimonials, projects };
