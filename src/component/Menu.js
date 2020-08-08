import React from 'react'
import { BrowserRouter as Router,Route, Switch, Link } from 'react-router-dom';
import Admin from './Admin'
import Liste from './Liste'
import Accueil from './Accueil'
const Menu = () => {
    return (
        <Router>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <Link className="navbar-brand"to="/" >C&V </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Accueil <span className="sr-only">(current)</span></Link>
            </li>
            </ul>
            <span className="navbar-text">
            <Link to="/admin123">Adminstration</Link>
            </span>
        </div>
        </nav>
       <Switch>
           <Route exact path="/">
               <Accueil/>
           </Route>
           <Route path="/admin123">
                <Admin/>
           </Route>
       </Switch>
    </Router>
      );
}
 
export default Menu;