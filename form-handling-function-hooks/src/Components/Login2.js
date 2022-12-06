import react from "react"

let Login2 = () => {

    let [user, setuser] = react.useState({ email: "", password: "" })

    let Handler = (event) => {

        // we have to use spread operator, because merging option is not available in hooks for Object varible in useState

        setuser({ ...user, [event.target.name]: event.target.value })
    }
 
       return <>

        <pre>{JSON.stringify(user)}</pre>

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h1>Login1 Details - Using single Handler to update the onchange value</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(event)=>{event.preventDefault(); console.log(user)}}>
                                <div className="form-group">
                                    <input placeholder="Email" type="text" name="email"onChange={Handler} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input placeholder="Password" type="text" name="password" onChange={Handler} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default Login2