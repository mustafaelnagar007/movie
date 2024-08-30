import React, { createContext,  useState } from 'react'
 export const chanta=createContext(0)
const Context = ({Children}) => {
let count =20

    const [input, setInput]=useState("");
      const show=input? "search":"discover"
    const getDataInput=(e)=>{
        console.log('hello')
        setInput(e.target.value)
      }
      
   
  return <chanta.Provider value={{ input, setInput, getDataInput, show ,count}}>
         {Children}
    
  </chanta.Provider>
}

export default Context
