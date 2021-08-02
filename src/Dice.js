import React, {Component} from "react";
import "./Dice.css"

class Dice extends Component{
    constructor(props){
        super(props);
        this.state = {face: 6}
    }
    render(){
        return (
            <i className={`Dice fas fa-dice-${this.props.face}`}/>
        )
    }
}

export default Dice;