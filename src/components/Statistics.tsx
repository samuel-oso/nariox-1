import React from "react";
import { Grid } from "@mantine/core";
import StatisticsChartWidget from "./StatisticsChartWidget";
import { TbArrowNarrowDown } from "react-icons/tb";
import { TbArrowNarrowUp } from "react-icons/tb";

const Statistics = () => {
  return (
    <div>
      <Grid className="statsGrid">
        <Grid.Col md={6} lg={3} className="statsGridCol">
          <StatisticsChartWidget
            title="Today Revenue"
            stats="$150"
            trend={{
              textClass: "text-success",
              icon: TbArrowNarrowUp,
              value: "6.01%",
            }}
            colors={["var(--chart-100)"]}
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
            colors={["var(--chart-200)"]}
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
            colors={["var(--chart-300)"]}
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
            colors={["var(--chart-400)"]}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Statistics;
