import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

declare global {
  interface String {
      doubleSlash(): string;
      commentBlock(): string;
      commentSharp(): string;
      indentBy(size:number): string;
  }
}

String.prototype.doubleSlash = function () {
  return "// "+this;
};
String.prototype.commentBlock = function () {
return "/* "+this+" */";
};
String.prototype.commentSharp = function () {
  return "# "+this;
};
String.prototype.indentBy = function (size:number) {
return String.fromCharCode(160).repeat(size) + this;
};

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
