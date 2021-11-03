import {createContext, useState} from 'react';

export const districtContext = createContext([])

export default function Context ({children}) {

    const [districtdata, setDistrictdata] = useState("")
    const [districtId, setDistrictId] = useState([])
    const [pin, setPin] = useState("")


    return(
          <districtContext.Provider value={{districtdata, setDistrictdata,districtId,setDistrictId, pin, setPin}}>
              {children}

          </districtContext.Provider>

    )
}