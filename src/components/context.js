import React, { Component } from 'react'

const Context= React.createContext();
const reducer = (state, action) => {
switch(action.type){
    case 'DELETE_RECIPE':
    return {
        recipes: state.recipes.filter((recipe)=>recipe.id !==action.payload)
    };
    case 'ADD_RECIPE':
    return {
        recipes: [...state.recipes,action.payload]
    };
    case 'Edit_RECIPE': 
    const recettes = [...state.recipes]
    if(action.payload.recipe.title !== "") recettes[action.payload.id - 1].title = action.payload.recipe.title
    if(action.payload.recipe.ingredients !=="") recettes[action.payload.id - 1].ingredients = action.payload.recipe.ingredients

    return {
       recipes : recettes

    };
    default: 
    return state;
}

}
export class Provider extends Component {
    
    state = {
        recipes: [
            {id: 1 , title: "recette 1", 
            ingredients:"1 pound ground lean (7% fat) beef,1 large egg,1/2 cup minced onion,1/4 cup fine dried bread crumbs,1 tablespoon Worcestershire"
            },
            {id: 2, title: "recette 2",
            ingredients:"1 pound ground lean (7% fat) beef,1 large egg,1/2 cup minced onion,1/4 cup fine dried bread crumbs,1 tablespoon Worcestershire"
            },
            {id: 3,  title: "recette 3", 
            ingredients:"1 pound ground lean (7% fat) beef,1 large egg,1/2 cup minced onion,1/4 cup fine dried bread crumbs,1 tablespoon Worcestershire"
            },
            {id: 4,  title: "recette 4", 
            ingredients:"1 pound ground lean (7% fat) beef,1 large egg,1/2 cup minced onion,1/4 cup fine dried bread crumbs,1 tablespoon Worcestershire"
            },
            {id: 5,  title: "recette 5", 
            ingredients:"1 pound ground lean (7% fat) beef,1 large egg,1/2 cup minced onion,1/4 cup fine dried bread crumbs,1 tablespoon Worcestershire"
            },
            {id: 6,  title: "recette 6", 
            ingredients:"1 pound ground lean (7% fat) beef,1 large egg,1/2 cup minced onion,1/4 cup fine dried bread crumbs,1 tablespoon Worcestershire"
            },
            {id: 7,  title: "recette 7", 
            ingredients:"1 pound ground lean (7% fat) beef,1 large egg,1/2 cup minced onion,1/4 cup fine dried bread crumbs,1 tablespoon Worcestershire"
            },
            {id: 8,   title: "recette 8", 
            ingredients:"1 pound ground lean (7% fat) beef,1 large egg,1/2 cup minced onion,1/4 cup fine dried bread crumbs,1 tablespoon Worcestershire"
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))

    }
    componentWillUpdate = (nextProps, nextState) =>{
        const ref = localStorage.setItem('recipes',JSON.stringify(nextState.recipes))
    }
    componentWillMount = ()=>{
        const localref = localStorage.getItem('recipes',JSON.stringify(this.state.recipes));
        if(localref){
            this.setState({
                recipes : JSON.parse(localref)
            })
        }
        else localStorage.setItem('recipes',JSON.stringify(this.state.recipes))
    }
    render() {
        return (
            <div>
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer;
