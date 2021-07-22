import React, { Component } from "react";
import axios from "axios";
import GData from './GData'
import './style.css'
export class LaunchList extends Component {

  constructor(params) {
    super(params);
    this.state = {
      Launches: [],
    };
    this.getLaunches = this.getLaunches.bind(this);
  }
  async getLaunches() {
    const data = await axios.get("https://api.spacex.land/graphql/");
    return await data;
  }
  componentDidMount() {
    
    // const launches = this.getLaunches();
    // launches.then((data)=>{   
    //  // var res=data.data.filter(); 
    // this.setState({ Launches: data.data }, () =>
    //   console.log(this.state.Launches)
    // );
    // }
    // );
  }

  render() {
    // console.log(this.state.Launches);
    return (
      <div className="dlaunch">
<h1> OUR PAST LAUNCHES </h1>
      <GData />
        {/* { this.state.Launches.map((item, key) => (
          <div className="card" key={key} >{item.rocket.rocket_name}</div>
        ))}   */}
      </div>
    );
  }
}

export default LaunchList;
