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
                <span>{siteBytes.total}</span>
              </th>
              <td>
                Resources <span></span>
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
                <span>{siteBytes.html}</span>
              </th>
              <td>
                <b><span>{dailyPercentage.html}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Images </b>
                <span>{siteBytes.image}</span>
              </th>
              <td>
                <b><span>{dailyPercentage.image}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>CSS </b>
                <span>{siteBytes.css}</span>
              </th>
              <td>
                <b><span>{dailyPercentage.css}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>JavaScript </b>
                <span>{siteBytes.js}</span>
              </th>
              <td>
                <b><span>{dailyPercentage.js}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Fonts </b>
                <span>{siteBytes.font}</span>
              </th>
              <td>
                <b><span>{dailyPercentage.font}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Video </b>
                <span>{siteBytes.video}</span>
              </th>
              <td>
                <b><span>{dailyPercentage.video}</span></b>
              </td>
            </tr>
            <tr className="thick-end">
              <th colSpan="2">
                <b>Other </b>
                <span>{siteBytes.other}</span>
              </th>
              <td>
                <b><span>{dailyPercentage.other}</span></b>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="small-info">* Values are based on an <a target="_blank" href="http://httparchive.org/interesting.php">average website</a>. Your daily values may be higher or lower depending on your needs:</p>
        <table className="facts-table-small small-info">
          <thead>
            <tr>
              <td colSpan="2"></td>
              <th>Size:</th>
              <th><span>{budgetBytes.total}</span></th>
            </tr>
          </thead>
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
              <th colSpan="2">Fonts</th>
              <td>Less than</td>
              <td><span>{budgetBytes.font}</span></td>
            </tr>
            <tr>
              <th colSpan="2">Video</th>
              <td>Less than</td>
              <td><span>{budgetBytes.video}</span></td>
            </tr>
            <tr>
              <th colSpan="2">Other</th>
              <td>Less than</td>
              <td><span>{budgetBytes.other}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Result;
