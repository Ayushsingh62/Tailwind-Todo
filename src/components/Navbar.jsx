import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-indigo-500 p-2 flex item-center justify-between'>
        <h1 className='text-white font-bold text-lg' >Todo App</h1>
        <button className='bg-lime-500 rounded-md text-bold p-1 hover:bg-lime-700 text-sm font-bold' >Dark mode</button>

      </nav>
    </div>
  )
}

export default Navbar
