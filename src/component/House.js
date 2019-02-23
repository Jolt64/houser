import React from 'react';

function House() {
    const {house} = this.props
    return(
        <div>
            <div>House</div>
            <h2>Name: {house.name}</h2>
            <p>Address: {house.address}</p>
            <p>City: {house.city}</p>
            <p>State: {house.state}</p>
            <p>Zip: {house.zip}</p>

        </div>
    )
}

export default House;