import React from 'react';

import '../../../public/css/imports/events_style.css';

class Domains extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      loaded: false
    };
  }

  componentDidMount() {
    let names = [
      'torque',
      'equilibria',
      'infero',
      'kludge',
      'quiz',
      'cepheid',
      'robotics',
      'electronika',
      'e-cell',
      'infi',
    ];
    let This = this;
    loadjs("js/cdn/d3.min.js", function() {
      This.setState({loaded: true});
      loadjs("js/imports/events.js", function() {
        if (!This.props.params.domain) {
          return drawMain();
        }
        let i = names.indexOf(This.props.params.domain)
        if (i == -1) {
          console.log(This.props.params.domain, names)
          return drawMain();
        }
        return replay(colors, EventNames[i], EventImages[i], 0.25)
      });
    });
  }

  componentWillUpdate(props) {
    let names = [
      'torque',
      'equilibria',
      'infero',
      'kludge',
      'quiz',
      'cepheid',
      'robotics',
      'electronika',
      'e-cell',
      'infi',
    ];
    if (this.props.params.domain == props.params.domain) {
      return
    } else {
      if (!props.params.domain) {
        return drawMain();
      }
      let i = names.indexOf(props.params.domain)
      if (i == -1) {
        return drawMain();
      }
      return replay(colors, EventNames[i], EventImages[i], 0.25)
    }
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <div className="chart-wrapper"></div>
        </div>
      );
    } else {
      return (
        <div className="pulse-loader" style={{"marginLeft": "59%", "marginTop": "23%"}}>
          Loading…
        </div>
      )
    }
  }
}

export default Domains;
