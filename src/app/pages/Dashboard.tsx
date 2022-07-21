import { useState } from "react";
import Layout from "../components/Layout";
import "../../styles/pages/Dashboard.css";
import { Collapse, Button } from "@mantine/core";
import DatePicker from "../components/DatePicker";
import { TbNotes } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbPrinter } from "react-icons/tb";
import { TbFile } from "react-icons/tb";

const Dashboard = () => {
  const [download, setDownload] = useState(false);

  return (
    <Layout>
      <div className="main-container">
        <div className="py-5   px-5 flex flex-col items-start gap-6 md:flex-row md:justify-between md:items-center">
          <h4
            style={{ color: "var(--bs-gray-dark" }}
            className="text-base font-medium "
          >
            Dashboard
          </h4>
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
      </div>

      <Collapse
        className="w-36 rounded-b rounded-t-none absolute py-1 downloadCollapse"
        in={download}
      >
        <div>
          <div className="flex items-center gap-2 py-1.5 px-5 cursor-pointer">
            <MdOutlineEmail />
            <p>Email</p>
          </div>
          <div className="flex items-center gap-2 py-1.5 px-5 cursor-pointer">
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
          <div className="flex items-center gap-2 py-1.5 px-5 cursor-pointer">
            <TbFile />
            <p>Re-Generate</p>
          </div>
        </div>
      </Collapse>
    </Layout>
  );
};

export default Dashboard;
