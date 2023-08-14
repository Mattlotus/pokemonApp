
import React from 'react'
import pokemon from '../models/pokemon';

function Index() {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: 'peru',
        };

        // let firstLetter = Pokemon.name[0].toUpperCase()
        // let rest = Pokemon.name.substring(1)
        
  return (
    
         <div style={myStyle}>
          <div>
    <nav>
        <a href="/pokemon/Show">Create a New Pokemon</a>
    </nav>
    {pokemon.map((Pokemon, i) => {
         let firstLetter = Pokemon.name[0].toUpperCase()
         let rest = Pokemon.name.substring(1)
        return (
        <div key={i}>
            <a href={`/pokemon/${i}`}>
            <h2>{firstLetter + rest}</h2>
            </a>
        </div>
        );
    })}
    </div>

        

         </div>
    
         
  )
  
}

export default Index

