import React, { useState } from "react";
import "../../components/menubar/Menubar.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineHotel } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { GrTransaction } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";

const MenuMobile = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={`okay ${show ? "space-toggle" : null}`}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <FiMenu />
        </div>
      </header>
      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <p className="nav-logo">
              <AiOutlineHome className="nav-logo-icon" />
              <span className="nav-logo-name">Homepage</span>
            </p>

            <div className="nav-list ">
              <p className="nav-link">
                <AiOutlineDashboard className="nav-link-icon" />
                <span className="nav-link-name">Dashboard</span>
              </p>
              <p className="nav-link">
                <MdOutlineHotel className="nav-link-icon" />
                <span className="nav-link-name">Hotel</span>
              </p>
              <p className="nav-link">
                <GrGallery className="nav-link-icon" />
                <span className="nav-link-name">Gallery</span>
              </p>
              <p className="nav-link">
                <GrTransaction className="nav-link-icon" />
                <span className="nav-link-name">Transactions</span>
              </p>
            </div>
          </div>

          <p className="nav-link">
            <FiLogOut className="nav-link-icon" />
            <span className="nav-link-name">Logout</span>
          </p>
        </nav>
      </aside>

      <h1>Content</h1>
    </main>
  );
};

export default MenuMobile;
