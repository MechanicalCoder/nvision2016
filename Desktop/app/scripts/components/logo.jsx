import React from 'react';
import { Link } from 'react-router';

const Logo = (props) => {
  return (
    <div>
      <div id="logo">
        <Link to='#'><img src="img/logo.png" height="150" width="230" /></Link>
      </div>
      <div class="social-icons">
      	<div id="facebook">
      		<Link to='https://www.facebook.com/nvision.IIThyderabad/'><img src="img/fb.PNG" /></Link>
      	</div>
      	<div id="twitter">
      		<Link to="https://twitter.com/nvisioniith"><img src="img/twitter.PNG" /></Link>
      	</div>
      </div>
    </div>
  )
};

export default Logo;
