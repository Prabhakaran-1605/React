import React from "react"

class Salary extends React.Component {

    state = {
        sal: 500000,
    }
    // preserve the initial state in a new object


    updateHandler = (hike) => {
        this.setState({ sal: this.state.sal + hike })

    }

    refreshHandler = () => {
        this.setState({sal: 500000  })
    }


    render() {
        return <>
            <h1>{this.state.sal}</h1>
            <button onClick={this.updateHandler.bind(this, 20000)}>Hike 20000</button> &nbsp;
            <button onClick={this.updateHandler.bind(this, 50000)}>Hike 50000</button> &nbsp;
            <button onClick={this.updateHandler.bind(this, 0)}>No Hike</button>
            <br />
            <br />
            <button onClick={this.refreshHandler}>Refresh-state</button>

        </>
    }
}
export default Salary