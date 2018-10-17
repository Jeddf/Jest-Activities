import React, { Component } from "react";
import "./App.css";
import { Form, Input } from './components/Form';
import { Container, Row } from './components/Grid';
import { checkIfInSpace } from './utils';
import debounce from 'lodash.debounce';

class App extends Component {
  state = {
    loadedSpaceInfo: false,
    firstName: '',
    spaceName: 'Chris Hadfield'
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
      loading: true
    });

    this.checkIfInSpace(this.state.spaceName);
  };

  render() {
    return (
      <Container>
        <Row>
          {
            <h3 style={{padding: '1rem'}}>
              {this.getHeadingText()}
            </h3>
          }
        </Row>
        <hr/>
        <Row>
          <Form>
            <Row>
              <Input
                name={'firstName'}
                value={this.state.firstName}
                displayName={'First Name'}
                onChange={this.handleInputChange}
              />
            </Row>
            <Row>
              <Input
                name={'spaceName'}
                value={this.state.spaceName}
                displayName={'Space Name'}
                onChange={this.handleInputChange}
              />
            </Row>
          </Form>
        </Row>
      </Container>
    );
  }

  getHeadingText () {
    if (this.state.loading) {
      return 'Loading...'
    }
    if (
      this.state.loadedSpaceInfo
      && this.state.firstName.length
      && this.state.spaceName.length
    ) {
      const headingText = `Hello ${this.state.firstName}!`
      if (this.state.currentAstronautInfo) {
        return `${headingText} You are currently in space aboard the ${this.state.currentAstronautInfo.craft}!`;
      }
      return `${headingText} You are not currently one of the ${this.state.humansInSpaceCount} known humans in space.`
    }
    return 'Greets human, please complete all fields:';
  }

  checkIfInSpace = debounce(() => {
    checkIfInSpace(this.state.spaceName.trim()).then((spaceInfo) => {
      this.setState({
        humansInSpaceCount: spaceInfo.number,
        currentAstronautInfo: spaceInfo.people[0],
        loadedSpaceInfo: true,
        loading: false
      })
    })
  }, 1000)
}

export default App;