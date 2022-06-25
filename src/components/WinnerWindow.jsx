import React from 'react'

export const WinnerWindow = ({winner, playAgain}) => {
    return (
        <div className='flex flex-col items-center text-white text-lg gap-5'>
            <div>
                {winner} Won    
            </div>
            <div>
                <button  className='bg-squareBackground border-2 rounded-xl border-borderColor w-40' onClick={playAgain}>
                    Play Again
                </button>
            </div>
            
        </div>
  )
}