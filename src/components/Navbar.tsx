import React, { useState } from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import messenger from "../images/messenger.png";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, Select, Collapse, Input } from "@mantine/core";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiFullscreenFill } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
// import navNotificationcontent from "../data/data";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <>
      <div className="navContainer">
        <div className="navList">
          <a className="navHome">
            <img src={logo} />
          </a>
          <AiOutlineMenu />
        </div>
        <div className="navList">
          <div className="flex items-center">
            <FiSearch
              onClick={() => {
                setSearch((o) => !o);
                setNotification(false);
              }}
              className="lg:hidden"
            />
            <Select
              className="navSearch"
              placeholder="Search..."
              data={["lol", "okay", "yes"]}
              searchable
              rightSection={<BiSearch />}
            />
          </div>
          <div className="hidden lg:flex items-center gap-4 ">
            <RiFullscreenFill />
            <AiOutlineAppstore />
            <FiGlobe />
          </div>
          <div className="navNotificationIcon">
            <IoMdNotificationsOutline
              onClick={() => {
                setNotification((o) => !o);
                setSearch(false);
              }}
            />
            <p className="navNotifyNo">6</p>
          </div>
          <div className="flex items-center  gap-x-3">
            <Avatar src={user} radius="xl" />
            <div className="hidden items-center gap-x-1 md:flex">
              <p>Samuel Oso</p>
              <RiArrowDownSLine />
            </div>
          </div>
          <FiSettings />
        </div>
      </div>
      <Collapse in={search}>
        <div className="navCollapse">
          <Input placeholder="Search..." />
        </div>
      </Collapse>
      <Collapse in={notification}>
        <div className="navNotification flex-col">
          <div
            style={{ border: "none" }}
            className="navNotificationcontent justify-between"
          >
            <h4 className="text-base font-medium">Notification</h4>
            <p>clear All</p>
          </div>
          <div className="navNotificationcontent">
            <img src={user2} />
            <div className="mx-3">
              <h3>Micheal Davis</h3>
              <p className="text-xs my-1">
                Hello, Hope you are well? Please don't forget the meeting!
              </p>
            </div>
          </div>
          <div className="navNotificationcontent">
            <img src={messenger} />
            <div className="mx-3">
              <h3>Adesuwa liked your post</h3>
              <p className="text-xs my-1">15 mins ago</p>
            </div>
          </div>
          <div className="navNotificationcontent">
            <img src={user3} />
            <div className="mx-3">
              <h3>Olumide Jonathan</h3>
              <p className="text-xs my-1">
                Awesome layout! See you at the top man.
              </p>
            </div>
          </div>
          <div className="navNotificationcontent">
            <img src={messenger} />
            <div className="mx-3">
              <h3>Adesuwa liked your post</h3>
              <p className="text-xs my-1">15 mins ago</p>
            </div>
          </div>
          <div className="navNotificationcontent">
            <img src={messenger} />
            <div className="mx-3">
              <h3>Adesuwa liked your post</h3>
              <p className="text-xs my-1">15 mins ago</p>
            </div>
          </div>
          <div className="navNotificationcontent">
            <img src={messenger} />
            <div className="mx-3">
              <h3>Adesuwa liked your post</h3>
              <p className="text-xs my-1">15 mins ago</p>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default Navbar;
