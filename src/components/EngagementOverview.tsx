import { EngagementOverviewsTypes } from "../data/data";
import { BiExport } from "react-icons/bi";
import { Table } from "@mantine/core";
import "../styles/components/SocialMediaTables.css";

interface EngagementOverviewsProps {
  engagementOverviews: EngagementOverviewsTypes[];
}

const EngagementOverview = ({
  engagementOverviews,
}: EngagementOverviewsProps) => {
  return (
    <div className="socialTable-card">
      <div className="flex items-center justify-between gap-6">
        <h5 style={{ color: "var(--bs-gray-dark)" }} className="font-semibold">
          ENGAGEMENT OVERVIEWS
        </h5>
        <div className="socialTable-Export">
          <p>Export </p>
          <BiExport />
        </div>
      </div>
      <Table className="mt-4">
        <thead>
          <tr>
            <th>Duration (Secs) </th>
            <th style={{ width: "30%" }}>Sessions</th>
            <th style={{ width: "30%" }}>Views</th>
          </tr>
        </thead>
        <tbody>
          {(engagementOverviews || []).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.duration}</td>
                <td>{item.sessions}</td>
                <td>{item.views}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default EngagementOverview;
