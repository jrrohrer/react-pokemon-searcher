import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    cardImage: true
  }
  
  handleClick = () => {
    let newBoolean = !this.state.cardImage
    this.setState({
      cardImage: newBoolean
    })
  }

  render() {
    let pokemon = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            { this.state.cardImage 
              ?
              <img src={pokemon.sprites.front} alt={`Its ${pokemon.name}!`} />
              :
              <img src={pokemon.sprites.back} alt={`Its ${pokemon.name}!`} />
            }
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
