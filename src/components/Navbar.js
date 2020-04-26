import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        
            <nav className="navbar navbar-expand-sm navbar-light bg-light" style={{color:"#495057"}}>
                <label className="navbar-brand">Recipes</label>
               
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" >Home<span className="sr-only">(current)</span> </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addRecipe">add recipe</Link>
                        </li>
                    </ul>
                    
            </nav>
       
    )
}
