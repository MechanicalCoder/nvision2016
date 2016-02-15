import React from 'react';
import { Link } from 'react-router';

import Manager from '../components/manager.jsx';

class Team extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    loadjs('js/imports/main.js');
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
  			<div className="container container_main">
  					<div id="dates">
              29th - 31st January
            </div>
            <div className="main">
  						<section className="content">
  						<main className="page" id="page">
  							<ul className="sections-nav">
  								<span className="selection cursor-only"></span>
  								<li className="sport">
  									<a data-section="sport" className="transitioned" href="#/about" id="initialBlock">
  										<strong>&eta;vision 2016</strong>
  										<span className="alive icon sport-icon">
  											<span className="bar one"></span>
  											<span className="bar two"></span>
  											<span className="bar three"></span>
  										</span>
  										<small>Fest in a nutshell</small>
  									</a>
  								</li>
  								<li className="explorer">
  									<a data-section="explorer" className="transitioned" href="#/updates">
  										<strong>Updates</strong>
  										<small>News &amp; Events</small>
  									</a>
  								</li>
  								<li className="digital">
  									<a data-section="digital" className="transitioned" href="#/gallery">
  										<strong>Glimpses</strong>
  										<small>Snapshots from the vault</small>
  									</a>
  								</li>
  							</ul>
  							<div className="spinner stationary desktop-only">
  								<div className="sport-spinner-content content-preview locked">
  									<div className="content-preview-plane mapboxed">
  										<div className="map-card run-card">
  											<span className="big mapbox-map leaflet-container leaflet-fade-anim showing" id="homepage-sport-map" tabIndex="0">
  												<div className="raw-points" style={{"display": "none"}}>
  													[[37.78693, -122.39187],[37.78953, -122.38878],[37.79133, -122.39106],[37.79214, -122.3913],[37.7926, -122.39086],[37.79509, -122.39362],[37.80432, -122.40193],[37.80623, -122.40447],[37.80742, -122.40697],[37.80709, -122.40707],[37.80612, -122.40541],[37.80393, -122.40507],[37.80388, -122.40345],[37.7986, -122.40235],[37.79858, -122.40117],[37.79669, -122.40068],[37.79633, -122.40007],[37.7933, -122.40002],[37.79309, -122.39912],[37.79265, -122.39905],[37.79374, -122.39858],[37.79331, -122.39833],[37.79376, -122.39772],[37.79285, -122.39725],[37.7914, -122.39783],[37.79058, -122.39693],[37.78963, -122.39737],[37.78756, -122.39441],[37.78617, -122.39312],[37.78641, -122.39271],]
  												</div>
  												<div className="leaflet-map-pane" style={{transform: "translate3d(0px, 0px, 0px)"}}>
  													<div className="leaflet-tile-pane">
  														<div className="leaflet-layer">
  															<div className="leaflet-tile-container"></div>
  															<div className="leaflet-tile-container leaflet-zoom-animated">
  																<img className="leaflet-tile leaflet-tile-loaded" src="img/3165.png" style={{"height": "300px", "width": "300px", "left": "0px", "top": "0px"}} />
  															</div>
  														</div>
  													</div>
  													<div className="leaflet-objects-pane">
  														<div className="leaflet-shadow-pane"></div>
  														<div className="leaflet-overlay-pane">
  															<svg className="leaflet-zoom-animated" width="560" height="560" viewBox="-140 -140 560 560" style={{transform: "translate3d(-140px, -140px, 0px)"}}>
  																<g>
  																	<path stroke-linejoin="round" strokeLinecap="round" stroke="#00aeef" strokeOpacity="1" strokeWidth="4" fill="none" className="leaflet-clickable" d="M117 250 L112 160 L113 152 L117 142 L97 134 L98 125 L95 119 L96 110 L110 112 L146 66 L151 44 L153 27 L198 46 L194 87 L197 88 L203 84 L220 93 L225 95 L232 97 L237 87 L243 89 L236 120 L230 130 L212 113 L193 105 L190 138 L198 174 L186 177 L187 190 L189 190 L190 210 L168 213 L168 225 L163 220 L167 239 L165 260 L117 250" style={{"strokeDasharray": "750px", "strokeDashoffset": "750px"}}></path>
  																</g>
  															</svg>
  														</div>
  														<div className="leaflet-marker-pane"></div>
  														<div className="leaflet-popup-pane"></div>
  													</div>
  												</div>
  												<div className="leaflet-control-container">
  													<div className="leaflet-top leaflet-left"></div>
  													<div className="leaflet-top leaflet-right">
  														<div className="leaflet-control-grid map-tooltip leaflet-control" style={{display: "none"}}>
  															<a className="close" href="http://aprilzero.com/#" title="close">close</a>
  															<div className="map-tooltip-content"></div>
  														</div>
  													</div>
  													<div className="leaflet-bottom leaflet-left"></div>
  													<div className="leaflet-bottom leaflet-right">
  														<div className="map-legends wax-legends leaflet-control" style={{display: "none"}}></div>
  													</div>
  												</div>
  											</span>

  										</div>
  										<a className="goto transitioned sport" href="#/about" data-section="sport"></a>
  									</div>
  								</div>
  								<div className="explorer-spinner-content content-preview ">
  									<div className="content-preview-plane">
  										<div className="world-card">
  											<div className="map-container">
  												<div id="map-goes-here" className="map-goes-here">
  													<div className="the-map"></div>
  													<span className="blip location-coordinates positioned showing" data-longitude="-122.39284" data-latitude="37.77877" style={{left: "173px", top: "95px"}}>
  														<span className="blip-ring one"></span>
  														<span className="blip-ring two"></span>
  														<span className="blip-ring three"></span>
  														<span className="center"></span>
  													</span>
  												</div>
  											</div>
  											<div className="details">
  												<h3 className="location-city">Monochrome Madness.</h3>
  												<h4 className="location-time-ago">27 Dec - 26 Jan, 2015</h4>
  											</div>
  											<a className="goto transitioned explorer" href="#/monochrome" data-section="explorer"></a>
  										</div>
  									</div>
  								</div>
  								<div className="explorer top-circle-contents">
  									<div className="top-circle-contents-plane">
  										<small>Online Event</small>
  										<span className="location-name long">Monochrome Madness.</span>
  									</div>
  								</div>
  								<div className="digital-spinner-content content-preview ">
  									<div className="content-preview-plane">
  										<div className="photos hoverable">
  											<span className="photo">
  												<span className="image" style={{"backgroundImage":"url(/img/gallery/img1_opt.jpg)"}}></span>
  											</span>
  											<span className="photo">
  												<span className="image" style={{"backgroundImage":"url(/img/gallery/img2_opt.jpg)"}}></span>
  											</span>
  											<span className="photo">
  												<span className="image" style={{"backgroundImage":"url(/img/gallery/img3_opt.jpg)"}}></span>
  											</span>
  										</div>
  										<div className="photo-details">
  											<h3 className="caption long"> Excitement, Enthusiasm, Entertainment</h3>
  											<h4 className="photo-time-ago">Witness &eta;vision from gruel wars to cool hacks </h4>
  										</div>
  										<a className="goto transitioned digital" data-section="digital" href="#/gallery"></a>
  									</div>
  								</div>
  								<div className="digital top-circle-contents">
  									<div className="top-circle-contents-plane">
  										<strong>Pics &amp; Selfies</strong>
  									</div>
  								</div>
  							</div>
  							<div className="spinner spinning desktop-only">
  								<span className="rings">
  									<span className="group-1">
  										<span className="ring zero"></span>
  									</span>
  									<span className="group-0">
  										<span className="ring one"></span>
  									</span>
  									<span className="group-2">
  										<span className="ring two"></span>
  									</span>
  									<span className="group-3">
  										<span className="ring three"></span>
  										<span className="ring four"></span>
  									</span>
  								</span>
  								<div className="sport-preview desktop-only ">
  									<span className="mini-preview">
  										<span className="symbol">
  											<span className="text">nvision 2016</span>
  										</span>
  									</span>
  									<a className="full-preview sport sport-circles" data-section="sport" href="#/about">
  										<span className="run circle backdrop"></span>
  										<span className="second circle backdrop"></span>
  										<span className="third circle backdrop"></span>
  										<span className="run full circle">
  											<span className="the-circle"></span>
  											<div className="circle-contents">
  												<strong>5<sup>th</sup></strong>
  												<small>Edition</small>
  											</div>
  										</span>
  										<span className="second full circle">
  											<span className="the-circle"></span>
  											<div className="circle-contents">
  												<strong className="">40+</strong>
  												<small>Events</small>
  											</div>
  										</span>
  										<span className="third full circle">
  											<span className="the-circle"></span>
  											<div className="circle-contents">
  												<strong className="big-number">5K+</strong>
  												<small>Footfall</small>
  											</div>
  										</span>
  									</a>
  								</div>
  								<div className="explorer-preview desktop-only ">
  									<span className="mini-preview">
  										<span className="symbol">
  											<span className="text center_text">UPDATES</span>
  										</span>
  									</span>
  									<a className="full-preview explorer" data-section="explorer" href="#/monochrome">
  										<span className="big-circle backdrop"></span>
  										<span className="big-circle actual"></span>
  									</a>
  								</div>
  								<div className="digital-preview desktop-only ">
  									<span className="mini-preview">
  										<span className="symbol">
  											<span className="text center_text">GLIMPSES</span>
  										</span>
  									</span>
  									<a className="full-preview digital" data-section="digital" href="#/gallery">
  										<span className="big-circle backdrop"></span>
  										<span className="big-circle actual"></span>
  									</a>
  								</div>
  							</div>
  							<div className="spinner spinning mobile-only">
  								<span className="rings">
  									<span className="group-1">
  										<span className="ring zero"></span>
  									</span>
  									<span className="ring one"></span>
  									<span className="group-2">
  										<span className="ring two"></span>
  									</span>
  									<span className="group-3">
  										<span className="ring three"></span>
  										<span className="ring four"></span>
  									</span>
  								</span>
  							</div>
  							<div className="home-last-location mobile-only">
  								<h3>Workshop</h3>
  								<section className="location-details">
  									<h1 className="location-name long">
  										<a className="transitioned" data-section="explorer" data-level="1" href="#/monochrome">
  											<span className="name">Monochrome Madness.</span>
  											<span className="location-icon">
  												<img src="https://ss3.4sqi.net/img/categories_v2/food/fastfood_64.png" />
  											</span>
  										</a>
  									</h1>
  									<small>
  										<span className="location-city">ElMatrico ended successfully.</span>
  									</small>
  								</section>
  							</div>
  							<span className="spinner-cover mobile-only"></span>
  						</main>
  					</section>
  				</div>
  			</div>
      </div>
    );
  }
}

export default Team;
