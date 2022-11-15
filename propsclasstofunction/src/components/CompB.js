

let CompB = (props)=>
{

return <> <h3> Component B</h3> 

<pre>{JSON.stringify(props)}</pre>

<h4>ArrayValue : {props.Array}</h4>
<h4>ArrayValue : {props.Array[0]}</h4>
<h4>ArrayValue : {props.Array[2]}</h4>
<hr/>

<h4>Name :{props.Object.ename}  </h4>
<h4>Id :{props.Object.id}  </h4>
<h4>Age :{props.Object.age}  </h4>
<hr/>

<h4>Boolean :{props.Boolean}  </h4>


</>


}
export default CompB