import * as React from 'react';
import { observer } from 'mobx-react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { Contact } from './model/Contact';
import { ContactEditor } from './view/ContactEditor';
import './App.css';

@observer
class App extends React.Component {
  contact: Contact;

  componentWillMount() {
    this.contact = new Contact();
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/" exact={true} strict={true}>
              <div>
                <h1>My Money!</h1>
                <Link to="/contact-editor">Contatos</Link>
              </div>
            </Route>

            <Route path="/contact-editor" exact={true} strict={true}>
              <ContactEditor contact={this.contact} />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
