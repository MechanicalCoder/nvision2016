import React from 'react';

import '../../../public/css/imports/updates.css';

class Updates extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="updates_container workshop">
        <h1>Monochrome Madness</h1>
        <div className="ws_header">
          <div className="right_points">
            <br/>
            <p>ηvision, IIT Hyderabad in association with Indian Institute of Photography brings to you the photography challenge of the year. With MONOCHROME PHOTOGRAPHY as the theme, express this colorful world in a single colour using your best photography talents and win amazing prizes worth 15,000.</p>
          </div>
          <img src="/img/events/madness-cover.jpg"/>
        </div>
        <div className="block_display">
          <p>
            Details :
          </p>
          <br/>
          <ol>
            <li>
              1. The best pictures will be exhibited during the main fest in January and the final results will be declared during the fest.
            </li>
            <br/>
            <li>
              2. Two final winners will be declared: <br />
              PEOPLES CHOICE AWARD(based on the Facebook points) and  <br />
              BEST PHOTOGRAPHY AWARD(decided by the judges after the exhibition)
            </li>
            <br/>
            <li>
              3. Points distribution on Facebook will be as follows: 5 points for each comment (only one comment per person will be considered), 10 for each like (likes by only them will be considered who have liked the ηvision Facebook page) and 20 points for each share.
            </li>
            <br/>
            <li>
              4. A surprise gift awaits all the participants.
            </li>
            <br/>
            <li>
              5. Whenever you upload, challenge three other friends of yours who you think can compete by tagging them.
            </li>
            <br/>
            <li>
              6. Do not forget to include the hashtag ‪#‎Monochrome_nvision‬ with your picture.
            </li>
            <br/>
            <li>
              7. The picture should not contain any obscenity.
            </li>
            <br/>
            <li>
              8. Use of any unfair medium like autolike script or copying from internet will lead to disqualification of the participant.
            </li>
            <br/>
            <li>
              9. Last date to upload is jan 25, 11.59 PM
            </li>
            <br/>
          </ol>
          <br/>
          <p>
            Use this content while you participate for clear understanding :-
          </p>
          <br/>
          <br/>
          <p>
            <b>
              As a part of the Monochrome Madness photography contest conducted by ηvision, IIT Hyderabad, I take the challenge and here is my photograph. I further nominate ___, ___ and ___ to take the challenge. #Monochrome_nvision
            </b>
          </p>
          <br/>
          <br/>
          <p>
            Contact:
          </p>
          <br/>
          <p>
            Pooja : +91-8331942496 <br />
            Vasudha : +91-9491948280
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default Updates;
