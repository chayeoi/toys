import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalProvider, Layout } from './components';
import { Home, User } from './pages';
import { GlobalStyle } from './styles';

const App = () => (
  <GlobalProvider>
    <GlobalStyle />
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:user" component={User} />
        </Switch>
      </Layout>
    </Router>
  </GlobalProvider>
);

export default App;
