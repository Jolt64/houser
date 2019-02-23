import React, { Component } from 'react';
import './App.css';

import Routes from './route'
import Header from './component/Header';


class App extends Component {




  render() {

    return (
      <div>
        <div>
          <Header/>
        </div>
      <Routes/>
      <p>just to test</p>

      </div>
    );
  }
}

export default App;
