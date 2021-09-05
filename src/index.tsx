import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './state/store';

declare global {
  enum langs {
    REACT='react',
    PYTHON='python',
    CSHARP='csharp',
    GO='go',
    R='r'
  }
}

String.prototype.doubleSlash = function () {
      return "// "+this;
};
String.prototype.commentBlock = function () {
  return "/* "+this+" */";
};
String.prototype.indentBy = function (size:number) {
  return String.fromCharCode(160).repeat(size) + this;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
