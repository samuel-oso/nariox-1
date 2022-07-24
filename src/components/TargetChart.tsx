import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Card, Collapse, Divider } from "@mantine/core";
import { ApexOptions } from "apexcharts";
import "../styles/components/Target.css";
import { FaEllipsisV } from "react-icons/fa";
import { TbRefreshDot } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

const TargetChart = () => {
  const [target, setTarget] = useState(false);

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 349,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: "var(--bs-gray-300)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "var(--bs-gray-300)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: "var(--bg-body)",
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        formatter: function (val) {
          return "$ " + val;
        },
      },
    },
  };

  const apexBarChartData = [
    {
      name: "Net Profit",
      data: [35, 44, 55, 57, 56, 61],
    },
    {
      name: "Revenue",
      data: [52, 76, 85, 101, 98, 87],
    },
  ];

  return (
    <Card className="targetCard">
      <div className="flex items-center justify-between">
        <h5 className="text-base font-semibold mb-0 ">TARGETS</h5>
        <FaEllipsisV
          className="cursor-pointer"
          onClick={() => setTarget((o) => !o)}
        />
      </div>
      <Chart
        options={apexBarChartOpts}
        series={apexBarChartData}
        type="bar"
        className="targetCharts"
        height={349}
        dir="ltr"
      />

      <Collapse in={target} className="targetCollapse">
        <div className="py-1">
          <div className="targetItem">
            <TbRefreshDot />
            <p>Refresh</p>
          </div>
          <div className="targetItem">
            <FiUserPlus />
            <p>Add New</p>
          </div>
          <Divider className="my-3" />
          <div style={{ color: "var(--danger)" }} className="targetItem">
            <TbLogout />
            <p>Exit</p>
          </div>
        </div>
      </Collapse>
    </Card>
  );
};

export default TargetChart;
