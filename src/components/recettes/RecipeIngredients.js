import React, { Component } from 'react';
import {Consumer} from '../context';

export default class RecipeIngredients extends Component {
    render() {
        return (
            <div>
                <Consumer>
                {value => {
                    const id =this.props.match.params.id 
                    
                    return(
                        <div>
                           {value.recipes.map((recipe)=>{
                                const ingredient = recipe.ingredients.split(',')
                                return(
                                    (recipe.id ==id) ? (
                                        <div className="card" style={{ width: '50%', marginLeft:"25%"}}>
                                             <div className="card-body">
                                                 <h5 className="card-title">Ingredients : {recipe.title}</h5>
                                                 <p className="card-text">
                                                    { ingredient.map((element) => (
                                                         <div>
                                                             {element}
                                                             <br/>
                                                         </div>
                                                    )
                                                          
                                                        
                                                    )}
                                                     </p>
                                               
                                             </div>
                                         </div>
                                        ) : null
                                )
                               
                                
                                        })}
                        </div>
                    )
                }
                }
            </Consumer>
            </div>
        )
    }
}
