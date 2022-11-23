import React, { Component } from 'react'

class Message extends Component {
    state = {
        character: 100,
    }

    updateHandler=(event)=>{
        this.setState({character : 100 - event.target.value.length}) 
    }

    render() 
    {
        return <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card-header bg-primary text-white">
                            <h1> Text Area Character - Counting Application </h1>
                        </div>
                        <div className="card-body bg-danger text-white">
                            <form className="form-group">
                                <div>
                                    <input placeholder="Phone Number"type="number" name="phoneno"className="form-control bg-warning text-white" />
                                </div>
                                <div>
                                    <textarea placeholder="TextArea"maxLength="100" rows="5" name="textarea" className="form-control bg-warning text-white" onChange={this.updateHandler}></textarea>
                                </div>
                                <pre className="text-white">Remaining Character : {this.state.character}</pre>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>

    }
}
export default Message