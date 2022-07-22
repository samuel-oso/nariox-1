import * as icons from "react-icons";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import messenger from "../images/messenger.png";
import newUser from "../images/newUser.png";
import thumbsUp from "../images/thumbsUp.png";

import slack from "../../src/images/slack.png";
import dropbox from "../../src/images/dropbox.png";
import bitbucket from "../../src/images/bitbucket.png";
import dribble from "../../src/images/dribble.png";
import gsuite from "../../src/images/gsuite.png";
import github from "../../src/images/github.png";

import english from "../../src/images/english.jpg";
import russian from "../../src/images/russian.jpg";
import italian from "../../src/images/italian.jpg";
import german from "../../src/images/german.jpg";
import spanish from "../../src/images/spanish.jpg";

import { TbHome } from "react-icons/tb";
import { TbDeviceAnalytics } from "react-icons/tb";
import { TbCalendarPlus } from "react-icons/tb";
import { TbBrandHipchat } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbBuilding } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { TbNotebook } from "react-icons/tb";
import { TbLayoutKanban } from "react-icons/tb";
import { TbFilePlus } from "react-icons/tb";

import { TbUsers } from "react-icons/tb";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CgShoppingBag } from "react-icons/cg";

export const navContent = [
  {
    img: user2,
    h3: "Micheal Davis",
    p: "Hello, Please don't forget the meeting!",
  },
  {
    img: messenger,
    h3: "Adesuwa liked your post",
    p: "15 mins ago",
  },
  {
    img: user3,
    h3: "Olumide Jonathan",
    p: " Awesome layout! See you at the top man.",
  },
  {
    img: newUser,
    h3: "New user registered",
    p: "24 hours ago",
  },
  {
    img: thumbsUp,
    h3: "Emma liked your comment",
    p: "2 days ago",
  },
  {
    img: messenger,
    h3: "Adris commented on Admin",
    p: "13 secs ago",
  },
];

export const navApplication = [
  {
    img: slack,
    p: "Slack",
  },
  {
    img: dropbox,
    p: "Dropbox",
  },
  {
    img: bitbucket,
    p: "Bitbucket",
  },
  {
    img: dribble,
    p: "Dribble",
  },
  {
    img: gsuite,
    p: "G suite",
  },
  {
    img: github,
    p: "Github",
  },
];

export const navLanguage = [
  {
    img: english,
    p: "English",
  },
  {
    img: russian,
    p: "Russian",
  },
  {
    img: italian,
    p: "Italian",
  },
  {
    img: german,
    p: "German",
  },
  {
    img: spanish,
    p: "Spanish",
  },
];

interface menuList {
  icons?: string;
}
export const menuList = [
  {
    icon: TbHome,
    p: "Dashboard",
    to: "/",
  },
  {
    icon: TbDeviceAnalytics,
    p: "Analytics",
    to: "/analytics",
  },
  {
    icon: TbCalendarPlus,
    p: "Calendar",
  },
  {
    icon: TbBrandHipchat,
    p: "Chat",
  },
  {
    icon: TbMail,
    p: "Email",
  },
  {
    icon: TbBuilding,
    p: "Projects List",
  },
  {
    icon: TbListDetails,
    p: "Projects Details",
  },
  {
    icon: TbNotebook,
    p: "Tasks",
  },
  {
    icon: TbLayoutKanban,
    p: "Kanban Board",
  },
  {
    icon: TbFilePlus,
    p: "File Manager",
  },
];

interface dashboardOverview {
  icons?: string;
}
export const dashboardOverview = [
  {
    h3: "871,345",
    p: "Total Visitors",
    icon: TbUsers,
  },
  {
    h3: "8,705",
    p: "Total Product Views",
    icon: HiOutlinePhotograph,
  },
  {
    h3: "$99.8",
    p: "Revenue Per Visitor",
    icon: CgShoppingBag,
  },
];
