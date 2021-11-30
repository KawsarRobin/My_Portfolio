import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_et104hn',
        'template_iiqgynr',
        form.current,
        'user_5CAKtxWfzxsDcMBBzQmPk'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div
        className="py-5"
        style={{ backgroundColor: '#010000', color: 'white' }}
      >
        <div>
          <h2
            style={{ fontSize: '48px', paddingBottom: '20px' }}
            className="fw-bolder text-center"
          >
            <span>Contact</span>
          </h2>
        </div>{' '}
        <br />
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input className="w-100 mb-3" type="text" name="name" />
              <label>Email</label>
              <input className="w-100 mb-3" type="email" name="email" /> <br />
              <label>Subject</label>
              <input className="w-100 mb-3" type="text" name="subject" /> <br />
              <label>Message</label>
              <textarea className="w-100 mb-3" name="message" />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
