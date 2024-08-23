import React from 'react'

const Detailinfo = (props) => {
  return (
    <>
    <p className="info">{props.info}</p>
    <p className="info">{props.email}</p> 
    </>
  )
}

export default Detailinfo
