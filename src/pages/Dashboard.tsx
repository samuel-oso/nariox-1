import { useState } from "react";
import Layout from "../components/Layout";
import { Divider } from "@mantine/core";
import "../../src/styles/pages/Dashboard.css";
import { Collapse, Button } from "@mantine/core";
import DatePicker from "../components/DatePicker";
import { TbNotes } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbPrinter } from "react-icons/tb";
import { TbFile } from "react-icons/tb";
import { FaEllipsisV } from "react-icons/fa";
import { TbArrowNarrowRight } from "react-icons/tb";
import { TbRefreshDot } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import Statistics from "../components/Statistics";
import { dashboardOverview } from "../data/data";

const Dashboard = () => {
  const [download, setDownload] = useState(false);
  const [overview, setOverview] = useState(false);

  const iconStyle = {};

  return (
    <Layout>
      <div className="main-container">
        <div className="flex flex-col items-start gap-6 mb-8 md:flex-row md:justify-between md:items-center">
          <h4
            style={{ color: "var(--bs-gray-dark" }}
            className="text-base font-medium "
          >
            Dashboard
          </h4>
          <div className="flex gap-4 w-full flex-col md:flex-row md:w-fit">
            <DatePicker />
            <Button
              className="py-1.5 px-3.5 w-36"
              style={{ background: "var(--bs-primary)" }}
              leftIcon={<TbNotes />}
              rightIcon={<FiChevronDown />}
              onClick={() => setDownload((o) => !o)}
            >
              <p className="font-normal">Download</p>
            </Button>
          </div>
        </div>
        <div>
          <Statistics />
        </div>
        <div>
          <div className="overview">
            <div className="flex items-center justify-between p-6">
              <h4 className="text-base font-semibold">OVERVIEW</h4>
              <FaEllipsisV onClick={() => setOverview((o) => !o)} />
            </div>
            {dashboardOverview.map((props) => {
              return (
                <div className="dashboardOverview">
                  <div>
                    <h3 className="text-xl mb-1.5">{props.h3}</h3>
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
          </div>
        </div>
      </div>

      {/* Download Button collapse */}
      <Collapse className="downloadCollapse" in={download}>
        <div>
          <div className="downloadCol-Sub">
            <MdOutlineEmail />
            <p>Email</p>
          </div>
          <div className="downloadCol-Sub">
            <TbPrinter />
            <p>Print</p>
          </div>
          <div
            style={{
              borderTop: "var(--border-top)",
              color: "var(--bs-gray-500)",
            }}
            className="h-px my-3"
          />
          <div className="downloadCol-Sub">
            <TbFile />
            <p>Re-Generate</p>
          </div>
        </div>
      </Collapse>

      {/* Overview ellipse menu */}
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
    </Layout>
  );
};

export default Dashboard;
