import React from "react";
import "../../styles/components/AnalyticsOverview.css";
import { FaEllipsisV } from "react-icons/fa";
import { Tabs } from "@mantine/core";
import SubscribersChart from "./SubscribersChart";

const AnalyticsOverview = () => {
  return (
    <div className="analyticsOverview-Card">
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-base font-semibold mb-0 ">OVERVIEWS</h5>
        <FaEllipsisV className="cursor-pointer" />
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
              <h1>3.981</h1>
            </div>
          }
        >
          Messages tab content
        </Tabs.Tab>
        <Tabs.Tab
          label={
            <div className="flex flex-col items-start">
              <p>Bounce rate</p>
              <h1>85%</h1>
            </div>
          }
        >
          Settings tab content
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default AnalyticsOverview;
