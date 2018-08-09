import React, { Component } from 'react';
import egg from './pics/upgrade1.png';

class Upgrade1 extends Component {

    constructor(props) {
        super(props);

        this.eggClick = this.eggClick.bind(this);
    }


    eggClick() {
        var element = document.getElementById("egg");
        element.classList.remove("egg-norm");
        element.classList.add("egg-up");
        setTimeout(this.eggTurn, 30);

        console.log("hello2");
    }

    eggTurn() {
        var element = document.getElementById("egg");
        element.classList.remove("egg-up");
        element.classList.add("egg-norm");
    }


    render() {
        return (
            <div>
                <img
                    id="egg"
                    className="egg-norm"
                    onClick={this.eggClick}
                    src={egg}
                />
            </div>
        )
    }
}


export default Upgrade1;