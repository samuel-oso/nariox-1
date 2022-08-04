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
import { CgShoppingBag } from "react-icons/cg";

import profile1 from "../../src/images/profile1.jpg";
import profile2 from "../images/profile2.webp";
import profile3 from "../images/profile3.webp";
import profile4 from "../images/profile4.webp";
import profile5 from "../images/profile5.webp";
import { FaEllipsisV } from "react-icons/fa";

import { EventInput } from "@fullcalendar/core";

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
    to: "/calendar",
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

export interface OrdersItemTypes {
  id: number;
  product: string;
  customer: string;
  price: string;
  status: string;
}

const orderDetails: OrdersItemTypes[] = [
  {
    id: 334,
    product: "Nike Air force",
    customer: "James Ishola",
    price: "$1000.69",
    status: "Delivered",
  },
  {
    id: 335,
    product: "Office wears",
    customer: "Felix J",
    price: "$25.19",
    status: "Declined",
  },
  {
    id: 336,
    product: "Gucci slides",
    customer: "Ayo Damola",
    price: "$162.03",
    status: "Delivered",
  },
  {
    id: 337,
    product: "Plain pants",
    customer: "Samson Idowu",
    price: "$87.34",
    status: "Pending",
  },
  {
    id: 338,
    product: "Winter Jackets",
    customer: "Philips Daniels",
    price: "$869.51",
    status: "Declined",
  },
];

interface topPerformers {
  icons?: string;
}

export const topPerformers = [
  {
    img: profile1,
    h5: "Don Mikel",
    p: "Product Manager",
    icon: FaEllipsisV,
  },
  {
    img: profile2,
    h5: "Abraham Brood",
    p: "Sales Rep",
    icon: FaEllipsisV,
  },
  {
    img: profile3,
    h5: "Samuel Oyedele",
    p: "Marketing Lead",
    icon: FaEllipsisV,
  },
  {
    img: profile4,
    h5: "Dami Uche",
    p: "Human Resources",
    icon: FaEllipsisV,
  },
  {
    img: profile5,
    h5: "Mohammed Ismail",
    p: "Managing Director",
    icon: FaEllipsisV,
  },
];

export const tasksList = [
  {
    h5: "Inform Daniel on the transfer meeting",
    p: "Due on the 26th July, 2022",
  },
  {
    h5: "Draw out the layout",
    p: "Due on the 29th July, 2022",
  },
  {
    h5: "Go on a drive with Michelle",
    p: "Due on the 30th July, 2022",
  },
  {
    h5: "Submit the laid out plans",
    p: "Due on the 5th August, 2022",
  },
  {
    h5: "Full quarterly report to be done",
    p: "Due on the 9th August, 2022",
  },
  {
    h5: "Draw out the layout",
    p: "Due on the 29th July, 2022",
  },
];

export interface Point {
  x: number;
  y: number;
}
export interface ApexLinearChartData {
  [key: string]: number[] | Point[] | [number, number][];
}
const lineChartWithData: ApexLinearChartData = {
  data1: [28, 29, 33, 36, 32, 32, 33],
  data2: [12, 11, 14, 18, 17, 13, 13],
};

