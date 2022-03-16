import React from "react";
import { GoThreeBars } from 'react-icons/go';
import {FiBell, FiShoppingCart} from 'react-icons/fi';

function Header(){
    return(
        <>
            <div className="top">
                <div className="dropdown"><GoThreeBars style={{width: "24px", height: "24px"}}/></div>
                <div className="cart_bell">
                    <FiShoppingCart style={{width: "24px", height: "24px"}}/>
                    <FiBell style={{width: "24px", height: "24px"}}/>
                </div>
            </div>
        </>
    )
}
export default Header;