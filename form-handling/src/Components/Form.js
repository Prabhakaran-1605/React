import react from "react"

class Form extends react.Component {
    state = {
        email: "",
        password: "",
    }

    emailHandler = (event) => {
        console.log(event)
        console.log(event.target)
        /* console.log(event.target.value)  */
        this.setState({ email: event.target.value })
    }

    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();                                  // preventDefault() is used to get set
        console.log(this.state)
    }
    render() {
        return <>
            <pre> {JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="email" onChange={this.emailHandler} /><br /><br />
                <label>Password:</label>
                <input type="password" onChange={this.passwordHandler} /><br /><br />
                <input type="submit" />



            </form>
        </>

    }

}
export default Form