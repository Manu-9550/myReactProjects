import React from "react"
export default function State(){
    const [isImportant , setIsImportant] = React.useState("YES")
    function handleClick(){
        return(
            setIsImportant("NO")
        )
    }
    return(
        <div className="state">
            <h1>is state important</h1>
            <div className="state-value" onClick={handleClick}>
                <h1>{isImportant[0]}</h1>
            </div>
        </div>
    )
}