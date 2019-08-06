import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main"
import About from "./About"
import Topics from "./Topics"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <Router>
               <div>
                   <ul>
                       <li>
                           <Link to="/">Main</Link>
                       </li>
                       <li>
                           <Link to="/about">About</Link>
                       </li>
                       <li>
                           <Link to="/topics">Topics</Link>
                       </li>
                       
                   </ul>
                   <hr/>
                   <Route exact path="/" component={Main}></Route>
                   <Route path="/about" component={About}></Route>
                   <Route path="/topics" component={Topics}></Route>
               </div>

           </Router>
         );
    }
}
 
export default Home;