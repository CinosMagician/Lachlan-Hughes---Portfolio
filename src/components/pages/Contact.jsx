import { motion } from 'framer-motion';
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <div className="contact">
      <motion.h1
        className="text-center con"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        Contact Page
      </motion.h1>
      <motion.p
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.4 }}
      >
        If you would like to get in touch with me, you can fill in your name, email and message you would like to leave for me below. I will get back to you
        as soon as possible.
      </motion.p>
      <ContactForm />
    </div>
  );
}
