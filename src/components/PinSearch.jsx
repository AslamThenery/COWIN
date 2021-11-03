import React, { useContext, useState } from 'react'
// import "./search.css"
import "./pinsearch.css"

import { Form, Button } from 'react-bootstrap'
import {districtContext} from '../Context'
import {useHistory} from 'react-router-dom'



function Pin() {
    const history = useHistory()
    const [value, setValue] = useState(false)

  
//   const {  setDistrictdata, districtId, setDistrictId} = useContext(districtContext)
  const { pin,  setPin} = useContext(districtContext)

  
const handlePin = (e) => {
    console.log("pin working");
    setValue(true)
    console.log(e.target.value);
    setPin(e.target.value)
}
    const handleSubmit = (e)=> {
console.log("submit working");
console.log(value);
         console.log(pin);
         history.push("/vaccine")
         
    }
    return (
        <div className="pin">
             
            <div id="pin-search">
            <Form>
      
      
      
         
      
                <div className="form-pin">

       
            <input onChange={handlePin} type="text" id="pin" />
                </div>
        <div className="form-btn">

       { value?
       
       <Button className="cancel-pbtn" onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
        :""}
       
       
       {
       !value ?
       <Button className="cancel-pbtn"   variant="primary" type="submit">
          Submit
        </Button>
        
          :""
        }
       <Button className="cancel-pbtn"  variant="primary" type="submit">
         
          Cancel
        </Button>
        </div>
      </Form> 
            </div>
            
        </div>
    )
}

export default Pin
