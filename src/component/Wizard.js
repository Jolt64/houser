import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: ''
    };
  }

  handleName(val) {
    this.setState({
      name: val
    });
  }

  handleAddress(val) {
    this.setState({
      address: val
    });
  }

  handleCity(val) {
    this.setState({
      city: val
    });
  }

  handleState(val) {
      this.setState({
          state: val
      });
  }

  handleZip(val) {
      this.setState({
          zip: val
      });
  }



  render() {
    return (
      <div>
        <div>Wizard</div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <input
          type="text"
          placeholder="Name"
          onChange={e => this.handleName(e.target.value)}
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={e => this.handleAddress(e.target.value)}
          value={this.state.address}
        />
        <input
          type="text"
          placeholder="City"
          onChange={e => this.handleCity(e.target.value)}
          value={this.state.city}
        />
          <input
            type="text"
            placeholder="State"
            onChange={e => this.handleState(e.target.value)}
            value={this.state.state}
          />
        <input
          type="text"
          placeholder="Zipcode"
          onChange={e => this.handleZip(e.target.value)}
          value={this.state.zip}
        />
      </div>
    );
  }
}
export default Wizard;
