
let Contactlist = (props) => {

    let updateUser = (con) => {
        console.log(con.name.first)
        props.selected_user(con)
    }

    return <>

<h1 className="text-danger"><b> Contact List </b></h1>
        <pre>{JSON.stringify(props)}</pre>

        <div className="container">
            <div className="row  bg-dark text-white">
                <div className="col">
                    <table className="table table-hover ">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                        </thead>
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