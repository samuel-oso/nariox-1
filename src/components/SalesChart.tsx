import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Card, Collapse, Divider } from "@mantine/core";
import { ApexOptions } from "apexcharts";
import "../styles/components/SalesChart.css";
import { FaEllipsisV } from "react-icons/fa";
import { TbRefreshDot } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

const SalesChart = () => {
  const [sales, setSales] = useState(false);

  const apexBarChartOpts: ApexOptions = {
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "11px",
              fontFamily: "IBM Plex Sans, sans-serif",
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter: function (val) {
                return val;
              },
            },
          },
        },
        expandOnClick: false,
      },
    },
    chart: {
      height: 291,
      type: "donut",
    },
    legend: {
      show: true,
      fontSize: "11px",
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 700,
      position: "right",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 6,
        vertical: 3,
      },
      labels: {
        colors: "var(--bs-gray-300)",
        useSeriesColors: false,
      },
    },
    labels: ["Clothes 44k", "Smartphons 55k", "Electronics 41k", "Other 17k"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    tooltip: {
      y: {
        formatter: (value: number) => {
          return value + "k";
        },
      },
    },
  };

  const apexBarChartData = [44, 55, 41, 17];

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h5 className="text-base font-semibold mb-0 ">SALES BY CATEGORY</h5>
        <FaEllipsisV
          className="cursor-pointer"
          onClick={() => setSales((o) => !o)}
        />
      </div>
      <Chart
        options={apexBarChartOpts}
        series={apexBarChartData}
        type="donut"
        className="apex-charts mb-0 mt-4"
        height={291}
        dir="ltr"
      />

      <Collapse in={sales} className="salesCollapse">
        <div className="py-1">
          <div className="salesItem">
            <TbRefreshDot />
            <p>Refresh</p>
          </div>
          <div className="salesItem">
            <FiUserPlus />
            <p>Add New</p>
          </div>
          <Divider className="my-3" />
          <div style={{ color: "var(--danger)" }} className="salesItem">
            <TbLogout />
            <p>Exit</p>
          </div>
        </div>
      </Collapse>
    </Card>
  );
};

export default SalesChart;
