import React from "react";

import bg from "./images/Background.jpg";
import TaskInfoBlock from "./TaskInfoBlock";

class MainBlock extends React.Component{

    render(){
        return(
            <div id="mainBlock">
                <TaskInfoBlock/>
            </div>
        )
    }
}

export default MainBlock;