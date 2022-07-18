import React, { useState } from "react";
import "../navbar/Navbar.css";
import logo from "../../images/logo.png";
import user from "../../images/user.png";
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
import { navContent } from "../../data/data";

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

      {/* search Collapse */}
      <Collapse in={search}>
        <div className="navCollapse-Mobile">
          <Input placeholder="Search..." />
        </div>
      </Collapse>

      {/* Notification Collapse */}
      <Collapse in={notification} className="navNotificationCard">
        <div className="navNotification flex-col">
          <div className="navNotificationSticky top-0 justify-between">
            <h4 className="text-base font-medium">Notification</h4>
            <p
              className="cursor-pointer"
              onClick={() => setNotification((o) => !o)}
            >
              clear All
            </p>
          </div>
          <div className="navNotificationcontent">
            {navContent.map((props) => {
              return (
                <div className="navNotificationList">
                  <img src={props.img} />
                  <div className="mx-3">
                    <h3>{props.h3}</h3>
                    <p>{props.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => setNotification((o) => !o)}
            className="navNotificationSticky justify-center cursor-pointer"
          >
            <p style={{ color: "var(--bs-primary)" }}>View All</p>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default Navbar;
