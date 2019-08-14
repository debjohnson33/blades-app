import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BladesPage from './components/BladesPage';

class App extends Component {

  render() {
    return (
    	<Router>
	      <div className="App">
	      	<Switch>
	      		<Route path='/' component={BladesPage}/>
	      	</Switch>
	      </div>
	    </Router>
    );
  }
}


export default App;
