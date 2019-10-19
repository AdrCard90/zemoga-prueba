import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AddCelebrity from './pages/AddCelebrity/AddCelebrity';
import ContacUsPage from './pages/ContactUs/ContactUs';
import HomePage from './pages/HomePage/HomePage';
import HowItWorksPage from './pages/HowItWorks/HowItWorks';
import LoginPage from './pages/Login/Login';
import PastTrialsPage from './pages/PastTrials/PastTrials';
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditionsPage from './pages/TermsAndConditions/TermsAndConditions';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/past-trials" component={PastTrialsPage} />
        <Route path="/how-it-works" component={HowItWorksPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/add-celebrity" component={AddCelebrity} />
        <Route path="/terms-and-conditions" component={TermsAndConditionsPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/contact-us" component={ContacUsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
