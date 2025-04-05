'use client';

import { useState } from 'react';

// Define the type for form data state
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  consent: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    consent: false,
  });

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const services = [
    'Software Development',
    'Mobile App Development',
    'Cloud Solutions',
    'DevOps & Automations',
    'API Development & Integrations',
    'Cybersecurity Solutions',
    'Product Design',
    'UI/UX Design Consulting',
    'AR/VR Solutions',
    'SEO & Content Marketing',
    'Marketing Automation',
    'Analytics & Reporting',
    'Digital Transformation Consulting',
    'Corporate Training',
    'Product Management Consulting',
    'Others',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 md:py-8 lg:py-16 mt-24 md:mt-18 container">
      <h1 className="text-3xl md:text-4xl font-bold text-heading font-heading mb-4">
        Let’s Start Building Together
      </h1>
      <p className="text-lg text-body text-lg my-8">
        Got a bold idea, a complex challenge, or just need expert guidance on your next big move? We’re here to help.
        Whether you&apos;re looking to launch a product, modernize your tech stack, or explore innovative digital strategies —
        let&apos;s talk. Reach out to us and let&apos;s explore how we can bring your vision to life.
      </p>

      {/* Contact Details */}
        <div className="space-y-4 text-body my-12 container mx-auto w-full">
          <div className="text-body text-lg">
            <h2 className="text-3xl font-semibold font-heading text-heading mb-8">Get in Touch</h2>
            <p>Email: <a href="mailto:hello@nexoristech.com" className="text-blue-600">hello@nexoristech.com</a></p>
            <p>Phone: <a href="tel:+234XXXXXXXXXX" className="text-blue-600">+234 XXX XXX XXXX</a></p>
            <p>Office Hours: Monday – Friday, 9:00 AM – 5:00 PM (WAT)</p>
            <p>Location: Lagos, Nigeria (Remote-first, serving clients globally)</p>
          </div>
        </div>
      <div>
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-background rounded-lg shadow shadow-[#bfb9ef] p-4 lg:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none"
            />
            <input
              name="company"
              type="text"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleChange}
              className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none"
            />
          </div>

          {/* Custom Dropdown for Service Selection */}
          <div className="relative w-full">
            <div
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="cursor-pointer p-3 border border-[#bfb9ef] rounded-md w-full outline-none focus:border-text-heading"
            >
              <span>{formData.service || 'Select a Service'}</span>
              <span className="float-right">&#9662;</span> {/* Down Arrow Icon */}
            </div>
            {isDropdownOpen && (
              <div className="absolute w-full bg-background border border-[#bfb9ef] mt-1 rounded-md max-h-50 overflow-auto z-10">
                {services.map((service) => (
                  <div
                    key={service}
                    className="cursor-pointer w-full p-2 hover:bg-button hover:text-secondary-text transition-colors duration-200"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        service,
                      }));
                      setDropdownOpen(false); 
                    }}
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Message Textarea */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your project or inquiry"
            required
            rows={6}
            className="p-3 border border-[#bfb9ef] rounded-md w-full outline-none resize-none"
          />

          {/* Consent Checkbox */}
          <label className="flex items-start space-x-2 text-sm text-body">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <span className="text-body">
              I consent to the processing of my data in accordance with Nexoris Technologies’ privacy policy.
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-button hover:bg-heading cursor-pointer text-white font-semibold py-3 px-6 rounded-md transition duration-200"
          >
            Let’s Build Together
          </button>
        </form>
      </div>
    </main>
  );
}
