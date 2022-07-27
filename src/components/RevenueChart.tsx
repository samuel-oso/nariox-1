import React, { useState } from "react";
import "../../src/styles/components/Revenue.css";
import { Card, Collapse, Divider } from "@mantine/core";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { FaEllipsisV } from "react-icons/fa";

const RevenueChart = () => {
  const [revenue, setRevenue] = useState(false);

  function getDaysInMonth(month: any, year: any) {
    var date = new Date(year, month, 1);
    var days = [];
    var idx = 0;
    while (date.getMonth() === month && idx < 15) {
      var d = new Date(date);
      days.push(
        d.getDate() + " " + d.toLocaleString("en-us", { month: "short" })
      );
      date.setDate(date.getDate() + 1);
      idx += 1;
    }
    return days;
  }

  const now = new Date();
  const labels = getDaysInMonth(now.getMonth(), now.getFullYear());

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 329,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    series: [
      {
        name: "Revenue",
        data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
      },
    ],
    legend: {
      show: false,
    },
    colors: ["var(--success)"],
    xaxis: {
      type: "category",
      categories: labels,
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: true,
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
        formatter: (val: number) => {
          return val + "k";
        },
        style: {
          colors: "var(--bs-gray-300)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.5,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0,
        stops: [45, 80],
      },
      pattern: {
        style: "circles",
      },
    },
  };

  const apexBarChartData = [
    {
      name: "Revenue",
      data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
    },
  ];

  return (
    <Card className="revenueCard">
      <div className="flex items-center justify-between">
        <h5
          style={{ color: "var(--bs-gray-dark)" }}
          className="font-semibold mb-0 "
        >
          REVENUE
        </h5>
        <FaEllipsisV
          className="cursor-pointer"
          onClick={() => setRevenue((o) => !o)}
        />
      </div>
      <Chart
        options={apexBarChartOpts}
        series={apexBarChartData}
        type="area"
        className="revenueCharts"
        height={329}
        dir="ltr"
      />

      <Collapse className="revenueCollapse" in={revenue}>
        <div>
          <p className="revenueItem">Today</p>
          <p className="revenueItem">7 Days</p>
          <p className="revenueItem">15 Days</p>
          <Divider className="my-3" />
          <p className="revenueItem">1 Month</p>
          <p className="revenueItem">6 Months</p>
          <Divider className="my-3" />
          <p className="revenueItem"> 1 Year</p>
        </div>
      </Collapse>
    </Card>
  );
};

export default RevenueChart;
