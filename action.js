export const Increment=(step)=>{
    return {type:"Incrementer",payload:step}
}
export const Decrement=()=>{
    return {type:"Decrementer"}
}