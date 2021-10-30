import React, {useState, useEffect} from 'react';


export const Context = React.createContext()


var schema = {
  low: {
    title: "Low Priority",
    items: []
  },
  medium: {
    title: "Medium Priority",
    items: []
  },
  high: {
    title: "High Priority",
    items: []
  }
}
const Store = ({children}) => {


    const [state, setState] = useState(()=> {
      const val=JSON.parse(localStorage.getItem("todos"))
      if(val){schema =val;} 
      return schema
    })
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(state))
    }, [state,setState])
  
    
    
    return(
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Store;