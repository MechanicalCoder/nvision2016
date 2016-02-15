import React from 'react';

import '../../../public/css/imports/sponsors.css';
import SponsorLine from '../components/sponsorline.jsx';

class Sponsors extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      prevSponsors: require('../prevSponsors.js'),
      sponsors: require('../sponsors.js'),
      mediaPartners: require('../mediapartners.js')
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
      if (((i % 3) == 0) && (i != 0)) {
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
      if (((i % 3) == 0) && (i != 0)) {
        sponsorLines[j] = <SponsorLine sponsors={sponsors} key={sponsors[0].name}/>;
        sponsors = [];
        j++;
      }
      sponsors.push(this.state.sponsors[i]);
    }
    if (sponsors.length) {
      sponsorLines[sponsorLines.length] = <SponsorLine sponsors={sponsors} key={sponsors[0].name}/>;
    }

    let mediaPartners = [];
    sponsors = [];
    for (let i = 0, j = 0; i < this.state.mediaPartners.length; i++) {
      if (((i % 3) == 0) && (i != 0)) {
        mediaPartners[j] = <SponsorLine sponsors={sponsors} key={sponsors[0].name}/>;
        sponsors = [];
        j++;
      }
      sponsors.push(this.state.mediaPartners[i]);
    }
    if (sponsors.length) {
      mediaPartners[mediaPartners.length] = <SponsorLine sponsors={sponsors} key={sponsors[0].name}/>;
    }

    return (
      <div className="container_sponsor">
        <br/>
        <br/>
        <div className="section">
          <div className="heading">
            <h2 className="sponsr_headings"> Powered By </h2>
            <hr/>
          </div>
          <ul className="sponsr_line">
            <li className="title_sponsor">
              <a href="http://www.novatechrobo.com" target="_blank">
                <div className="details">
                  <img className="image" src="http://www.novatechrobo.com/images/novatechlogo.jpg" />
                  <div className="contact_sponsor">
                    <br/>
                    <h2> Novatech Robo </h2>
                    <br/>
                    <h3> Title Sponsor </h3>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="section2">
          <div className="heading">
            <h2 className="sponsr_headings"> Sponsors </h2>
            <hr/>
          </div>
          {sponsorLines}
        </div>
        <div className="section2">
          <div className="heading">
            <h2 className="sponsr_headings"> Media Partners </h2>
            <hr/>
          </div>
          {mediaPartners}
        </div>
        <div className="section2">
          <div className="heading">
            <h2 className="sponsr_headings"> Previous Sponsors </h2>
            <hr/>
          </div>
          {prevSponsorLines}
        </div>
      </div>
    );
  }
}

export default Sponsors;
