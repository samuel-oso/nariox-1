import Layout from "../components/Layout";
import "../styles/pages/Analytics.css";
import { Grid } from "@mantine/core";
import AnalyticsOverview from "../components/analyticsOverview/AnalyticsOverview";
import NewUsers from "../components/NewUsers";
import SocialMediaChart from "../components/SocialMediaChart";
import Sources from "../components/Sources";
import {
  sources,
  engagementOverviews,
  platforms,
  channels,
} from "../data/data";
import EngagementOverview from "../components/EngagementOverview";
import Platforms from "../components/Platforms";
import Channels from "../components/Channels";

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
        <div>
          <div>
            <Sources sources={sources} />
          </div>
          <div>
            <EngagementOverview engagementOverviews={engagementOverviews} />
          </div>
          <div>
            <Platforms platforms={platforms} />
          </div>
          <div>
            <Channels channels={channels} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
