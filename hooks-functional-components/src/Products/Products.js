import {useState} from "react"


let Products = ()=> { 

    let [product,setproduct] = useState({product_Name: "Iphone 12", price: 45000, qty: 1})

let increHandler = ()=> {

    setproduct({...product, qty:product.qty + 1})      // automerging option is not available in hooks for object variable that why we use spread operator. 
}

let decrHandler = ()=> {

    setproduct({...product, qty:product.qty - 1})

}
    return <>
    <div className ="container">
        <div className="row"> 
        <div className = "col-md-8">
<table className="table table-hover">
<thead>
<tr>
<th>Product Name</th>
<th>price</th>
<th>Qty</th>
</tr>

</thead>
<tbody>
<tr>
<td>{product.product_Name}</td>
<td>{product.price}</td>
<td><i className="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty}<i className="fa fa-plus-circle" onClick={increHandler}></i></td>

</tr>

</tbody>
</table>


        </div>
        </div>
    </div>


    </>
}
export default Products