import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS dashboard
        "YOUR_TEMPLATE_ID", // from EmailJS dashboard
        form.current,
        "YOUR_PUBLIC_KEY" // from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
  };
  return (
  
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ways To Contact Me</h2>
        <p className="text-gray-400 mb-8">
          Always building, always learning. Whether it’s coding smarter tools, testing the limits of robotics, or decoding human behavior—I’m here for meaningful creation. If you're into ambitious ideas, unconventional solutions, or the kind of conversations that leave your brain buzzing—let’s talk.
        </p>

        <form className="grid grid-cols-1 gap-4 text-left max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
         <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-xl transition font-semibold"
      >
        Send Message
      </button>
        </form>

        <div className="mt-12 flex justify-center space-x-6 text-xl">
            📧 abderrakib8@gmail.com 
          <a href="https://github.com/AbderrakibAmbari" target="_blank" className="hover:text-indigo-400">
            🐱 GitHub
          </a>
          <a href="https://www.linkedin.com/in/abderrakib-ambari" target="_blank" className="hover:text-indigo-400">
            💼 LinkedIn
          </a>
          <a href="https://wa.me/+491786577693" target="_blank" className="hover:text-indigo-400">
            📱 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;