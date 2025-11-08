'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const services = [
    'Networking & Security',
    'Structured Cabling',
    'CCTV & Surveillance',
    'Server Solutions',
    'Access Control',
    'Computer Repair',
    'Home Automation',
    'Website Development',
    'CRM/ERP Solutions',
    'Email & Cloud Services',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (submitStatus) setSubmitStatus(null);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      label: 'Phone Numbers',
      primary: '+971 50 123 4567',
      secondary: '+971 4 321 4567',
      href: 'tel:+971501234567',
    },
    {
      icon: EnvelopeIcon,
      label: 'Email Address',
      primary: 'info@sasitservices.com',
      secondary: 'support@sasitservices.com',
      href: 'mailto:info@sasitservices.com',
    },
    {
      icon: MapPinIcon,
      label: 'Office Location',
      primary: 'Business Bay, Dubai, UAE',
      secondary: 'Near Dubai Mall',
      href: '#map',
    },
    {
      icon: ClockIcon,
      label: 'Working Hours',
      primary: 'Mon-Fri: 9:00 AM - 6:00 PM',
      secondary: 'Sat: 9:00 AM - 2:00 PM',
      href: null,
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-gradient page-section">
        <div className="page-content">
          <div style={{textAlign: 'center'}}>
            <h1 className="page-title">
              Contact <span className="text-gradient">SAS IT Services</span>
            </h1>
            <p className="page-subtitle">
              Ready to transform your business with professional IT solutions? 
              Get in touch with our expert team for a free consultation.
            </p>
            
            {/* Quick Contact Buttons */}
            <div className="cta-buttons" style={{marginTop: '2rem'}}>
              <a
                href="tel:+971501234567"
                className="btn-primary btn-large"
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}
              >
                <PhoneIcon style={{height: '1.25rem', width: '1.25rem'}} />
                Call Now: +971 50 123 4567
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-large"
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}
              >
                <ChatBubbleLeftRightIcon style={{height: '1.25rem', width: '1.25rem'}} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="page-section">
        <div className="page-content">
          <div className="contact-grid">
            
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="contact-title">
                Get In Touch
              </h2>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                {contactInfo.map((info, index) => (
                  <div key={index} className="card contact-item">
                    <info.icon className="contact-icon" />
                    <div>
                      <h3 className="contact-text-title">
                        {info.label}
                      </h3>
                      <p className="contact-text-primary">
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="contact-link"
                          >
                            {info.primary}
                          </a>
                        ) : (
                          info.primary
                        )}
                      </p>
                      <p className="contact-text-secondary">
                        {info.secondary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="card emergency-card">
                <div style={{textAlign: 'center'}}>
                  <DevicePhoneMobileIcon style={{height: '2rem', width: '2rem', color: '#4a9eff', margin: '0 auto 1rem auto'}} />
                  <h3 style={{color: '#ffffff', fontWeight: '600', marginBottom: '0.5rem'}}>
                    24/7 Emergency Support
                  </h3>
                  <p style={{color: '#e2e8f0', fontSize: '0.875rem', marginBottom: '1rem'}}>
                    For urgent IT issues outside business hours
                  </p>
                  <a
                    href="tel:+971501234567"
                    className="contact-link"
                    style={{color: '#4a9eff', fontWeight: '600'}}
                  >
                    +971 50 123 4567
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{gridColumn: 'span 2'}}>
              <div className="card">
                <h2 className="contact-title">
                  Request a Free Quote
                </h2>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="form-grid" style={{gap: '1.5rem'}}>
                  <div className="form-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
                    <div>
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="form-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="form-label">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="form-input form-textarea"
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary btn-full btn-large"
                    style={{opacity: isSubmitting ? 0.5 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer'}}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                  </button>

                  <p style={{color: '#9ca3af', fontSize: '0.875rem', textAlign: 'center'}}>
                    We typically respond within 2-4 hours during business hours. 
                    For urgent matters, please call us directly.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="page-section" style={{backgroundColor: '#16213e'}}>
        <div className="page-content">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="page-title">
              Visit Our Office
            </h2>
            <p className="page-subtitle" style={{marginBottom: 0}}>
              Located in the heart of Business Bay, Dubai
            </p>
          </div>

          <div className="contact-grid" style={{alignItems: 'center'}}>
            {/* Map Placeholder */}
            <div className="card map-placeholder" style={{padding: 0, overflow: 'hidden'}}>
              <div className="map-content">
                <MapPinIcon style={{height: '4rem', width: '4rem', margin: '0 auto 1rem auto'}} />
                <h3 className="map-title">Interactive Map</h3>
                <p className="map-subtitle">Business Bay, Dubai, UAE</p>
                <a
                  href="https://maps.google.com/maps?q=Business+Bay+Dubai+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-button"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Directions & Info */}
            <div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem'}}>
                Getting to Our Office
              </h3>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'flex-start'}}>
                  <MapPinIcon style={{height: '1.25rem', width: '1.25rem', color: '#4a9eff', marginRight: '0.75rem', marginTop: '0.125rem'}} />
                  <div>
                    <p style={{color: '#ffffff', fontWeight: '500'}}>Address:</p>
                    <p style={{color: '#e2e8f0'}}>Business Bay, Dubai, UAE</p>
                  </div>
                </div>
                
                <div style={{display: 'flex', alignItems: 'flex-start'}}>
                  <ClockIcon style={{height: '1.25rem', width: '1.25rem', color: '#4a9eff', marginRight: '0.75rem', marginTop: '0.125rem'}} />
                  <div>
                    <p style={{color: '#ffffff', fontWeight: '500'}}>Office Hours:</p>
                    <p style={{color: '#e2e8f0'}}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p style={{color: '#e2e8f0'}}>Saturday: 9:00 AM - 2:00 PM</p>
                    <p style={{color: '#e2e8f0'}}>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div style={{marginTop: '2rem', padding: '1.5rem', backgroundColor: '#0f3460', borderRadius: '0.5rem'}}>
                <h4 style={{color: '#ffffff', fontWeight: '600', marginBottom: '0.75rem'}}>
                  Parking Available
                </h4>
                <p style={{color: '#e2e8f0', fontSize: '0.875rem'}}>
                  Free parking available for clients. Building has elevator access 
                  and is wheelchair accessible.
                </p>
              </div>

              <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
                <a
                  href="tel:+971501234567"
                  className="btn-primary"
                  style={{flex: 1, justifyContent: 'center'}}
                >
                  Call Before Visit
                </a>
                <Link
                  href="/about"
                  className="btn-secondary"
                  style={{flex: 1, justifyContent: 'center'}}
                >
                  About Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="page-section">
        <div className="page-content" style={{maxWidth: '64rem'}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="page-title">
              Frequently Asked Questions
            </h2>
            <p className="page-subtitle" style={{marginBottom: 0}}>
              Quick answers to common questions
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">
                How quickly can you respond to service requests?
              </h3>
              <p className="faq-answer">
                We typically respond within 2-4 hours during business hours. For emergency 
                situations, we offer 24/7 support with response times under 1 hour.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                Do you provide on-site support?
              </h3>
              <p className="faq-answer">
                Yes, we provide comprehensive on-site support across Dubai and UAE. 
                Our certified technicians can visit your location for installations, 
                maintenance, and troubleshooting.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                What are your payment terms?
              </h3>
              <p className="faq-answer">
                We accept various payment methods including cash, bank transfer, and 
                credit cards. Payment terms vary by project size, typically 50% upfront 
                and 50% upon completion.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                Do you offer maintenance contracts?
              </h3>
              <p className="faq-answer">
                Yes, we offer comprehensive Annual Maintenance Contracts (AMC) that include 
                regular check-ups, preventive maintenance, priority support, and discounted rates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
