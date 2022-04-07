import * as IPFS from 'ipfs-core';
import * as OrbitDB from 'orbit-db';
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: 'abc'
    }

    this.test = this.test.bind(this)
  }

  async componentDidMount() {
    this.ipfs = await IPFS.create();
    this.orbitdb = await OrbitDB.createInstance(this.ipfs);
  }

  async test() {
    const { cid } = await this.ipfs.add('Hello world!!!');

    this.setState({ hash: cid.toString() });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Hash is {this.state.hash}
          </p>
          <button onClick={this.test}>
            Test
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
