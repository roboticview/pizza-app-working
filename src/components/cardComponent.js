import React, { Component } from 'react';

class CardComponent extends Component {
    state = {  } 
    render() { 
        console.log("PROPS",this.props)
        const {title,city, pizza_image} = this.props.objPizza
        return (
            <div key={this.props.objID}>
                <div className="card" >
                    <img  alt="any"
                    src={`http://localhost:1337${pizza_image.data.attributes.url}`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{city}</p>
                        <a onClick={()=> this.props.handleClick(
                            this.props.objID,
                            `http://localhost:1337${pizza_image.data.attributes.url}`
                        )} 
                        className="btn btn-primary">More Info</a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CardComponent;