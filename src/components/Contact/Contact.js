import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { Element } from "react-scroll";
const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   console.log(form.current)

  //   emailjs
  //     .sendForm(
  //       "service_0283h1d",
  //       "template_hjidl1d",
  //       form.current,
  //       "C5eD-1RnoOgFZ3JIe"
  //     )
  //     .then(
  //       (result) => {
  //         window.alert("تم ارسال البريد بنجااح");
  //         console.log(result.text);
  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <Element name="Contact">
      <section className="Contact">
        {/* <h5>Get In Touch</h5> */}
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <a href="mailto:saeedalqujjah@outlook.com" target="_blank">
              <article className="contact_option">
                <HiOutlineMail className="contact_option-icon" />

                <h3>Email</h3>
                <h4>saeedalqujjah@outlook.com</h4>
                {/* <a href="mailto:saeedkojastudy@gmail.com" target="_blank">
                Send a Message
              </a> */}
              </article>
            </a>

            <article className="contact_option">
              <FaWhatsapp className="contact_option-icon" />
              <h4>Whatsapp</h4>
              <h5>+963 983 198 869</h5>
            </article>
          </div>
          {/* <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form> */}
        </div>
      </section>
    </Element>
  );
};

export default Contact;
