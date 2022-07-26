import { useState } from "react";
import StatsWidget from "../components/StatsWidget";
import "../styles/components/NewUsers.css";
import { Collapse } from "@mantine/core";
import { FaEllipsisV } from "react-icons/fa";
import { BiExport } from "react-icons/bi";
import { TbRefreshDot } from "react-icons/tb";

const NewUsers = () => {
  const [users, setUsers] = useState(false);

  return (
    <div className="newUsersCard">
      <div
        style={{ borderBottom: "var(--border-bottom)" }}
        className="pt-3 pb-6"
      >
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-base font-semibold mb-0 ">NEW USERS</h5>
          <FaEllipsisV
            className="cursor-pointer"
            onClick={() => setUsers((o) => !o)}
          />
        </div>
        <StatsWidget
          title="New users this week"
          stats="13,000"
          trend={{
            textClass: "text-success",
            value: "+9.22%",
          }}
          colors={["var(--chart-300)"]}
          data={[10, 20, 67, 42, 39, 20, 24, 12, 36, 9, 33]}
        />
      </div>
      <div
        style={{ borderBottom: "var(--border-bottom)" }}
        className="pt-6 pb-6"
      >
        <StatsWidget
          title="New users this month"
          stats="42,176"
          trend={{
            textClass: "text-danger",
            value: "-12.80%",
          }}
          type="line"
          colors={["var(--chart-500)"]}
          data={[10, 20, 67, 42, 39, 20, 24, 12, 36, 9, 33]}
        />
      </div>
      <div
        style={{ borderBottom: "var(--border-bottom)" }}
        className="pt-6 pb-6"
      >
        <StatsWidget
          title="New users this year"
          stats="333,171"
          trend={{
            textClass: "text-success",
            value: "+92.27%",
          }}
          colors={["var(--chart-300)"]}
          data={[10, 20, 67, 42, 39, 20, 24, 12, 36, 9, 33]}
        />
      </div>
      <div className="pt-6 pb-2">
        <StatsWidget
          title="Returning users"
          stats="63,825"
          trend={{
            textClass: "text-danger",
            value: "-61.17%",
          }}
          type="line"
          colors={["var(--chart-500)"]}
          data={[10, 20, 67, 42, 39, 20, 24, 12, 36, 9, 33]}
        />
      </div>

      <Collapse in={users} className="userCollapse">
        <div className="py-1">
          <div className="userItem">
            <TbRefreshDot />
            <p>Refresh Report</p>
          </div>
          <div className="userItem">
            <BiExport />
            <p>Export Report</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default NewUsers;
