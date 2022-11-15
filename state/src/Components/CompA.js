import react from "react"

class CompA extends react.Component {
    message = "Hello"
    /*  messageHandler()
     {
 console.log("Test 123")
 this.message = "GM"
 console.log(this.message) */

    /* If i use normal function then console.log(this.message) will not reflect during inspect the web page,
    to reflect it in webpage during inspect then we need to use fatarrow function  because in normal function we get large output of object in "this" keyword */

    messageHandler = () => {
        console.log("Test 123")
        this.message = "GM"
        console.log(this.message)
        this.forceUpdate()
    }
    /* this.forceUpdate() is used to rerender the UI Code so as to implement the changes made by using EventHandler */


    /*     render()
        {
            return <>
            <h1> Message Component</h1>
            <h3>Message: {this.message}</h3>
            <button className="btn btn-outline-danger" onClick={this.messageHandler()}>GM</button> &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-outline-warning">GN</button>
            </>
        }  */

    /* onClick={this.messageHandler() If we invoke inside the render method then messageHandler console value will execute before onClick event */

    render() {
        return <>
            <h1> Message Component</h1>
            <h3>Message: {this.message}</h3>
            <button className="btn btn-outline-danger" onClick={this.messageHandler}>GM</button> &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-outline-warning">GN</button>
        </>
    }


}
export default CompA