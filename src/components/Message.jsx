import React from 'react'

function Message() {
  return (
    <div className='message owner' >
     <div className='messageInfo' >
      <img src='https://images.pexels.com/photos/11805697/pexels-photo-11805697.jpeg?auto=compress&cs=tinysrgb&w=600' />
      <span>just now</span>
     </div>
     <div className='messageContent' >
      <p>hello</p>
      <img style={{borderRadius:"3px"}} src='https://images.pexels.com/photos/11805697/pexels-photo-11805697.jpeg?auto=compress&cs=tinysrgb&w=600' />
     </div>
    </div>
  )
}

export default Message
