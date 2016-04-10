import React from 'react';
import budget from '../data/budget';
import bytes from 'byte-size';

class Result extends React.Component {
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
        obj[prop] = Math.round((a[prop] / b[prop]) * 100) + '%';
      }
    }

    return obj;
  }

  render() {
    let siteBytes = this.toBytes(this.props.success);
    let budgetBytes = this.toBytes(budget);
    let dailyPercentage = this.toPercentage(this.props.success, budget);

    return (
      <div className="facts">
        <header className="facts-header">
          <h1 className="facts-title">Performance Facts</h1>
          <p>Serving Size 1 website</p>
          <p>Servings Per Refresh 1</p>
        </header>
        <table className="facts-table">
          <thead>
            <tr>
              <th colSpan="3" className="small-info">
                Amount Per Serving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">
                <b>Total Size </b>
                <span className="siteBytes-total">{siteBytes.total}</span>
              </th>
              <td>
                Resources <span className="numberResources"></span>
              </td>
            </tr>
            <tr className="thick-row">
              <td colSpan="3" className="small-info">
                <b>% Per Load *</b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>HTML </b>
                <span className="siteBytes-html">{siteBytes.html}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-html">{dailyPercentage.html}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Images </b>
                <span className="siteBytes-image">{siteBytes.image}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-image">{dailyPercentage.image}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>CSS </b>
                <span className="siteBytes-css">{siteBytes.css}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-css">{dailyPercentage.css}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>JavaScript </b>
                <span className="siteBytes-js">{siteBytes.js}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-js">{dailyPercentage.js}</span></b>
              </td>
            </tr>
            <tr className="thick-end">
              <th colSpan="2">
                <b>Other </b>
                <span className="siteBytes-other">{siteBytes.other}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-other">{dailyPercentage.other}</span></b>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="small-info">* Values are based on an <a target="_blank" href="http://httparchive.org/interesting.php">average <span className="budgetBytes-total"></span> website</a>. Your daily values may be higher or lower depending on your needs:</p>
        <table className="facts-table-small small-info">
          <thead>
            <tr>
              <td colSpan="2"></td>
              <th>Size:</th>
              <th><span className="budgetBytes-total">{budgetBytes.total}</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">HTML</th>
              <td>Less than</td>
              <td><span className="budgetBytes-html">{budgetBytes.html}</span></td>
            </tr>
            <tr>
              <th colSpan="2">Images</th>
              <td>Less than</td>
              <td><span className="budgetBytes-image">{budgetBytes.image}</span></td>
            </tr>
            <tr>
              <th colSpan="2">CSS</th>
              <td>Less than</td>
              <td><span className="budgetBytes-css">{budgetBytes.css}</span></td>
            </tr>
            <tr>
              <th colSpan="2">JavaScript</th>
              <td>Less than</td>
              <td><span className="budgetBytes-js">{budgetBytes.js}</span></td>
            </tr>
            <tr>
              <th colSpan="2">Other</th>
              <td>Less than</td>
              <td><span className="budgetBytes-other">{budgetBytes.other}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Result;
