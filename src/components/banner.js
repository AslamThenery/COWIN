import React from 'react'
import { useHistory } from 'react-router-dom'
// import axios from 'axios';
import vaccine from '../images/vaccine.png';
import "./banner.css"
// import { useHistory, useParams } from 'react-router';

function Banner() {

   // const [states,setStates]= useState([])
   const history = useHistory()
   const handleStates = () => {


      history.push({ pathname: "/district" })

   }
   const handlePin = () => {


      history.push({ pathname: "/pin" })

   }
   return (
      <div className="banner">
         {/* <h2>banner working</h2> */}
         <div className="buttons">
            <div className="bhome">
               <button className="home-btn">HOME</button>
            </div>
            <div className="btn">
               <button className="rg-vcn" >REGISTER VACCIN</button>
               <button className="pin-search" onClick={handlePin}>SEARCH BY PIN</button>
               <button className="dis-search" onClick={handleStates}>SEARCH BY DISTRICT</button>
            </div>
         </div>
         <div className="banner-img">
            <div className="img">

            <h1 id="heading">Find Your Nearest Vaccine Center</h1>
            <img className="bnr-img" src={vaccine} alt="" />
            </div>
            <div className="bnr-data">

            <h1>GET VACCINATED</h1>
            <p>
            “Vaccines are one of the most powerful tools in the history of public health, and more children are now being immunized than ever before,” said Dr Tedros Adhanom Ghebreyesus, WHO Director-General. “But the pandemic has put those gains at risk. The avoidable suffering and death caused by children missing out on routine immunizations could be far greater than COVID-19 itself. But it doesn’t have to be that way. Vaccines can be delivered safely even during the pandemic, and we are calling on countries to ensure these essential life-saving programmes continue.”

            </p>
            </div>
            <div className="bnr-heading">

           
            </div>
         </div>
         
      </div>
   )
}

export default Banner
