import React, { Component } from 'react';

class DetailView extends Component {
    state = {  } 
    render() { 
        console.log("This is Details",this.props.pizzaPlace.attributes)
        const {
                title, 
                description,
                street,
                city,
                special_dish
            } = this.props.pizzaPlace.attributes
        return (
            <div className="card">
                <img className="bd-placeholder-img card-img-top" 
                width="100%" height="200"  alt=""
                src = {this.props.imageURL}
                 />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h5 className="card-title">Address: {street}</h5>
                    <h5 className="card-title">City: {city}</h5>
                    <h5 className="card-title">Try: {special_dish}</h5>
                </div>
             </div>
        );
    }
}
 
export default DetailView;

// in ListView onClick show text/info in DetailView
// State ---> variable ---> false
// handle Method ----> onClick --- set the var to true