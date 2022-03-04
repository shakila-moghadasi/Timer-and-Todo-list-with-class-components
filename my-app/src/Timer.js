import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:new Date(),
        }
    }
    setTime=()=>{
        this.setState({time:new Date()})
    }
    componentDidMount(){
        this.timeOut = setInterval(() =>this.setTime(),1000)
    }
    componentDidUpdate(){
        this.timeOut = setInterval(() =>this.setTime(),1000)
    }
    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Timer;