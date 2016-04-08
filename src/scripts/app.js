import React from 'react';
import Loader from './loader';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      success: undefined,
      error: undefined,
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
      }, this.measure);
    });
  }

  measure() {
    var searchUrl = 'https://perf-facts.herokuapp.com?url=' + encodeURIComponent(this.state.url);

    fetch(searchUrl)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.statusCode >= 400) {
          this.setState({
            error: response.statusCode
          });
        }
        else {
          this.setState({
            success: response
          });
        }
      })
  }

  render() {
    return <Loader url={this.state.url} />
  }
}

export default App;
