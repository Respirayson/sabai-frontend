import React from "react";
import Sidebar from "react-sidebar";
import Head from "next/head";
import Header from "./header";
import SideMenu from "./sideMenu";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mql: null,
      sidebarDocked: null,
      sidebarOpen: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {}
  componentDidMount() {
    let mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql, sidebarDocked: mql.matches });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    let { mql } = this.state;

    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar
          sidebar={<SideMenu />}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "#180424" } }}
          transitions={false}
        >
          <div>{this.props.children}</div>
        </Sidebar>
      </React.Fragment>
    );
  }
}
