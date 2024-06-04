import React from "react"

export default function Counter(){
   const[count,setCount] = React.useState(0)
   function add(){
    setCount(prevCount => prevCount + 1)
   }
   function minus(){
    setCount(prevCount =>prevCount - 1)
   }
    return(
        <div className="counter">
            <button className="counter--minus" onClick={minus}>-</button>
            <div className="counter-count"><h1>{count}</h1></div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}



// const [count, setCount] = React.useState(0)
// function add(){
//     setCount(prevCount => prevCount + 1)
// }
// function minus(){
//     setCount(prevCount => prevCount - 1)
// }