const dataSeries = [
  [
    { date: "2014-01-01", value: 2e7 },
    { date: "2014-01-02", value: 10379978 },
    { date: "2014-01-03", value: 30493749 },
    { date: "2014-01-04", value: 10785250 },
    { date: "2014-01-05", value: 33901904 },
    { date: "2014-01-06", value: 11576838 },
    { date: "2014-01-07", value: 14413854 },
    { date: "2014-01-08", value: 15177211 },
    { date: "2014-01-09", value: 16622100 },
    { date: "2014-01-10", value: 17381072 },
    { date: "2014-01-11", value: 18802310 },
    { date: "2014-01-12", value: 15531790 },
    { date: "2014-01-13", value: 15748881 },
    { date: "2014-01-14", value: 18706437 },
    { date: "2014-01-15", value: 19752685 },
    { date: "2014-01-16", value: 21016418 },
    { date: "2014-01-17", value: 25622924 },
    { date: "2014-01-18", value: 25337480 },
    { date: "2014-01-19", value: 22258882 },
    { date: "2014-01-20", value: 23829538 },
    { date: "2014-01-21", value: 24245689 },
    { date: "2014-01-22", value: 26429711 },
    { date: "2014-01-23", value: 26259017 },
    { date: "2014-01-24", value: 25396183 },
    { date: "2014-01-25", value: 23107346 },
    { date: "2014-01-26", value: 28659852 },
    { date: "2014-01-27", value: 25270783 },
    { date: "2014-01-28", value: 26270783 },
    { date: "2014-01-29", value: 27270783 },
    { date: "2014-01-30", value: 28270783 },
    { date: "2014-01-31", value: 29270783 },
    { date: "2014-02-01", value: 30270783 },
    { date: "2014-02-02", value: 31270783 },
    { date: "2014-02-03", value: 32270783 },
    { date: "2014-02-04", value: 33270783 },
    { date: "2014-02-05", value: 28270783 },
    { date: "2014-02-06", value: 27270783 },
    { date: "2014-02-07", value: 35270783 },
    { date: "2014-02-08", value: 34270783 },
    { date: "2014-02-09", value: 28270783 },
    { date: "2014-02-10", value: 35270783 },
    { date: "2014-02-11", value: 36270783 },
    { date: "2014-02-12", value: 34127078 },
    { date: "2014-02-13", value: 33124078 },
    { date: "2014-02-14", value: 36227078 },
    { date: "2014-02-15", value: 37827078 },
    { date: "2014-02-16", value: 36427073 },
    { date: "2014-02-17", value: 37570783 },
    { date: "2014-02-18", value: 38627073 },
    { date: "2014-02-19", value: 37727078 },
    { date: "2014-02-20", value: 38827073 },
    { date: "2014-02-21", value: 40927078 },
    { date: "2014-02-22", value: 41027078 },
    { date: "2014-02-23", value: 42127073 },
    { date: "2014-02-24", value: 43220783 },
    { date: "2014-02-25", value: 44327078 },
    { date: "2014-02-26", value: 40427078 },
    { date: "2014-02-27", value: 41027078 },
    { date: "2014-02-28", value: 45627078 },
    { date: "2014-03-01", value: 44727078 },
    { date: "2014-03-02", value: 44227078 },
    { date: "2014-03-03", value: 45227078 },
    { date: "2014-03-04", value: 46027078 },
    { date: "2014-03-05", value: 46927078 },
    { date: "2014-03-06", value: 47027078 },
    { date: "2014-03-07", value: 46227078 },
    { date: "2014-03-08", value: 47027078 },
    { date: "2014-03-09", value: 48027078 },
    { date: "2014-03-10", value: 47027078 },
    { date: "2014-03-11", value: 47027078 },
    { date: "2014-03-12", value: 48017078 },
    { date: "2014-03-13", value: 48077078 },
    { date: "2014-03-14", value: 48087078 },
    { date: "2014-03-15", value: 48017078 },
    { date: "2014-03-16", value: 48047078 },
    { date: "2014-03-17", value: 48067078 },
    { date: "2014-03-18", value: 48077078 },
    { date: "2014-03-19", value: 48027074 },
    { date: "2014-03-20", value: 48927079 },
    { date: "2014-03-21", value: 48727071 },
    { date: "2014-03-22", value: 48127072 },
    { date: "2014-03-23", value: 48527072 },
    { date: "2014-03-24", value: 48627027 },
    { date: "2014-03-25", value: 48027040 },
    { date: "2014-03-26", value: 48027043 },
    { date: "2014-03-27", value: 48057022 },
    { date: "2014-03-28", value: 49057022 },
    { date: "2014-03-29", value: 50057022 },
    { date: "2014-03-30", value: 51057022 },
    { date: "2014-03-31", value: 52057022 },
    { date: "2014-04-01", value: 53057022 },
    { date: "2014-04-02", value: 54057022 },
    { date: "2014-04-03", value: 52057022 },
    { date: "2014-04-04", value: 55057022 },
    { date: "2014-04-05", value: 58270783 },
    { date: "2014-04-06", value: 56270783 },
    { date: "2014-04-07", value: 55270783 },
    { date: "2014-04-08", value: 58270783 },
    { date: "2014-04-09", value: 59270783 },
    { date: "2014-04-10", value: 60270783 },
    { date: "2014-04-11", value: 61270783 },
    { date: "2014-04-12", value: 62270783 },
    { date: "2014-04-13", value: 63270783 },
    { date: "2014-04-14", value: 64270783 },
    { date: "2014-04-15", value: 65270783 },
    { date: "2014-04-16", value: 66270783 },
    { date: "2014-04-17", value: 67270783 },
    { date: "2014-04-18", value: 68270783 },
    { date: "2014-04-19", value: 69270783 },
    { date: "2014-04-20", value: 70270783 },
    { date: "2014-04-21", value: 71270783 },
    { date: "2014-04-22", value: 72270783 },
    { date: "2014-04-23", value: 73270783 },
    { date: "2014-04-24", value: 74270783 },
    { date: "2014-04-25", value: 75270783 },
    { date: "2014-04-26", value: 76660783 },
    { date: "2014-04-27", value: 77270783 },
    { date: "2014-04-28", value: 78370783 },
    { date: "2014-04-29", value: 79470783 },
    { date: "2014-04-30", value: 80170783 },
  ],
  [
    { date: "2014-01-01", value: 15e7 },
    { date: "2014-01-02", value: 160379978 },
    { date: "2014-01-03", value: 170493749 },
    { date: "2014-01-04", value: 160785250 },
    { date: "2014-01-05", value: 167391904 },
    { date: "2014-01-06", value: 161576838 },
    { date: "2014-01-07", value: 161413854 },
    { date: "2014-01-08", value: 152177211 },
    { date: "2014-01-09", value: 140762210 },
    { date: "2014-01-10", value: 144381072 },
    { date: "2014-01-11", value: 154352310 },
    { date: "2014-01-12", value: 165531790 },
    { date: "2014-01-13", value: 175748881 },
    { date: "2014-01-14", value: 187064037 },
    { date: "2014-01-15", value: 197520685 },
    { date: "2014-01-16", value: 210176418 },
    { date: "2014-01-17", value: 196122924 },
    { date: "2014-01-18", value: 207337480 },
    { date: "2014-01-19", value: 200258882 },
    { date: "2014-01-20", value: 186829538 },
    { date: "2014-01-21", value: 192456897 },
    { date: "2014-01-22", value: 204299711 },
    { date: "2014-01-23", value: 192759017 },
    { date: "2014-01-24", value: 203596183 },
    { date: "2014-01-25", value: 208107346 },
    { date: "2014-01-26", value: 196359852 },
    { date: "2014-01-27", value: 192570783 },
    { date: "2014-01-28", value: 177967768 },
    { date: "2014-01-29", value: 190632803 },
    { date: "2014-01-30", value: 203725316 },
    { date: "2014-01-31", value: 218226177 },
    { date: "2014-02-01", value: 210698669 },
    { date: "2014-02-02", value: 217640656 },
    { date: "2014-02-03", value: 216142362 },
    { date: "2014-02-04", value: 201410971 },
    { date: "2014-02-05", value: 196704289 },
    { date: "2014-02-06", value: 190436945 },
    { date: "2014-02-07", value: 178891686 },
    { date: "2014-02-08", value: 171613962 },
    { date: "2014-02-09", value: 157579773 },
    { date: "2014-02-10", value: 158677098 },
    { date: "2014-02-11", value: 147129977 },
    { date: "2014-02-12", value: 151561876 },
    { date: "2014-02-13", value: 151627421 },
    { date: "2014-02-14", value: 143543872 },
    { date: "2014-02-15", value: 136581057 },
    { date: "2014-02-16", value: 135560715 },
    { date: "2014-02-17", value: 122625263 },
    { date: "2014-02-18", value: 112091484 },
    { date: "2014-02-19", value: 98810329 },
    { date: "2014-02-20", value: 99882912 },
    { date: "2014-02-21", value: 94943095 },
    { date: "2014-02-22", value: 104875743 },
    { date: "2014-02-23", value: 116383678 },
    { date: "2014-02-24", value: 125028841 },
    { date: "2014-02-25", value: 123967310 },
    { date: "2014-02-26", value: 133167029 },
    { date: "2014-02-27", value: 128577263 },
    { date: "2014-02-28", value: 115836969 },
    { date: "2014-03-01", value: 119264529 },
    { date: "2014-03-02", value: 109363374 },
    { date: "2014-03-03", value: 113985628 },
    { date: "2014-03-04", value: 114650999 },
    { date: "2014-03-05", value: 110866108 },
    { date: "2014-03-06", value: 96473454 },
    { date: "2014-03-07", value: 104075886 },
    { date: "2014-03-08", value: 103568384 },
    { date: "2014-03-09", value: 101534883 },
    { date: "2014-03-10", value: 115825447 },
    { date: "2014-03-11", value: 126133916 },
    { date: "2014-03-12", value: 116502109 },
    { date: "2014-03-13", value: 130169411 },
    { date: "2014-03-14", value: 124296886 },
    { date: "2014-03-15", value: 126347399 },
    { date: "2014-03-16", value: 131483669 },
    { date: "2014-03-17", value: 142811333 },
    { date: "2014-03-18", value: 129675396 },
    { date: "2014-03-19", value: 115514483 },
    { date: "2014-03-20", value: 117630630 },
    { date: "2014-03-21", value: 122340239 },
    { date: "2014-03-22", value: 132349091 },
    { date: "2014-03-23", value: 125613305 },
    { date: "2014-03-24", value: 135592466 },
    { date: "2014-03-25", value: 123408762 },
    { date: "2014-03-26", value: 111991454 },
    { date: "2014-03-27", value: 116123955 },
    { date: "2014-03-28", value: 112817214 },
    { date: "2014-03-29", value: 113029590 },
    { date: "2014-03-30", value: 108753398 },
    { date: "2014-03-31", value: 99383763 },
    { date: "2014-04-01", value: 100151737 },
    { date: "2014-04-02", value: 94985209 },
    { date: "2014-04-03", value: 82913669 },
    { date: "2014-04-04", value: 78748268 },
    { date: "2014-04-05", value: 63829135 },
    { date: "2014-04-06", value: 78694727 },
    { date: "2014-04-07", value: 80868994 },
    { date: "2014-04-08", value: 93799013 },
    { date: "2014-04-09", value: 99042416 },
    { date: "2014-04-10", value: 97298692 },
    { date: "2014-04-11", value: 83353499 },
    { date: "2014-04-12", value: 71248129 },
    { date: "2014-04-13", value: 75253744 },
    { date: "2014-04-14", value: 68976648 },
    { date: "2014-04-15", value: 71002284 },
    { date: "2014-04-16", value: 75052401 },
    { date: "2014-04-17", value: 83894030 },
    { date: "2014-04-18", value: 90236528 },
    { date: "2014-04-19", value: 99739114 },
    { date: "2014-04-20", value: 96407136 },
    { date: "2014-04-21", value: 108323177 },
    { date: "2014-04-22", value: 101578914 },
    { date: "2014-04-23", value: 115877608 },
    { date: "2014-04-24", value: 112088857 },
    { date: "2014-04-25", value: 112071353 },
    { date: "2014-04-26", value: 101790062 },
    { date: "2014-04-27", value: 115003761 },
    { date: "2014-04-28", value: 120457727 },
    { date: "2014-04-29", value: 118253926 },
    { date: "2014-04-30", value: 117956992 },
  ],
  [
    { date: "2014-01-01", value: 5e7 },
    { date: "2014-01-02", value: 60379978 },
    { date: "2014-01-03", value: 40493749 },
    { date: "2014-01-04", value: 60785250 },
    { date: "2014-01-05", value: 67391904 },
    { date: "2014-01-06", value: 61576838 },
    { date: "2014-01-07", value: 61413854 },
    { date: "2014-01-08", value: 82177211 },
    { date: "2014-01-09", value: 103762210 },
    { date: "2014-01-10", value: 84381072 },
    { date: "2014-01-11", value: 54352310 },
    { date: "2014-01-12", value: 65531790 },
    { date: "2014-01-13", value: 75748881 },
    { date: "2014-01-14", value: 47064037 },
    { date: "2014-01-15", value: 67520685 },
    { date: "2014-01-16", value: 60176418 },
    { date: "2014-01-17", value: 66122924 },
    { date: "2014-01-18", value: 57337480 },
    { date: "2014-01-19", value: 100258882 },
    { date: "2014-01-20", value: 46829538 },
    { date: "2014-01-21", value: 92456897 },
    { date: "2014-01-22", value: 94299711 },
    { date: "2014-01-23", value: 62759017 },
    { date: "2014-01-24", value: 103596183 },
    { date: "2014-01-25", value: 108107346 },
    { date: "2014-01-26", value: 66359852 },
    { date: "2014-01-27", value: 62570783 },
    { date: "2014-01-28", value: 77967768 },
    { date: "2014-01-29", value: 60632803 },
    { date: "2014-01-30", value: 103725316 },
    { date: "2014-01-31", value: 98226177 },
    { date: "2014-02-01", value: 60698669 },
    { date: "2014-02-02", value: 67640656 },
    { date: "2014-02-03", value: 66142362 },
    { date: "2014-02-04", value: 101410971 },
    { date: "2014-02-05", value: 66704289 },
    { date: "2014-02-06", value: 60436945 },
    { date: "2014-02-07", value: 78891686 },
    { date: "2014-02-08", value: 71613962 },
    { date: "2014-02-09", value: 107579773 },
    { date: "2014-02-10", value: 58677098 },
    { date: "2014-02-11", value: 87129977 },
    { date: "2014-02-12", value: 51561876 },
    { date: "2014-02-13", value: 51627421 },
    { date: "2014-02-14", value: 83543872 },
    { date: "2014-02-15", value: 66581057 },
    { date: "2014-02-16", value: 65560715 },
    { date: "2014-02-17", value: 62625263 },
    { date: "2014-02-18", value: 92091484 },
    { date: "2014-02-19", value: 48810329 },
    { date: "2014-02-20", value: 49882912 },
    { date: "2014-02-21", value: 44943095 },
    { date: "2014-02-22", value: 104875743 },
    { date: "2014-02-23", value: 96383678 },
    { date: "2014-02-24", value: 105028841 },
    { date: "2014-02-25", value: 63967310 },
    { date: "2014-02-26", value: 63167029 },
    { date: "2014-02-27", value: 68577263 },
    { date: "2014-02-28", value: 95836969 },
    { date: "2014-03-01", value: 99264529 },
    { date: "2014-03-02", value: 109363374 },
    { date: "2014-03-03", value: 93985628 },
    { date: "2014-03-04", value: 94650999 },
    { date: "2014-03-05", value: 90866108 },
    { date: "2014-03-06", value: 46473454 },
    { date: "2014-03-07", value: 84075886 },
    { date: "2014-03-08", value: 103568384 },
    { date: "2014-03-09", value: 101534883 },
    { date: "2014-03-10", value: 95825447 },
    { date: "2014-03-11", value: 66133916 },
    { date: "2014-03-12", value: 96502109 },
    { date: "2014-03-13", value: 80169411 },
    { date: "2014-03-14", value: 84296886 },
    { date: "2014-03-15", value: 86347399 },
    { date: "2014-03-16", value: 31483669 },
    { date: "2014-03-17", value: 82811333 },
    { date: "2014-03-18", value: 89675396 },
    { date: "2014-03-19", value: 95514483 },
    { date: "2014-03-20", value: 97630630 },
    { date: "2014-03-21", value: 62340239 },
    { date: "2014-03-22", value: 62349091 },
    { date: "2014-03-23", value: 65613305 },
    { date: "2014-03-24", value: 65592466 },
    { date: "2014-03-25", value: 63408762 },
    { date: "2014-03-26", value: 91991454 },
    { date: "2014-03-27", value: 96123955 },
    { date: "2014-03-28", value: 92817214 },
    { date: "2014-03-29", value: 93029590 },
    { date: "2014-03-30", value: 108753398 },
    { date: "2014-03-31", value: 49383763 },
    { date: "2014-04-01", value: 100151737 },
    { date: "2014-04-02", value: 44985209 },
    { date: "2014-04-03", value: 52913669 },
    { date: "2014-04-04", value: 48748268 },
    { date: "2014-04-05", value: 23829135 },
    { date: "2014-04-06", value: 58694727 },
    { date: "2014-04-07", value: 50868994 },
    { date: "2014-04-08", value: 43799013 },
    { date: "2014-04-09", value: 4042416 },
    { date: "2014-04-10", value: 47298692 },
    { date: "2014-04-11", value: 53353499 },
    { date: "2014-04-12", value: 71248129 },
    { date: "2014-04-13", value: 75253744 },
    { date: "2014-04-14", value: 68976648 },
    { date: "2014-04-15", value: 71002284 },
    { date: "2014-04-16", value: 75052401 },
    { date: "2014-04-17", value: 83894030 },
    { date: "2014-04-18", value: 50236528 },
    { date: "2014-04-19", value: 59739114 },
    { date: "2014-04-20", value: 56407136 },
    { date: "2014-04-21", value: 108323177 },
    { date: "2014-04-22", value: 101578914 },
    { date: "2014-04-23", value: 95877608 },
    { date: "2014-04-24", value: 62088857 },
    { date: "2014-04-25", value: 92071353 },
    { date: "2014-04-26", value: 81790062 },
    { date: "2014-04-27", value: 105003761 },
    { date: "2014-04-28", value: 100457727 },
    { date: "2014-04-29", value: 98253926 },
    { date: "2014-04-30", value: 67956992 },
  ],
];

