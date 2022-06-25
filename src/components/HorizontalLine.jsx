import React from 'react'

export const HorizontalLine = ({winCombination, stroke, strokeWidth}) => {
    let x1 = 50;
    let x2 = 430;
    let y1, y2;

    if(winCombination[2] === 2) {
        y1 = 100;
        y2 = 100;
    } else if (winCombination[2] === 5) {
        y1 = 300;
        y2 = 300;
    } else if (winCombination[1] === 7 && winCombination[2] === 8) {
        y1 = 500;
        y2 = 500;
    } else {
        return;
    }

    return (
        <>
        {winCombination.length ? 
            <svg className='w-480 h-600 absolute'>
              
              <line x1 = {x1} y1 = {y1} x2 = {x2} y2 = {y2} stroke={stroke} strokeWidth={strokeWidth}/>
             
            </svg> : ''}
        </>
        
  )
}

