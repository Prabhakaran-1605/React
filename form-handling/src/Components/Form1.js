import react from "react"

class Form1 extends react.Component {
    state = {
        email: "",
        password: "",
    }

    emailHandler = (event) => {
       /*  console.log(event)
        console.log(event.target) */
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
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                Submission Details
                            </div>
                            <div className="card-body bg-primary">
                                <form onSubmit={this.submitHandler}>
                                    <div className="Form-group">
                                        <label className="text-white">Email</label>
                                        <input type="email" onChange={this.emailHandler} className="form-control" />
                                    </div>
                                    <div className="Form-group">
                                        <label className="text-white">Password</label>
                                        <input type="password" onChange={this.passwordHandler} className="form-control"/><br /><br /></div>
                                    <div className="Form-group">
                                        <input type="submit" />
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    }

}
export default Form1