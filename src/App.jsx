import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/homepage/homepage';
import PastTrialsPage from './pages/past-trails/past-trials';
import HowItWorksPage from './pages/how-it-works/how-it-works';
import LoginPage from './pages/login/login';
import TermsAndConditionsPage from './pages/terms-and-conditions/terms-and-conditions';
import PrivacyPolicyPage from './pages/privacy-policy/privacy-policy';
import ContacUsPage from './pages/contact-us/contact-us';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/past-trials" component={PastTrialsPage} />
        <Route path="/how-it-works" component={HowItWorksPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/terms-and-conditions" component={TermsAndConditionsPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/contact-us" component={ContacUsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
