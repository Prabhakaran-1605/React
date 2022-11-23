import react from "react"

class Location extends react.Component {
    state = {
        Chennai: false,
        Bangalore: false,
        Mumbai: false
    }

    chennaiHandler = () => {
        this.setState({ Chennai: !this.state.Chennai })

    }


    bangaloreHandler = () => {
        this.setState({ Bangalore: !this.state.Bangalore })
    }


    mumbaiHandler = () => {
        this.setState({ Mumbai: !this.state.Mumbai })
    }


    render() {

        return <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div><input type="checkbox" onInput={this.chennaiHandler} /> Chennai</div>
                        <div> <input type="checkbox" onInput={this.bangaloreHandler} /> Bangalore</div>
                        <div> <input type="checkbox" onInput={this.mumbaiHandler} /> Mumbai</div>
                    </div>
                    <div className="col-8">
                        {this.state.Chennai ? <><div className="card-body bg-warning text-white">
                            <p>Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu.</p></div></> : null}
                        {
                            this.state.Bangalore ? <><div className="card-body bg-danger text-white">
                                <p>Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. </p></div></> : null
                        }
                        {
                           this.state.Mumbai? <><div className="card-body bg-success text-white">
                                <p>Mumbai (formerly called Bombay) is a densely populated city on India’s west coast.</p></div></> : null
                        }
                    


                </div>

            </div>
        </div>



        </>
    }

}
export default Location