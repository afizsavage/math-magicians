import React from 'react';

/*eslint-disable */
class Calculator extends React.Component {
  render() {
    return (
      <main>
        <div className="">
          <input type="text" value={0} />
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
                <td>+</td>
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
                  <button>*</button>
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
                  <button>-</button>
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
                  <button>+</button>
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
                <td>=</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Calculator;
