import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let pokemon = this.props.pokemon
    return (
      <Card.Group itemsPerRow={6}>
        {pokemon.map(pokemon => (
          <div key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </Card.Group>
    )
  }
}

export default PokemonCollection
