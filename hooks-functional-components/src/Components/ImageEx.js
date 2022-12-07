// useRef() - Hook acts same like document.getElementById() which is used to get tag reference


import {useRef} from "react"
import image from "./Coffee Beans.jpg"
let ImageEx = ()=>{

    let Image = useRef(null)

return <>

<img src={image} alt="coffeeimg" ref={Image} width= "50%"/>

{/* if we console.log(Image) then we get one object as an output which shows {current: Image}
 if we want to get the tag reference of the image then we have to give Image.curremnt in console statement */}

<button onClick={()=>{console.log(Image.current)}}> Click </button>

</>


}
export default ImageEx