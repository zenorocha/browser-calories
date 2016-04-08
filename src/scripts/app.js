import React from 'react';

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
    return this.state.url;
  }
}

export default App;
