import React , {useEffect, useState} from 'react';
import ContactsList from './ContactsList';
import * as ContactApi from './utils/ContactApi';
import CreateContact from './CreateContact';
import { Route , Switch } from 'react-router';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    ContactApi.getAll().then((contacts) => setContacts(contacts));
  });

  const onCreateContact = contact => {
    ContactApi.create(contact).then(contact => setContacts(contacts.concat(contact)));
  }


   const handleDelete = (contact) => {
     const newContacts = contacts.filter(c => c.id !== contact.id);
     setContacts(newContacts);
     ContactApi.remove(contact);
   }

  return (<Switch>
    <Route path='/' exact 
    render={() => <ContactsList contacts={contacts} onDelete={handleDelete} />} />
    <Route path='/create' 
    render={({history}) => <CreateContact 
    onCreateContact={(contact) => {
      onCreateContact(contact);
      history.push('/');}
    } />} />
  </Switch>);
}

export default App;

