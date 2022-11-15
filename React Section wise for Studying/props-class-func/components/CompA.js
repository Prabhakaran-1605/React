import react from "react"
import CompB from "./CompB"
class CompA extends react.Component {

    a = [10,20,30,40]
    b = {ename:"Prabhu", id:100, age:27}
    c = false
    render()
    {
        return <> <h2>Component A </h2>
        <CompB Array = {this.a} Object = {this.b} Boolean = {this.c}/> </>
    }

}
export default CompA