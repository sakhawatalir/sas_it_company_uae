import Link from 'next/link';
import {
  ShieldCheckIcon,
  ServerIcon,
  CogIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  EnvelopeIcon,
  CloudIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function ServicesPage() {
  const services = [
    {
      id: 'networking',
      icon: ShieldCheckIcon,
      title: 'Networking & Security',
      description: 'Comprehensive network infrastructure and cybersecurity solutions for enterprises.',
      features: [
        'Network Design & Implementation',
        'Firewall Configuration & Management',
        'VPN Setup & Remote Access',
        'Network Monitoring & Maintenance',
        'Cybersecurity Assessment',
        'Data Backup & Recovery',
      ],
      technologies: ['Cisco', 'Fortinet', 'SonicWall', 'Ubiquiti', 'Meraki'],
      pricing: 'Starting from AED 2,500',
    },
    {
      id: 'cabling',
      icon: CogIcon,
      title: 'Structured Cabling',
      description: 'Professional cabling solutions for offices, warehouses, and commercial spaces.',
      features: [
        'Cat6/Cat6A Cable Installation',
        'Fiber Optic Cabling',
        'Cable Management Systems',
        'Patch Panel Configuration',
        'Cable Testing & Certification',
        'Future-Proof Infrastructure',
      ],
      technologies: ['Panduit', 'Commscope', 'Legrand', 'Schneider Electric'],
      pricing: 'Starting from AED 50/point',
    },
    {
      id: 'cctv',
      icon: VideoCameraIcon,
      title: 'CCTV & Surveillance',
      description: 'Advanced surveillance systems for comprehensive security monitoring.',
      features: [
        'IP Camera Installation',
        'NVR/DVR Setup & Configuration',
        'Remote Monitoring Access',
        'Motion Detection & Alerts',
        'Night Vision Capabilities',
        'Mobile App Integration',
      ],
      technologies: ['Hikvision', 'Dahua', 'Axis', 'Bosch', 'Uniview'],
      pricing: 'Starting from AED 800/camera',
    },
    {
      id: 'servers',
      icon: ServerIcon,
      title: 'Server & System Solutions',
      description: 'Complete server infrastructure and cloud migration services.',
      features: [
        'Server Installation & Setup',
        'Virtualization Solutions',
        'Cloud Migration Services',
        'Server Maintenance & Support',
        'Backup & Disaster Recovery',
        'Performance Optimization',
      ],
      technologies: ['Dell', 'HP', 'VMware', 'Microsoft', 'AWS', 'Azure'],
      pricing: 'Starting from AED 5,000',
    },
    {
      id: 'access-control',
      icon: ShieldCheckIcon,
      title: 'Access Control & Attendance',
      description: 'Modern access control and time attendance management systems.',
      features: [
        'Biometric Access Control',
        'RFID Card Systems',
        'Time & Attendance Tracking',
        'Integration with HR Systems',
        'Mobile App Access',
        'Visitor Management',
      ],
      technologies: ['ZKTeco', 'Suprema', 'Anviz', 'Honeywell', 'Bosch'],
      pricing: 'Starting from AED 1,200/door',
    },
    {
      id: 'repair',
      icon: WrenchScrewdriverIcon,
      title: 'Computer Repair & Maintenance',
      description: 'Professional computer and laptop repair services with quick turnaround.',
      features: [
        'Hardware Diagnostics & Repair',
        'Software Troubleshooting',
        'Virus Removal & Security',
        'Data Recovery Services',
        'Preventive Maintenance',
        'On-site & Remote Support',
      ],
      technologies: ['Dell', 'HP', 'Lenovo', 'Apple', 'ASUS', 'Acer'],
      pricing: 'Starting from AED 150/hour',
    },
    {
      id: 'automation',
      icon: HomeIcon,
      title: 'Home Automation',
      description: 'Smart home solutions for modern living and convenience.',
      features: [
        'Smart Lighting Control',
        'Climate Control Systems',
        'Security Integration',
        'Audio/Video Systems',
        'Mobile App Control',
        'Voice Assistant Integration',
      ],
      technologies: ['Lutron', 'Control4', 'Crestron', 'KNX', 'Zigbee'],
      pricing: 'Starting from AED 3,000/room',
    },
    {
      id: 'web',
      icon: GlobeAltIcon,
      title: 'Website Development',
      description: 'Custom web applications and e-commerce solutions for businesses.',
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'Content Management Systems',
        'SEO Optimization',
        'Mobile App Development',
        'Website Maintenance & Support',
      ],
      technologies: ['React', 'Next.js', 'WordPress', 'Shopify', 'Laravel', 'Node.js'],
      pricing: 'Starting from AED 2,000',
    },
    {
      id: 'crm',
      icon: ComputerDesktopIcon,
      title: 'CRM / ERP Solutions',
      description: 'Business management systems to streamline operations and increase efficiency.',
      features: [
        'Customer Relationship Management',
        'Inventory Management',
        'Financial Management',
        'Reporting & Analytics',
        'Integration Services',
        'Staff Training & Support',
      ],
      technologies: ['Salesforce', 'Microsoft Dynamics', 'SAP', 'Odoo', 'Zoho'],
      pricing: 'Starting from AED 8,000',
    },
    {
      id: 'cloud',
      icon: CloudIcon,
      title: 'Email & Cloud Services',
      description: 'Professional email hosting and cloud infrastructure solutions.',
      features: [
        'Business Email Hosting',
        'Cloud Storage Solutions',
        'Microsoft 365 Setup',
        'Google Workspace',
        'Email Migration Services',
        'Backup & Security',
      ],
      technologies: ['Microsoft 365', 'Google Workspace', 'AWS', 'Azure', 'cPanel'],
      pricing: 'Starting from AED 25/user/month',
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-gradient page-section">
        <div className="page-content">
          <div style={{textAlign: 'center'}}>
            <h1 className="page-title">
              Our <span className="text-gradient">IT Services</span>
            </h1>
            <p className="page-subtitle">
              Comprehensive technology solutions designed to empower your business 
              with reliability, security, and innovation.
            </p>
            <div className="cta-buttons" style={{marginTop: '2rem'}}>
              <Link href="/contact" className="btn-primary btn-large">
                Get Free Consultation
              </Link>
              <a
                href="tel:+971501234567"
                className="btn-secondary btn-large"
              >
                Call for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="page-section">
        <div className="page-content">
          <div style={{display: 'flex', flexDirection: 'column', gap: '5rem'}}>
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="service-detail">
                <div className={`service-detail ${index % 2 === 1 ? 'service-detail-reverse' : ''}`}>
                  <div className="service-content">
                    <div className="service-header">
                      <service.icon className="service-detail-icon" />
                      <div>
                        <h2 className="service-detail-title">
                          {service.title}
                        </h2>
                        <div className="service-price">
                          {service.pricing}
                        </div>
                      </div>
                    </div>
                    
                    <p className="service-detail-description">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div style={{marginBottom: '1.5rem'}}>
                      <h3 className="features-title">
                        Key Features:
                      </h3>
                      <div className="features-grid">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="feature-item">
                            <CheckCircleIcon className="feature-check" />
                            <span className="feature-text">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div style={{marginBottom: '2rem'}}>
                      <h3 className="tech-title">
                        Technologies We Use:
                      </h3>
                      <div className="tech-tags">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="btn-primary"
                    >
                      Get Quote for {service.title}
                    </Link>
                  </div>

                  <div className="service-visual">
                    <div className="service-visual-card">
                      <service.icon className="service-visual-icon" />
                      <h3 className="service-visual-title">
                        Professional {service.title}
                      </h3>
                      <p className="service-visual-description">
                        Reliable, scalable, and secure solutions tailored to your business needs.
                      </p>
                      <div className="service-pricing">
                        <div className="service-pricing-price">
                          {service.pricing}
                        </div>
                        <p className="service-pricing-note">
                          Professional installation and setup included
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="page-section" style={{backgroundColor: '#16213e'}}>
        <div className="page-content">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="page-title">
              Why Choose SAS IT Services?
            </h2>
            <p className="page-subtitle" style={{marginBottom: 0}}>
              Your trusted technology partner in Dubai, UAE
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="card why-choose-item">
              <div className="why-choose-icon">
                <ShieldCheckIcon style={{height: '2rem', width: '2rem', color: '#ffffff'}} />
              </div>
              <h3 className="why-choose-title">
                Licensed & Certified
              </h3>
              <p className="why-choose-description">
                All our technicians are certified professionals with extensive experience 
                in their respective fields.
              </p>
            </div>

            <div className="card why-choose-item">
              <div className="why-choose-icon">
                <CogIcon style={{height: '2rem', width: '2rem', color: '#ffffff'}} />
              </div>
              <h3 className="why-choose-title">
                24/7 Support
              </h3>
              <p className="why-choose-description">
                Round-the-clock technical support to ensure your systems run smoothly 
                without interruption.
              </p>
            </div>

            <div className="card why-choose-item">
              <div className="why-choose-icon">
                <CheckCircleIcon style={{height: '2rem', width: '2rem', color: '#ffffff'}} />
              </div>
              <h3 className="why-choose-title">
                Quality Guarantee
              </h3>
              <p className="why-choose-description">
                We stand behind our work with comprehensive warranties and satisfaction 
                guarantees on all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to Upgrade Your IT Infrastructure?
          </h2>
          <p className="cta-description">
            Contact us today for a free consultation and customized quote
          </p>
          
          <div className="cta-buttons">
            <Link href="/contact" className="cta-btn-primary">
              Get Free Quote
            </Link>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
