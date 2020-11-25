import React from 'react'
import Logo from '../src/components/Logo';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<div>
    <Logo />
    <h1>Calculadora</h1>
    <Calculator />
</div>
,document.getElementById('root'));
reportWebVitals();
