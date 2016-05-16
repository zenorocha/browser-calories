import JSXComponent from 'metal-jsx';
import Loader from './loader';
import Result from './result';
import Failure from './failure';
import defaultBudget from '../data/budget';

class App extends JSXComponent {
  attached() {
    console.log("Attached...");
    this.getURL();
    this.getBudget();
  }

  getURL() {
    console.log("GetURL...");
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
    console.log("GetBudget...");
    chrome.storage.sync.get(defaultBudget, (data) => {
      this.setState({
        budget: data
      });
    });
  }

  fetchURL() {
    console.log("fetchURL...");
    let api = 'https://calories.browserdiet.com/?url=' + encodeURIComponent(this.url);

    fetch(api)
      .then((response) => {
        console.log("return from fetch");
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log("after fetch");
        console.log(response);
        
        // Response doesn't contain status code in here.
        if (!response.hasOwnProperty("html") ) {
          console.log("error!!!!");
          this.setState({
            error: response
          });         
        } else {
          console.log("success");
          this.setState({
            success: response
          });
        }
      });
  }

  render() {
    /*
    State is not being set or accessed. All calls such as `this.success` return undefined.
    */
    console.log("Render...");
    console.log(this.success);
    console.log(this.budget);
    if (this.success && this.budget) {
      console.log("success on render");
      return <Result url={this.url} success={this.success} budget={this.budget} />;
    }
    else if (this.error) {
      console.log("fail on render");
      return <Failure url={this.url} error={this.error} />;
    }
    else {
      console.log("loader on render: " + this.url); 
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
