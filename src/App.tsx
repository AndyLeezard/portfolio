import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <div className='app'>
            <Header/>
          </div>
        </Route>
        <Route path='/'>
          <div className='app'>
            <Header/>
            <Home/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
