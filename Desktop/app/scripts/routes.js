import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory'

import App from './pages/app.jsx';
import Domains from './pages/domains.jsx';
import MainPage from './pages/main.jsx';
import TeamPage from './pages/team.jsx';
import About from './components/about.jsx';
import Sponsors from './pages/sponsors.jsx';
import Gallery from './pages/gallery.jsx';
import Updates from './pages/updates.jsx';
import Workshop from './pages/workshop.jsx';
import NotFound from './pages/notFound.jsx';
import Event from './pages/events.jsx';
import Monochrome from './pages/monochrome.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={createHistory(historyOptions)}>
    <Route path='/' component={ App }>
      <IndexRoute component={ MainPage }/>
      <Route path='events' component={ Domains } />
      <Route path='events/:domain' component={ Domains } />
      <Route path='events/:domain/:event' component={ Event } />
      <Route path='team' component={ TeamPage } />
      <Route path='about' component={ About } />
      <Route path='sponsors' component={ Sponsors } />
      <Route path='gallery' component={ Gallery } />
      <Route path='updates' component={ Updates } />
      <Route path='workshop' component={ Workshop } />
      <Route path='monochrome' component={ Monochrome } /> 
      <Route path='*' component={ NotFound } />
    </Route>
  </Router>
);

export default routes;
