import { connect,useDispatch } from "react-redux"


import {Increment,Decrement} from "./action"
function Compteur(props){
    const dispatch=useDispatch()
    return(
        <>
        <p>{props.num}</p>
        <button onClick={() => dispatch(Increment(5) )}> incrementer</button>
        <button onClick={() => dispatch({type:"Decrementer",payload:5} )}> decrementer</button>
        </>
    )
}
const mapStateToProps=(state)=>{
    return{num:state.num}
}


export default connect(mapStateToProps)(Compteur);
