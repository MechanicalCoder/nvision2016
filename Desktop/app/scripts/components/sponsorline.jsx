import React from 'react';
import { Link } from 'react-router';

import Sponsor from './sponsor.jsx';

const SponsorLine = (props) => {
  let sponsors = props.sponsors.map(sponsor => {
    return <Sponsor {...sponsor} key={sponsor.name}/>
  })
  return (
    <ul className="sponsr_line">
      {sponsors}
    </ul>
  )
};

SponsorLine.propTypes = {
  sponsors: React.PropTypes.array
}

export default SponsorLine;
