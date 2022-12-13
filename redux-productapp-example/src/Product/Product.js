import {useDispatch} from "react-redux"
import { incrAction,decrAction  } from "../redux/product.action"
let Product = () => {
    let product = {
        name: "FOSSIL",
        img: "https://rukminim1.flixcart.com/image/832/832/kyvvtzk0/watch/7/p/e/1-me3061it-fossil-men-original-imagbyhspyy3vsb9.jpeg?q=70",
        price: 12597,
        qty: 1,
    }
    let dispatch = useDispatch()

    let increHandler = ()=>{
// To Dispatch an Action - useDispatch hook to be use
dispatch(incrAction())
    }
    let decreHandler = ()=>{
        // To Dispatch an Action - useDispatch hook to be use
        dispatch(decrAction())
    }
    return <>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td><img src={product.img} height="150px" alt="img1" /></td>
                                <td>{product.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={decreHandler}></i>{product.qty}<i className="fa fa-plus-circle" onClick={increHandler}></i></td>
                                <td>{product.qty * product.price}</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    </>
}
export default Product