/* React application main file*/

import App from "./App"              /* Extension is not required because the node ecosystem will take care of that */
import ReactDom from "react-dom"

/* ReactDom.render( <h2>"Hello GM"</h2>, document.getElementById("prabhu")); */

ReactDom.render(<App/>,document.getElementById("prabhu"))