import React, { Component } from 'react';
import axios, { all } from "axios";
import DetailView from './detailView';
import CardComponent from './cardComponent';
import ButtonComponent from './buttonComponent';

class ListView extends Component {
    constructor() {
        super();
        this.state = {
            pizzaList :[],
            clityList:[],
            visible : false,
            pizzaPlace : "",
            imageURL:"",
            citySelected:"",
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleCity = this.handleCity.bind(this)
    }
    getCities(pizzaPlaces){
        const allCities = pizzaPlaces.map((p) => p.attributes.city);
        console.log("All Cities", allCities);
        const uniqueCities = ["All Cities", ...new Set(allCities)];
        console.log("No Duppies Cities", uniqueCities);
        this.setState({clityList:uniqueCities})
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
    handleCity(city){
        console.log("This is a city",city)
        this.setState({citySelected: city});
    }   

    componentDidMount() {
        axios.get("http://localhost:1337/api/pizzas?populate=*").then((response) =>
        this.setState({pizzaList:response.data.data}, this.getCities(response.data.data)))
    }
    render() { 
        console.log(this.state.pizzaList)
        const  filteredPizzaList = 
        this.state.citySelected && this.state.citySelected!=="All Cities" ?
        this.state.pizzaList.filter((p) => 
            p.attributes.city === this.state.citySelected) : this.state.pizzaList;

        return (
            <div className='container'>
                 <div className="text-center container">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                            <div class="btn-group">
                            {
                                this.state.clityList.map((city) =>
                                    <ButtonComponent
                                    city = {city}
                                    handleCity = {this.handleCity}
                                    />
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>
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
                    filteredPizzaList.map((pizza) =>
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