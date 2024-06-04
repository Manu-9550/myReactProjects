import React from "react"
import ReactDOM from "react-dom"
import memesData from "./memesData"

export default function Form(props){
    const [memeImage,setMemeImage]=React.useState("")
    function getMemeImage (){
        const memesArray = memesData.data.memes
        const randomNumber=Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url )

    }
    return(
        <div className="buttons">
            <div className="input-fields">
                <input type="text" placeholder="shut up"></input>
                <input type="text" placeholder="and take my money"></input>
            </div>
            <div className="button">
                <button onClick={getMemeImage}>Get a new meme image</button>
                <img src="photo-icon.png"></img>
            </div>
            <img src={memeImage} className="meme-template"></img>
        </div>
    )
}

