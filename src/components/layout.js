import React, { Component } from 'react';
import ListView from './listView';
import HeroComponent from './heroComponent';
import NavBarComponent from './navbarComponent';

class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <NavBarComponent />
                <HeroComponent />
                <ListView />
            </div>
        );
    }
}
 
export default Layout;