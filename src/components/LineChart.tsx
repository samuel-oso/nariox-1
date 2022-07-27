import "../styles/components/LineChart.css";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ApexLinearChartData } from "../data/data";

interface LineChartProps {
  lineChartWithData: ApexLinearChartData;
  showLoader?: boolean;
}

// simple line chart
const LineChart = ({ lineChartWithData }: LineChartProps) => {
  // default options
  const apexLineChartWithLables: ApexOptions = {
    chart: {
      height: 380,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: [3, 3],
      curve: "smooth",
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: "var(--gray)",
    },
    markers: {
      size: 6,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Month",
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
      title: {
        text: "Temperature",
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  // chart data
  const apexLineChartWithLablesData = [
    {
      name: "High - 2018",
      data: lineChartWithData.data1 || [],
    },
    {
      name: "Low - 2018",
      data: lineChartWithData.data2 || [],
    },
  ];

  return (
    <div className="lineCard">
      <h5
        style={{ color: "var(--bs-gray-dark)" }}
        className="font-semibold mb-5 "
      >
        LINE CHART
      </h5>
      <Chart
        options={apexLineChartWithLables}
        series={apexLineChartWithLablesData}
        type="line"
        height={380}
        className="apex-charts"
        dir="ltr"
      />
    </div>
  );
};

export default LineChart;
