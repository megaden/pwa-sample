import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { getSubscribedStatus, onSubscriptionChange, subscribe, unsubscribe } from './common';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubscribed: getSubscribedStatus(),
      subscriptionData: null,
    };

    onSubscriptionChange(
      () => this.setState({isSubscribed: getSubscribedStatus()}),
      data => this.setState({subscriptionData: data})
    );
  }

  onEnableDisable = () => {
    if (this.state.isSubscribed) {
      unsubscribe();
    } else {
      subscribe();
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={this.onEnableDisable}>{this.state.isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
        </p>
        {this.state.subscriptionData && <p>{this.state.subscriptionData}</p>}
      </div>
    );
  }
}

export default App;
