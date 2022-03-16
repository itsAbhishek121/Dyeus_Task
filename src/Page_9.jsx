import React from "react";
import {IoIosArrowForward} from 'react-icons/io';
import {FiFacebook, FiMail, FiTwitter} from 'react-icons/fi';
import { IconContext } from "react-icons";

function Page_9(){
    return(
        <div className="container_9">
            <div id= "social_media">
                <IconContext.Provider value={{ color: '#FFFFFF', size: '28px',display: "flex",}}>
                    <FiFacebook/>
                    <FiTwitter/>
                </IconContext.Provider>
            </div>
            <div id= "products">Products
                <IconContext.Provider value={{ color: '#FFFFFF', size: '14px',display: "flex",}}>
                    <IoIosArrowForward/>
                </IconContext.Provider>
            </div>
            <div id="our_science">Our Science
                <IconContext.Provider value={{ color: '#FFFFFF', size: '14px',display: "flex",}}>
                    <IoIosArrowForward/>
                </IconContext.Provider>
            </div>
            <div id="vision_mission">Vision & Mission
                <IconContext.Provider value={{ color: '#FFFFFF', size: '14px',display: "flex",}}>
                    <IoIosArrowForward/>
                </IconContext.Provider>
            </div>
            <div id="about_us">About Us
                <IconContext.Provider value={{ color: '#FFFFFF', size: '14px',display: "flex",}}>
                    <IoIosArrowForward/>
                </IconContext.Provider>
            </div>
            <hr style={{width: "306px",margin:"24px 0 0 38px",border:"0.1px solid #E3F4FF", backgroundColor: "#E3F4FF"}}/>
            <div id="subscribe">
                <form style={{display:"flex",flexDirection:"column"}}>
                    <label id="l1" for="mail_box" >Subscribe to our Newsletter</label>
                    <input type="email" id="MAIL" name="mail_box" placeholder="Enter your email..."/>
                </form>
                <button id= "activate_button">
                    <FiMail/>
                Activate</button>
            </div>
        </div>
    )
}
export default Page_9;