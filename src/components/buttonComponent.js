import React, { Component } from 'react';

class ButtonComponent extends Component {
    state = {  } 
    render() { 
        const {city} = this.props
        return (
            <a key={city} 
            onClick = {()=> this.props.handleCity(city)}
            class="btn btn-primary">{city}</a>
        );
    }
}
 
export default ButtonComponent;