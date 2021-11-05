import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  addPokemon = (pokemon) => {
    this.setState({ pokemon: [...this.state.pokemon, pokemon]})
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const searchedPokemon = this.state.pokemon.filter(p => p.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.handleSearchChange} />
        <br />
        <PokemonCollection searchedPokemon={searchedPokemon} pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
