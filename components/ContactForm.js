import { useState } from 'react';
import CustomAlertModal from './CustomAlertModal'; // Assuming you use this for alerts

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '' // Honeypot
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' }); // 'success' or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [alertState, setAlertState] = useState({ isOpen: false, title: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = (title, message) => {
    setAlertState({ isOpen: true, title, message });
  };
  const closeAlert = () => {
    setAlertState({ isOpen: false, title: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    if (formData.website) { // Honeypot check
      showAlert("Spam Alert", "Spam detected. Submission blocked.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      showAlert("Input Error", "Please fill out all required fields: Name, Email, and Message.");
      setIsSubmitting(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      showAlert("Input Error", "Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual API call if you have a backend)
    try {
      // console.log("Form data submitted:", formData); // For debugging
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

      showAlert("Success!", `Thank you, ${formData.name}! Your message has been sent (simulated).`);
      setFormStatus({ type: 'success', message: `Thank you, ${formData.name}! Your message has been sent (simulated).` });
      setFormData({ name: '', email: '', subject: '', message: '', website: '' }); // Reset form
    } catch (error) {
      console.error("Form submission error:", error);
      showAlert("Error", "Sorry, there was an issue sending your message. Please try again.");
      setFormStatus({ type: 'error', message: "Sorry, there was an issue sending your message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-3 px-4 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 transition-colors";

  return (
    <>
      <CustomAlertModal
        isOpen={alertState.isOpen}
        title={alertState.title}
        message={alertState.message}
        onClose={closeAlert}
      />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 mt-8 max-w-lg mx-auto border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white text-left">Get in Touch</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-left text-sm">
          Have a question or want to work together? Fill out the form below.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot field (visually hidden) */}
          <div className="mb-4 hidden" aria-hidden="true">
            <label htmlFor="website" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Website</label>
            <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex="-1" autoComplete="off" />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" className={inputClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Your Email" className={inputClass} />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject (Optional)" className={inputClass} />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" className={`${inputClass} resize-y min-h-[120px]`}></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white font-semibold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
        {formStatus.message && (
          <p className={`mt-4 text-center text-sm ${formStatus.type === 'success' ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
            {formStatus.message}
          </p>
        )}
      </div>
    </>
  );
};

export default ContactForm;