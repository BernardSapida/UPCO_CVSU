import { SidebarLink } from "@/components/SidebarItems";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Home", icon: IoHome },
  { href: "/account", title: "Account", icon: FaUser },
];

export const additionalLinks: AdditionalLinks[] = [];
