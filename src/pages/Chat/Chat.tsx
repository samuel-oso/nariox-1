import { useState } from "react";
import ChatUsers from "./ChatUsers";
import ChatArea from "./ChatArea";
import { USERS, ChatUserType } from "./data";
import { Grid } from "@mantine/core";
import Layout from "../../components/Layout";

// ChatApp
const Chat = () => {
  const [selectedUser, setSelectedUser] = useState<ChatUserType>(USERS[1]);

  //  On user change
  const onUserChange = (user: ChatUserType) => {
    setSelectedUser(user);
  };

  return (
    <Layout>
      <div className="main-container">
        <Grid>
          <Grid.Col lg={5} xl={3}>
            <ChatUsers onUserSelect={onUserChange} />
          </Grid.Col>
          <Grid.Col lg={7} xl={9}>
            <ChatArea selectedUser={selectedUser} />
          </Grid.Col>
        </Grid>
      </div>
    </Layout>
  );
};

export default Chat;
