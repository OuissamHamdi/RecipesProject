import React from 'react';
import Recettes from './components/recettes/Recettes';
import { Provider } from './components/context';
import Navbar from './components/Navbar';
import AddRecipe from './components/recettes/AddRecipe';
import RecipeIngredients from './components/recettes/RecipeIngredients';
import EditRecipe from './components/recettes/EditRecipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';




function App() {
  return (
   <Provider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Recettes} />
            <Route exact path="/addRecipe" component={AddRecipe} />
            <Route exact path="/ingredients/:id" component={RecipeIngredients} />
            <Route exact path="/EditRecipe/:id" component={EditRecipe} />
          </Switch>
        </div>
      </Router> 
    </Provider>  
  );
}

export default App;
