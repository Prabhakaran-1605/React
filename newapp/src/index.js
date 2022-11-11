/* React application main file*/

import Application from "./components/Application";

 import App from "./App"               /* Extension is not required because the node ecosystem will take care of that */

 import ReactDom from "react-dom"

/*  ReactDom.render( <h2>"Hello GM"</h2>, document.getElementById("prabhu"));   */                   // Method 1  

 ReactDom.render(<div> <Application/> <App/> </div>,document.getElementById("prabhu"))                                    // Method 2
/* 
 ReactDom.render(<Application/>,document.getElementById("prabhu"))  */                            // Method 3


// Here i used 3  - ReactDom.render, while executing the application ReactDom.render which is given at the last will execute.   