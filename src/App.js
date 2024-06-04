import React from "react";
import ReactDOM from "react-dom"
import Navbar from "./Navbar";
import Form from "./Form"
// import Template from "./Template";
import data from "./memesData";
export default function App(){
    return(
        <div>
            <Navbar />
            <Form />
            {/* <Template /> */}
        </div>  
    )
}