import React, { Component } from 'react';

class HeroComponent extends Component {
    state = {  } 
    render() { 
        return (
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Pizza App</h1>
                    <p className="lead text-body-secondary">Find the best Pizza places near you!</p>
                    <p>
                    <a href="" className="btn btn-primary my-2">Main call to action</a>
                    </p>
                </div>
                </div>
            </section>
        );
    }
}
 
export default HeroComponent;