import './App.css';
import React from 'react'
import {Square} from './Square';
import { useState } from "react";

function App() {

  const squares = [
    {
      id: 1 
    },
    {
      id: 2  
    },
    {
      id: 3
    }
  ];

  const [selectedSquare, setSelectedSquare] = useState({});

  return (

    <div className="App">    
       
      <div className="container">
          
          { squares.map((item) => (
            <div key={item.id}>
              <div onClick={() => setSelectedSquare({id: item.id, color: item.color})}>
                <div>
                  {item.id === 2 ? <Square colorSquare={item.id === selectedSquare.id ? "red":"blue"} id={selectedSquare.id}/>
                                 : <Square colorSquare={item.id === selectedSquare.id ? "red":"blue"}/>}
                </div>
              </div>
            </div>
          ))}
          
      </div>   
    </div>
    
  );
}
export default App;
