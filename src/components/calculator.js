/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// import { Calculate, Operate } from '../logic';
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenValue: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({ screenValue: value });
  }

  render() {
    const { screenValue } = this.state;

    return (
      <div className="calc">
        <div className="cont">
          <div>
            <input type="text" placeholder={0} value={screenValue} />
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <button type="button">AC</button>
                </td>
                <td>
                  {' '}
                  <button type="button">+/-</button>
                </td>
                <td>
                  {' '}
                  <button type="button">%</button>
                </td>
                <td className="end">
                  <button type="button">+</button>
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <button type="button">7</button>
                </td>
                <td>
                  {' '}
                  <button type="button">8</button>
                </td>
                <td>
                  {' '}
                  <button type="button">9</button>
                </td>
                <td>
                  {' '}
                  <button type="button" className="end">
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <button type="button">4</button>
                </td>
                <td>
                  {' '}
                  <button type="button">5</button>
                </td>
                <td>
                  {' '}
                  <button type="button">6</button>
                </td>
                <td>
                  {' '}
                  <button type="button" className="end">
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <button type="button">1</button>
                </td>
                <td>
                  {' '}
                  <button type="button">2</button>
                </td>
                <td>
                  {' '}
                  <button type="button">3</button>
                </td>
                <td>
                  {' '}
                  <button type="button" className="end">
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {' '}
                  <button type="button">0</button>
                </td>
                <td>
                  {' '}
                  <button type="button">.</button>
                </td>
                <td className="end">
                  <button type="button">=</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Calculator;
