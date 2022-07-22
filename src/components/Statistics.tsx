import React from "react";
import { Grid } from "@mantine/core";
import StatisticsChartWidget from "./StatisticsChartWidget";
import { TbArrowNarrowDown } from "react-icons/tb";
import { TbArrowNarrowUp } from "react-icons/tb";

const Statistics = () => {
  return (
    <div>
      <Grid>
        <Grid.Col md={6} lg={3} className="statsGridCol">
          <StatisticsChartWidget
            title="Today Revenue"
            stats="$150"
            trend={{
              textClass: "text-success",
              icon: TbArrowNarrowUp,
              value: "6.01%",
            }}
            colors={["#727cf5"]}
          />
        </Grid.Col>
        <Grid.Col md={6} lg={3} className="statsGridCol">
          <StatisticsChartWidget
            title="Product Sold"
            stats="9801"
            trend={{
              textClass: "text-danger",
              icon: TbArrowNarrowDown,
              value: "35.16%",
            }}
            colors={["#f77e53"]}
          />
        </Grid.Col>
        <Grid.Col md={6} lg={3} className="statsGridCol">
          <StatisticsChartWidget
            title="New Customers"
            stats="102"
            trend={{
              textClass: "text-success",
              icon: TbArrowNarrowUp,
              value: "3.12%",
            }}
            colors={["#43d39e"]}
          />
        </Grid.Col>
        <Grid.Col md={6} lg={3} className="statsGridCol">
          <StatisticsChartWidget
            title="New Visitors"
            stats="1259"
            trend={{
              textClass: "text-danger",
              icon: TbArrowNarrowDown,
              value: "18.95%",
            }}
            colors={["#ffbe0b"]}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Statistics;
