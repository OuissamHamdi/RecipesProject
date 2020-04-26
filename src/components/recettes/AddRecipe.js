import React, { Component } from 'react';
import { Consumer } from '../context';
import  classnames from 'classnames';
class AddRecipe extends Component {

    state = {
        title: '',
        ingredients: '',
        errors: {},
        selectedFile : null
        
    }
    
    
    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    submit = (dispatch,size, e) => {
        e.preventDefault();
        const { title, ingredients}= this.state;

        if(title === "" ){
            this.setState({errors:{title: "title is required"}});
            return;
        }
        if(ingredients === ''){
            this.setState({errors:{ingredients: "ingredients is required"}});
            return;
        }
        dispatch({
            type: "ADD_RECIPE",
            payload : {
                id: size + 1,
                title,
                ingredients
                
            }
        })

        this.setState({
            title: '',
            ingredients: '',
            errors: {}
        })
        
        this.props.history.push('/');

    }
    render() {
        const {  title, ingredients, errors} = this.state;
        return(
            <Consumer>
                {value => {
                    const { dispatch }= value;
                    return (
                           <form onSubmit={this.submit.bind(this, dispatch, value.recipes.length)} style={{margin: "0 210px 0 210px"}}>
                            <div className="card" style={{width: "100%"}}>
                                <div className="card-body">
                                    <h4 className="card-title">Add Recipe</h4>
                                    <div className="card-text">
                                    
                                        <div className="form-group">
                                            <label htmlFor="">title recipe</label>
                                            <input type="text" className={classnames('form-control',{
                                             'is-invalid':errors.title
                                            })}
                                            name='title'
                                            defaultValue={title}
                                            onChange={this.changeInput}
                                            />
                                            <div className="invalid-feedback">{errors.title}</div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">ingredients</label>
                                            <textarea name='ingredients'
                                            defaultValue={ingredients}
                                            onChange={this.changeInput}  
                                            className={classnames('form-control',{
                                             'is-invalid': errors.ingredients
                                            })}
                                            cols="30" rows="10"
                                            placeholder="make ' , ' between each ingredient"
                                            >
                                            </textarea>
                                            <div className="invalid-feedback">{errors.ingredients}</div>
                                        </div>
                                        <button className="btn btn-success btn-block">add recipe</button>
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

export default AddRecipe ;
