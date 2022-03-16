import { IconType } from "react-icons";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "I am able to build professional and scalable SPAs using <b> HTML</b>, <b>CSS</b> and <b>React.js</b> ",
    Icon: RiComputerLine,
  },

  {
    title: "Backend Development",
    about:
      "I can handle databases, servers and apis using <b>Firebase</b>, translatable to other popular frameworks ",
    Icon: FaServer,
  },
];

export const languages: ISkill[] = [
  {
    name: "Python",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "CSS",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "MATLAB",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Git/Github",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "MS Excel",
    level: "65%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Amazon Clone",
    description:
      "This app is a replica of the e-commerce site Amazon, with working payment function",
    image_path: "/images/amazon-clone.png",
    deployed_url: "https://clone-1dd14.web.app",
    github_url: "https://github.com/dgrenfell/Amazon-Clone",
    category: ["react", "firebase"],
    key_techs: ["React", "Material UI", "Stripe", "Firebase"],
  },
  {
    id: 2,
    name: "Portfolio Website",
    description:
      "This site is a portfolio website containing all of my contact details, projects and CV",
    image_path: "/images/portfolio.png",
    deployed_url: "portfolio-dgrenfell.vercel.app",
    github_url: "https://github.com/dgrenfell/Portfolio",
    category: ["react", "next"],
    key_techs: ["React", "Material UI", "Next", "Tailwind"],
  },
];
