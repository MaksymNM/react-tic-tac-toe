import React from 'react'

export const DiagonalLine = ({winCombination, strokeWidth, stroke}) => {
    let x1, x2;
    let y1 = 45;
    let y2 = 555;
    

    if(winCombination[1] === 4 && winCombination[2] === 8) {
        x1 = 40;
        x2= 440;
       
    } else if (winCombination[1] === 4 && winCombination[2] === 6) {
        x1 = 435;
        x2 = 45;
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

