import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/hats" component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
