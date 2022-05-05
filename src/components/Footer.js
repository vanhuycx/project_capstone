import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();

  const openNotification = (placement, type, text) => {
    if (type === 'success') {
      notification[type]({
        message: 'Notification',
        description: 'Your email has been sent successfully. (' + text + ')',
        placement,
      });
    } else if (type === 'error') {
      notification[type]({
        message: 'Error',
        description:
          'There is an error. Please try again or come back later. (' +
          text +
          ')',
        placement,
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mribwqj',
        'template_6ch0dap',
        form.current,
        'Ffhwi0ZGsVyJhIFKD'
      )
      .then(
        (response) => {
          // console.log('SUCCESS!', response.status, response.text);
          openNotification('bottomRight', 'success', response.text);
        },
        (error) => {
          console.log(error.text);
          openNotification('bottomRight', 'error', error.text);
        }
      );
    form.current.reset();
  };
  return (
    <>
      <div className='footer-container'>
        <div>
          <Link to='/'> Home</Link>
          <Link to='/cryptocurrencies'> Cryptocurrencies</Link>
          <Link to='/exchanges'> Exchanges</Link>
          <Link to='/news'> News</Link>
        </div>

        <div className='contact-container'>
          <h1>Contact Us</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              required
              type='text'
              name='user_name'
              placeholder='Your name...'
            />

            <label>Email</label>
            <br></br>
            <input
              required
              type='email'
              name='user_email'
              placeholder='Your email...'
            />

            <br></br>
            <label>Message</label>
            <textarea required name='message' placeholder='Your message...' />
            <input type='submit' value='Submit' />
          </form>
        </div>
        <p>
          CoinChain provides crypto exchange information. In addition to
          tracking the price, CoinChain also offers real time news. While using
          this site, you agree to have accepted our terms of use, cookie and
          privacy policy.
        </p>
        <p>
          Copyright &copy; {new Date().getFullYear()} CoinChain All Rights
          Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
