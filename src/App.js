import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/loquesea">loquesea</Route>
          <Route exact path="/otra">otra</Route>
          <Route  path="/">me sale por que hace match con la barra</Route>
          <Route path="*">este es el global</Route>


        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
