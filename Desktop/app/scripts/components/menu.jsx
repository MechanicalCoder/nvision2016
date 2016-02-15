import React from 'react';
import { Link } from 'react-router';

const ReplayDomains = function(e) {
	if (e.target.className == "evnts") {
		replay(colors, names, domainImages, 0.35, EventNames);
	}
}

const Menu = (props) => {
  return (
    <div className="pushmenu-push-toright">
	  	<nav className="pushmenu pushmenu-open">
		    <h3></h3>
		    <a href="#">Home</a>
		    <Link to='about'>About Us</Link>
		    <Link to='events' activeClassName="evnts" onClick={ReplayDomains}>Events</Link>
		    <Link to='updates'>Journey</Link>
      		<Link to='workshop'>Workshop</Link>
		    <Link to='sponsors'>Sponsors</Link>
		    <Link to='gallery'>Gallery</Link>
      		<Link to='team'>Team</Link>
	  	</nav>
	</div>
  )
};

export default Menu;
