import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .sendForm(
        "service_zxyzeri",
        "template_0l60w4p",
        form.current,
        "iysjws0MNMB5d17JM",
        templateParams
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Thank you for reaching out! I will contact you as soon as I receive your message."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );

    //clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-emerald-500">
      <h2 class="mb-4 text-2xl tracking-tight font-rampart text-center ">
        Contact Me
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-8">
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            name="user_name"
            placeholder="Wendell Galvan"
            onChange={(event) => setName(event.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            name="user_email"
            placeholder="name@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 "
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            rows="6"
            placeholder="Let's connect..."
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
