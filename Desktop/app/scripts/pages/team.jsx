import React from 'react';
import { Link } from 'react-router';

import '../../../public/css/imports/team.css';

import Manager from '../components/manager.jsx';

class Team extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      team: require('../team.js')
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="container_team">
        <div className="main">
          <center>
            <h1 className="teamheader"> Team &eta;vision 2016 </h1>
          </center>
          <div className="block">
            <Manager {...this.state.team[0]}/>
          </div>
          <div className="block m2">
            <Manager {...this.state.team[1]}/>
          </div>
          <div className="block m3">
            <Manager {...this.state.team[2]}/>
          </div>
          <div className="block m4">
            <Manager {...this.state.team[3]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
