import React from 'react';
import './App.css';
// import Menu from './components/Menu';
import Home from './pages/Home';
import Team from './pages/Team';
import BlogHome from './pages/Blog/BlogHome';
import Article from './pages/Blog/Article';
import {
  HashRouter as Router,  
  Switch, Route
} from "react-router-dom";

class App extends React.Component{

  render(){
    return(
      <Router>                    
        <Switch>                    
          <Route exact path="/" component={Home} />          
          <Route exact path="/team" component={Team} />
          <Route exact path="/blog" component={BlogHome} />          
          <Route exact path="/blog/:id" component={Article} />
        </Switch>
      </Router>      
    )
  }

}

export default App;
