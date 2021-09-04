import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
/*
import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
*/
/*
  const dispatch = useDispatch();
  const [amount, _setAmount] = useState(0);
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators,dispatch);
  const state = useSelector((state:State)=>state);

  console.log("account : "+state.account);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("parameter is : ",e.target.value)
    _setAmount(Number(e.target.value));
  }
  const deposit = () => {
    if(!amount){console.log("warning ! no amount.");return;}
    depositMoney(amount);
    _setAmount(0);
  }
  const withdraw = () => {
    withdrawMoney(amount)
    _setAmount(0);
  }
  const _bankrupt = () => {
    bankrupt();
    _setAmount(0);
  }
*/
/*<div className="h-screen" >
  <Home/>
  <h1>{state.account}</h1>
  <input type="number" pattern="[0-9]*" value={amount} onChange={handleChange} />
  <button onClick={deposit}>Deposit</button>
  <button onClick={withdraw}>Withdraw</button>
  <button onClick={_bankrupt}>Bankrupt</button>
  <div/>
</div>*/

export default App;
