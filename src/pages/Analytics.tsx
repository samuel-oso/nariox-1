import Layout from "../components/Layout";
import "../styles/pages/Analytics.css";
import AnalyticsOverview from "../components/analyticsOverview/AnalyticsOverview";

const Analytics = () => {
  return (
    <Layout>
      <div className="main-container">
        <div>
          <h4>Analytics</h4>
        </div>
        <div>
          <AnalyticsOverview />
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
