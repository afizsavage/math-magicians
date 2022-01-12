import React from 'react';

/*eslint-disable */
class Calculator extends React.Component {
  render() {
    return (
        <div className="calc">
          <div className="cont">
          <div>
            <input type="text" value={0} />
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <button>AC</button>
                </td>
                <td>
                  {' '}
                  <button>+/-</button>
                </td>
                <td>
                  {' '}
                  <button>%</button>
                </td>
                <td className="end"><button>+</button></td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <button>7</button>
                </td>
                <td>
                  {' '}
                  <button>8</button>
                </td>
                <td>
                  {' '}
                  <button>9</button>
                </td>
                <td>
                  {' '}
                  <button className="end">*</button>
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <button>4</button>
                </td>
                <td>
                  {' '}
                  <button>5</button>
                </td>
                <td>
                  {' '}
                  <button>6</button>
                </td>
                <td>
                  {' '}
                  <button className="end">-</button>
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <button>1</button>
                </td>
                <td>
                  {' '}
                  <button>2</button>
                </td>
                <td>
                  {' '}
                  <button>3</button>
                </td>
                <td>
                  {' '}
                  <button className="end">+</button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {' '}
                  <button>0</button>
                </td>
                <td>
                  {' '}
                  <button>.</button>
                </td>
                <td className="end"><button>=</button></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
    );
  }
}

export default Calculator;
