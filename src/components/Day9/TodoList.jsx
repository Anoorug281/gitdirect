import React, {useState} from 'react'

const TOdoList = () => {
        const [productName, setProductName] = useState("")  
        const [items,setItems] = useState([])
        
        
        function handleChange(event){
            const newValue = event.target.value
            setProductName(newValue)
        }

        function addItems(){
            setItems(preValue => {
                return  [...preValue, productName]
            })
            setProductName("")
        }

console.log("items",items)
    
  return (
    <>
       <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        onChange={handleChange}
        type="text" 
        value={productName}
        placeholder='buy item '/>
        <button 
        onClick={addItems}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
          items.map((listItem,index) => {
            return(
                <li key={index}>{listItem}</li>
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

