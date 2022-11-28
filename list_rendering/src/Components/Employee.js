import react from "react"
import Employees from "./Data"

class Employee extends react.Component {

    Employees = Employees

    render() {
        return <>
            {/* <pre> {JSON.stringify(this.Employees)}</pre> */}
            <div className=" Container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First_Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Employees.map((employee, index) => { 
                                    return <tr key={index}>
                                        <td> {employee.id}</td>
                                        <td>{employee.first_name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.gender}</td>
                                    </tr>
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    }
}
export default Employee