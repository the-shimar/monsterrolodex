import React, { Component } from 'react'
import './App.css';
import { CardList} from './component/card-list/card-list.component'
import { SearchBox } from './component/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json() )
    .then(userlist => this.setState({monsters: userlist}))
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <header>
        <h1>Monster-Rolodex</h1>
        </header>

        <SearchBox type='search' placeholder='Search Monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}> </CardList> 

        <footer>
          <p>Shimar &copy;2022 Tata Consultancy Services </p>  
        </footer>       
      </div>
    );
  }
  
}

export default App;
 