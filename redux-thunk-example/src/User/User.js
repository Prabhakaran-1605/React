import { useEffect } from "react"

// useEffect hook is imported to use it as a life cycle method.

import { useDispatch, useSelector } from "react-redux"
// useDispatch hook is imported to dispatch an action

// useSelector hook is imported to read store data.

import { useraction } from "../Redux/user.action"
let User = () => {

    let dispatch = useDispatch()

    let users = useSelector((state) => { return state.users })

    useEffect(() => {
        dispatch(useraction())
    }, [])

    return <>
        <pre>{JSON.stringify(users)}</pre>
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
{/* {Object.keys(users).length>0 ? <>
                            {users.users.map((singleuser, index) => {
                                    return <tr key={index}>
                                    <td>{singleuser.id}</td>
                                    <td>{singleuser.firstName}</td>
                                    <td> <img src={singleuser.image} height="100px" width="100px" alt="#" /></td>
                                    <td>{singleuser.email}</td>
                                    <td>{singleuser.gender}</td>
                                    </tr>                                   
                                })  }</>: null}
 */}

                    </tbody>
                </table>
            </div>
        </div>
    </div>




    </>
}
export default User
