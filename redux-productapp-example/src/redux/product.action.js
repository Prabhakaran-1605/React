let INCRE = "INCRE"
let DECRE = "DECRE"

let incrAction = ()=>{
    // Action is a function returns actionable Object
    return { type : INCRE}
}

let decrAction = ()=>{
// Action is a function returns actionable Object
return { type : DECRE}
}
export {INCRE,DECRE,incrAction,decrAction}