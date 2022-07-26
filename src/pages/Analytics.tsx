import Layout from "../components/Layout";
import "../styles/pages/Analytics.css";
import AnalyticsOverview from "../components/analyticsOverview/AnalyticsOverview";
import NewUsers from "../components/NewUsers";

const Analytics = () => {
  return (
    <Layout>
      <div className="main-container">
        <div>
          <h4>Analytics</h4>
        </div>
        <div>
          <div>
            <AnalyticsOverview />
          </div>
          <div>
            <NewUsers />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
