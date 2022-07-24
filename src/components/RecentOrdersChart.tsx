import React from "react";
import { useTable } from "react-table";

function RecentOrdersChart() {
  const data: Array<any> = React.useMemo(
    () => [
      {
        col1: "Biffco Enterprises Ltd.",
        col2: "Kristin Watson",
        col3: "Standard",
        col4: "Test",
        col5: "Test",
        col6: "8 Mar 2022 11:57pm",
      },
    ],
    []
  );

  const columns: Array<any> = React.useMemo(
    () => [
      {
        Header: "Company",
        accessor: "col1",
      },
      {
        Header: "Owner",
        accessor: "col2",
      },
      {
        Header: "Plan",
        accessor: "col3",
      },
      {
        Header: "Access",
        accessor: "col4",
      },
      {
        Header: "Status",
        accessor: "col5",
      },
      {
        Header: "Date Created",
        accessor: "col6",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className="table-rows" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default RecentOrdersChart;
