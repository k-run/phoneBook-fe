import React, {Component} from 'react';
import ListContacts from './ListContacts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactComponent from './ContactComponent';

class ContactApp extends Component {
  render() {
    return (
    <Router>
      {/* <>
      <h1>ContactApp </h1>
      <ListContacts></ListContacts> */}
     
        <Route path = "/" exact component = {ListContacts} />
        <Route path = "/contacts" exact component = {ListContacts} />
        <Route path = "/contacts/update/:id" component = {ContactComponent} />
      {/* </> */}
      </Router>
    )
  }
}

export default ContactApp
