import React from "react"


class DigitalClock extends React.Component{

    state = {
        currenttime : new Date().toLocaleTimeString()
    }
componentDidMount(){
setInterval(()=>{this.setState({currenttime : new Date().toLocaleTimeString()})},[1000])

}
componentWillUnmount(){
    console.log("It will Execute while we unmount from this component to another or choose other component while running on this component")
}
render()
{
return <>
<div className = "container mt-5">
<div className = "row">
    <div className="col-md-8">
        <div className="card">
            <div className="card-Header"> <h1> Digital Clock </h1></div>
            <div className="card-body"> 
            <h2>{this.state.currenttime}</h2>
            </div>
        </div>
         </div>

</div>

</div>
</>
}

}
export default DigitalClock