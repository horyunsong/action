import React, { Component } from 'react';

import Sticky from './top/sticky.js';
import Filter from './top/filter.js';

class Home extends Component {

  render() {
    return (
      <div>
        <Sticky />
        <Filter />
      </div>
    );
  }
}

export default Home;