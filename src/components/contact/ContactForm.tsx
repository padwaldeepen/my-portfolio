import React, { useState } from 'react';
import styles from './contact.module.scss';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const initialForm: ContactFormValues = { name: '', email: '', message: '' };

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<ContactFormValues>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setError(null);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="text-green-600 dark:text-green-400 font-semibold">
        Thank you! Your message has been sent.
      </div>
    );
  }

  return (
    <form
      className={styles.contactForm + ' flex flex-col gap-4'}
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <label htmlFor="name" className="font-medium text-gray-900 dark:text-white">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className="rounded border border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        value={form.name}
        onChange={handleChange}
        required
        aria-required="true"
      />
      <label htmlFor="email" className="font-medium text-gray-900 dark:text-white">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className="rounded border border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        value={form.email}
        onChange={handleChange}
        required
        aria-required="true"
      />
      <label htmlFor="message" className="font-medium text-gray-900 dark:text-white">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        className="rounded border border-gray-300 dark:border-gray-700 p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        value={form.message}
        onChange={handleChange}
        required
        aria-required="true"
      />
      {error && <div className="text-red-600 dark:text-red-400">{error}</div>}
      <button
        type="submit"
        className="mt-2 py-2 px-4 bg-primary-600 dark:bg-primary-400 text-white dark:text-gray-900 rounded font-semibold hover:bg-primary-700 dark:hover:bg-primary-300 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
