import React from "react";

export default function AddItem(){
   const[thingsArray,setThingsArray] = React.useState(["thing 1","thing 2"])
   function additems(){
    setThingsArray(prevThingsArray =>{
        return[...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
   }
   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    return(
        <div className="add_item">
            <button onClick={additems}>Add item</button>
            {thingsElements}
        </div>
    )
}
