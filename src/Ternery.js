import React from "react"

export default function Ternery (){
    // const isGoing = true
    // let answer = isGoing === true ? "yes" : "no"

    const [isFeeling, setIsFeeling] = React.useState(true)
    function feeling(){
        setIsFeeling(prevState => !prevState)
    }
    return(
        <div className="state2">
            <h1>do i feeling good?</h1>
            <div onClick={feeling}className="state-value2" >
                <h1>{isFeeling ? "yes":"no"}</h1>
            </div>
        </div>
    )
}
// https://chat.openai.com/share/9040c1f2-1b8a-4e22-a330-6cabc112353c