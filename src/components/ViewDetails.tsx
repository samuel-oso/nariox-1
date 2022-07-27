import { ViewsDetailTypes } from "../data/data";
import "../styles/components/ViewsDetails.css";
import { BiExport } from "react-icons/bi";
import { Table } from "@mantine/core";
import { TbDeviceDesktop } from "react-icons/tb";
import { TbDeviceMobile } from "react-icons/tb";
import { FaTabletAlt } from "react-icons/fa";

interface ViewsDetailsProps {
  viewsDetails: ViewsDetailTypes[];
}

const ViewsDetails = ({ viewsDetails }: ViewsDetailsProps) => {
  return (
    <div className="viewDetails-Card">
      <div className="flex items-center justify-between gap-6">
        <h5 style={{ color: "var(--bs-gray-dark)" }} className="font-semibold">
          VIEWS PER MINUTE
        </h5>
        <div className="viewDetails-Export">
          <p>Export </p>
          <BiExport />
        </div>
      </div>
      <div className="viewDetails-Table">
        <Table>
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Page</th>
              <th style={{ width: "25%" }}>Bounce Rate</th>
              <th style={{ width: "25%" }}>Traffic Type</th>
            </tr>
          </thead>
          <tbody>
            {(viewsDetails || []).map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div>{item.page}</div>
                  </td>
                  <td>{item.bounce_rate}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div>
                        <TbDeviceDesktop />
                      </div>
                      <div>
                        <TbDeviceMobile />
                      </div>
                      <div>
                        <FaTabletAlt />
                      </div>
                    </div>
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

export default ViewsDetails;
