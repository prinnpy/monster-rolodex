import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  // constructor
  constructor(props) {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

  }

  // render dom for the first time when start the app
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  //handle change for searching name
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  // render app to the dom
  render() {
    //filter names and sort
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
