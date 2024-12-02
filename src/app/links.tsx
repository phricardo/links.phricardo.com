import { BsGlobe } from "react-icons/bs";
import { normalizeString } from "../utils/normalizeString";
import { FaInstagram, FaGithub, FaTiktok, FaLinkedinIn } from "react-icons/fa";

type Link = {
  label: string;
  href: string;
  icon: JSX.Element;
};

export const links: Link[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/phricardorj/",
    icon: <FaInstagram color="#E4405F" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/phricardo/",
    icon: <FaGithub color="#ffffff" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@phricardorj",
    icon: <FaTiktok color="#ffffff" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/phricardorj/",
    icon: <FaLinkedinIn color="#0A66C2" />,
  },
  {
    label: "Portfólio",
    href: "https://www.phricardo.com/?utm_source=links.phricardo.com",
    icon: <BsGlobe color="#0073e6" />,
  },
];

export const getRedirectUrl = (label: string): string | undefined => {
  const normalizedLabel = normalizeString(label);
  const link = links.find(
    (link) => normalizeString(link.label) === normalizedLabel
  );
  return link ? link.href : undefined;
};
