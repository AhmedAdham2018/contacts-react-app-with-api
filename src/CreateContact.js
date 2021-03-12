import React from 'react'
import { Link } from 'react-router-dom';
import formSerialize from 'form-serialize';
import ImageInput from './ImageInput';

function CreateContact(props) {

    const handleSubmit = e => {
        e.preventDefault();
        const contact = formSerialize(e.target, { hash: true });
        //console.log(contact);
        if (props.onCreateContact) {
            props.onCreateContact(contact);
        }
    };

    return (
        <div>
            <Link to='/'  className='close-create-contact'>Close</Link>
            <form className='create-contact-form' onSubmit={handleSubmit} >
                <ImageInput className='create-contact-avatar-input' maxHeight={75} name='avatarURL' />
                <div className='create-contact-details '>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='text' name='handle' placeholder='Handle' />
                    <button>Add Contact</button>
                </div>    
            </form>            
        </div>
    );
}

export default CreateContact;
