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
  viewsDetails,
} from "../data/data";
import EngagementOverview from "../components/EngagementOverview";
import Platforms from "../components/Platforms";
import Channels from "../components/Channels";
import ViewsDetails from "../components/ViewDetails";
import SessionbyLocations from "../components/SessionbyLocations";
import SessionbyBrowser from "../components/SessionbyBrowser";

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

        <Grid>
          <Grid.Col lg={6}>
            <SocialMediaChart />
          </Grid.Col>
          <Grid.Col lg={6}>
            <Grid>
              <Grid.Col md={6}>
                <Sources sources={sources} />
              </Grid.Col>
              <Grid.Col md={6}>
                <EngagementOverview engagementOverviews={engagementOverviews} />
              </Grid.Col>
              <Grid.Col md={6}>
                <Platforms platforms={platforms} />
              </Grid.Col>
              <Grid.Col md={6}>
                <Channels channels={channels} />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>

        <div>
          <div>
            <ViewsDetails viewsDetails={viewsDetails} />
          </div>
          <div>
            <SessionbyLocations />
          </div>
          <div>
            <SessionbyBrowser />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
