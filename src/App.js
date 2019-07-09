import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PokemonList from './pokemon_list';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
class App extends Component {
  state = {
    pokemon: []
  }
  componentDidMount =  () => {
    const promises = []
    for(let i = 1; i <= 151; i++){
      promises.push(axios.get(`${baseUrl}${i}`))
    }
    Promise.all(promises)
    .then((response)=>{
      this.setState({
        pokemon: response.map((e)=>{
          return e.data
        })
      })
    })

  }
	render() {
    debugger
		return (
			<div>
        <div className="App">
        <PokemonList data={this.state.pokemon} abc={[1,2,3]}/>
				</div>
			</div>
		);
	}
}

export default App;
