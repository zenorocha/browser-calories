import React from 'react';
import Loader from './loader';
import Result from './result';
import Failure from './failure';

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
    let api = 'https://calories.browserdiet.com/?url=' + encodeURIComponent(this.state.url);

    fetch(api)
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
      });
  }

  render() {
    if (this.state.success) {
      return <Result url={this.state.url} success={this.state.success} />;
    }
    else if (this.state.error) {
      return <Failure url={this.state.url} error={this.state.error} />;
    }
    else {
      return <Loader url={this.state.url} />;
    }
  }
}

export default App;
