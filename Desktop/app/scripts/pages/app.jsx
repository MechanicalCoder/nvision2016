import React from 'react';

import Menu from '../components/menu.jsx';
import Logo from '../components/logo.jsx';

const App = (props) => {
    return (
      <div>
        <Menu />
        <Logo />
        {props.children}
      </div>
    );
};

export default App;
