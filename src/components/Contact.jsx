import React from 'react'

const Contact = (props) => {
    console.log(props)
  return (
    <>
    <div className="card">
        <div className="top">
        <h1 className="name">{props.name}</h1>
        <img className="circle-img"
        src={props.imgUrl}
        alt="image1" />
        </div>
        <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p> 
        </div>       
    </div>
    
    </>
  )
}

export default Contact
