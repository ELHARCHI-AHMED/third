const initstate={num:0}
const reducer=(state=initstate,action)=>{
    switch(action.type){
        case"Incrementer":
            return {...state,num:state.num+action.payload}
        case"Decrementer":
            return {...state,num:state.num-action.payload} 
        default:
            return state
}
}
export default reducer