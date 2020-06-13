import React, { Component } from "react";
import ContactsPage from './components/ContactsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/AboutPage';
import './App.css';


class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={ContactsPage} />
        <Route exact path="/about" render={() => <About students={this.state.students} />} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
    );
  }
}
  
export default App