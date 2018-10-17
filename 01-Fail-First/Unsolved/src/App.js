import React, { Component } from "react";
import "./App.css";
import { Form, Input } from './components/Form';
import { Container, Row } from './components/Grid';

class App extends Component {
  state = {
    firstName: '',
    spaceName: ''
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
      loading: true
    });
  };

  render() {
    return (
      <Container>
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
}

export default App;