import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import DashboardPage from '../components/DashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import SpecificPortfolioPage from '../components/SpecificPortfolioPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={SpecificPortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );
};

export default AppRouter;