import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer.jsx';

import '../App.css';
const Contact = () => {
  const [formValue, setFormValue] = useState({
    fName: '',
    lName: '',
    email: '',
    message: '',
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validationForm(formValue));
    setSubmit(true);
  };
  const validationForm = (value) => {
    const errors = {};
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!value.fName) {
      errors.fName = 'Please enter your first name';
    }
    if (!value.lName) {
      errors.lName = 'Please enter your last name';
    }
    if (!value.email) {
      errors.email = 'Please enter your email';
    } else if (!emailPattern.test(value.email)) {
      errors.email = 'Enter Valid Email';
    }
    if (!value.message) {
      errors.message = 'Please enter a message';
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formError, formValue, isSubmit]);

  return (
    <>
      <div className='container'>
        <div id='container'>
          <div className='underline'></div>
          <div className='icon_wrapper'></div>
          <form onSubmit={handleSubmit}>
            <div className='header-contact'>
              <h1>Contact Me</h1>
              <p>
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </div>
            <div className='name'>
              <label for='name'>First name</label>
              <input
                onChange={handleValidation}
                className='form-control'
                type='text'
                placeholder='enter your first name'
                name='fName'
                id='firstName_input'
                value={formValue.fName}
              />
              <span className='text-danger'>{formError.fName}</span>
            </div>

            <div className='lastN'>
              <label for='name'>Last name</label>
              <input
                onChange={handleValidation}
                className='form-control'
                type='text'
                placeholder='enter your last name'
                name='lName'
                id='lastName_input'
                value={formValue.lName}
              />
              <span className='text-danger'>{formError.lName}</span>
            </div>
            <div className='telephone'>
              <label for='name'>Email</label>
              <input
                onChange={handleValidation}
                className='form-control'
                type='text'
                placeholder='yourname@email.com'
                name='email'
                id='email_input'
                value={formValue.email}
              />
              <span className='text-danger'>{formError.email}</span>
            </div>
            <div className='message'>
              <label for='message'>Message</label>
              <textarea
                onChange={handleValidation}
                className='form-control'
                name='message'
                placeholder="Send me a message and i'll reply as soon as possible..."
                id='message_input'
                cols='30'
                rows='5'
                value={formValue.message}
              ></textarea>
              <span className='text-danger'>{formError.message}</span>
            </div>
            <div className='col-form-label'></div>
            <div className='check'>
              <input
                type='checkbox'
                className='check-box'
                name='checkbox'
                id=''
              />{' '}
              <div className='message-label'>
                You agree to providing your data to Victor Obi who may contact
                you
              </div>
            </div>
            <button
              name='button'
              className='btn btn-primary button'
              type='submit'
            >
              Send message
            </button>
          </form>
        </div>
      </div>

    <div className="footer-div">
       <Footer />
    </div> 
    </>
  );
};

export default Contact;
