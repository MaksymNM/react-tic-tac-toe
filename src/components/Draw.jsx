import React from 'react'

export const Draw = ({playAgain}) => {
    return (
        <div className='flex flex-col items-center text-white text-lg gap-5'>
            <div>
                Draw    
            </div>
            <div>
                <button  className='bg-squareBackground border-2 rounded-xl border-borderColor w-40' onClick={playAgain}>
                    Play Again
                </button>
            </div>
            
        </div>
  )
}

