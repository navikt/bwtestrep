import React from "react";
import "../App.css";

class Satsheader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            highlight: false,
        }
    }
    render(){
        return(
        <div class = "sats-header" style={{cursor:'pointer'}}>
            <div style={{width: '1%'}}>{this.props.show ? <i class="arrow down"></i> : <i class = "arrow right"></i>}</div>
            <div style={{width: '96%'}}>{this.props.headline}</div>
        </div>
        );
    }
}

export default Satsheader