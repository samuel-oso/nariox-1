import { useState } from "react";
import "../../src/styles/components/Overview.css";
import { FaEllipsisV } from "react-icons/fa";
import { TbArrowNarrowRight } from "react-icons/tb";
import { dashboardOverview } from "../data/data";
import { TbRefreshDot } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { Collapse, Divider } from "@mantine/core";

const Overview = () => {
  const [overview, setOverview] = useState(false);

  const iconStyle = {};

  return (
    <div className="overview">
      <div className="flex items-center justify-between p-6">
        <h4 className="text-base font-semibold">OVERVIEW</h4>
        <FaEllipsisV
          className="cursor-pointer"
          onClick={() => setOverview((o) => !o)}
        />
      </div>
      {dashboardOverview.map((props) => {
        return (
          <div className="dashboardOverview">
            <div>
              <h3>{props.h3}</h3>
              <p>{props.p}</p>
            </div>
            <props.icon className="overviewSVG" style={iconStyle} />
          </div>
        );
      })}
      <div className="overviewExpand">
        <span>View All</span>
        <TbArrowNarrowRight />
      </div>

      <Collapse in={overview} className="ellipseCollapse">
        <div className="py-1">
          <div className="ellipseItem">
            <TbRefreshDot />
            <p>Refresh</p>
          </div>
          <div className="ellipseItem">
            <FiUserPlus />
            <p>Add New</p>
          </div>
          <Divider className="my-3" />
          <div style={{ color: "var(--danger)" }} className="ellipseItem">
            <TbLogout />
            <p>Exit</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Overview;
