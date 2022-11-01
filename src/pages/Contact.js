import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_6ttdbwd', 'template_1ejad1s', form.current, '1sZYpDxQqkPAs_wNH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <div>
        <div className='contact-us-page'>
            <div className='contact-text'>
                <h2>Let's Talk</h2>
                <h2>Send Email</h2>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Name' name='user_name'/>
                <input type='email' placeholder='Email' name='user_email'/>
                <input type='text' placeholder='Message' name='message'/>
                <div className='send-button' >
                    <button>Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}
