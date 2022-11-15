import react from "react"

class Comp2 extends react.Component {

    render()
    {
return <> <h1> Class Component 2 </h1> 
<hr/>
<pre>{JSON.stringify(this.props)}</pre>                  

{/* If We want to print the object in browser by using class then pre>{JSON.stringify(this.props)}</pre> 
should be use inside the div tag or Fragment  */}

<hr/>

<h2>Employee ID : {this.props.Employee_Id} </h2>
<h2>Employee Name : {this.props.Employee_Name} </h2>
<h2>Employee Age : {this.props.Employee_Age} </h2>
<hr/>

</>

    }
}
export default Comp2