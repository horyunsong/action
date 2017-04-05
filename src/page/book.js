import React, {Component} from 'react';
import { Container, Divider, Segment, Grid, Image, Label, Button, Icon, Header, Menu, Dropdown } from 'semantic-ui-react';
import './books.css';

import toys from '../images/toys2.jpg';
import nytimes from '../images/nytimes.jpg';
import gap from '../images/gap.jpg';
import letToys from '../images/let.jpg';
import disqus from '../images/disqus.png';

class Book extends Component {

  state = { activeItem: 'Let Toys be Toys Campaign' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const sort = [
      { key: 'Trending', text: 'Trending', value: 'Trending' },
      { key: 'Latest', text: 'Latest', value: 'Latest' }
    ]

    const filter = [
      { key: 'Blog', text: 'Blog', value: 'Blog' },
      { key: 'News', text: 'News', value: 'News' },
      { key: 'Petition', text: 'Petition', value: 'Petition' },
      { key: 'Twitter', text: 'Twitter', value: 'Twitter' },
      { key: 'Video', text: 'Video', value: 'Video' },
      { key: 'Website', text: 'Website', value: 'Website' }
      ]

    return (
      <div>
        <Image src={toys} fluid/>
        <Segment id="title">
          <Grid>
            <Grid.Column width={1} >
            </Grid.Column>
            <Grid.Column width={11} >
              <Container textAlign='justified'>
                <h1>Sexism Begins in the Toy Aisle</h1>
                <Divider />
                <p>Girls nurture, boys build. Girls play with dolls, boys play with trucks. Toys are the first education and dangerous tool for sexism.</p>
                <p>Gender has always played a role in the world of toys. What’s surprising is that over the last generation, the gender segregation and stereotyping of toys have grown to unprecedented levels. We’ve made great strides toward gender equity over the past 50 years, but the world of toys looks a lot more like 1952 than 2012.</p>
              </Container>
            </Grid.Column>
            <Grid.Column width={1} >
            </Grid.Column>
            <Grid.Column width={3} >
              Gender/Sex <br/>
              Consumer <br/>
              Education <br/><br/><br/>
              <span>
                <Icon name='users' />
                13 People Acted
              </span><br/>
                    <span>
                <Icon name='commenting outline' />
                6 Comments
              </span>
            </Grid.Column>
          </Grid>

        </Segment>


        <Container>
          <Header as='h3'>
            <Icon name='fire' />
            <Header.Content>
              Why We Should Act
            </Header.Content>
          </Header>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Segment>
                  <Label attached="bottom">NY Times: Guys and Dolls No More?</Label>
                  <Image
                    src={nytimes}
                    as="a"
                    href="http://www.nytimes.com/2012/12/23/opinion/sunday/gender-based-toy-marketing-returns.html"
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Label attached="bottom">DailyMail: GapKids Social Butterfly and Little Scholar</Label>
                  <Image
                    src={gap}
                    as="a"
                    href="http://www.dailymail.co.uk/femail/article-3718308/How-seriously-think-OK-Gap-Kids-provokes-fury-sexist-ad-calling-little-boys-scholars-girls-social-butterflies-spells-Einstein-s-wrong.html"
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <iframe width="357px" height="240px" src="https://www.youtube.com/embed/TN2wPkU8prU" frameborder="0" allowfullscreen></iframe>
              </Grid.Column>

            </Grid.Row>
          </Grid>
          <br/><br/>
          <div className="action">
            <Header as='h3'>
              <Icon name='hand paper' />
              <Header.Content>
                How We Can Act
              </Header.Content>
            </Header>

            <div className="dropdownWrapper">

              <Dropdown text='Sort' simple item options={sort} />
              <Dropdown text='Filter' simple item options={filter} />
            </div>

          </div>
          <div className="flex">
            <div className="flexItem">
              <Menu pointing secondary vertical >
                <Menu.Item name='Let Toys be Toys Campaign' active={activeItem === 'Let Toys be Toys Campaign'} onClick={this.handleItemClick} />
                <Menu.Item name='Retail Boycott' active={activeItem === 'Retail Boycott'} onClick={this.handleItemClick} />
                <Menu.Item name='Share this Issue' active={activeItem === 'Share this Issue'} onClick={this.handleItemClick} />
              </Menu>
              <Button circular icon='users' content='I Acted!' label="13"/>
            </div>

            <div className="side flexItem">
              <Segment>
                <Label as='a' color='olive' ribbon='right' className="special">Website</Label>
                <Image src={letToys} size='small'  />
                <h4>Let Toys be Toys Website</h4>
                <p>
                  Let Toys Be Toys is asking the toy and publishing industries to stop limiting children’s interests by promoting some toys and books as only suitable for girls, and others only for boys.
                </p>
              </Segment>
              <Segment>
                <Label as='a' color='red' ribbon='right' className="special">Petition</Label>
                <h4>Petitioning Toy Retailers in UK and Ireland</h4>
                <p>
                  Stop promoting toys as only for boys, or only for girls
                </p>
              </Segment>
              <Segment>
                <Label as='a' color='blue' ribbon='right' className="special">Twitter</Label>
                <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Teachers! Help children fulfil their potential: our 10 ways to challenge gender stereotypes at school and nursery <a href="https://t.co/02J0LxtBAy">https://t.co/02J0LxtBAy</a> <a href="https://t.co/p4feNzyMha">pic.twitter.com/p4feNzyMha</a></p>&mdash; Let Toys Be Toys (@LetToysBeToys) <a href="https://twitter.com/LetToysBeToys/status/847070110955323396">March 29, 2017</a></blockquote>
                <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
              </Segment>
            </div>
          </div>
          <Divider/>
          <Image src={disqus} />
        </Container>


      </div>
    );
  }
}

export default Book;