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
    image: "/img/tech/typeScript.png",
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
      "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion. An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
