import Layout from "../components/Layout";
import "../styles/pages/Analytics.css";
import { Grid } from "@mantine/core";
import AnalyticsOverview from "../components/analyticsOverview/AnalyticsOverview";
import NewUsers from "../components/NewUsers";
import SocialMediaChart from "../components/SocialMediaChart";

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

        <div>
          <SocialMediaChart />
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
