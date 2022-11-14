import React from 'react'


// props is used to communicate between the two components

// Function to Function   or Function to Class   or Class to Function   or Class to Class

const Comp2 = (props) => {                                // Props is One Object 
  return <div> <h1> Component 2</h1>
    <pre>{JSON.stringify(props)}</pre>         
    </div>                               
}
export default Comp2


/* How to print object in browser  by using {JSON.stringify(props)
we need to write inside the Div tag <pre>{JSON.stringify(props)}</pre> */ 