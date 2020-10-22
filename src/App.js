import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Auth from './Auth';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
   state = {
    characters: []
};

removeCharacter = index => {
  const { characters } = this.state;

  this.setState({
      characters: characters.filter((character, i) => { 
          return i !== index;
      })
  });
}

handleSubmit = character => {
  this.setState({characters: [...this.state.characters, character]});
}

render() {
  const { characters } = this.state;
  
  return (
     <Switch>
      <div className="container">
          <Route exact path='/auth' component={Auth}/> 
          <Route exact path='/form' component={Form, Table} />
      </div>
      </Switch>
  );
}
}

export default App;
