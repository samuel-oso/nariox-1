import { PlatformTypes } from "../data/data";
import { Progress } from "@mantine/core";
import { BiExport } from "react-icons/bi";
import { Table } from "@mantine/core";
import "../styles/components/SocialMediaTables.css";

interface PlatformsProps {
  platforms: PlatformTypes[];
}

const Platforms = ({ platforms }: PlatformsProps) => {
  return (
    <div className="socialTable-card">
      <div className="flex items-center justify-between ">
        <h5 style={{ color: "var(--bs-gray-dark)" }} className="font-semibold">
          PLATFORMS
        </h5>
        <div className="socialTable-Export">
          <p>Export </p>
          <BiExport />
        </div>
      </div>
      <div className="socialMedia-table">
        <Table className="mt-4">
          <thead>
            <tr>
              <th>System</th>
              <th>Visits</th>
              <th style={{ width: "40%" }}></th>
            </tr>
          </thead>
          <tbody>
            {(platforms || []).map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.system}</td>
                  <td>{item.visits}</td>
                  <td>
                    <Progress value={item.progress} style={{ height: "3px" }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Platforms;
