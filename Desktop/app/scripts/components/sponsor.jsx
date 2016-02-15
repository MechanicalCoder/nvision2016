import React from 'react';
import { Link } from 'react-router';

const Sponsor = (props) => {
  return (
    <li className="childitem">
      <a href={props.url} target="_blank">
        <div className="details">
          <img className="image" src={props.logo} />
          <div className="contact_sponsor">
            <br/>
            <h2> {props.name} </h2>
            <br/>
            <h3> {props.sponsorFor} </h3>
          </div>
        </div>
      </a>
    </li>
  )
};

Sponsor.propTypes = {
  logo: React.PropTypes.string,
  name: React.PropTypes.string,
  sponsorFor: React.PropTypes.string
}

export default Sponsor;
