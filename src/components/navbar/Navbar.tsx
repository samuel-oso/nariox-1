import { useState } from "react";
import "../navbar/Navbar.css";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Avatar, Collapse, Input, Grid, Paper } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { navContent, navApplication, navLanguage } from "../../data/data";
import logo from "../../images/logo.png";
import user from "../../images/user.png";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiFullscreenFill } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { CgLock } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { VscPieChart } from "react-icons/vsc";
import { FiHelpCircle } from "react-icons/fi";

const Navbar = () => {
  // const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [application, setApplication] = useState(false);
  const [language, setLanguage] = useState(false);
  const [profile, setProfile] = useState(false);
  const [create, setCreate] = useState(false);

  const ref = useClickOutside(() => {
    setNotification(false);
    setApplication(false);
    setLanguage(false);
    setProfile(false);
    setCreate(false);
  });

  // const handle = useFullScreenHandle();

  return (
    <>
      <div className="navContainer">
        <div className="navList">
          <a className="navHome">
            <img src={logo} />
          </a>
          <AiOutlineMenu />
          <div
            onClick={() => setCreate((o) => !o)}
            className="createNew hidden"
          >
            <p>Create New</p>
            <RiArrowDownSLine />
          </div>
        </div>
        <div className="navList">
          <div className="flex items-center">
            <FiSearch className="lg:hidden" />
            <Input
              className="navSearch"
              placeholder="Search..."
              rightSection={<BiSearch />}
            />
          </div>
          <div className="hidden lg:flex items-center gap-4 ">
            <RiFullscreenFill />
            <AiOutlineAppstore onClick={() => setApplication((o) => !o)} />
            <FiGlobe onClick={() => setLanguage((o) => !o)} />
          </div>
          <div className="navNotificationIcon">
            <IoMdNotificationsOutline
              onClick={() => setNotification((o) => !o)}
            />
            <p className="navNotifyNo">6</p>
          </div>
          <div
            onClick={() => setProfile((o) => !o)}
            className="flex items-center  gap-x-3 cursor-pointer"
          >
            <Avatar src={user} radius="xl" />
            <div className="hidden items-end gap-x-1 md:flex">
              <p>Samuel Oso</p>
              <RiArrowDownSLine />
            </div>
          </div>
          <FiSettings />
        </div>
      </div>

      {/* search Collapse */}
      {/* {search && (
        <Paper ref={ref}>
          <Collapse in={search}>
            <div className="navCollapse-Mobile">
              <Input placeholder="Search..." />
            </div>
          </Collapse>
        </Paper>
      )} */}

      {/* Notification Collapse */}
      {notification && (
        <Paper ref={ref}>
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
        </Paper>
      )}

      {/* Applications collapse */}
      {application && (
        <Paper ref={ref}>
          <Collapse
            className="navApplicationCard hidden lg:block"
            in={application}
          >
            <Grid gutter="xs">
              {navApplication.map((navApp) => {
                return (
                  <Grid.Col className="cursor-pointer navAppcol" span={4}>
                    <div className="w-24 py-4">
                      <img src={navApp.img} />
                      <p>{navApp.p}</p>
                    </div>
                  </Grid.Col>
                );
              })}
            </Grid>
          </Collapse>
        </Paper>
      )}

      {/* Language collapse */}
      {language && (
        <Paper ref={ref}>
          <Collapse className="navLanguageCard hidden lg:block" in={language}>
            {navLanguage.map((navLang) => {
              return (
                <div className="navLang">
                  <img src={navLang.img} />
                  <p>{navLang.p}</p>
                </div>
              );
            })}
          </Collapse>
        </Paper>
      )}

      {/* Profile Collapse */}
      {profile && (
        <Paper ref={ref}>
          <Collapse className="navProfile" in={profile}>
            <div>
              <h3>Welcome !</h3>
              <div className="navProfileList">
                <AiOutlineUser />
                <p>My Account</p>
              </div>
              <div className="navProfileList">
                <CgLock />
                <p>Lock Screen</p>
              </div>
              <div className="navDivider" />
              <div className="navProfileList">
                <MdOutlineLogout />
                <p>Logout</p>
              </div>
            </div>
          </Collapse>
        </Paper>
      )}

      {/* Create New collapse */}
      {create && (
        <Paper ref={ref}>
          <Collapse className="navCreate" in={create}>
            <div className="navCreateList">
              <BsBag />
              <p>New Projects</p>
            </div>
            <div className="navCreateList">
              <BiUserPlus />
              <p>Create Users</p>
            </div>
            <div className="navCreateList">
              <VscPieChart />
              <p>Revenue Report</p>
            </div>
            <div className="navCreateList">
              <FiSettings />
              <p>Settings</p>
            </div>
            <div className="navDivider" />
            <div className="navCreateList">
              <FiHelpCircle />
              <p>Help & Support</p>
            </div>
          </Collapse>
        </Paper>
      )}
    </>
  );
};

export default Navbar;
