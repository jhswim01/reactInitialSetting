import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Test1 from '../pages/Test1';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/test1/:testParam' component={Test1} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
