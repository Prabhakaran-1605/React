// action type

const GM = "GM"
const GN = "GN"

// action
// Action is a function it returns actionable object 
let gmAction = ()=>{

    return { type : GM}

}

let gnAction = ()=>{

    return {type : GN}

}

export {gmAction,gnAction,GM,GN}
