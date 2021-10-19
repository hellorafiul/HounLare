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
import AuthProvider from "./components/AuthProvider/AuthProvider";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking/Booking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute exact path='/service'>
              <Services></Services>
            </PrivateRoute>
            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='/login'>
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/service/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path='*'>
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
