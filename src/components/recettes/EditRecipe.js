import React, { Component } from 'react';
import { Consumer } from '../context';
class EditRecipe extends Component {
    state = {
        title: '',
        ingredients: ''
        
    }
    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    submit = (dispatch,id, e) => {
        e.preventDefault();
        const { title, ingredients} = this.state
        
        const recipe = {id: id, title:title, ingredients: ingredients}
        dispatch({
            type: "Edit_RECIPE",
            payload : {
                id,
                recipe
            }
        })
        
        this.props.history.push('/');

    }
    render() {
        
        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    const id = this.props.match.params.id;
                    const recipe=value.recipes[id-1];
                    return (
                           <form onSubmit={this.submit.bind(this, dispatch,id)} style={{margin: "0 210px 0 210px"}}>
                            <div className="card" style={{width: "100%"}}>
                                    <div className="card-body">
                                    <h4 className="card-title">Edite Recipe</h4>
                                    <div className="card-text">
                                        <div className="form-group">
                                            <label htmlFor="">title recipe</label>
                                            <input type="text" className='form-control'
                                            name='title'
                                            defaultValue={recipe.title}
                                            onChange={this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">ingredients</label>
                                            <textarea className='form-control'
                                            name='ingredients' 
                                            defaultValue={recipe.ingredients.split(',')}
                                            onChange={this.changeInput}
                                            cols="30" rows="10"
                                            ></textarea>
                                        </div>
                                        <button className="btn btn-danger btn-block">Edit recipe</button>
                                    </div>
                                </div>
                                  
                            </div>
                           </form> 
                    )
                }}
            </Consumer>
        )

        
    }
}

export default EditRecipe ;
