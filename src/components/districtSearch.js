import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './districtSearch.css'
import { Form, Button } from 'react-bootstrap'
import "./search.css"
import { districtContext } from '../Context'
import {useHistory} from 'react-router-dom'
function DistrictSearch() {
  const history = useHistory()
  const [states, setStates] = useState([])
  const [inputState, setInputStates] = useState("")
  const [districts, setDistricts] = useState([])
  const [value, setValue] = useState(false)
  const {  setDistrictdata, districtId, setDistrictId} = useContext(districtContext)

  useEffect(() => {
    axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states') //FETCH ALL STATES
      .then(function (response) {
        // handle success
        console.log('working');
        console.log(response.data.states);
        setStates(response.data.states)    //UPDATE SATES
        console.log('states are:');
        console.log(states);

      })
  })

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  const handleStates = (e) => {      // FUNCTION TO GET ALL DISTRICTS
    console.log('State value is')
    console.log(e.target.value)
    setInputStates(e.target.value)
    console.log(inputState);

    let stateData = states.filter((obj) => obj.state_name === e.target.value) //FILETRING THE CORRESPONDING STATE DETAILS
    console.log("state id is ");
    console.log(stateData[0].state_id);
    let stateId = stateData[0].state_id
    axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`) //FETCH ALL DISTRICTS
      .then(function (response) {
        // handle success
        console.log(' districts working');
        console.log(response.data.districts);
        setDistricts(response.data.districts)
        //  console.log('states are:');
        //  console.log(states);

      })
  }
  const handleDistricts = (e) => {              //FETCHING ALL DISTRICTS
    console.log(typeof (e.target.value));
    let disdata  = e.target.value
    setDistrictdata(disdata)
    
    // console.log(`district is : ${districtdata}`);
    // console.log(districtdata);
    let disData = districts.filter((obj) => obj.district_name === e.target.value) //FILETRING THE SELECTED DISTRICT DETAILS
   let disId = disData[0].district_id
    console.log(`dis id is :`); 

   console.log(disId ); 
   setDistrictId(disId)  //STORING SELECTED DISTRICT ID
   console.log("stored id is :"); 
   console.log(districtId); 
   setValue(true)
      // FUNCTIONING....
  }
  const handleSubmit = (e) => {  // HANDLING SUBMIT
    e.preventDefault()
    if(districtId){history.push("/vaccine")}
  }
  const handleCancel = (e) => {  // HANDLING SUBMIT
    e.preventDefault()
    history.push("/")
  }
  return (
    <div className="search">
      <div className="search-frm">
      <Form>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
          {/* <Form.Label>Searc State</Form.Label> */}
          <br />
          {/* <Form.Control type="email" placeholder="Enter email" /> */}
          
          <select onChange={handleStates} className="me-sm-2 selector" id="inlineFormCustomSelect" required>
            <option  >Select State...</option>
            {
              states ?
                states.map((obj) => {
                  return (
                    <option value={obj.state_name}  >{obj.state_name}</option>
                  )
                })
                : ""
            }


          </select>
        {/* </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Search Districts
          </Form.Label> */}
          <br />
          <Form.Select onChange={handleDistricts} className="selector" id="inlineFormCustomSelect" required>
            <option  >Select District...</option>
            {
              districts ?
                districts.map((obj) => {
                  return (
                    <option value={obj.district_name}  >{obj.district_name}</option>
                  )
                })
                : ""
            }


          </Form.Select>
          <br />

        </Form.Group>
        <div className="form-btn">

       { value?
       
       <Button className="cancel-btn" onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
        :""}
       
       
       <Button className="cancel-btn"  variant="primary" type="submit">
          Submit
        </Button>
        
       {
       !value ?
       <Button className="cancel-btn" onClick={handleCancel} variant="primary" type="submit">
         
          Cancel
        </Button>
        :""
      }
        </div>
      </Form>
      </div>
    </div>
  )
}

export default DistrictSearch
