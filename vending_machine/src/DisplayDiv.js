import React from 'react';
import './DisplayDiv.css';

class DisplayDiv extends React.Component {
    render() {
        return <div className="DisplayDiv">{this.props.children}</div>
    }
}

export default DisplayDiv;