import React from "react";
import App from "next/app";
import Layout from "../components/layout";
import cookie from "js-cookie";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "../styles/styles.scss";
import { UserProvider } from "@auth0/nextjs-auth0/client";

/**
 * Future implementation
 * 1. mobx / redux
 */

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      // <AlertProvider template={AlertTemplate} {...options}>
      // <Layout>
      //   <Component {...pageProps} />
      // </Layout>
      // </AlertProvider>

      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    );
  }
}

export default MyApp;
