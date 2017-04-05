import React, { Component } from 'react';
import './segments.css';

import { Card, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import clever from '../../images/clever.jpg';
import toys from '../../images/toys.jpg';
import hero from '../../images/hero.jpg';

class Segments extends Component {

  render() {

    const extra = (
      <div className="extra">
        <span>
          <Icon name='users' />
          3
        </span>
        <span>
          <Icon name='commenting outline' />
          16
        </span>
      </div>
    )

    return (
      <div className="segments">
        <Link to="/book">
          <Card className="poof"
                image={hero}
                header="It's Not Just a Shirt"
                meta='Gender/Sex, Consumer'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
          />
        </Link>
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
            meta='Gender/Sex, Education'
            description="Girls nurture, boys build. Girls play with dolls, boys play with trucks. Toys are the first education and dangerous tool for sexism."
            extra={extra}
          />
        </Link>


      </div>
    );
  }
}

export default Segments;