import React from 'react'
import Avatar from './Avatar'
import Detailinfo from './Detailinfo'


const Card = (props) => {
    
  return (
    <>
    <div className="card">
        <div className="top">
        <h1 className="name">{props.name}</h1>
      <Avatar imgUrl = {props.imgUrl} />
        </div>
        <div className="bottom">
        <Detailinfo info={props.phone} />
        <Detailinfo info={props.email} />
        </div>       
    </div>
    
    </>
  )
}

export default Card
