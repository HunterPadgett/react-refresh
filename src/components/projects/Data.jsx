import lawSite from "../../assets/law.webp";
import todo from "../../assets/todo.webp";
import contentfulBlog from "../../assets/nothing.webp";
import huntagram from "../../assets/hunna.png";
import wpBlog from "../../assets/wp.webp";
import vpn from "../../assets/vpn.png";
import shopify from "../../assets/shopify.png";

export const projectsData = [
  {
    id: 1,
    image: contentfulBlog,
    title: "Contentful/Next.js Blog",
    category: "Content",
    demo: "https://nothing-blog.vercel.app/",
    github: "https://github.com/HunterPadgett/contentful-blog",
  },
  {
    id: 2,
    image: huntagram,
    title: "Social Media Web App",
    category: "Web",
    demo: "https://huntagram.onrender.com/",
    github: "https://github.com/HunterPadgett/insta-clone",
  },
  {
    id: 4,
    image: vpn,
    title: "ExpressVPN Landing Page",
    category: "Web",
    demo: "https://expressvpn-landingpage.netlify.app/",
    github: "https://github.com/HunterPadgett/vpn-landing-page",
  },
  {
    id: 7,
    image: shopify,
    title: `Shopify Store`,
    subtitle: 'Store Password: pass1234',
    category: "Content",
    demo: "https://expressvpn-landingpage.netlify.app/",
    github: "https://github.com/HunterPadgett/vpn-landing-page",
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
    id: 5,
    image: wpBlog,
    title: "WordPress Blog",
    category: "Content",
    demo: "https://hunterpadgett8.wordpress.com/",
    github: "",
  },
  {
    id: 6,
    image: todo,
    title: "Todo Web App",
    category: "Web",
    demo: "https://dontbelazy.netlify.app",
    github: "https://github.com/HunterPadgett/daily-to-do-app",
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
