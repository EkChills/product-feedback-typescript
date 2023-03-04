import { useState } from "react"


const getSavedItem = <T,>(key:string , initialValue:T) => {
 const savedItem =  JSON.parse(localStorage.getItem(key)!)
 if(savedItem) return savedItem

 if(initialValue instanceof Function) return initialValue()
 return initialValue
}



const useLocalStorage = <T,>(key:string, initialValue:T) => {
  const [value, setValue] = useState(initialValue)
}


export default useLocalStorage