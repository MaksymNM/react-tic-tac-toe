import React, { useState } from 'react'

export const Modal = ({active, isDraw, xWon, oWon, setActive,  children}) => {
    return (
        <div 
        className={`${isDraw || active || xWon || oWon? 'visible' : 'invisible'} w-full h-full bg-modalBackground  flex justify-center items-center absolute z-50`} 
        onClick={() => setActive(false)}>
            <div 
            className='flex flex-col  p-5 rounded-xl bg-background border-2 border-borderColor h-250  w-500' 
            onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    )

    
}

