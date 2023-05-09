import lawSite from "../../assets/law.webp";
import todo from "../../assets/todo.webp";
import contentfulBlog from "../../assets/nothing.webp";
import huntagram from "../../assets/hunna.webp";
import wpBlog from "../../assets/wp.webp";

export const projectsData = [
  {
    id: 1,
    image: contentfulBlog,
    title: "Contentful Blog",
    category: "Content",
    demo: "https://nothing-blog.vercel.app/",
    github: "https://github.com/HunterPadgett/contentful-blog",
  },
  {
    id: 2,
    image: huntagram,
    title: "Social Media App",
    category: "Web",
    demo: "https://huntagram.onrender.com/",
    github: "https://github.com/HunterPadgett/insta-clone",
  },
  {
    id: 3,
    image: lawSite,
    title: "Law Firm Website",
    category: "Web",
    demo: "https://smjattorneys.netlify.app",
    github: "https://github.com/HunterPadgett/freelance-template",
  },
  {
    id: 4,
    image: todo,
    title: "Todo App",
    category: "Web",
    demo: "https://dontbelazy.netlify.app",
    github: "https://github.com/HunterPadgett/daily-to-do-app",
  },
  {
    id: 5,
    image: wpBlog,
    title: "WordPress Blog",
    category: "Content",
    demo: "https://hunterpadgett8.wordpress.com/",
    github: "",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Web",
  },
  {
    name: "Content",
  },
  {
    name: "Email",
  },
];
