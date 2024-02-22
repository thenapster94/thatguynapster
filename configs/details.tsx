import GithubIcon from "@/components/icons/github";
import InstagramIcon from "@/components/icons/instagram";
import LinkedinIcon from "@/components/icons/linkedin";
import TwitterIcon from "@/components/icons/twitter";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const name = "Andrew Osei-Wusu (Napster)";

export const role = "Engineer + Full Stack Developer";
export const summary =
  "A highly-motivated individual with a desire to take on new challenges. Strong worth ethic, adaptability and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills.";
export const summary2 =
  "Full stack developer focused on creating Web and Mobile applications. Strong worth ethic, adaptability and exceptional interpersonal skills I like projects that solve real problems.";

export const links = [
  {
    text: "home",
    url: "#home",
  },
  {
    text: "about",
    url: "#about",
  },
  {
    text: "skills",
    url: "#skills",
  },
  {
    text: "works",
    url: "#works",
  },
  {
    text: "contact",
    url: "#contact",
  },
];
export const socials = [
  {
    icon: <GithubIcon className="w-4 h-4" />,
    link: "https://github.com/thatguynapster",
    ariaLabel: "Github",
  },
  {
    icon: <TwitterIcon className="w-4 h-4" />,
    link: "https://twitter.com/thatguynapster",
    ariaLabel: "Twitter",
  },
  {
    icon: <InstagramIcon className="w-4 h-4" />,
    link: "https://www.instagram.com/thatguynapster/",
    ariaLabel: "Instagram",
  },
  {
    icon: <LinkedinIcon className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/andrew-o-w/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: <EnvelopeIcon className="w-4 h-4" />,
    link: "mailto:andrewosei94@gmail.com",
    ariaLabel: "Email",
  },
  {
    icon: <PhoneIcon className="w-4 h-4" />,
    link: "tel:233275246704",
    ariaLabel: "Phone number",
  },
];

export const skillsDescription =
  "I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.";

export const skills = [
  {
    name: "CSS",
    image: "/img/tech/css.png",
  },
  {
    name: "Git",
    image: "/img/tech/git.png",
  },
  {
    name: "HTML",
    image: "/img/tech/html.png",
  },
  {
    name: "JavaScript",
    image: "/img/tech/javascript.png",
  },
  {
    name: "jQuery",
    image: "/img/tech/jquery.png",
  },
  {
    name: "Next.js",
    image: "/img/tech/nextjs.png",
  },
  {
    name: "node.js",
    image: "/img/tech/nodejs.png",
  },
  {
    name: "React",
    image: "/img/tech/react.png",
  },
  {
    name: "Tailwind",
    image: "/img/tech/tailwind.png",
  },
  {
    name: "TypeScript",
    image: "/img/tech/typescript.png",
  },
  {
    name: "Wordpress",
    image: "/img/tech/wordpress.png",
  },
  {
    name: "Bootstrap",
    image: "/img/tech/bootstrap.png",
  },
];

export interface projectProps {
  name: string;
  description: string;
  images: string[];
  skills: string[];
  link: string;
}
export const projects: projectProps[] = [
  {
    name: "Swoove Agency",
    description:
      "The Swoove Agency Panel simplifies the management of delivery operations for agencies. It offers easy-to-use interfaces for overseeing drivers, vehicles, and trips, enhancing efficiency. With beginner-friendly code, it promotes smooth collaboration among developers, ensuring a hassle-free experience.",
    images: [
      "/img/projects/swoove-agency/1.png",
      "/img/projects/swoove-agency/2.png",
      "/img/projects/swoove-agency/3.png",
    ],
    skills: ["Next.js", "Tailwind", "node.js", "TypeScript", "Git"],
    link: "https://panel.swoovedelivery.com/",
  },
  {
    name: "Swoove Business",
    description:
      "The Swoove Business Panel, crafted for businesses of all sizes, simplifies delivery management. As the developer behind this project, I created an intuitive admin panel that facilitates easy control over deliveries. Collaborating closely with the backend team, I contributed to implementing essential functionalities and routes, ensuring a seamless experience for businesses navigating their delivery operations.",
    images: [
      "/img/projects/swoove-business/1.png",
      "/img/projects/swoove-business/2.png",
      "/img/projects/swoove-business/3.png",
    ],
    skills: ["Next.js", "Tailwind", "node.js", "TypeScript", "Git"],
    link: "https://business.swoove.delivery/",
  },
  {
    name: "GML Website",
    description:
      "The GML Website is a responsive and cross-browser compatible platform I developed, focusing on web standards and accessibility for optimal performance. Collaborating closely with product owners, designers, and stakeholders, I ensured a smooth development process. Additionally, I integrated front-end code with server-side code to implement dynamic pages, enhancing the website's functionality and interactivity.",
    images: [
      "/img/projects/gml-website/1.png",
      "/img/projects/gml-website/2.png",
      "/img/projects/gml-website/3.png",
    ],
    skills: ["Next.js", "Tailwind", "TypeScript", "Git"],
    link: "https://ghanamusiclive.com/",
  },
  {
    name: "GML Admin",
    description:
      "The GML Admin Panel, developed with a focus on responsiveness and cross-browser compatibility, adheres to strict web standards and accessibility guidelines for optimal performance. I integrated seamlessly with back-end developers to bring user interface elements to life. Additionally, I designed reusable components that ensure future projects can be undertaken with minimal effort, enhancing efficiency and scalability.",
    images: [
      "/img/projects/gml-admin/1.png",
      "/img/projects/gml-admin/2.png",
      "/img/projects/gml-admin/3.png",
    ],
    skills: ["Next.js", "Tailwind", "TypeScript", "Git"],
    link: "https://admin.themusigaapp.com/",
  },
  {
    name: "Brolly",
    description:
      "At Brolly, I brought creative designs to life by converting them into a fully functional website. My focus was on seamlessly integrating design elements and optimizing user interfaces to provide an exceptional user experience.",
    images: ["/img/projects/brolly.png"],
    skills: ["Next.js", "Tailwind", "TypeScript", "Git"],
    link: "https://www.brolly.africa/",
  },
  {
    name: "CuriaShops",
    description: "",
    images: ["/img/projects/curiashops.jpg"],
    skills: ["Next.js", "Bootstrap", "JavaScript", "Git"],
    link: "https://curiashops.com/",
  },
];
