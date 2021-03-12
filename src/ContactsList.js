import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import  PropTypes  from 'prop-types';

function ContactsList({contacts , onDelete}) {

  const [query, setQuery] = useState('');
 
  const showingContacts = query === '' ? contacts : contacts.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  return ( <div className='list-contacts'>
    <div className='list-contacts-top'>
        <input className='search-contacts' value={query} onChange={(e) => setQuery(e.target.value.trim())} />
        <Link to='/create' className='add-contact'>Add Contact</Link>
    </div>
    {showingContacts.length !== contacts.length && 
    (<div className='showing-contacts'><span>Now showing {showingContacts.length} of {contacts.length}</span> 
    <button onClick={(e) => setQuery('')}>Show all</button></div>)}
    <ol className='contact-list'>
        {showingContacts.map((contact) => (
          <li key={contact.id} className='contact-list-item' >
            <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
            }}></div>
            <div className='contact-details'>
                <h4>{contact.name}</h4>
                <p>{contact.handle}</p>
            </div>
            <button className='contact-remove' onClick={() => onDelete(contact)}>
                remove
            </button>
          </li>
        ))}
      </ol>
  </div> );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};
 
export default ContactsList;





