import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = ({ data = {} }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const { email: contactEmail = '', contactmessage: contactMessage = '' } = data;

  const submitForm = (e) => {
    e.preventDefault();
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject,
      )}&body=Message from ${encodeURIComponent(name)} (${encodeURIComponent(
        email,
      )}): ${encodeURIComponent(message)}`,
    );
  };

  return (
    <section id='contact'>
      <div className={`row section-head ${styles.sectionHeader}`}>
        <div className={`two columns header-col ${styles.headerTitle1}`}>
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className={`ten columns ${styles.headerTitle2}`}>
          <p className='lead'>{contactMessage}</p>
        </div>
      </div>

      <div className={`row ${styles.contactDetails}`}>
        <div className='eight columns'>
          <form onSubmit={submitForm}>
            <fieldset>
              <div>
                <label htmlFor='contactName'>
                  Name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  value={name}
                  size='35'
                  id='contactName'
                  name='contactName'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='contactEmail'>
                  Email <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  value={email}
                  size='35'
                  id='contactEmail'
                  name='contactEmail'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='contactSubject'>Subject</label>
                <input
                  type='text'
                  value={subject}
                  size='35'
                  id='contactSubject'
                  name='contactSubject'
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='contactMessage'>
                  Message <span className='required'>*</span>
                </label>
                <textarea
                  cols='50'
                  rows='15'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id='contactMessage'
                  name='contactMessage'></textarea>
              </div>
              <div className={styles.button}>
                <button type='submit' className='submit'>Submit</button>
              </div>
            </fieldset>
          </form>

          <div id='message-warning'> Error boy</div>
          <div id='message-success'>
            <i className='fa fa-check'></i>Your message was sent, thank you!
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
