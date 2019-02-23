import React, { Component } from "react";
import { Link } from "react-router-dom";

import House from "../component/House";

class Dashboard extends Component {
    constructor() {
        super();
        
        this.state = {
            houseList: [{ name: test, address: 13254 }]
        };
    }
    
    render() {
        const mappedHouse = this.state.houseList.map(house => {
            return ( 
                <House 
                // key={house.id}
                house={house} 
                />
            );
        });
        return (
            <div>
        <div>Dashboard</div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        <House />
        {mappedHouse}
      </div>
    );
}
}
export default Dashboard;
