import React from 'react';
import { Link } from 'react-router';

import '../../../public/css/imports/about.css';

const About = (props) => {
  return (
    <div className="container_about">
	    <div className="main_about">
				<header><h1 className="about_header">About &eta;vision  </h1></header><hr/>
				<p className="subtext"><i>Techno-management fest of IIT Hyderabad</i></p>
        <br/>
				<div className="about_text">
					<p className="para1">
						Started in 2011, &eta;vision is the techical fest organised by the students of IIT Hyderabad with a motto of providing a platform to the technical enthusiasts of our country to explore and innovate and showcase their technical and engineering prowess. Over the past 3 years, ηvision has gradually evolved from an inter college festival to one of the recognised techincal fests of our country.
					</p>
          <br/>
					<p className="para2">
						With a broader scope and bigger ideas, ηvision 2016 looks forward to exploring ever widening horizons and surmounting greater heights. With a myriad of events spread across a plethora of domains, ηvision 2016 promises to be a platform which shall integrate technology with challenging life problems.
						A festival full of promise, ηvision 2016 shall be a journey more exciting and enthralling than any other to bring out the real geek in any techie.
					</p>
				</div>
			</div>
		</div>
  )
};

export default About;
