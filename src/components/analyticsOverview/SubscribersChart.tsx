import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { dataSeries } from "../../data/data";

const SubscribersChart = () => {
  let ts2 = 1484418600000;
  let dates = [];

  for (let i = 0; i < 120; i++) {
    ts2 = ts2 + 86400000;
    const innerArr = [ts2, dataSeries[1][i].value];
    dates.push(innerArr);
  }

  const apexBarChartOpts: ApexOptions = {
    chart: {
      type: "area",
      stacked: false,
      height: 371,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [3],
    },
    series: [
      {
        name: "Subscribers",
        data: [],
      },
    ],
    markers: {
      size: 0,
    },
    colors: ["var(--bs-primary)"],
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: "var(--bs-gray-500)",
    },
    fill: {
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 70, 80, 100],
      },
    },
    yaxis: {
      min: 20000000,
      max: 250000000,
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
        style: {
          colors: "var(--bs-gray-300)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "var(--bs-gray-300)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
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

  const apexBarChartData: ApexAxisChartSeries = [
    {
      name: "Subscribers",
      data: dates,
    },
  ];

  return (
    <Chart
      options={apexBarChartOpts}
      series={apexBarChartData}
      type="area"
      className="apex-charts"
      height={371}
    />
  );
};

export default SubscribersChart;
