import React, { useState, useEffect } from "react"
import Axios from "axios"
import Contactlist from "./Contactlist"
import Contactdetails from "./Contactdetails"

let Contacts = () => {

    let [user, setuser] = useState({ contacts: [] })
    let [sel_user, setsel_user] = useState({ sel_contact: {} })

    useEffect(() => {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                setuser({ contacts: response.data })
            })
            .catch()
    }, [])

    let selected_contact_details = (con) => {
        setsel_user({ sel_contact: con })
    }


    return <>

        <h1 className="text-danger"><b>Contact Details</b></h1>
        <pre>{JSON.stringify(user)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    {user.contacts.length > 0 ? <><Contactlist user_contact={user.contacts} selected_user={selected_contact_details} /> </> : null}
                </div>
                <div className="col-4">
                    {Object.keys(sel_user.sel_contact).length > 0 ? <> <Contactdetails user_contact_details={sel_user.sel_contact} /></> : null}

                </div>
            </div>
        </div>



    </>




}
export default Contacts
