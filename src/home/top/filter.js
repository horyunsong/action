/**
 * Created by horyunsong on 04/04/2017.
 */
import React, { Component } from 'react';
import { Button, Divider} from 'semantic-ui-react';
import './top.css';
import '../contents/segments.css';

import Sort from './sort';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import clever from '../../images/clever.jpg';
import toys from '../../images/toys.jpg';
import hero from '../../images/hero.jpg';

class Filter extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      age: fals,
      appearance: false,
      disability: false
    }
  }

  handleClick = (tag) => this.setState({ tag: !tag.state })*/

  state = {};

  handleClick = () => this.setState({ active: !this.state.active });




  render() {
    const { active } = this.state;

    const extra = (
      <div className="extra">
        <span>
          <Icon name='users' />
          13
        </span>
        <span>
          <Icon name='commenting outline' />
          6
        </span>
      </div>
    );

    return (
      <div>
        <div className="filter">
          <span>WHY</span>
          <div className="tags">
            <Button toggle active={false} onClick={this.handleClick}>
              Age
            </Button>
            <Button toggle active={false} onClick={this.handleClick}>
              Appearance
            </Button>
            <Button toggle active={false} onClick={this.handleClick}>
              Disability
            </Button>
            <Button toggle active={active} onClick={this.handleClick}>
              Gender/Sex
            </Button>
            <Button toggle active={false} onClick={this.handleClick}>
              Race/Heritage
            </Button>
            <Button toggle active={false} onClick={this.handleClick}>
              Refugee
            </Button>
            <Button toggle active={false} onClick={this.handleClick}>
              Religion
            </Button>
            <Button toggle active={false} onClick={this.handleClick}>
              Other
            </Button>
          </div>
        </div>
        <div className="filter">
          <span>HOW</span>
          <div className="tags">
            <Button toggle active={false} onClick={this.handleClick}>
              Communication
            </Button>
            <Button toggle active={false} onClick={this.handleClick}>
              Consumer
            </Button>
            <Button toggle active={active} onClick={this.handleClick}>
              Education
            </Button>
            <Button toggle active={false} onClick={this.handleClick}>
              Entertainment
            </Button>
          </div>
        </div>

        <Divider/>
        <Sort />


        <div className="segments">
          {active ? <div></div> :
          <Link to="/book">
            <Card
                  image={hero}
                  header="It's Not Just a Shirt"
                  meta='Gender/Sex, Consumer'
                  description="It was never just a shirt, just a joke. Don't tolerate the pervasive messages that degrade girls and women."
                  extra={extra}
            />
          </Link>
             }
          <Link to="/book">
            <Card
              image={clever}
              header="Gender Stereotypes in Children's Books"
              meta="Gender/Sex, Education"
              description="A good book should be open to anyone, so why do some children’s publishers restrict readership according to gender?"
              extra={extra}
            />
          </Link>
          <Link to="/book">
            <Card
              image={toys}
              header="Sexism Begins in the Toy Aisle"
              meta='Gender/Sex, Education, Consumer'
              description="Girls nurture, boys build. Girls play with dolls, boys play with trucks. Toys are the first education and dangerous tool for sexism."
              extra={extra}
            />
          </Link>


        </div>

      </div>
    );
  }
}

export default Filter;