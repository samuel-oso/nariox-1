import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, Select } from "@mantine/core";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiFullscreenFill } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navList">
        <a className="navHome">
          <img src={logo} />
        </a>
        <AiOutlineMenu />
      </div>
      <div className="navList">
        <div className="flex items-center">
          <FiSearch className="lg:hidden" />
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
        <div className="navNotification">
          <IoMdNotificationsOutline />
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
  );
};

export default Navbar;
