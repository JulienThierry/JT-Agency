import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
init(process.env.REACT_APP_ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMsg = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_9mzepsd",
        "template_gfp4du1",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMsg.innerHTML = "<p className='success'> Message envoyé ! </p>";
        },
        (error) => {
          console.log(error.text);
          formMsg.innerHTML =
            "<p className='error'> Erreur, veuillez réessayer</p>";
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};
export default ContactForm;
