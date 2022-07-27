import React, { useState } from "react";
import "../styles/components/SocialMediaChart.css";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Grid, Collapse } from "@mantine/core";
import { FaEllipsisV } from "react-icons/fa";
import { BiExport } from "react-icons/bi";
import { TbRefreshDot } from "react-icons/tb";

const SocialMediaChart = () => {
  const [media, setMedia] = useState(false);

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 410,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "var(--bs-gray-300)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    xaxis: {
      categories: [
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
      ],
      labels: {
        style: {
          colors: "var(--bs-gray-300)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    legend: {
      position: "bottom",
      offsetX: 0,
      offsetY: 0,
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: "var(--gray)",
      padding: {
        bottom: 5,
      },
    },
  };

  const apexBarChartData = [
    {
      name: "Facebook",
      data: [40, 80, 20, 50, 40, 20, 20, 60, 10, 40],
    },
    {
      name: "Instagram",
      data: [0, 0, 0, 15, 0, 0, 5, 10, 0, 0],
    },
    {
      name: "Twitter",
      data: [10, 10, 5, 60, 50, 100, 80, 70, 20, 110],
    },
  ];

  return (
    <div className="socialCard">
      <div className="flex items-center justify-between mb-3">
        <h5
          style={{ color: "var(--bs-gray-dark)" }}
          className="font-semibold mb-0 "
        >
          SOCIAL MEDIA TRAFFIC
        </h5>
        <FaEllipsisV
          className="cursor-pointer"
          onClick={() => setMedia((o) => !o)}
        />
      </div>
      <Grid gutter="xl">
        <Grid.Col md={8}>
          <Chart
            options={apexBarChartOpts}
            series={apexBarChartData}
            type="bar"
            className="apex-charts"
            height={410}
            dir="ltr"
          />
        </Grid.Col>
        <Grid.Col md={3} className="socialCard-Content">
          <div>
            <div
              style={{ borderBottom: "var(--border-bottom)" }}
              className="my-3 py-3"
            >
              <h6>Twitter</h6>
              <h3>650k</h3>
            </div>
          </div>
          <div>
            <div
              style={{ borderBottom: "var(--border-bottom)" }}
              className="my-3 py-3"
            >
              <h6>Instagram</h6>
              <h3>230k</h3>
            </div>
          </div>
          <div>
            <div className="my-3 py-3">
              <h6>Facebook</h6>
              <h3>982k</h3>
            </div>
          </div>
        </Grid.Col>
      </Grid>

      <Collapse in={media} className="mediaCollapse">
        <div className="py-1">
          <div className="mediaItem">
            <TbRefreshDot />
            <p>Refresh Report</p>
          </div>
          <div className="mediaItem">
            <BiExport />
            <p>Export Report</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SocialMediaChart;
