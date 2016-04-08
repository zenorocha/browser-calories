import React from 'react';
import Loader from './loader';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      url: undefined
    };
  }
  componentDidMount() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      this.setState({
        url: tabs[0].url
      });
    });
  }

  render() {
    return <Loader url={this.state.url} />
  }
}

export default App;
