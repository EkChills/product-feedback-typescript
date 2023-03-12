// import { useState, useEffect } from "react";

// const useLocalStorage = (key:string, defaultValue:any) => {
//   const [value, setValue] = useState(() => {
//     let currentValue;
//     try {
//       currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
//     } catch (error) {
//       currentValue = defaultValue
//     }
//     return currentValue
//   })

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value))
//   }, [value, key])

//   return [value, setValue]
// }

// export default useLocalStorage

export const getLocalStorage = (key:string, currentValue:any) =>{
  let result;
  try {
     const foundItem = localStorage.getItem(key)
      if(foundItem) {
        result = JSON.parse(foundItem)
        return result
      } else {
        return currentValue
      }
  } catch (error) {
    return currentValue
  }
}