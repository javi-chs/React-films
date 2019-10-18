import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FilmsCategory from "./views/FilmsCategory"
import FilmDetails from "./views/FilmDetails"
import Home from "./views/Home"
import NotFound from './views/NotFound';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/categorias" component= {FilmsCategory}/>
          <Route exact path="/pelicula" component={FilmDetails}/>
          <Route exact path="/" component={Home}/>
          <Route path="*"component={NotFound}/>


        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
