import React, { Component } from "react";
import { connect } from 'react-redux';
import Button from './Components/Button';
import { add } from './reducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleClick = () => {
    this.saveMessage(this.input.current.value);
  }

  handlePress = ({ target, keyCode }) => {
    if(keyCode === 13) this.saveMessage(target.value);
  }

  saveMessage = (value) => {
    if(value) {
      this.props.add(value);
      this.input.current.value = '';
    }
  }

  render() {
    return <>
      <h1>Hello from React</h1>
      <Button name="send" handleClick={this.handleClick} />
      <input type="text" onKeyUp={this.handlePress} ref={this.input}/>
      <ul>
        {this.props.messages.map((message, index) => <li key={`${index}-${message}`}>{message}</li>)}
      </ul>
    </>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages
});

const mapDispatchToProps = (dispatch) => ({
  add: (message) => dispatch(add(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
