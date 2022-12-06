let Contactdetails = (props) => {
    return <>
        <h1>Contact Details</h1>
        <pre>{JSON.stringify(props.user_contact_details)}</pre>

        <div className="container">

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <img src={props.user_contact_details.picture.large} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">{props.user_contact_details.gender}</li>
                                <li className="list-group-item">{props.user_contact_details.name.first}</li>
                                <li className="list-group-item">{props.user_contact_details.name.last}</li>
                                <li className="list-group-item">{props.user_contact_details.dob.age}</li>
                                <li className="list-group-item">{props.user_contact_details.location.city}</li>
                                <li className="list-group-item">{props.user_contact_details.location.street.name}</li>
                                <li className="list-group-item">{props.user_contact_details.location.state}</li>
                                <li className="list-group-item">{props.user_contact_details.location.country}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </>

}
export default Contactdetails