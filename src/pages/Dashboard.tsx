import { useState } from "react";
import Layout from "../components/Layout";
import { Grid } from "@mantine/core";
import "../../src/styles/pages/Dashboard.css";
import { Collapse, Button } from "@mantine/core";
import DatePicker from "../components/DatePicker";
import { TbNotes } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbPrinter } from "react-icons/tb";
import { TbFile } from "react-icons/tb";
import Statistics from "../components/Statistics";
import RevenueChart from "../components/RevenueChart";
import TargetChart from "../components/TargetChart";
import Overview from "../components/Overview";
import SalesChart from "../components/SalesChart";
import RecentOrdersTable from "../components/RecentOrdersTable";
import { orderDetails, lineChartWithData } from "../data/data";
import TopPerformers from "../components/TopPerformers";
import Tasks from "../components/Tasks";
import LineChart from "../components/LineChart";

const Dashboard = () => {
  const [download, setDownload] = useState(false);

  return (
    <Layout>
      <div className="main-container">
        <div className="flex flex-col items-start gap-6 mb-8 md:flex-row md:justify-between md:items-center">
          <h4>Dashboard</h4>
          <div className="flex gap-4 w-full flex-col md:flex-row md:w-fit">
            <DatePicker />
            <Button
              className="py-1.5 px-3.5 w-36"
              style={{ background: "var(--bs-primary)" }}
              leftIcon={<TbNotes />}
              rightIcon={<FiChevronDown />}
              onClick={() => setDownload((o) => !o)}
            >
              <p className="font-normal">Download</p>
            </Button>
          </div>
        </div>
        <div>
          <Statistics />
        </div>

        <Grid>
          <Grid.Col lg={3}>
            <Overview />
          </Grid.Col>
          <Grid.Col lg={6}>
            <div>
              <RevenueChart />
            </div>
          </Grid.Col>
          <Grid.Col lg={3}>
            <div>
              <TargetChart />
            </div>
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col lg={6}>
            <SalesChart />
          </Grid.Col>
          <Grid.Col lg={6}>
            <RecentOrdersTable orderDetails={orderDetails} />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col lg={4}>
            <TopPerformers />
          </Grid.Col>
          <Grid.Col lg={4}>
            <Tasks />
          </Grid.Col>
          <Grid.Col lg={4}>
            <LineChart lineChartWithData={lineChartWithData} />
          </Grid.Col>
        </Grid>
      </div>

      {/* Download Button collapse */}
      <Collapse className="downloadCollapse" in={download}>
        <div>
          <div className="downloadCol-Sub">
            <MdOutlineEmail />
            <p>Email</p>
          </div>
          <div className="downloadCol-Sub">
            <TbPrinter />
            <p>Print</p>
          </div>
          <div
            style={{
              borderTop: "var(--border-top)",
              color: "var(--bs-gray-500)",
            }}
            className="h-px my-3"
          />
          <div className="downloadCol-Sub">
            <TbFile />
            <p>Re-Generate</p>
          </div>
        </div>
      </Collapse>

      {/* Overview ellipse menu */}
    </Layout>
  );
};

export default Dashboard;
