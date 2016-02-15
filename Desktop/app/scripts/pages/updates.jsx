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
      <div className="updates_container">
        <iframe src={'//cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1W8zPqfo4M1W7sEkBIFf_DYLjfaoFwgjSzgPPv2TZPhc&font=Default&lang=en&initial_zoom=2&height=' + window.innerHeight} width='100%' height={window.innerHeight} frameBorder='0'></iframe>
      </div>
    );
  }
}

export default Updates;
