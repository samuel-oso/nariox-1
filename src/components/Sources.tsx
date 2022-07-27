import { SourcesTypes } from "../data/data";
import { BiExport } from "react-icons/bi";
import { Table } from "@mantine/core";
import "../styles/components/SocialMediaTables.css";

interface SourcesProps {
  sources: SourcesTypes[];
}

const Sources = ({ sources }: SourcesProps) => {
  return (
    <div className="socialTable-card">
      <div className="flex items-center justify-between ">
        <h5 style={{ color: "var(--bs-gray-dark)" }} className="font-semibold">
          SOURCES
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
              <th>Types</th>
              <th style={{ width: "30%" }}>Sessions</th>
              <th style={{ width: "30%" }}>Views</th>
            </tr>
          </thead>
          <tbody>
            {(sources || []).map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.types}</td>
                  <td>{item.sessions}</td>
                  <td>{item.views}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Sources;
