import { useState } from 'react';
import '../styles/ContactForm.css';
import { validateEmail } from './utils/helpers';

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'firstName') {
            setFirstName(inputValue);
            // console.log(firstName);
        } else if (inputType === 'lastName') {
            setLastName(inputValue);
            // console.log(lastName);
        } else if (inputType === 'email') {
            setEmail(inputValue);
            // console.log(email);
        } else {
            setMessage(inputValue);
            // console.log(message);
        }
    };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;

    //     if (name === 'firstName') {
    //         setFirstName(value);
    //     } else if (name === 'lastName') {
    //         setLastName(value);
    //     } else if (name === 'email') {
    //         setEmail(value);
    //     } else {
    //         setMessage(value);
    //     }
    // };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(firstName);

        if (!firstName || !lastName || !validateEmail(email)) {
            setErrorMessage('Must enter a first and last name and valid email address');
            return;
        }
        alert(`Thanks ${firstName} for reaching out, I'll get back to you soon.`)

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='container'>
            <form className='form' onSubmit={handleFormSubmit}>
                <div className='row'>
                    <h2>{firstName}, get in touch with me</h2>
                    <div className='col'>
                        <input
                            value={firstName}
                            name='firstName'
                            onChange={handleInputChange}
                            type='text'
                            placeholder='First Name'
                        />
                    </div>
                    <div className='col'>
                        <input
                            value={lastName}
                            name='lastName'
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Last Name'
                        />
                    </div>
                </div>
                <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder='Email'
                />
                <div className='row'>
                    <textarea
                        value={message}
                        name='message'
                        onChange={handleInputChange}
                        type='text'
                        placeholder='Your message here'
                    />
                </div>
                <button type='submit'>Send</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-message'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default ContactForm;