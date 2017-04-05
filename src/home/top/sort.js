import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react';
//import Segments from '../contents/segments.js'

class Sort extends Component {

  state = { activeItem: 'Trending Now' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Trending Now' active={activeItem === 'Trending Now'} onClick={this.handleItemClick} />
          <Menu.Item name='Latest' active={activeItem === 'Latest'} onClick={this.handleItemClick} />
          <Menu.Item name='Popular All Time' active={activeItem === 'Popular All Time'} onClick={this.handleItemClick} />
        </Menu>

      </div>
    );
  }
}

export default Sort;