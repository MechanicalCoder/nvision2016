import React from 'react';
import { Link } from 'react-router';

const Coordinator = (props) => {
  return (
    <li className="childitem">
      <div className="details">
        <img className="image team_image" src={props.image || "img/team/chandan.png"} />
        <div className="hoveritem">
          <h3 className="designation"> {props.designation} </h3>
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
    </li>
  )
};

Coordinator.propTypes = {
  image: React.PropTypes.string,
  designation: React.PropTypes.string,
  fbURL: React.PropTypes.string,
  twURL: React.PropTypes.string,
  name: React.PropTypes.string,
  phone: React.PropTypes.string,
  email: React.PropTypes.string
}

export default Coordinator;
