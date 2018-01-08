import * as React from 'react';
import { observer } from 'mobx-react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import './css/App.css';
import { Account } from './model/Account';
import { AccountView } from './view/AccountView';
import { Transacao } from './model/Transacao';
import { TransacaoView } from './view/TrasacaoView';

@observer
class App extends React.Component {
  account: Account;
  transacao: Transacao;


  componentWillMount() {
    this.account = new Account();
    this.transacao = new Transacao();
  }

  render() {
    return (
      <div className="container">
        <HashRouter>
          <Switch>
            <Route path="/" exact={true} strict={true}>
              <div>
                
                <h1>Trabalho de FrontEnd!</h1>
                <Link to="/account-view">Contas</Link>
                <br />
                <Link to="/transaction-view">Transações</Link>

              </div>
            </Route>

            <Route path="/account-view" exact={true} strict={true}>
              <AccountView conta={this.account} />
            </Route>

            <Route path="/transaction-view" exact={true} strict={true}>
              <TransacaoView transaction={this.transacao} />
            </Route>


          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
