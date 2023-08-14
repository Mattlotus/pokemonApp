
import React from 'react'
import pokemon from '../models/pokemon';

function Index() {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };
        
  return (
    
         <div style={myStyle}>My First React Component!
          <div>
    <nav>
        <a href="/pokemon/Show">Create a New Veggie</a>
    </nav>
    {pokemon.map((Pokemon, i) => {
        return (
        <div key={i}>
            <a href={`/pokemon/${Pokemon._id}`}>
            <h2>{Pokemon.name}</h2>
            </a>
        </div>
        );
    })}
    </div>

        

         </div>
    
         
  )
  
}

export default Index

