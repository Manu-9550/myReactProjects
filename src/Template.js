import React from "react"
import ReactDOM from "react-dom"

export default function Template(){
    return(
        <div className="template">
            <div className="template-img">
                <img src="memeimg.png" className="image"></img>
            </div>
            <div className="template-text">
                <h1 className="template-text-one">SHUT UP</h1>
                <h1 className="template-text-two">AND TAKE MY MONEY</h1>
            </div>
        </div>
    )
}