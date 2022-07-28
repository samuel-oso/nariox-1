import { ChannelsTypes } from "../data/data";
import { Progress } from "@mantine/core";
import { BiExport } from "react-icons/bi";
import { Table } from "@mantine/core";
import "../styles/components/SocialMediaTables.css";

interface ChannelsProps {
  channels: ChannelsTypes[];
}

const Channels = ({ channels }: ChannelsProps) => {
  return (
    <div style={{ marginBottom: "24px" }} className=" socialTable-card">
      <div className="flex items-center justify-between ">
        <h5 style={{ color: "var(--bs-gray-dark)" }} className="font-semibold">
          CHANNELS
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
              <th>Channel</th>
              <th>Visits</th>
              <th style={{ width: "40%" }}></th>
            </tr>
          </thead>
          <tbody>
            {(channels || []).map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.channel}</td>
                  <td>{item.visits}</td>
                  <td>
                    <Progress
                      value={item.progress}
                      style={{ height: "3px" }}
                      color={item.color && item.color}
                    />
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

export default Channels;
