import React, { Component } from 'react';

import Header from './top/header.js';
import Filter from './top/filter.js';
import Sort from './top/sort.js';

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <Filter />
      </div>
    );
  }
}

export default Home;