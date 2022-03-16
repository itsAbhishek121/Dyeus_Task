import React from "react";
import {MdArrowForwardIos} from 'react-icons/md';
import { IconContext } from "react-icons";

function Page_7(){
    return(
        <div className="container_7">
            <p id= "p26">Get your personalized period box</p>
            <img id= "img9" src={require('C:/Users/Asus/Desktop/Dyeus/task/src/images/i9.jpg')}/>
            <p id="p27">Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app.</p>
            <button id= "b5">Create your box on the app
                <IconContext.Provider value={{ color: '#FFFFFF', size: '28px',display: "flex",}}>
                    <MdArrowForwardIos/>
                </IconContext.Provider>
            </button>
        </div>
    )
}
export default Page_7;