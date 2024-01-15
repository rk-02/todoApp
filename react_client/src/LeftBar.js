import React, {useEffect, useState} from "react";
import axios from 'axios';

class LeftBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            taskList: []
        };
    }

    componentDidMount(){
        axios.get("http://localhost:3001/get")
            .then((res) => {
                res.data.sort((a, b) => a.id - b.id);
                this.setState({ taskList: res.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render(){
        return(
            <div id="leftBar">
                {
                    this.state.taskList.map((task) => (
                        <div className="barTask" key={task.id}>{task.title}</div>
                    ))
                }
            </div>
        );
    }
}

export default LeftBar;