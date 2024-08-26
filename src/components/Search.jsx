import React from 'react'

function Search() {
  return (
    <div className='search' >
      <div className='searchForm' >
         <input type='text' placeholder='Find a user' />
      </div>
      <div className='userChat' > 
      <img src='https://images.pexels.com/photos/11805697/pexels-photo-11805697.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      <div className='userChatInfo' >
        <span>jane</span>
      </div>
      </div>
    </div>
  )
}

export default Search
