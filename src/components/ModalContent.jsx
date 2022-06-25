import React, { useState } from 'react'

export const ModalContent = ({active, setActive, setPlayersName}) => {
    const [names, setNames] = useState({});
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNames(values => ({...values, [name]: value}))
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayersName({...names})
        setActive(!active);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
                <label className='text-white'>Player 1 Select Your Name</label>
                <input 
                required
                type="text"
                name='firstName'
                value={names.firstName || ''}
                onChange={handleChange}
                 />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label className='text-white'>Player 2 Select Your Name</label>
                <input 
                required
                type="text"
                name='secondName'
                value={names.secondName || ''}
                onChange={handleChange}
                />
            </div>
            <div className='flex justify-center mx-auto w-40 mt-5 bg-squareBackground border-2 rounded-xl border-borderColor'> 
                <input type='submit'  className='text-white py-1' value='Submit' />
            </div>
        </form>       
  )
}

