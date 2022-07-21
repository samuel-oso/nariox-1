import React, { useState } from "react";
import "../menubar/Menubar.css";
import { menuList } from "../../data/data";
import { useLocation, useNavigate } from "react-router-dom";

function Menubar() {
  const iconStyle = {};

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="menubar">
      {menuList.map((props) => {
        return (
          <div
            onClick={() => navigate(`${props.to}`)}
            className={`menuList ${
              pathname === `${props.to}` && "menuList-Active"
            }`}
          >
            <props.icon style={iconStyle} />
            <p className="hidden xl:block">{props.p}</p>
          </div>
        );
      })}
    </aside>
  );
}

export default Menubar;
