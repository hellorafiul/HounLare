import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Appointment from './components/Appointment/Appointment';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Hero></Hero>
            <Appointment></Appointment>
            <Services></Services>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
