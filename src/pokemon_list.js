import React, { Component } from 'react'
import loadWrapper from './HOC/loaderWrapper'
class pokemon_list extends Component {
    render() {
        const pokemon = this.props.data.map((e, i)=>{
            return <div key={e.id}>{e.name}</div>
          })
        return (
            <div>
                {pokemon}
            </div>
        )
    }
}

export default loadWrapper(pokemon_list)
