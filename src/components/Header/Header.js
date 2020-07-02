import React from 'react';
import './Header.scss';
import { Link, Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

class Header extends React.Component {

  render() {
    return (

      <Router>
        <div className="header">
          <div className="header_icon">
            <Link to='/' className="header_menu_link">
              <img src={'./logo192.png'} alt="boohoo" className="img-responsive" />
              <span><b>React App</b></span>
            </Link>
          </div>
          <div className="header_menu">
            <Link to='/' className="header_menu_link"><b>Home</b></Link>
            <Link to='/Login' className="header_menu_link"><b>Sign In</b></Link>
            <Link to='/SignUp' className="header_menu_link"><b>Sign Up</b></Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/Login"><Login /></Route>
          <Route exact path="/SignUp"><SignUp /></Route>
        </Switch>
      </Router>

    );
  }
}

export default Header;
