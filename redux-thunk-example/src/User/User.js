import { sel_user } from "../Redux/user.action"
import { useEffect } from "react"

// useEffect hook is imported to use it as a life cycle method.

import { useDispatch, useSelector } from "react-redux"
// useDispatch hook is imported to dispatch an action

// useSelector hook is imported to read store data.

import { useraction } from "../Redux/user.action"
let User = () => {

    let dispatch = useDispatch()

    let x = useSelector((state) => { return state.users})
    let y = useSelector((state) => { return state.sel_users })

    let useHandler = (singleuser) => {
        console.log(singleuser.id)
        dispatch(sel_user(singleuser))
    }


    useEffect(() => {
        dispatch(useraction());
    }, []);


    return <div>
        <pre>{JSON.stringify(x)}</pre>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead>
                            <tr className="bg-dark text-white">
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(x).length > 0 ? <>
                                {x.users.map((singleuser, index) => {
                                    return <tr key={index} onClick={useHandler.bind(this, singleuser)}>
                                        <td>{singleuser.id}</td>
                                        <td>{singleuser.firstName}</td>
                                        <td> <img src={singleuser.image} height="100px" width="100px" alt="#" /></td>
                                        <td>{singleuser.email}</td>
                                        <td>{singleuser.gender}</td>
                                    </tr>
                                })}</> : null}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <h1>User Details</h1>
                    <pre>{JSON.stringify(y)}</pre>
                    <div className="card">
                        <div className="card-header bg-danger">
                            <img src={y.image} alt="image1" height="100px" /> </div>
                        <div className="card-body bg-primary" >
                            <ul className="list-group ">
                                <li className="list-group-item bg-success text-white"><b>Id: {y.id}</b> </li>
                                <li className="list-group-item bg-success text-white"><b>FirstName</b> {y.firstName} </li>
                                <li className="list-group-item bg-success text-white"><b>Last Name:</b> {y.lastName}</li>
                                <li className="list-group-item bg-success text-white"><b>Age:</b>{y.age}</li>
                                <li className="list-group-item bg-success text-white"><b>Gender:</b>{y.gender} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default User
