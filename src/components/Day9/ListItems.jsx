import React from 'react'

const ListItems = ({listItems,id, onchecked}) => {





  return (
    <>
        <div onClick={() => {
            onchecked(id)
        }}>
        <li>{listItems}</li>
        </div>
       
    </>
  )
}

export default ListItems
