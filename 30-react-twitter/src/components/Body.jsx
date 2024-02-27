import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const Body = ({user, stats}) => {
  return (
    <div className='body'>
        <Sidebar user = {user} stats = {stats}/>
        <Content/>
        </div>
  )
}

export default Body