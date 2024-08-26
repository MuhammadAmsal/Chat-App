import React from 'react'

function Navbar() {
  return (
    <div className='navbar' >
      <span className='logo' >Chat App</span>
      <div className='user' >
      <img src='https://images.pexels.com/photos/11805697/pexels-photo-11805697.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      <span id='name' >Amsal</span>
      <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
