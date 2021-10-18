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
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/404Error/ErrorPage';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';

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
            <Register></Register>
          </Route>
          <Route exact path='/home'>
            <Hero></Hero>
            <Appointment></Appointment>
            <Services></Services>
            <Register></Register>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/service'>
            <Services></Services>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
