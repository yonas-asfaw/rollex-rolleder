import React, { Component } from 'react';
import { CardList } from './components/card-list/card.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').
      then(response => response.json()).
      then(user => this.setState({ monsters: user }))
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value },
      () => console.log(this.setState));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredmonsters = monsters.filter(monster => monster.name.
      toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> MONSTER Rolledex</h1>
        <SearchBox type='search' placeholder='Search monster'
          handleChange={this.handleChange} />
        <CardList monsters={filteredmonsters}></CardList>

      </div>
    );

  }
}

export default App;
