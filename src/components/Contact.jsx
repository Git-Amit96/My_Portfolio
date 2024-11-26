import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "motion/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    to_name: "Amit Saini",
    from_name: "",
    email_id: "",
    message: "",
  });

  const server_key = "a";
  const template_key = "a";
  const public_key = "a";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send({ server_key }, { template_key }, formData, { public_key })
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setFormData({
            to_name: "Amit Saini",
            from_name: "",
            email_id: "",
            message: "",
          });
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-evenly items-center p-8 bg-white rounded-lg shadow-lg">
      <motion.div
        className=""
        initial={{ translateX: -30, opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[40px] lg:text-[50px] leading-tight">
          INTERESTED?
        </h1>
        <h1 className="font-bold  text-[30px] sm:text-[40px] md:text-[40px] lg:text-[50px] leading-tight">
          ✨SO LETS CONNECT
        </h1>
      </motion.div>
      <motion.div
        className=" max-w-md p-8 border rounded-lg shadow-lg"
        id="contact"
        initial={{ translateX: 30, opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
        {success && (
          <p className="text-green-500 text-center mb-4">
            Your message has been sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center mb-4">
            Oops! Something went wrong. Please try again.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email_id"
            placeholder="Your Email"
            value={formData.email_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-neon text-black px-4 py-2 rounded-lg hover:bg-lime-300 transition-scale hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
