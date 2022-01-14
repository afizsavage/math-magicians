/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import Button from './button';

import { Calculate, Operate } from '../logic';

const operators = ['%', '+', 'x', '-', '+'];

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    const { data } = this.state;
    if (this.inputRef.current) {
      this.inputRef.current.value = `${data.total === null ? '0' : data.total} ${data.operation === null ? '' : data.operation} ${data.next === null ? '' : data.next}`;
    }
  }

  handleClick(button) {
    const stateObj = this.state;
    const operator = operators.includes(button);
    let total;

    if (button === 'AC') {
      this.setState({
        data: {
          total: null,
          next: null,
          operation: null,
        },
      });
      return;
    }

    if (button === '=') {
      if (stateObj.data.operation && stateObj.data.next) {
        total = Operate(stateObj.data.total, stateObj.data.next, stateObj.data.operation);

        this.setState({
          data: {
            total, next: null, operation: null,
          },
        });
      }
      return;
    }

    if (operator) {
      this.setState({
        data: { ...stateObj.data, operation: button },
      });
    }

    if (isNumber(button)) {
      if (stateObj.data.total === null && stateObj.data.operation === null) {
        this.setState({
          data: { ...stateObj.data, total: button },
        });
      } else if (stateObj.data.total !== null && stateObj.data.operation === null) {
        this.setState({
          data: {
            ...stateObj.data,
            total: stateObj.data.total + button,
          },
        });
      }
    }

    const result = Calculate(stateObj.data, button);
    if (result.total && result.operation) {
      this.setState({
        data: result,
      });
    }
  }

  render() {
    return (
      <div className="calc">
        <div className="cont">
          <div>
            <input type="text" ref={this.inputRef} placeholder="0" />
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <Button
                    text="AC"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="+/-"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="%"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  <Button
                    text="+"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <Button
                    text="7"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="8"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="9"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  {' '}
                  <Button
                    text="x"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <Button
                    text="4"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="5"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="6"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  {' '}
                  <Button
                    text="-"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <Button
                    text="1"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="2"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="3"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  {' '}
                  <Button
                    text="+"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {' '}
                  <Button
                    text="0"
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="."
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  <Button
                    text="="
                    handleClick={(e) => {
                      this.handleClick(e.target.textContent);
                    }}
                  />
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
