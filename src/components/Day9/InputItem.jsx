import React, {useState}from 'react'

const InputItem = ({onadd}) => {

    const [productName, setProductName] = useState("")


    function handleChange(event){
        const newValue = event.target.value
        setProductName(newValue)
    }

    


  return (
    <>
       <div className="form">
        <input 
        onChange={handleChange}
        type="text" 
        value={productName}
        placeholder='buy item '/>
        <button 
        onClick={() => {onadd(productName)
            setProductName("")
        }

        }
        >
          <span>Add</span>
        </button>
      </div>
    </>
  )
}

export default InputItem
