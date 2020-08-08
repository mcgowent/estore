import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './App.css';

// Components
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
