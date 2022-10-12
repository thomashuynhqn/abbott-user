import React from "react";
import { Page } from "zmp-framework/react";
import Userinfo from "../components/user-info";
import Banner from "../components/banner";

const HomePage = () => {
  return (
    <Page name="home">
      <Userinfo />
    </Page>
  );
};
export default HomePage;
