import React, { useContext, useEffect, useState } from 'react'
import './vaccineDetails.css'
import axios from 'axios'
import { districtContext } from '../Context'
import date from 'date-and-time';
import { useHistory, } from 'react-router';


function VaccineDetails() {
    const now = new Date()
    const tommorow = date.addDays(now, +1)

    const DayAfterTommorow = date.addDays(now, +2)

    const dateCollection = [{
        today: date.format(now, 'DD-MM-YYYY'),
        tommorow: date.format(tommorow, 'DD-MM-YYYY'),
        dayAfterTommorow: date.format(DayAfterTommorow, 'DD-MM-YYYY')
    }]

 const history = useHistory()
    const { districtId,pin,setPin } = useContext(districtContext)

    const [dateDetails] = useState(dateCollection)
    const [vaccinedetails, setvaccineDetails] = useState([])
    // const [class, setClass] = useState("")
console.log(`pin is :${pin}`);

    useEffect(() => {
        console.log(`Id get : ${districtId}`);
        // console.log(`Date is : ${date}`);
   if(pin ==="" ){
        axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${dateDetails[0].today}`) //FETCH ALL VACCINE CENTERES
            .then(function (response) {
                console.log("Details get");
                console.log(dateDetails[0].today);
                // console.log(response.data.sessions); 
                let centers = response.data.sessions
                console.log(typeof (centers));

                setvaccineDetails(response.data.sessions)
                console.log("vaccineDetails");

                console.log(vaccinedetails);

            })
        }
        else{

            console.log(`Pin search ${pin}`);
            axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${dateDetails[0].today}`) //FETCH ALL VACCINE CENTERES
            .then(function (response) {
                console.log("Pin Deatails working");
                console.log(dateDetails[0].today);
                // console.log(response.data.sessions); 
                let centers = response.data.sessions
                console.log(typeof (centers));

                setvaccineDetails(response.data.sessions)
                console.log("vaccineDetails");

                console.log(vaccinedetails);

            })
        }



    })
    const handleCenter = () => {
        console.log(vaccinedetails);
    }
    const handleDate = (e) => {
        console.log(e.target.innerText);
        if(pin === ""){

            axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=299&date=${e.target.innerText}`) //FETCH ALL VACCINE CENTERES
            .then(function (response) {
                console.log("Details get");
                // console.log(dateDetails[0].today);
                // console.log(response.data.sessions); 
                let centers = response.data.sessions
                console.log(typeof (centers));

                setvaccineDetails(response.data.sessions)
                console.log("vaccineDetails");
                
                console.log(vaccinedetails);
                
            })
        }
        else{
            axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${e.target.innerText}`) //FETCH ALL VACCINE CENTERES
            .then(function (response) {
                console.log("Pin Deatails working");
                 
                // console.log(response.data.sessions); 
                let centers = response.data.sessions
                console.log(typeof (centers));

                setvaccineDetails(response.data.sessions)
                console.log("vaccineDetails");

                console.log(vaccinedetails);

            })
        }
        }
    const handleHome = ()=> {
        setPin("")
        history.push("/")
    }
    return (
        <div className="details">
            <div className="head">

                <div className="home">
                    <button onClick={handleHome} className="home-btn">HOME</button>
                </div>
                <div className="dates">
                    <button className="date-btn" onClick={handleDate}>{dateCollection[0].today}</button>
                    <button className="date-btn" onClick={handleDate}>{dateCollection[0].tommorow}</button>
                    <button className="date-btn" onClick={handleDate}>{dateCollection[0].dayAfterTommorow}</button>

                </div>
            </div>





            {
                vaccinedetails ?

                    vaccinedetails.map((obj) => {

                        return (

                            <div className="centers">
                                <div className="card">

                                    <h5 className="name-tag" onClick={handleCenter}>{obj.name}</h5>
                                    <h6 className="adrs-tag" onClick={handleCenter}>{obj.address}</h6>


                                    <h6 className="date-tag" onClick={handleCenter}> <span>DATE: </span>{obj.date}</h6>


                                    <h6 className="time-tag" onClick={handleCenter}> <span>TIME: </span>{obj.from}-{obj.to}</h6>

                                </div>
                                <div className="bt-bt">
                                    <button className="type-btn">{obj.fee_type}</button>
                                    <button className="age-btn">{obj.min_age_limit}+</button>
                                    <button className="vcn-btn">{obj.vaccine}</button>
                                    {obj.available_capacity === 0 ?
                                        <button className="e-btn">Available Dos:{obj.available_capacity}</button> : ""}

                                    {obj.available_capacity !== 0 ?
                                        <button className="s-btn">Available Dos:{obj.available_capacity}</button>
                                        : ""}

                                </div>

                            </div>

                        )
                    })
                    : <h1>Oops! Not Fount</h1>
            }


        </div>
    )
}

export default VaccineDetails
