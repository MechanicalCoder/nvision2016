import React from 'react';

import '../../../public/css/imports/sponsors.css';
import SponsorLine from '../components/sponsorline.jsx';

class Sponsors extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      prevSponsors: require('../workshops.js').ew,
      sponsors: require('../workshops.js').iw
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    let prevSponsorLines = [];
    let sponsors = [];
    for (let i = 0, j = 0; i < this.state.prevSponsors.length; i++) {
      if (((i % 2) == 0) && (i != 0)) {
        prevSponsorLines[j] = <SponsorLine sponsors={sponsors} key={sponsors[0].name}/>;
        sponsors = [];
        j++;
      }
      sponsors.push(this.state.prevSponsors[i]);
    }

    if (sponsors.length) {
      prevSponsorLines[prevSponsorLines.length] = <SponsorLine sponsors={sponsors} key={sponsors[0].name}/>;
    }

    let sponsorLines = [];
    sponsors = [];
    for (let i = 0, j = 0; i < this.state.sponsors.length; i++) {
      if (((i % 2) == 0) && (i != 0)) {
        sponsorLines[j] = <SponsorLine sponsors={sponsors} key={sponsors[0].name}/>;
        sponsors = [];
        j++;
      }
      sponsors.push(this.state.sponsors[i]);
    }
    if (sponsors.length) {
      sponsorLines[sponsorLines.length] = <SponsorLine sponsors={sponsors} key={sponsors[0].name}/>;
    }

    return (
      <div className="container_sponsor">
        <br/>
        <br/>
        <div className="section">
          <div className="heading">
            <h2 className="sponsr_headings"> Internal Workshops </h2>
            <hr/>
          </div>
          {sponsorLines}
        </div>
        <div className="section2">
          <div className="heading">
            <h2 className="sponsr_headings"> Outreach Workshops </h2>
            <hr/>
          </div>
          {prevSponsorLines}
        </div>
      </div>
    );
  }
}

export default Sponsors;
