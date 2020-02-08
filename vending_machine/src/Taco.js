import React from 'react';
import DisplayDiv from './DisplayDiv';
import './Taco.css';

class Taco extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tacos: [] }
        this.handleClick = this.handleClick.bind(this);

    }

    serveATaco(e) {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        this.setState(prevState => ({
            tacos: [...prevState.tacos, { x, y }]
        }));
    }
    handleClick(e) {
        this.serveATaco()
    }

    render() {
        const tacos = this.state.tacos.map((taco, i) => (
            <p key={i} className='taco' style={{ top: `${taco.y}px`, left: `${taco.x}px` }}>🌮</p>
        ));
        return (
            <DisplayDiv className="Taco">
                <button onClick={this.handleClick}>Uno Mas Porfavor!</button>
                {tacos}
            </DisplayDiv>
        )
    }
}

export default Taco;