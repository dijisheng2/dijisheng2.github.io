import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uow8d6e', 'template_9lirn4j', form.current, '8fd8bB3e2IDOMNZQG')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
      });

    e.target.reset(); 
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Send me everything you want!</h3>
          <p className="contact__details">Email</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="user_name" className="contact__form-input"
                placeholder='Insert your name' required />
            </div>

            <div className="contact__form-div">
              <input type="email" name="user_email" className="contact__form-input"
                placeholder='Insert your email' required />
            </div>
          </div>
          
          <div className="contact__form-div">
            <input type="text" name="subject" className="contact__form-input"
              placeholder='Insert your subject' required />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="message" id="" cols="30" rows="10"
              className='contact__form-input' placeholder='Write your message' required></textarea>
          </div>

          <button type="submit" className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
