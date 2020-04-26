import React, { Component } from 'react';
import Recette from './Recette';
import { Consumer } from '../context';

class Recettes extends Component {

    
    deleteRecette = (id) => {
            const {recipes}=this.state;
            const newRecipes=recipes.filter((recipe)=>recipe.id !==id)
            this.setState({
                recipes : newRecipes
            })
            
       }


    render() {

        return(
          
            <Consumer>
                { value => (
                     <div style={{margin:"40px 25% 0 25%" }}>
                         <table className="table">
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">Recipes</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {value.recipes.map((recipe)=>(
                            
                            <Recette  key={recipe.id} data={recipe} 
                            supprimerRecette=
                            {this.deleteRecette.bind(this,recipe.id)}
                            /> 
                            ))}
                            </tbody>
                        </table>
                    </div>    
                )}
            </Consumer>
          
        )

        
    }
}
export default Recettes;