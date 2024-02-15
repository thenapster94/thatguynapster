import GithubIcon from "@/components/icons/github";
import InstagramIcon from "@/components/icons/instagram";
import LinkedinIcon from "@/components/icons/linkedin";
import TwitterIcon from "@/components/icons/twitter";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const name = "Andrew Osei-Wusu";

export const role = "Full Stack Developer";
export const summary =
  "Full stack developer focused on creating Web and Mobile applications. Strong worth ethic, adaptability and exceptional interpersonal skills I like projects that solve real problems.";

export const country = "Ghana";

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

export const logo = null;

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
