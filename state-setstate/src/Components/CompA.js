import react from "react"

class CompA extends react.Component {
    state = { message: "Hello" }     /*  State object property - state is a object contains property name and property value */

    messageHandler1 = () => {
        console.log("Test Two")
        this.setState({ message: "Hello, Good Morning, How are you???" })
    }

    messageHandler2 = () => {
        console.log("Test Four")
        this.setState({ message: "Hello, Good Afternoon, How are you???" })
    }

    messageHandler3 = () => {
        console.log("Test Four")
        this.setState({ message: "Hello, Good Night, How are you???" })
    }

    /*    State and setstate mechanism is used to rerender the "render()" method so as to update the property inside the web page */


    /* onClick={this.messageHandler() If we invoke inside the render method then messageHandler console value will execute before onClick event */

    render() {
        console.log("Test One")
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card-header bg-danger text-white">
                            <h2> Message Component</h2>
                            <h3>Message: {this.state.message}</h3>
                        </div>
                        <div className="card-body ">
                            <button className="btn btn-outline-danger" onClick={this.messageHandler1}>GM</button> &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-outline-primary" onClick={this.messageHandler2}>GA</button> &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-outline-warning" onClick={this.messageHandler3}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}
export default CompA