import React from 'react';
import {Link} from 'react-router';

import NotFound from './notFound.jsx';

import '../../../public/css/imports/event.css'

const Details = (props) => {
  if (props.current == "introduction") {
    return <p style={{marginTop: '6em'}}>{props.event.introduction}</p>
  } else {
    return <div></div>
  }
}

class Domains extends React.Component {

  constructor(props){
    super(props);
    let events = require('../events.js')
    let domain = events[props.params.domain]
    if (domain && domain[props.params.event]) {
      this.state = {
        event: domain[props.params.event],
        current: ""
      };
    } else {
      this.state = {
        event: null,
        current: ""
      };
    }
  }

  render() {
    let goBack = () => {
      window.location = "#events/" + this.props.params.domain;
    };

    if (!this.state.event) {
      return <NotFound />;
    } else {
      let evt = this.state.event;
      var This = this;
      let setIntro = function() {
        This.setState({
          current: "introduction"
        })
      };

      let resetRules = function() {
        This.setState({
          current: ''
        })
      }

      let aStyle = {};

      if (this.state.current) {
        aStyle = {top: '1.8em'};
      } else {
        aStyle = {top: '5em'};
      }
  
      return (
        <div className="container event">
            <h1>{evt.name}</h1>
            <nav className="pushmenu pushmenu-open" id="event">
              <a style={aStyle} onClick={setIntro}>Introduction</a>
              <div id="eventDetails"> 
                <Details {...this.state} />
              </div>
              <a href={evt.file} target='_blank' style={aStyle} onClick={resetRules} >Rules</a>
            </nav>
            <div id="evt_close" onClick={goBack}>
              X
            </div>
        </div>)
    }
  }
}

export default Domains;
