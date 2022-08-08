import { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, Collapse } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import "../../styles/pages/Chat.css";
import classNames from "classnames";
import { USERS, ChatUserType } from "./data";
import profilePic from "../../images/avatar-2.jpg";
import { TbDotsVertical } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { TbHelp } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { Input } from "@mantine/core";
import { TbSearch } from "react-icons/tb";

interface ChatUsersProps {
  onUserSelect: (value: ChatUserType) => void;
}

// ChatUsers
const ChatUsers = ({ onUserSelect }: ChatUsersProps) => {
  const [user, setUser] = useState<ChatUserType[]>([...USERS]);
  const [selectedUser, setSelectedUser] = useState<ChatUserType>(USERS[1]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // close on click outside
  const ref = useClickOutside(() => {
    setDropdownOpen(!dropdownOpen);
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  /**
   * Search the user
   * @param {*} text
   */
  const search = (text: string) => {
    setUser(
      text
        ? [...USERS].filter(
            (u) => u.name!.toLowerCase().indexOf(text.toLowerCase()) >= 0
          )
        : [...USERS]
    );
  };

  /**
   * Activates the user
   * @param {*} user
   */
  const activateUser = (user: ChatUserType) => {
    setSelectedUser(user);
    if (onUserSelect) {
      onUserSelect(user);
    }
  };

  return (
    <>
      <div className="chatUsers-Card">
        <div className="flex items-center justify-between">
          <div className="chatUsers-Profile">
            <img
              src={profilePic}
              className="rounded-circle"
              height="48"
              alt="ChatProfilePic"
            />
            <h5 className="">Micheal J</h5>
          </div>
          <div>
            <TbDotsVertical
              onClick={toggleDropdown}
              className={classNames("cursor-pointer text-lg", {
                show: dropdownOpen,
              })}
            />
          </div>
        </div>

        <div>
          <form className="chat-search">
            <div className="chat-search-box">
              <div className="input-group">
                <Input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  icon={<TbSearch />}
                  onKeyUp={(e: any) => search(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="pe-2">
          {(user || []).map((user, index) => {
            return (
              <Link
                to="#"
                key={index}
                className="text-body"
                onClick={(e: any) => {
                  activateUser(user);
                }}
              >
                <div
                  className={classNames("flex", "items-start", "p-2", {
                    "bg-light": user.id === selectedUser.id,
                  })}
                >
                  <div className="relative">
                    <span
                      className={classNames("user-status", {
                        "bg-success": user.userStatus === "online",
                        "bg-danger": user.userStatus === "busy",
                        "bg-warning": user.userStatus === "away",
                      })}
                    ></span>
                    <img
                      src={user.avatar}
                      className="rounded-circle"
                      height="48"
                      alt=""
                    />
                  </div>
                  <div className="w-full overflow-hidden">
                    <h5 className="mt-0 mb-0">
                      <span className="float-right text-xs">
                        {user.lastMessageOn}
                      </span>
                      {user.name}
                    </h5>
                    <p className="mt-1 mb-0">
                      {user.totalUnread !== 0 && (
                        <span className="float-right bg-danger text-white">
                          {user.totalUnread}
                        </span>
                      )}
                      <span
                        className={classNames("w-72", {
                          "text-success": user.totalUnread,
                        })}
                      >
                        {user.lastMessage}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Collapse */}
        {dropdownOpen && (
          <Paper ref={ref}>
            <Collapse in={dropdownOpen} className="chatProfile-Collapse">
              <div>
                <div className="chatProfile-Item">
                  <BsPeople />
                  <p>New Group</p>
                </div>
                <div className="chatProfile-Item">
                  <RiContactsFill />
                  <p>Contacts</p>
                </div>
                <div className="chatProfile-Item">
                  <BsBookmark />
                  <p>Saved Message</p>
                </div>
                <div className="chatProfile-Item">
                  <BsFillPersonPlusFill />
                  <p>Invite Friends</p>
                </div>
                <div className="chatProfile-Item">
                  <TbHelp />
                  <p>Help</p>
                </div>
                <div className="chatProfile-Item">
                  <FiSettings />
                  <p>Setting</p>
                </div>
              </div>
            </Collapse>
          </Paper>
        )}
      </div>
    </>
  );
};

export default ChatUsers;
