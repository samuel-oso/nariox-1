import Layout from "../components/Layout";
import "../styles/pages/Analytics.css";
import AnalyticsOverview from "../components/analyticsOverview/AnalyticsOverview";
import NewUsers from "../components/NewUsers";
import { Grid } from "@mantine/core";

const Analytics = () => {
  return (
    <Layout>
      <div className="main-container">
        <div>
          <h4>Analytics</h4>
        </div>

        <Grid>
          <Grid.Col lg={8}>
            <AnalyticsOverview />
          </Grid.Col>
          <Grid.Col lg={4}>
            <NewUsers />
          </Grid.Col>
        </Grid>
      </div>
    </Layout>
  );
};

export default Analytics;
