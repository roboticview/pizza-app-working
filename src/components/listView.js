import React, { Component } from 'react';
import axios from "axios";
import DetailView from './detailView';
import CardComponent from './cardComponent';

class ListView extends Component {
    constructor() {
        super();
        this.state = {
            pizzaList :[],
            visible : false,
            pizzaPlace : "",
            imageURL:""
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(objID, imageURL){
        console.log("This is ObjID",objID )
        const url = `http://localhost:1337/api/pizzas/${objID}`
        axios.get(url).then((response)=>
            this.setState({ 
                pizzaPlace : response.data.data, 
                visible: true,
                imageURL:imageURL
             }))
    }
    componentDidMount() {
        axios.get("http://localhost:1337/api/pizzas?populate=*").then((response) =>
        this.setState({pizzaList:response.data.data}))
    }
    render() { 
        console.log(this.state.pizzaList)
        return (
            <div className='container'>
            <div className = "row g-3">
                <div className='col-md-5 col-lg-4 order-md-last'>
                    {
                        this.state.visible ?  
                        <DetailView 
                        pizzaPlace={this.state.pizzaPlace}
                        imageURL = {this.state.imageURL}
                        />:""
                    }
                </div>
                <div className='col-md-7 col-lg-8'>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    this.state.pizzaList.map((pizza) =>
                        <CardComponent 
                            objID ={pizza.id}
                            objPizza={pizza.attributes}
                            handleClick={this.handleClick}
                        />
                    )
                }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ListView;