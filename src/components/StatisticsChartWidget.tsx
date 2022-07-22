import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Card } from "@mantine/core";
import classNames from "classnames";
import { IconType } from "react-icons";
import "../../src/styles/components/Statistics.css";

interface StatisticsChartWidgetProps {
  title?: string;
  stats?: string;
  trend: {
    textClass: string;
    icon: IconType;
    value: string;
  };
  colors?: Array<string>;
}

const StatisticsChartWidget = ({
  title,
  stats,
  trend,
  colors,
}: StatisticsChartWidgetProps) => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    colors: colors,
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName) => {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0,
        stops: [45, 100],
      },
    },
  };

  // chart data
  const series = [
    {
      data: [10, 25, 5, 30, 10, 45, 15, 60, 20, 80, 40],
    },
  ];

  return (
    <Card className="statsCard">
      <div>
        <div className="flex">
          <div className="grow">
            <span
              style={{ color: "var(--bs-gray-300)" }}
              className="uppercase text-xs font-bold"
            >
              {title}
            </span>
            <h3
              style={{ color: "var(--bs-gray-dark)" }}
              className="mb-0 font-medium text-xl mt-2.5"
            >
              {stats}
            </h3>
          </div>
          <div className="self-center shrink-0">
            <Chart
              className="statsCharts"
              options={options}
              series={series}
              type="area"
              height={45}
              width={80}
            />
            <span
              className={classNames(
                "font-bold",
                "text-xs",
                "flex",
                "items-center",
                "gap-1",
                "justify-center",
                trend.textClass
              )}
            >
              <trend.icon /> {trend.value}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatisticsChartWidget;
