import React from "react";
import Draggable from 'react-draggable';
import cross_icon from "./images/cross_icon.png";
import collapse_icon from "./images/collapse_icon.png";

class TaskInfoBlock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blockPos: [],
            display: 'block',
            heightInfoBlock: '42vh',
            isVisible: true,
            isClosed: false,
        }
    }

    onCollase = () => {
        if(this.state.isVisible)
            this.setState({ display: 'none', heightInfoBlock: '8vh', isVisible: false });
        else
            this.setState({ display: 'block', heightInfoBlock: '42vh', isVisible: true });

    }

    onClose = () => {
        this.setState({ isClosed: true });
    }

    render(){
        return(
            <>  
                {!this.state.isClosed &&(
                <Draggable bounds="parent">
                    <div className="taskInfoBlock" style={{ height: this.state.heightInfoBlock }}>
                        <img className="crossIcon" src={cross_icon} onClick={this.onClose}></img>
                        <img className="collapseIcon" src={collapse_icon} onClick={this.onCollase}></img>
                        <div className="taskNameInfo">
                            Тут название
                        </div>
                        <div className="bodyInfoBlock" style={{display: this.state.display}}>
                            <div className="timeInfoBlock">
                                Выполнить до: 23.06 12:00
                            </div>
                            <div className="descInfoBlock">
                                Тут крутое описание того, что нужно сделать
                            </div>
                        </div>
                    </div>
                </Draggable>
                )}
            </>
        )
    }
}

export default TaskInfoBlock;