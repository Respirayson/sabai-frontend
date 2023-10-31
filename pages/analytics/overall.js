import React from "react";
import withAuth from "../../utils/auth";

class Overall extends React.Component {
  static async getInitialProps(ctx) {
    let authentication = await logInCheck(ctx);
    return authentication;
  }

  render() {
    return (
        <h1>Overall Analytics page under construction</h1>
    );
  }
}

export default withAuth(Overall);
