import React, { Component } from "react";
import Header from "./Header.js";
import Content from "./Content";
import LaunchList from "./LaunchList";
import Footer from "./Footer";
import Loader from "./Loader";
import './style.css'
export class Layout extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    this.setState({ loading: false });  
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="loading"><Loader /></div>
        ) : (
          <div>
            <div className="container-fluid">             
              <Header />
              <Content />
              <LaunchList />
              <Footer />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Layout;
