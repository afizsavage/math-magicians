/* eslint-disable react/prefer-stateless-function */
import { useState, useRef, useEffect } from 'react';

import Button from './button';

import { Calculate, Operate } from '../logic';

const operators = ['%', '÷', 'x', '-', '+'];

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

const Calculator = () => {
  const initialState = { total: null, next: null, operation: null };

  const [data, setdata] = useState(initialState);
  const inputRef = useRef(null);

  const handleClick = (button) => {
    const operator = operators.includes(button);
    let total;

    if (button === 'AC') {
      setdata(
        {
          total: null,
          next: null,
          operation: null,
        },
      );
      return;
    }

    if (button === '=') {
      if (data.operation && data.next) {
        total = Operate(data.total, data.next, data.operation);
        setdata(
          {
            total, next: null, operation: null,
          },
        );
      }
      return;
    }

    if (operator) {
      setdata(
        { ...data, operation: button },
      );
    }

    if (isNumber(button) || button === '.') {
      if (data.total === null && data.operation === null) {
        setdata(
          { ...data, total: button },
        );
      } else if (data.total !== null && data.operation === null) {
        setdata(
          {
            ...data,
            total: data.total + button,
          },
        );
      }
    }

    const result = Calculate(data, button);
    if (result.total && result.operation) {
      setdata(
        result,
      );
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = `${data.total === null ? '0' : data.total} ${data.operation === null ? '' : data.operation} ${data.next === null ? '' : data.next}`;
    }
  }, [data]);

  return (
    <div className="calc">
      <div className="cont">
        <div>
          <input type="text" ref={inputRef} placeholder="0" />
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <Button
                  text="AC"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td>
                {' '}
                <Button
                  text="+/-"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td>
                {' '}
                <Button
                  text="%"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td className="end">
                <Button
                  text="÷"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
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
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td>
                {' '}
                <Button
                  text="8"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td>
                {' '}
                <Button
                  text="9"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td className="end">
                {' '}
                <Button
                  text="x"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
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
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td>
                {' '}
                <Button
                  text="5"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td>
                {' '}
                <Button
                  text="6"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td className="end">
                {' '}
                <Button
                  text="-"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
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
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td>
                {' '}
                <Button
                  text="2"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td>
                {' '}
                <Button
                  text="3"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td className="end">
                {' '}
                <Button
                  text="+"
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
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
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td>
                {' '}
                <Button
                  text="."
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
              <td className="end">
                <Button
                  text="="
                  handleClick={(e) => {
                    handleClick(e.target.textContent);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
