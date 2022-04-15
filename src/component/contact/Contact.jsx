import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>oebiyeladouemmanuel@gmail.com</h5>
            <a href="mailto:oebiyeladouemmanuel@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Odisi Ebiyeladou Emmanuel</h5>
            <a href="https://m.me/odisi.ebiyeladouemmanuel" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+2349022700478</h5>
            <a href="api.whatsapp.com/send?phone=+2349022700478" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact