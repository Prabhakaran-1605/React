// Function to Class 

/* How to print object in browser  by using {JSON.stringify(this.props)    
    this keyword has to use while fetch the data in class members
    In Function to class or class to class ,we have to use props - keywords to get the property from one component to another 
    but in function to function it is not necessary we can use any keyword as props like x as a props keyword
we need to write inside the Div tag <pre>{JSON.stringify(this props)}</pre> */ 

import react from "react"

class Compclass extends react.Component {

    render()
    {
        return <div> <pre> {JSON.stringify(this.props)} </pre> <hr/> </div> 
    }
}

export default Compclass

