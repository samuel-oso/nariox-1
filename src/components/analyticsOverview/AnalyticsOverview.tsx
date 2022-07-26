import { useState } from "react";
import "../../styles/components/AnalyticsOverview.css";
import { FaEllipsisV } from "react-icons/fa";
import { Tabs } from "@mantine/core";
import SubscribersChart from "./SubscribersChart";
import TotalViewsChart from "./TotalViewsChart";
import BounceRateChart from "./BounceRateChart";
import { BiExport } from "react-icons/bi";
import { TbRefreshDot } from "react-icons/tb";
import { Collapse } from "@mantine/core";

const AnalyticsOverview = () => {
  const [overview, setOverview] = useState(false);

  return (
    <div className="analyticsOverview-Card">
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-base font-semibold mb-0 ">OVERVIEWS</h5>
        <FaEllipsisV
          className="cursor-pointer"
          onClick={() => setOverview((o) => !o)}
        />
      </div>

      <Tabs className="analytics-Tab">
        <Tabs.Tab
          label={
            <div className="flex flex-col items-start">
              <p>Subscribers</p>
              <h1>456</h1>
            </div>
          }
        >
          <SubscribersChart />
        </Tabs.Tab>
        <Tabs.Tab
          label={
            <div className="flex flex-col items-start">
              <p>Total views</p>
              <h1>3,981</h1>
            </div>
          }
        >
          <TotalViewsChart />
        </Tabs.Tab>
        <Tabs.Tab
          label={
            <div className="flex flex-col items-start">
              <p>Bounce rate</p>
              <h1>85%</h1>
            </div>
          }
        >
          <BounceRateChart />
        </Tabs.Tab>
      </Tabs>

      <Collapse className="ellipseCollapse" in={overview}>
        <div className="py-1">
          <div className="ellipseItem">
            <TbRefreshDot />
            <p>Refresh Report</p>
          </div>
          <div className="ellipseItem">
            <BiExport />
            <p>Export Report</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AnalyticsOverview;
