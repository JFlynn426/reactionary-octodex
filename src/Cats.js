import React, { Component } from 'react'
import Cat from './Cat'

class Cats extends Component {
  render() {
    const Clowder = [
      {
        address: 'https://octodex.github.com/images/dinotocat.png',
        number: '#132',
        name: 'Dinotocat',
        author: 'https://github.com/kimestoesta.png'
      },
      {
        address: 'https://octodex.github.com/images/dojocat.jpg',
        number: '#132',
        name: 'Dojocat',
        author: 'https://github.com/cameronmcefee.png'
      },
      {
        address: 'https://octodex.github.com/images/justicetocat.jpg',
        number: '#132',
        name: 'Justicetocat',
        author: 'https://github.com/heyhayhay.png'
      },
      {
        address: 'https://octodex.github.com/images/kimonotocat.png',
        number: '#132',
        name: 'Kimonocat',
        author: 'https://github.com/jeejkang.png'
      },
      {
        address: 'https://octodex.github.com/images/heisencat.png',
        number: '#132',
        name: 'Heisencat',
        author: 'https://github.com/jonrohan.png'
      },
      {
        address: 'https://octodex.github.com/images/mummytocat.gif',
        number: '#132',
        name: 'Mummytocat',
        author: 'https://github.com/tonyjaramillo.png'
      },
      {
        address: 'https://octodex.github.com/images/nyantocat.gif',
        number: '#132',
        name: 'Nyantocat',
        author: 'https://github.com/cameronmcefee.png'
      },
      {
        address: 'https://octodex.github.com/images/privateinvestocat.jpg',
        number: '#132',
        name: 'Private Investocat',
        author: 'https://github.com/jeekang.png'
      },
      {
        address: 'https://octodex.github.com/images/Sentrytocat_octodex.jpg',
        number: '#132',
        name: 'Sentrytocat',
        author: 'https://github.com/kimestoesta.png'
      },
      {
        address: 'https://octodex.github.com/images/skatetocat.png',
        number: '#132',
        name: 'Skatetocat',
        author: 'https://github.com/jonrohan.png'
      },
      {
        address: 'https://octodex.github.com/images/spidertocat.png',
        number: '#132',
        name: 'Spidertocat',
        author: 'https://github.com/jeejkang.png'
      },
      {
        address: 'https://octodex.github.com/images/stormtroopocat.png',
        number: '#132',
        name: 'Stormtroopocat',
        author: 'https://github.com/jonrohan.png'
      }
    ]

    return (
      <ul className="octos">
        {Clowder.map(cat => (
          <Cat
            address={cat.address}
            name={cat.name}
            number={cat.number}
            author={cat.author}
          />
        ))}
      </ul>
    )
  }
}

export default Cats
