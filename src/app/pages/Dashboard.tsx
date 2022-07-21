import Layout from "../components/Layout";
import { Container } from "@mantine/core";

const Dashboard = () => {
  return (
    <Layout>
      <div className="main-container">
        <Container style={{ paddingLeft: 0, paddingRight: 0 }} size="lg">
          <div className="titleBox">
            <div>
              <h4>Dashboard</h4>
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
