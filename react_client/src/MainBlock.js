import React from "react";

import bg from "./images/Background.jpg";

class MainBlock extends React.Component{

    render(){
        return(
            <div id="mainBlock">
                <img id="bgImage" src={bg}></img>
            </div>
        )
    }
}

export default MainBlock;