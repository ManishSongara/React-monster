import React from 'react';
import './card-list-style.css'
import { Card } from '../card/card.conponet'
 export const CardList =(props)=>{
     return(
     <div className='card-list'>
          { props.Monsters.map(monster =>(
       <Card key={monster.id} monster={monster} />
       ))}
     </div>
     )
 };