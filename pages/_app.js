import React, { useEffect } from "react";
import Layout from "../components/layout";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import "../styles/styles.scss";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add any side effects here, similar to componentDidMount
    // You can manage cookies or perform other actions if needed
  }, []);
  
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
