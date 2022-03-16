import React from "react";
import {FiPhoneCall} from 'react-icons/fi';
import { IconContext } from "react-icons";

function Page_1(){
    return(
        <div className="container_1">
            <p id= "t1">About Diana</p>
            <p id= "st1">A platform that looks out for you</p>
            <p id= "p1">Diana empowers you to understand how your body works so you can look and feel your best.</p>
            <hr style={{width:"297px",margin: "26px 0 0 46px", border: "1px solid #000000"}}/>
            <p id= "t2">Our Philosophy</p>
            <p id= "p2">Sustainable wellness is a big-picture, inside out approach</p>
            <p id= "p3">Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.<br/><br/>That’s why we’ve created an integrated ecosystem of:</p>
            <img id= "img1" src={require('C:/Users/Asus/Desktop/Dyeus/task/src/images/i1.png')}/>
            <div id= "subcontainer_1">
                <p id= "p4">Consciously formulated products that deliver feel-good results fast</p>
                <img id= "img2" src={require('C:/Users/Asus/Desktop/Dyeus/task/src/images/i2.png')}/>
                <p id= "p5">In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</p>
                <IconContext.Provider value={{ color: '#A5A6F6', size: '70px'}}>
                    <FiPhoneCall/>
                </IconContext.Provider>
                <p id= "p6">In-app consultation portals that connect you with compassionate wellness experts</p>
            </div>
            <p id= "p7">Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.</p>
        </div>
    )
}
export default Page_1;