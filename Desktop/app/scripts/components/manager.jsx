import React from 'react';
import { Link } from 'react-router';

import Coordinator from './coordinator.jsx';

const Manager = (props) => {
  let p = props.coordinators[0];
  let coordsArray = p.map(coordList => {
    let c = coordList.map(coord => {
      return <Coordinator {...coord} key={coord.name} />
    })

    return (
      <ul className="managerchild">
        {c}
      </ul>
    )
  });

  return (
    <div className="manager">
      <h2 className="header"> {props.manager} </h2>
      <hr />
      <p className="subtext"><i>{props.managerFor}</i> </p>
      <div className="details">
        <img className="image team_image" src={props.image || "img/team/chandan.png"} />
        <div className="hoveritem">
          <h3 className="designation"> {props.manager} </h3>
          <hr />
          <div className="links">
            <a href={props.fbURL}><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" />
            </a>
            <a href={props.twURL}><img src="http://wisdomwayscenter.org/uploads/images/Social%20Media%20Icons/twitter.png" />
            </a>
          </div>
        </div>
        <div className="contact">
          <h2> {props.name} </h2>
          <span><i className="fa fa-phone"></i></span>&nbsp;<span><a href={"tel:" + props.phone}>{props.phone}</a></span>
          <br />
          <span><i className="fa fa-envelope"></i></span>&nbsp;&nbsp;&nbsp;<span><a href={"mailto:" + props.email}>{props.email}</a></span>
        </div>
      </div>
      {coordsArray}
    </div>
  )
};

Manager.propTypes = {
  manager: React.PropTypes.string,
  managerFor: React.PropTypes.string,
  fbURL: React.PropTypes.string,
  twURL: React.PropTypes.string,
  name: React.PropTypes.string,
  phone: React.PropTypes.string,
  email: React.PropTypes.string,
  coordinators: React.PropTypes.array
}

export default Manager;
