import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BiExport } from "react-icons/bi";
import { TbRefreshDot } from "react-icons/tb";
import { Collapse } from "@mantine/core";
import { FaEllipsisV } from "react-icons/fa";
import "../styles/components/SessionbyBrowser.css";
import { BiSquareRounded } from "react-icons/bi";

const SessionbyBrowser = () => {
  const [sessionBrowser, setSessionBrowser] = useState(false);

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 356,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: -30,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: [
      "var(--bs-primary)",
      "var(--success)",
      "var(--danger)",
      "var(--chart-400)",
    ],
    labels: ["Firefox", "Chrome", "Opera Mini", "Safari"],
    legend: {
      show: false,
      floating: true,
      fontSize: "13px",
      position: "left",
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: true,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        horizontal: 1,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  const apexBarChartData = [76, 67, 61, 90];

  return (
    <div className="sessionBrowser-Card">
      <div className="flex items-center justify-between mb-5">
        <h5 style={{ color: "var(--bs-gray-dark)" }} className="font-semibold">
          SESSION BY BROWSER
        </h5>
        <FaEllipsisV
          className="cursor-pointer"
          onClick={() => setSessionBrowser((o) => !o)}
        />
      </div>
      <div className="my-3" dir="ltr">
        <Chart
          options={apexBarChartOpts}
          series={apexBarChartData}
          type="radialBar"
          className="apex-charts"
          height={356}
          dir="ltr"
        />
      </div>

      <div className="browserLegend">
        <div className="mb-1  flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiSquareRounded className="text-primary" />
            <p>Firefox</p>
          </div>
          <p>32.8%</p>
        </div>
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiSquareRounded className="text-success" />
            <p>Chrome</p>
          </div>
          <p>16.5%</p>
        </div>
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiSquareRounded className="text-danger" />
            <p>Opera Mini</p>
          </div>
          <p>38.3%</p>
        </div>
        <div className="mb-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiSquareRounded className="text-warning" />
            <p>Safari</p>
          </div>
          <p>12.4%</p>
        </div>
      </div>

      <Collapse in={sessionBrowser} className="browserCollapse">
        <div className="py-1">
          <div className="browserItem">
            <TbRefreshDot />
            <p>Refresh Report</p>
          </div>
          <div className="browserItem">
            <BiExport />
            <p>Export Report</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SessionbyBrowser;
