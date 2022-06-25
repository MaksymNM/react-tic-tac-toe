import React from 'react';
import O from '../img/O.png';
import X from '../img/X.png'
import { SelectedValue } from './SelectedValue';

export const Squares = ({squares, handleClick}) => {
    return (
        <>
            {squares.map((square, index) => (
            <div 
            key={index} 
            className='bg-squareBackground w-160 h-200 border-2 border-borderColor flex items-center justify-center'
            onClick={() => handleClick(index)}
            > 

              {square === 'X' ? <SelectedValue src={X} alt={'X'}/> : square === 'O' ? <SelectedValue src={O} alt={'O'}/> : square}
            </div>

          ))}
        </>
    )
}

