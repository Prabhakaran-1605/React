import react from "react"

class Login extends react.Component {
    state = {

        islogin: false,
        message: "Hello"
    }
    loginHandler = () => {
        this.setState({
            isLogin: true,
            message: "Welcome to React World"
        })

    }
    logoutHandler = () => {
        this.setState({
            isLogin: false,
            message: "Visit Again"
        })
    }


    render() {
        return <>
            <div className="Container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card-header">
                            {
                                !this.state.isLogin ? <button onClick={this.loginHandler} className="btn btn-warning">Login</button> : <button onClick={this.logoutHandler} className="btn btn-danger">Logout</button>
}
                        </div>
                        <div className="card-body">
                            <h4>{this.state.message}</h4>
                        </div>
                    </div>
                </div>
            </div>



        </>

    }
}
export default Login