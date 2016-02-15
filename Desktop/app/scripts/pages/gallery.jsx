import React from 'react';

import '../../../public/css/imports/gallery.css';

class Gallery extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    loadjs("js/imports/gallery.js", function() {
      new App()
    });
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='gallery_container'>
        <div id='veil'></div>
    		<div id='preloader'></div>
    		<div id='grid'></div>
      </div>
    );
  }
}

export default Gallery;
