import React, { useState } from "react";
import "../styles/components/SessionbyLocation.css";
import { BiExport } from "react-icons/bi";
import { TbRefreshDot } from "react-icons/tb";
import { Collapse } from "@mantine/core";
import { FaEllipsisV } from "react-icons/fa";

const SessionbyLocations = () => {
  const [sessionLocation, setSessionLocation] = useState(false);

  return (
    <div className="sessionLocation-Card">
      <div className="flex items-center justify-between mb-5">
        <h5 style={{ color: "var(--bs-gray-dark)" }} className="font-semibold">
          SESSION BY LOCATIONS
        </h5>
        <FaEllipsisV
          className="cursor-pointer"
          onClick={() => setSessionLocation((o) => !o)}
        />
      </div>
      <iframe
        width="100%"
        height="90%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
      ></iframe>

      <Collapse in={sessionLocation} className="locationCollapse">
        <div className="py-1">
          <div className="locationItem">
            <TbRefreshDot />
            <p>Refresh Report</p>
          </div>
          <div className="locationItem">
            <BiExport />
            <p>Export Report</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SessionbyLocations;
