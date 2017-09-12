import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Home,Calculator,input,Output } from './Components';
import routes from './routing-config'
class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
              <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/Calculator" activeClassName="active">PrastString</NavLink></li>
                  <li><NavLink to="/input" activeClassName="active">Input</NavLink></li>
                    <li><NavLink to="/Output" activeClassName="active">Output</NavLink></li>
              </ul>
            </div>

        <div className="App-intro">
            <Switch>

                        <Route path="/" component={Home} exact={true} />
                        <Route path="/Calculator" component={Calculator} />
                        <Route path="/input" component={input} />
                        <Route path="/Outputr" component={Output} />

                {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))} />
            </Switch>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
