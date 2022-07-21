import React, { useState } from "react";
import "../menubar/Menubar.css";
import { menuList } from "../../data/data";

function Menubar() {
  const iconStyle = {};

  return (
    <aside className="menubar">
      {menuList.map((props) => {
        return (
          <div className="menuList">
            <props.icon style={iconStyle} />
            <p className="hidden xl:block">{props.p}</p>
          </div>
        );
      })}
    </aside>
  );
}

export default Menubar;
