import { useState, useEffect } from "react"

let DigitalClock = () => {

    let [currenttime, setcurrenttime] = useState(new Date().toLocaleTimeString())


/* 
    1) useEffecct syntax - useEffect(() => { }, [])
    2) useEffect is the only life cycle method in functional components.
    3) It will execute after return statement.
    4) useEffect will act same like componentdidMount () for this syntax - useEffect(() => { }, [])
    5) useEffect will act same like componentdidMount () and componentwillUnmount () 
    for this syntax - useEffect(() => { return  ()=>{} }, [])
 */

    // componentDidMount
    
    /* useEffect(() => {
        setInterval(() => {
            setcurrenttime(new Date().toLocaleTimeString())
        }, [1000]);
    },[])
 */
    // componentDidMount and ComponentWillUnmount

    
    useEffect(() => {
        setInterval(() => {
            setcurrenttime(new Date().toLocaleTimeString())
        }, [1000]);
        return () => {
            console.log("UnMouting Time")
        }
    },[])

    return <>
        <div className="container mt-5">
            <div className="row">
                < div className="col-md-6">
                    <div className="card">
                        <div className="Card-header">
                            <h1> Digital Clock </h1>
                        </div>
                        <div className="card-body"> <h2> {currenttime}</h2></div>

                    </div>
                </div>

            </div>

        </div>

    </>

}
export default DigitalClock
