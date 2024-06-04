import React from "react"
import ReactDOM from "react-dom"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-left">
                <img src="Troll face.png"></img>
                <h3>Meme Generator</h3>
            </div>
            <div className="nav-right">
                <p>React Course - project 3</p>
            </div>
        </div>
    )
}