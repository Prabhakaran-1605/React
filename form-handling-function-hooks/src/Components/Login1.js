import react from "react"

let Login1 = () => {

    let [user, setuser] = react.useState({ email: "", password: "" })
/* 
    let emailHandler = (event) => {

        // we have to use spread operator, because merging option is not available in hooks for Object varible in useState

        setuser({ ...user, email: event.target.value })
    }
 *//* 
    let passwordHandler = (event) => {
        setuser({ ...user, password: event.target.value })
    } *//* 
    let submitHandler = (event) => {

        /* the preventDefault() method on the event object to prevent form submission in React,e.g. event. preventDefault() .
         The preventDefault method prevents the browser from issuing the default action which in the case of a form submission
          is to refresh the page.
     */
      /*   event.preventdefault()
        console.log(user)
    }
 */
    return <>

        <pre>{JSON.stringify(user)}</pre>

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h1>Login1 Details - Alternative method - Without using Handler</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(event)=>{event.preventDefault(); console.log(user)}}>
                                <div className="form-group">
                                    <input placeholder="Email" type="text" onChange={(event)=>{setuser({...user,email:event.target.value})}} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input placeholder="Password" type="text" onChange={(event)=>{setuser({...user,password:event.target.value})}} className="form-control" />
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
export default Login1