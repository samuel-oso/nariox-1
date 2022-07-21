import Layout from "../../components/navigation/Layout";
import { Container } from "@mantine/core";

const Dashboard = () => {
  return (
    <Layout>
      <div className="main-container">
        <Container style={{ paddingLeft: 0, paddingRight: 0 }} size="lg">
          <div>some dummy text</div>
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
