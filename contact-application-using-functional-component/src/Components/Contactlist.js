import react from "react"

let Contactlist = (props) => {

    let updateUser = (con) => {
        console.log(con.name.first)
        props.selected_user(con)
    }

    return <>

<h1 className="text-danger"> Contact List </h1>
        <pre>{JSON.stringify(props)}</pre>

        <div classname="container">
            <div className="row  bg-dark text-white">
                <div className="col">
                    <table className="table table-hover ">
                        <thead></thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                        <tbody>
                            {props.user_contact.length > 0 ? <>
                                {props.user_contact.map((con, index) => {
                                    return <tr key={index} onMouseOver={updateUser.bind(this, con)}>
                                        <td>{con.login.uuid.substr(32)}</td>
                                        <td>{con.name.first}</td>
                                        <td>{con.email}</td>
                                        <td>{con.gender}</td>
                                    </tr>
                                })}</> : null}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    </>



}
export default Contactlist