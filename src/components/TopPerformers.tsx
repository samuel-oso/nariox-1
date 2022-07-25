import React, { useState } from "react";
import "../styles/components/TopPerformers.css";
// import { Collapse, Divider } from "@mantine/core";
import { FaEllipsisV } from "react-icons/fa";
import { topPerformers } from "../data/data";
// import { TbEdit } from "react-icons/tb";
// import { TbLogout } from "react-icons/tb";
// import { TbTrash } from "react-icons/tb";

const TopPerformers = () => {
  //   const [topPerformer, setTopPerformer] = useState(false);

  const iconStyle = {};

  return (
    <div className="topCard">
      <div className="mb-6">
        <h5 className="text-base font-semibold mb-0 ">TOP PERFORMERS</h5>
      </div>
      {topPerformers.map((props) => {
        return (
          <div className="performerItem">
            <div className="flex items-center gap-6">
              <img src={props.img} />
              <div>
                <h5>{props.h5}</h5>
                <p>{props.p}</p>
              </div>
            </div>
            <div>
              <props.icon style={iconStyle} />
            </div>
          </div>
        );
      })}

      {/* <Collapse in={topPerformer} className="performerCollapse">
        <div className="py-1">
          <div className="ellipseItem">
            <TbEdit />
            <p>Edit</p>
          </div>
          <div className="ellipseItem">
            <TbLogout />
            <p>Remove from team</p>
          </div>
          <Divider className="my-3" />
          <div style={{ color: "var(--danger)" }} className="ellipseItem">
            <TbTrash />
            <p>Delete</p>
          </div>
        </div>
      </Collapse> */}
    </div>
  );
};

export default TopPerformers;
