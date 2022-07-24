import { Card, Table, Badge, Button } from "@mantine/core";
import { OrdersItemTypes } from "../data/data";
import classNames from "classnames";
import "../../src/styles/components/RecentOrdersTable.css";
import { BiExport } from "react-icons/bi";

interface OrdersProps {
  orderDetails: OrdersItemTypes[];
}

const RecentOrdersTable = ({ orderDetails }: OrdersProps) => {
  return (
    <Card className="ordersCard">
      <div className="flex items-center justify-between mb-7">
        <h5 className="text-base font-semibold mb-0 ">RECENT ORDERS</h5>
        <Button leftIcon={<BiExport />}>
          <p>Export</p>
        </Button>
      </div>
      <div className="ordersTable">
        <Table verticalSpacing="sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Customer</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {(orderDetails || []).map((item, index) => {
              return (
                <tr key={index}>
                  <td>#{item.id}</td>
                  <td>{item.product}</td>
                  <td>{item.customer}</td>
                  <td>{item.price}</td>
                  <td>
                    <span
                      className={classNames({
                        "badge-pending": item.status === "Pending",
                        "badge-success": item.status === "Delivered",
                        "badge-failed": item.status === "Declined",
                      })}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default RecentOrdersTable;
