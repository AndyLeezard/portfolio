import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './state/store';

declare global {
  interface String {
      doubleSlash(): string;
      commentBlock(): string;
      commentSharp(): string;
      comment_py(): string;
      indentBy(size:number): string;
      splitByDash(): string[];
  }
}

String.prototype.doubleSlash = function ():string {
  return "// "+this;
};
String.prototype.commentBlock = function ():string {
  return "/* "+this+" */";
};
String.prototype.commentSharp = function ():string {
  return "# "+this;
};
String.prototype.comment_py = function ():string {
  return String.fromCharCode(34).repeat(3)+this+String.fromCharCode(34).repeat(3);
};
String.prototype.indentBy = function (size:number):string {
  return String.fromCharCode(160).repeat(size) + this;
};
String.prototype.splitByDash = function ():string[] {
  return this.split('-');
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
