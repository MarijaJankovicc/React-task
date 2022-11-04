import React from 'react';

export function Square({colorSquare, id}) {

    return (

        <div className="squares" style={{backgroundColor: colorSquare}}>
           <div className='text'>{id}</div>
        </div>
        
    );

}