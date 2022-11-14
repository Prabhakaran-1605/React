/* import Comp2 from "./Comp2" */

import Compclass from "./Compclass"
let Comp1 = ()=>
{
    let ename = "Prabhakar"  
    return<div> <h1> Component 1 </h1>
    <hr/>

     {/*  Function to Function - prop method - communication between two components */}

{/* At first we have to import to import the component and then sending the data as a property */}

    {/* <Comp2 e_name = {ename}/> */}          {/* e_name ={ename} is a property */}                   

     {/* we have some data (let ename = "Prabhakar")  and i am sending that data as a property */}   

    <Compclass e_name={ename}/>              {/* Function to class */} 
     </div>
} 
export default Comp1