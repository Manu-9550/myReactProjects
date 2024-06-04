import React from "react";

export default function User(){
    [contact , setContact] = React.useState({
        firstName:"John",
        lastName:"wick",
        number:"+91 9440874721",
        email:"johnwick@gmail.com"
    })
    return(
        <div className="user">
            <div className="user-img">
                <img src="./user.png"></img>
            </div>
            <div className="star-img">
                <img src="./filled.png"></img>
            </div>
            <div className="content">
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>+91 9440874721</p>
            <p>johnwick@gmail.com</p>
            </div>
        </div>
    )
}