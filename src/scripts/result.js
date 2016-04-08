import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <div className="performance-facts">
        <header className="performance-facts__header">
          <h1 className="performance-facts__title">Performance Facts</h1>
          <p>Serving Size 1 website</p>
          <p>Servings Per Refresh 1</p>
        </header>
        <table className="performance-facts__table">
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
                <span className="siteBytes-total">{this.props.success.siteBytes.total}</span>
              </th>
              <td>
                Resources <span className="numberResources">{this.props.success.numberResources}</span>
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
                <span className="siteBytes-html">{this.props.success.siteBytes.html}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-html">{this.props.success.dailyPercentage.html}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Images </b>
                <span className="siteBytes-image">{this.props.success.siteBytes.image}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-image">{this.props.success.dailyPercentage.image}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>CSS </b>
                <span className="siteBytes-css">{this.props.success.siteBytes.css}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-css">{this.props.success.dailyPercentage.css}</span></b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>JavaScript </b>
                <span className="siteBytes-js">{this.props.success.siteBytes.js}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-js">{this.props.success.dailyPercentage.js}</span></b>
              </td>
            </tr>
            <tr className="thick-end">
              <th colSpan="2">
                <b>Other </b>
                <span className="siteBytes-other">{this.props.success.siteBytes.other}</span>
              </th>
              <td>
                <b><span className="dailyPercentage-other">{this.props.success.dailyPercentage.other}</span></b>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="small-info">* Values are based on an <a target="_blank" href="http://httparchive.org/interesting.php">average <span className="budgetBytes-total"></span> website</a>. Your daily values may be higher or lower depending on your needs:</p>
        <table className="performance-facts__table--small small-info">
          <thead>
            <tr>
              <td colSpan="2"></td>
              <th>Size:</th>
              <th><span className="budgetBytes-total">{this.props.success.budgetBytes.total}</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">HTML</th>
              <td>Less than</td>
              <td><span className="budgetBytes-html">{this.props.success.budgetBytes.html}</span></td>
            </tr>
            <tr>
              <th colSpan="2">Images</th>
              <td>Less than</td>
              <td><span className="budgetBytes-image">{this.props.success.budgetBytes.image}</span></td>
            </tr>
            <tr>
              <th colSpan="2">CSS</th>
              <td>Less than</td>
              <td><span className="budgetBytes-css">{this.props.success.budgetBytes.css}</span></td>
            </tr>
            <tr>
              <th colSpan="2">JavaScript</th>
              <td>Less than</td>
              <td><span className="budgetBytes-js">{this.props.success.budgetBytes.js}</span></td>
            </tr>
            <tr>
              <th colSpan="2">Other</th>
              <td>Less than</td>
              <td><span className="budgetBytes-other">{this.props.success.budgetBytes.other}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Result;
