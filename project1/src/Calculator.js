import React, { Component } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './Calculator.css';


class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: '', resultDisplayed: false }
    }

    calculate = () => {
        try {
            const result = eval(this.state.data);
            this.setState({ data: result, resultDisplayed: true });
        } catch (e) {
            this.setState({ data: 'error', resultDisplayed: true });
        }
    }
    handleclick = (key) => {
        switch (key) {
            case 'Escape':
                this.setState({ data: '' });
                break;
            case 'Enter':
                this.calculate();
                break;
            default:
                if (this.state.resultDisplayed) {
                    this.setState({ data: key });
                    this.setState({ resultDisplayed: false });
                } else {
                    this.setState({ data: this.state.data + key });
                }
                break;
        }
    }
    render() {
        return (
            <div className="Calculator">
                <KeyboardEventHandler
                    handleKeys={['Enter', 'Escape', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '+', '-', '*']}
                    onKeyEvent={(key, e) => {
                        this.handleclick(key);
                    }} />
                <Display data={this.state.data} />
                <Keypad>
                    <button onClick={() => { this.handleclick('Escape') }}>CE</button>
                    <button onClick={() => { this.handleclick('7') }} >7</button>
                    <button onClick={() => { this.handleclick('4') }} >4</button>
                    <button onClick={() => { this.handleclick('1') }} >1</button>
                    <button onClick={() => { this.handleclick('0') }} >0</button>
                    <button onClick={() => { this.handleclick('8') }} >8</button>
                    <button onClick={() => { this.handleclick('5') }} >5</button>
                    <button onClick={() => { this.handleclick('2') }} >2</button>
                    <button onClick={() => { this.handleclick('.') }} >.</button>
                    <button onClick={() => { this.handleclick('9') }} >9</button>
                    <button onClick={() => { this.handleclick('6') }} >6</button>
                    <button onClick={() => { this.handleclick('3') }} >3</button>
                    <button onClick={() => { this.handleclick('+') }} >+</button>
                    <button onClick={() => { this.handleclick('*') }} >*</button>
                    <button onClick={() => { this.handleclick('-') }} >-</button>
                    <button onClick={() => { this.handleclick('/') }} >/</button>
                    <button onClick={() => { this.handleclick('Enter') }} >=</button>
                </Keypad>
            </div>
        );
    }
}

const Display = props => <div className="Display"> {props.data}</div>;
const Keypad = props => <div className="Keypad"> {props.children} </div>;
export default Calculator;