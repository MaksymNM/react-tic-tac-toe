import React from 'react'

export const VerticalLine = ({winCombination, stroke, strokeWidth}) => {
    let x1 = 80;
    let x2 = 80;
    let y1 = 75;
    let y2 = 525;
    
    if(winCombination[1] === 3 && winCombination[2] === 6) {
        x1 = 80;
        x2 = 80;
    } else if (winCombination[2] === 7) {
        x1 = x2 = 240;
    } else if (winCombination[1] === 5 && winCombination[2] === 8) {
        x1 = x2 = 400;
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

