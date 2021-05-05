import React from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import {Provider as PostProvider} from './context/PostContext';
import './styles/styles.scss';

import FrontPage from './routes/FrontPage';
import Admin from './routes/Admin';
import Error from './routes/Error';

const App = ()=>{
  return(
    <PostProvider>
      <Switch>
          <Route path="/" component={FrontPage} exact/>
          <Route path="/admin" component={Admin}/>
          <Route  component={Error}/>
      </Switch>
    </PostProvider>

  );
};

export default App;