import React from 'react'
import Avatar from './Avatar'

const Navigation = ({user}) => {
  return (
    <div className='nav'>
        <Avatar user = {user} size={'small'}/>
        </div>
  )
}

export default Navigation