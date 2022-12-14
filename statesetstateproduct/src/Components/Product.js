import react from "react"

/* class Product extends react.Component {

     state = {

        product_name: "APPLE iPhone 11 (White, 128 GB)",
        price: 44999,
        image: "https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70",
        qty: 1,
    }

    increHandler = () => {

        this.setState({ qty: this.state.qty + 1 })
    }

    decreHandler = () => {

        this.setState({ qty: this.state.qty - 1 })
    }

    render() {
        return <div>
            <div className="Container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th> Price </th>
                                    <th>Image</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_name}</td>
                                    <td>{this.state.price}</td>
                                    <td><img src={this.state.image} alt="" height="100px" /></td>
                                    <td><i className="fa-solid fa-circle-plus" onClick={this.increHandler}></i> {this.state.qty} <i className="fa-solid fa-circle-minus" onClick={this.decreHandler}></i>
                                    </td>

                                </tr>


                            </tbody>

                        </table>


                    </div>
                </div>
            </div>

        </div>

    }




} 
 */

//Another Method


class Product extends react.Component {

    state = {
        Property: [{
            product_name: "APPLE iPhone 11 (White, 128 GB)",
            price: 44999,
            image: "https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70",
            qty: 1,
        }, {
            product_name: "MOTOROLA G60 (Dynamic Gray, 128 GB)  (6 GB RAM)",
            price: 20000,
            image: "https://rukminim1.flixcart.com/image/416/416/knoxnrk0/mobile/g/1/j/g60-panb0000in-panb0016in-panb0012in-panb0014in-motorola-original-imag2aq9v8hzetbn.jpeg?q=70",
            qty: 1,
        }]
    }

    increHandler = () => {

        this.setState({ Property: [{ ...this.state.Property[0], qty: this.state.Property[0].qty + 1 }] })
        
    }
    


    decreHandler = () => {

        this.setState({ Property: [{ ...this.state.Property[0], qty: this.state.Property[0].qty - 1 }] })
    }
    


    render() {
        return <div>
            <div className="Container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th> Price </th>
                                    <th>Image</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.Property[0].product_name}</td>
                                    <td>{this.state.Property[0].price}</td>
                                    <td><img src={this.state.Property[0].image} alt="" height="100px" /></td>
                                    <td><i className="fa-solid fa-circle-plus" onClick={this.increHandler}></i>   {this.state.Property[0].qty}   <i className="fa-solid fa-circle-minus" onClick={this.decreHandler}></i>
                                    </td>
                                </tr>

                                                                


                            </tbody>

                        </table>


                    </div>
                </div>
            </div>

        </div>

    }

}
export default Product