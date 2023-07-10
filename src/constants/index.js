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
  gatsby,
  webflow,
  electron,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  zoe,
  freelance,
  udem,
  dash,
  ser,
  front,
  apple,
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
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "UX & UI Designer",
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
    name: "Webflow",
    icon: webflow,
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
    name: "gatsby",
    icon: gatsby,
  },
];

const experiences = [
  {
    title: "Web Developer & Designer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "Sep 2021 - Present",
    points: [
      "Designing and developing responsive websites using multiple technologies.",
      "Creation of attractive and functional designs, focused on user experience and usability",
      "Direct collaboration with clients to understand their needs and objectives, and turn them into effective web solutions.",
      "Implementation of SEO practices to improve the visibility and performance of websites.",
      "Regular maintenance and updating websites, ensuring their optimal performance",
    ],
  },
  {
    title: "Jr Web Developer & UX/UI Designer",
    company_name: "Zoé It Customs",
    icon: zoe,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Present",
    points: [
      "Designing, developing and maintaining company's web/desktop applications using multiple technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "University Lab",
    description:
      "Landing page for my university technology laboratory with the purpose of attracting the attention of users to visit and learn about the laboratory.",
    tags: [
      {
        name: "webflow",
        color: "blue-text-gradient",
      },
      {
        name: "Landing Page",
        color: "green-text-gradient",
      },
    ],
    image: udem,
    source_code_link: "https://dashing-shortbread-2a76e5.netlify.app/",
  },
  {
    name: "ZOE Dashboard",
    description:
      "Web dashboard theme with modern visuals and multiple pages such as, data visualizers, charts, profiles, manage team, invoices balances and dark mode.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "theme",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: dash,
    source_code_link: "https://gorgeous-queijadas-dd98cd.netlify.app/",
  },
  {
    name: "Transportes SER",
    description:
      "Responsive landing page for a national cargo transportation company with modern UX/UI practices, tailwind implementation and including contact functionality.",
    tags: [
      {
        name: "gatsby",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ser,
    source_code_link: "https://transportesser.com.mx/",
  },
  {
    name: "Frontend Mentor",
    description:
      "Real-world coding challenges made by myself to enhance my skills and build responsive websites. Mentor multiple students within the website social core.",
    tags: [
      {
        name: "frontend mentor",
        color: "blue-text-gradient",
      },
      {
        name: "challenges",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: front,
    source_code_link: "https://www.frontendmentor.io/profile/byCARREON",
  },
  {
    name: "Apple Vision Clone",
    description:
      "Website clone based on Apple vision website to enhance my skills with advanced js animation techniques and using modern libraries.",
    tags: [
      {
        name: "clone",
        color: "blue-text-gradient",
      },
      {
        name: "animations",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://incredible-licorice-6f4425.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
