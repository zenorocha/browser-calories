import JSXComponent from 'metal-jsx';
import bytes from 'byte-size';

class Result extends JSXComponent {
  toBytes(data) {
    var obj = {};

    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        obj[prop] = bytes(data[prop], { precision: 1 });
      }
    }

    return obj;
  }

  toPercentage(a, b) {
    var obj = {};

    for (var prop in a) {
      if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop)) {
        if (a[prop] === 0 || b[prop] === 0 ) {
          obj[prop] = 0;
        } else {
          obj[prop] = Math.round((a[prop] / b[prop]) * 100);
        }
      }
    }

    return obj;
  }

  isPositive(number) {
    let className = 'facts-percentage ';

    if (number >= 100) {
      className += 'bad';
    } else {
      className += 'good';
    }

    return className;
  }

  openSettings() {
    chrome.runtime.openOptionsPage();
  }

  render() {
    let cleanUrl = this.config.url.replace(/^http(s)?\:\/\/(www.)?/i, "").replace(/\/$/, "");
    let siteBytes = this.toBytes(this.config.success);
    let budgetBytes = this.toBytes(this.config.budget);
    let dailyPercentage = this.toPercentage(this.config.success, this.config.budget);

    return (
      <div class="facts">
        <header class="facts-header">
          <h1 class="facts-title">Performance Facts</h1>
          <p>
            Serving Size 1 website
            <a class="facts-url" href={this.config.url} title={this.config.url} target="_blank">{cleanUrl}</a>
          </p>
        </header>
        <table class="facts-table facts-table-main">
          <thead>
            <tr class="small-info">
              <th colSpan="2">
                Amount Per Serving
              </th>
              <td>
                <b>% Per Load *</b>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">
                <b>HTML </b>
                <span>{siteBytes.html}</span>
              </th>
              <td>
                <b><span class={this.isPositive(dailyPercentage.html)}>{dailyPercentage.html}%</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Images </b>
                <span>{siteBytes.image}</span>
              </th>
              <td>
                <b><span class={this.isPositive(dailyPercentage.image)}>{dailyPercentage.image}%</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>CSS </b>
                <span>{siteBytes.css}</span>
              </th>
              <td>
                <b><span class={this.isPositive(dailyPercentage.css)}>{dailyPercentage.css}%</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>JavaScript </b>
                <span>{siteBytes.js}</span>
              </th>
              <td>
                <b><span class={this.isPositive(dailyPercentage.js)}>{dailyPercentage.js}%</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Other </b>
                <span>{siteBytes.other}</span>
              </th>
              <td>
                <b><span class={this.isPositive(dailyPercentage.other)}>{dailyPercentage.other}%</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Total Size </b>
                <span>{siteBytes.total}</span>
              </th>
              <td>
                <b><span class={this.isPositive(dailyPercentage.total)}>{dailyPercentage.total}%</span></b>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="facts-table-small-header small-info">* Values are based on the <a target="_blank" href="http://httparchive.org/interesting.php?a=All&l=May%201%202016&s=Top100">top 100 websites</a>, but feel free to <a data-onclick={this.openSettings}>change your performance budget</a>. These values may be higher or lower depending on your needs:</p>
        <table class="facts-table facts-table-small small-info">
          <tbody>
            <tr>
              <th colSpan="2">HTML</th>
              <td>Less than</td>
              <td><span>{budgetBytes.html}</span></td>
            </tr>
            <tr>
              <th colSpan="2">Images</th>
              <td>Less than</td>
              <td><span>{budgetBytes.image}</span></td>
            </tr>
            <tr>
              <th colSpan="2">CSS</th>
              <td>Less than</td>
              <td><span>{budgetBytes.css}</span></td>
            </tr>
            <tr>
              <th colSpan="2">JavaScript</th>
              <td>Less than</td>
              <td><span>{budgetBytes.js}</span></td>
            </tr>
            <tr>
              <th colSpan="2">Other</th>
              <td>Less than</td>
              <td><span>{budgetBytes.other}</span></td>
            </tr>
            <tr>
              <th colSpan="2">Total Size</th>
              <td>Less than</td>
              <td><span>{budgetBytes.total}</span></td>
            </tr>
          </tbody>
        </table>
        <p class="facts-table-small-footer small-info">
          This is an open source tool, contribute on <a href="https://github.com/zenorocha/browser-calories" target="_blank">GitHub</a><br />
          You can find tips to improve your website at <a href="https://browserdiet.com/en/" target="_blank">browserdiet.com</a>
        </p>
      </div>
    )
  }
}

export default Result;
