import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = { }
  }

  render(){
    return(
      <div>
        <Navigation/>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
      </div>
    )
  }
}



export default App;
