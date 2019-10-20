import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
///VIEWS
import FilmsCategory from "./views/FilmsCategory";
import FilmDetails from "./views/FilmDetails";
import Home from "./views/Home";
import NotFound from './views/NotFound';
//COMPONENTS
import CustomHeader from './components/CustomHeader';
import CustomFooter from './components/CustomFooter';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        
            <CustomHeader/>
        
            <Switch>
                <Route exact path="/categorias/:categoryName" component= {FilmsCategory}/>
                <Route exact path="/pelicula/:id" component={FilmDetails}/>
                <Redirect path='/' exact to='categorias/upcoming' />
                <Route path="*"component={NotFound}/>


            </Switch>
           <CustomFooter/>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
