import React, {useState} from 'react'
import ListItems from './ListItems'
import InputItem from './inputItem'

const TOdoList = () => {
          
        const [items,setItems] = useState([])
        
        
       

        function addItems(productName){
            setItems(preValue => (
               [...preValue, productName] ))
            
        }

        function deleteItem(id){
           setItems( preValue => {
            return preValue.filter((item,index) =>{
              return index !== id
            })
           })
        }

console.log("items",items)
    
  return (
    <>
       <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputItem onadd={addItems}/>
      <div>
        <ul>
          {
          items.map((listItems,index) => {
            return(
               <ListItems 
               key={index} 
               id={index} 
               listItems={listItems} 
               onchecked={deleteItem}/>

            )
          })
        }
        </ul>
      </div>
    </div>
    </>
  )
}

export default TOdoList

