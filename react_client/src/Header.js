import React from "react";
import cross_icon from "./images/cross_icon.png";

class Header extends React.Component{

    render(){
        return (
            <header>
                <img id="exitCross" src={cross_icon}></img>
            </header>
        );
    }
}

export default Header;