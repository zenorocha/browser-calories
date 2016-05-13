import JSXComponent from 'metal-jsx';
import Loader from './loader';
import Result from './result';
import Failure from './failure';
import defaultBudget from '../data/budget';

class App extends JSXComponent {
  attached() {
    this.getURL();
    this.getBudget();
  }

  getURL() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      this.setState({
        url: tabs[0].url
      }, this.fetchURL);
    });
  }

  getBudget() {
    chrome.storage.sync.get(defaultBudget, (data) => {
      this.setState({
        budget: data
      });
    });
  }

  fetchURL() {
    let api = 'https://calories.browserdiet.com/?url=' + encodeURIComponent(this.state.url);

    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.statusCode >= 400) {
          this.setState({
            error: response
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
    if (this.state.success && this.state.budget) {
      return <Result url={this.state.url} success={this.state.success} budget={this.state.budget} />;
    }
    else if (this.state.error) {
      return <Failure url={this.state.url} error={this.state.error} />;
    }
    else {
      return <Loader url={this.state.url} />;
    }
  }
}

App.STATE = {
  url: {},
  budget: {},
  error: {},
  success: {}
};

export default App;
