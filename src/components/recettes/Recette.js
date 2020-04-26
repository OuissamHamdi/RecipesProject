import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './recette.css';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';

class Recette extends Component {
   
   deleteRecipe=(id, dispatch)=>{
       dispatch({
           type: "DELETE_RECIPE",
           payload: id
       })
   }

    render() {
        const {id, title }= this.props.data;
        return(
            
                <Consumer>
                            {value => {
                                const {dispatch }= value;
                                return(        
                                    <tr>
                                        <td>
                                            <Link to={`/ingredients/${id}`} style={{textDecoration:"none", color:"#495057"}} >
                                                            {title}
                                            </Link>  
                                        </td>
                                        <td>
                                            <div>
                                                <Link to={`/EditRecipe/${id}`}>
                                                    <i className="fa fa-pencil" style={{ color:"#495057",cursor:"pointer", marginRight:"10%"}} ></i>
                                                </Link>
                                                <i style={{color:'#495057', cursor: 'pointer'}} className="fa fa-times" aria-hidden="true"
                                                onClick={this.deleteRecipe.bind(this, id, dispatch)}></i>
                                            </div>
                                        </td>
                                    </tr> 
                                )
                            }
                            }
                </Consumer>
                   
            
        )
        
    }
}
Recette.propTypes = {
  data: PropTypes.object.isRequired
}

export default Recette;