export interface SourcesTypes {
  types: string;
  sessions: number;
  views: number;
}
const sources: SourcesTypes[] = [
  {
    types: "Direct",
    sessions: 358,
    views: 250,
  },
  {
    types: "Referal",
    sessions: 501,
    views: 50,
  },
  {
    types: "Email",
    sessions: 460,
    views: 600,
  },
];

export interface EngagementOverviewsTypes {
  duration: string;
  sessions: string;
  views: string;
}
const engagementOverviews: EngagementOverviewsTypes[] = [
  {
    duration: "0-30",
    sessions: "2,250",
    views: "4,250",
  },
  {
    duration: "31-60",
    sessions: "1,501",
    views: "2,050",
  },
  {
    duration: "61-120",
    sessions: "750",
    views: "1,600",
  },
];

export interface PlatformTypes {
  system: string;
  visits: string;
  progress: number;
}

const platforms: PlatformTypes[] = [
  {
    system: "Linux",
    visits: "2,250",
    progress: 65,
  },
  {
    system: "Android",
    visits: "1,501",
    progress: 45,
  },
  {
    system: "Windows",
    visits: "750",
    progress: 30,
  },
];

export interface ChannelsTypes {
  channel: string;
  visits: string;
  progress: number;
  color?: string;
}
const channels: ChannelsTypes[] = [
  {
    channel: "Direct",
    visits: "2,050",
    progress: 65,
  },
  {
    channel: "Organic Search",
    visits: "1,405",
    progress: 45,
    color: "var(--success)",
  },
  {
    channel: "Social",
    visits: "540",
    progress: 25,
    color: "var(--danger)",
  },
];

