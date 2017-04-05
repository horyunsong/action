/**
 * Created by horyunsong on 04/04/2017.
 */
import React, { Component } from 'react';

import { Input, Menu } from 'semantic-ui-react';
import './top.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ''
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu className='sticky'>
          <Menu.Item name='Refuse to be Silent' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Header;