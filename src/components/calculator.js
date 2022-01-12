/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import Button from './button';

// import { Calculate, Operate } from '../logic';
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenValue: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(currentState, event) {
    this.setState({
      screenValue: currentState === 0 ? event : `${currentState}${event}`,
    });
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
                  <Button
                    text="AC"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="+/-"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="%"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  <Button
                    text="+"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
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
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="8"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="9"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  {' '}
                  <Button
                    text="*"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
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
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="5"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="6"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  {' '}
                  <Button
                    text="-"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
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
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="2"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="3"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  {' '}
                  <Button
                    text="+"
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
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
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <Button
                    text="."
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
                    }}
                  />
                </td>
                <td className="end">
                  <Button
                    text="="
                    handleClick={(e) => {
                      this.handleClick(screenValue, e.target.textContent);
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
