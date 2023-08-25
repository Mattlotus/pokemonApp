import React from 'react'
import pokemon from '../utilities/pokemon';

function Show(props) {
    const myStyle = {
        color: 'white',
        backgroundColor: 'gray',
        };
        
  return (
    
         <div style={myStyle}>Gotta Catch Them All
          <div>
    <nav>
        <a href="/pokemon/">BACK</a>
    </nav>
    {/* {pokemon.map((Pokemon, i) => {
        return (
        <div key={i}> */}
            {/* <a href={`/pokemon/${Pokemon._id}`}> */}
            <h2>{props.pokemon.name}</h2>
            <img src={props.pokemon.img + ".jpg"} alt="" />
            {/* </a> */}
        {/* </div>
        );
    })} */}
    </div>

        

         </div>
    
         
  )
  
}


export default Show