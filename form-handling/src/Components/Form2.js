import react from "react"

class Form2 extends react.Component {
    state = {
        email: "",
        password: "",
    }

    updateHandler = (event) => {
        /*  console.log(event)
         console.log(event.target) */
        /* console.log(event.target.value)  */

        this.setState({ [event.target.name]: event.target.value })

        // Single Handler for multi input box we have to separate name for each input box 
        // and then to syntax [event.target.name]: event.target.value is used to get each input values 

    }

    submitHandler = (event) => {
        event.preventDefault();                               // preventDefault() is used to get setstate value
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
                                        <input type="email" name="email" onChange={this.updateHandler} className="form-control" />
                                    </div>
                                    <div className="Form-group">
                                        <label className="text-white">Password</label>
                                        <input type="password" name="password" onChange={this.updateHandler} className="form-control" /><br /><br /></div>
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
export default Form2