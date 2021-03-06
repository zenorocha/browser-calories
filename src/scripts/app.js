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
    // Firefox has no sync yet.
    // Cue: https://bugzilla.mozilla.org/show_bug.cgi?id=1220494
    let chromeStorage = chrome.storage.sync || chrome.storage.local;

    chromeStorage.get(defaultBudget, (data) => {
      this.setState({
        budget: data
      });
    });
  }

  fetchURL() {
    let endpoint = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=' + encodeURIComponent(this.url);

    if (process.env.API_KEY) {
      endpoint += `&key=${process.env.API_KEY}`;
    }

    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.error) {
          this.setState({
            error: response.error
          });
        } else {
          this.setState({
            success: response.pageStats
          });
        }
      });
  }

  render() {
    if (this.success && this.budget) {
      return <Result url={this.url} success={this.success} budget={this.budget} />;
    }
    else if (this.error) {
      return <Failure url={this.url} error={this.error} />;
    }
    else {
      return <Loader url={this.url} />;
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
