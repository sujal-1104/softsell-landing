// components/ContactForm.jsx
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.company) newErrors.company = 'Company is required';
    if (!form.licenseType) newErrors.licenseType = 'Please select a license type';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Message submitted successfully!');
      setForm({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          {['name', 'email', 'company'].map((field) => (
            <div key={field}>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md"
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
          <div>
            <select
              name="licenseType"
              value={form.licenseType}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
            >
              <option value="">Select License Type</option>
              <option value="Windows">Windows</option>
              <option value="Adobe">Adobe</option>
              <option value="Office">Office</option>
              <option value="Other">Other</option>
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
