import CalcView from './CalcView.js';

import React, { useState } from "react";


export default function Calc(props) {

    const [expression, setExpression] = useState('');

    const onClick = e => {
        if (e.target.className === 'del') {
            del();
        }
    }

    const calcRes = e => {
        setExpression(e.target.value);
    }

    const del = () => {
        const expressionArr = expression.split('');
        expressionArr.pop();
        setExpression(expressionArr.join(''));
    }

    const updateExpression = e => {
        const sign = ['NumpadAdd', 'NumpadSubtract', 'NumpadMultiply', 'NumpadDivide', 'NumpadEnter', 'Delete', 'KeyC'];
        if (sign.slice(2,5).includes(e.code)) { // calc
            const last = expression.split('').pop();
            const expressionArr = expression.match(/[+\-*/]?\d+/g);
            if (e.code === sign[4]) {
                const test = /^(\d+[+\-*/]{1})+\d+([+\-*/])?$/.exec(expression);
                if (!test) {
                    alert('表达式不合法');
                    return;
                }
            }
            const res = expressionArr.reduce((acc, curr) => {
                const symbol = curr.match(/([+\-*/]{1})(\d+)/);
                if (symbol && symbol[1] === '*') {
                    return parseFloat(acc) * parseFloat(symbol[2]);
                }else if(symbol && symbol[2] === '/') {
                    return parseFloat(acc) / parseFloat(symbol[2]);
                }
                return parseFloat(acc) + parseFloat(curr);
            }, 0);
            setExpression(res + ['', last][+isNaN(last)]);
        }else if (e.code === sign[5]) {// del
            del()
        }else if (e.code === sign[6]) { // clear
            setExpression('');
        }
    }
    
    return (
        <div onKeyUp={updateExpression}  onClick={onClick}>
            <input type="text" onChange={calcRes} value={expression} />
            <CalcView/>
        </div>
    )
}