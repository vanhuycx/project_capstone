import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div>
          <Link to='/'> Home</Link>
          <Link to='/cryptocurrencies'> Cryptocurrencies</Link>
          <Link to='/exchanges'> Exchanges</Link>
          <Link to='/news'> News</Link>
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

        <h1>Contact Us</h1>

        <div className='container'>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type='text' name='user_name' placeholder='Your name...' />

            <label>Email</label>
            <br></br>
            <input type='email' name='user_email' placeholder='Your email...' />

            <br></br>
            <label>Message</label>
            <textarea name='user_message' placeholder='Your message...' />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
