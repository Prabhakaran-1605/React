import React from "react"
import Axios from "axios"

class User_1 extends React.Component {
    state;
    constructor(props) {
        super(props)
        console.log("First render")
        this.state = {
            user: {}
        }
    }
    componentDidMount(){
        Axios.get("https://dummyjson.com/users")
            .then((resp) => {
                console.log(resp.data)
                this.setState({ user : resp.data })
            })
            .catch()
    }

    render() {
        console.log("Second render")
        return (<>
            <pre>{JSON.stringify(this.state.user)}</pre>
            <h1>Comonent Life Cycle Method - ComponentDidMount() - used. It will execute after render() method. This method is used to perform extra activities</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        Object.keys(this.state.user).length > 0 ?
                                        <>
                                            {
                                                this.state.user.users.map((userObj,index) => {
                                                    return <tr key={index}>
                                                        <td>{userObj.id}</td>
                                                        <td>{userObj.firstName}</td>
                                                        <td>{userObj.age}</td>
                                                        <td>{userObj.gender}</td>
                                                    </tr>
                                                })
                                            }
                                        </> : null
    }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>)

    }

}
export default User_1