export interface ViewsDetailTypes {
  page: string;
  bounce_rate: string;
}
const viewsDetails: ViewsDetailTypes[] = [
  {
    page: "/dashboard",
    bounce_rate: "30.51%",
  },
  {
    page: "/analytics",
    bounce_rate: "72.98%",
  },
  {
    page: "/calender",
    bounce_rate: "39.51%",
  },
  {
    page: "/chat",
    bounce_rate: "27.32%",
  },
  {
    page: "/email",
    bounce_rate: "09.12%",
  },
  {
    page: "/projects/list",
    bounce_rate: "63.81%",
  },
  {
    page: "/projects/details",
    bounce_rate: "89.11%",
  },
  {
    page: "/tasks/list",
    bounce_rate: "48.42%",
  },
];

const defaultEvents: EventInput[] = [
  {
    id: "1",
    title: "Developers meeting",
    start: new Date(),
    className: "bg-success",
  },
  {
    id: "2",
    title: "Lunch break",
    start: new Date().setDate(new Date().getDate() + 13),
    className: "bg-primary",
  },
  {
    id: "3",
    title: "Client negotiation",
    start: new Date().setDate(new Date().getDate() + 8),
    end: new Date().setDate(new Date().getDate()),
    className: "bg-danger",
  },
  {
    id: "4",
    title: "Watch a movie",
    start: new Date().setDate(new Date().getDate() + 3),
    end: new Date().setDate(new Date().getDate()),
    className: "bg-primary",
  },
  {
    id: "5",
    title: "Frontend Eng",
    start: new Date().setDate(new Date().getDate() + 2),
    className: "bg-warning",
  },
  {
    id: "6",
    title: "Date with babe",
    start: new Date().setDate(new Date().getDate() + 21),
    className: "bg-success",
  },
  {
    id: "7",
    title: "UI Designers",
    start: new Date().setDate(new Date().getDate() + 17),
    className: "bg-danger",
  },
];

export { defaultEvents };

export {
  orderDetails,
  lineChartWithData,
  dataSeries,
  sources,
  engagementOverviews,
  platforms,
  channels,
  viewsDetails,
};
