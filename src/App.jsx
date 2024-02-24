import React from 'react';
import './App.css';
import { data } from './data'; 

function App() {
  return (
    <> 
      <div className="cards">
        {data.map(card => ( 
          <div className='card' key={card.id}>
            <img className='img' src={card.url} alt={card.title} /> 
            <div>
              <h2>{card.title}</h2> 
              <p>{card.info}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
