import Link from 'next/link';
import Image from 'next/image';
import {
  BuildingOfficeIcon,
  ShoppingBagIcon,
  TruckIcon,
  HeartIcon,
  AcademicCapIcon,
  HomeIcon,
  CheckCircleIcon,
  CalendarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Enterprise Network Overhaul',
      client: 'Dubai Logistics Hub',
      industry: 'Logistics & Warehousing',
      icon: TruckIcon,
      description: 'Complete network infrastructure upgrade for a 50,000 sq ft warehouse facility with 200+ workstations.',
      challenge: 'Outdated network causing frequent downtime and slow data transfer affecting operations.',
      solution: 'Implemented enterprise-grade Cisco network with redundant connections, managed switches, and advanced security protocols.',
      results: [
        '99.9% network uptime achieved',
        '300% increase in data transfer speed',
        'Zero security incidents in 12 months',
        '40% reduction in IT support tickets',
      ],
      technologies: ['Cisco Meraki', 'Fiber Optic Cabling', 'Fortinet Firewall', 'Ubiquiti Access Points'],
      duration: '6 weeks',
      team: '8 engineers',
      investment: 'AED 150,000',
      image: '/images/projects/logistics-network.jpg',
      testimonial: {
        text: 'SAS IT Services transformed our entire network infrastructure. The improvement in efficiency and reliability has been remarkable.',
        author: 'Ahmed Al-Rashid, IT Manager'
      }
    },
    {
      id: 2,
      title: 'Multi-Location CCTV System',
      client: 'Emirates Retail Chain',
      industry: 'Retail',
      icon: ShoppingBagIcon,
      description: 'Advanced surveillance system installation across 15 retail locations with centralized monitoring.',
      challenge: 'Need for comprehensive security monitoring across multiple retail outlets with centralized management.',
      solution: 'Deployed IP-based CCTV system with 4K cameras, NVRs, and cloud-based central monitoring dashboard.',
      results: [
        '24/7 monitoring across all locations',
        '50% reduction in theft incidents',
        'Real-time alerts and notifications',
        'Complete video backup for 90 days',
      ],
      technologies: ['Hikvision 4K Cameras', 'Cloud NVR', 'Mobile App Integration', 'AI Analytics'],
      duration: '8 weeks',
      team: '12 technicians',
      investment: 'AED 280,000',
      image: '/images/projects/retail-cctv.jpg',
      testimonial: {
        text: 'The CCTV system has significantly improved our security posture. The remote monitoring capability is exceptional.',
        author: 'Sarah Johnson, Operations Director'
      }
    },
    {
      id: 3,
      title: 'Hospital IT Infrastructure',
      client: 'Emirates Healthcare Center',
      industry: 'Healthcare',
      icon: HeartIcon,
      description: 'Comprehensive IT infrastructure for a 200-bed hospital including networking, servers, and security systems.',
      challenge: 'Critical need for reliable, secure IT infrastructure supporting patient care and medical equipment.',
      solution: 'Implemented redundant server systems, secure network infrastructure, and integrated access control with patient management systems.',
      results: [
        '100% system availability for critical operations',
        'HIPAA-compliant security implementation',
        'Integrated patient management system',
        '24/7 technical support coverage',
      ],
      technologies: ['Dell PowerEdge Servers', 'VMware vSphere', 'Cisco Security', 'Biometric Access Control'],
      duration: '12 weeks',
      team: '15 specialists',
      investment: 'AED 450,000',
      image: '/images/projects/hospital-it.jpg',
      testimonial: {
        text: 'SAS IT Services provided a robust and secure infrastructure that supports our critical healthcare operations seamlessly.',
        author: 'Dr. Mohammed Hassan, IT Director'
      }
    },
    {
      id: 4,
      title: 'Smart Office Automation',
      client: 'TechCorp Dubai',
      industry: 'Technology',
      icon: BuildingOfficeIcon,
      description: 'Complete smart office solution including automation, HVAC control, and integrated security systems.',
      challenge: 'Modern office requiring intelligent automation for energy efficiency and enhanced user experience.',
      solution: 'Deployed comprehensive building automation system with smart lighting, climate control, and integrated security.',
      results: [
        '35% reduction in energy consumption',
        'Automated lighting and climate control',
        'Enhanced employee productivity',
        'Mobile app control for all systems',
      ],
      technologies: ['KNX Building Automation', 'Lutron Lighting', 'Honeywell HVAC', 'Integrated Security'],
      duration: '10 weeks',
      team: '10 engineers',
      investment: 'AED 320,000',
      image: '/images/projects/smart-office.jpg',
      testimonial: {
        text: 'The smart office solution has transformed our workplace. Energy savings and employee satisfaction have both improved significantly.',
        author: 'Lisa Kumar, Facilities Manager'
      }
    },
    {
      id: 5,
      title: 'Educational Campus Network',
      client: 'Dubai International School',
      industry: 'Education',
      icon: AcademicCapIcon,
      description: 'Campus-wide network infrastructure supporting 2000+ students and staff with high-speed connectivity.',
      challenge: 'Large campus requiring reliable network infrastructure for educational technology and digital learning.',
      solution: 'Implemented fiber optic backbone with wireless coverage across campus, content filtering, and bandwidth management.',
      results: [
        'Campus-wide WiFi coverage achieved',
        'Secure internet access for students',
        'Content filtering and monitoring',
        'Support for 1000+ simultaneous users',
      ],
      technologies: ['Fiber Optic Network', 'Enterprise WiFi', 'Content Filtering', 'Bandwidth Management'],
      duration: '14 weeks',
      team: '12 technicians',
      investment: 'AED 380,000',
      image: '/images/projects/school-network.jpg',
      testimonial: {
        text: 'The network infrastructure has revolutionized our digital learning capabilities. Students and staff now have seamless connectivity.',
        author: 'Mark Thompson, IT Coordinator'
      }
    },
    {
      id: 6,
      title: 'Luxury Villa Home Automation',
      client: 'Private Residence - Palm Jumeirah',
      industry: 'Residential',
      icon: HomeIcon,
      description: 'Complete home automation system for luxury villa including lighting, security, entertainment, and climate control.',
      challenge: 'High-end residence requiring sophisticated automation with elegant control interfaces.',
      solution: 'Installed comprehensive home automation system with touchscreen controls, voice integration, and mobile app management.',
      results: [
        'Fully automated lighting and climate',
        'Integrated security and entertainment',
        'Voice and app control capabilities',
        'Energy-efficient smart systems',
      ],
      technologies: ['Control4 Automation', 'Lutron Lighting', 'Sonos Audio', 'Smart Security Integration'],
      duration: '8 weeks',
      team: '6 specialists',
      investment: 'AED 250,000',
      image: '/images/projects/villa-automation.jpg',
      testimonial: {
        text: 'The home automation system is incredible. Everything works seamlessly and the level of control is exactly what we wanted.',
        author: 'Private Client'
      }
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: HeartIcon, projects: 8, color: 'bg-red-600' },
    { name: 'Education', icon: AcademicCapIcon, projects: 12, color: 'bg-blue-600' },
    { name: 'Retail', icon: ShoppingBagIcon, projects: 15, color: 'bg-green-600' },
    { name: 'Logistics', icon: TruckIcon, projects: 10, color: 'bg-yellow-600' },
    { name: 'Corporate Offices', icon: BuildingOfficeIcon, projects: 20, color: 'bg-purple-600' },
    { name: 'Residential', icon: HomeIcon, projects: 25, color: 'bg-pink-600' },
  ];

  return (
    <div className="bg-[#1a1a2e]">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Project Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Showcasing successful IT implementations across diverse industries in Dubai and UAE. 
              From small businesses to large enterprises, we deliver excellence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4a9eff]">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4a9eff]">250+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4a9eff]">99.9%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4a9eff]">10+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-300">
              Specialized IT solutions across various sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="card text-center group">
                <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2 text-sm">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {industry.projects} Projects
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-gray-300">
              In-depth look at our most impactful projects
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <project.icon className="h-10 w-10 text-[#4a9eff] mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">{project.client}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <CalendarIcon className="h-5 w-5 text-[#4a9eff] mx-auto mb-2" />
                      <div className="text-white font-medium text-sm">{project.duration}</div>
                      <div className="text-gray-400 text-xs">Duration</div>
                    </div>
                    <div className="text-center">
                      <UserGroupIcon className="h-5 w-5 text-[#4a9eff] mx-auto mb-2" />
                      <div className="text-white font-medium text-sm">{project.team}</div>
                      <div className="text-gray-400 text-xs">Team Size</div>
                    </div>
                    <div className="text-center">
                      <CurrencyDollarIcon className="h-5 w-5 text-[#4a9eff] mx-auto mb-2" />
                      <div className="text-white font-medium text-sm">{project.investment}</div>
                      <div className="text-gray-400 text-xs">Investment</div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="h-4 w-4 text-[#4a9eff] mr-2 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#0f3460] text-[#4a9eff] rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="card bg-[#0f3460] border-[#4a9eff]">
                    <p className="text-gray-300 italic mb-4">
                      &ldquo;{project.testimonial.text}&rdquo;
                    </p>
                    <p className="text-white font-medium">
                      — {project.testimonial.author}
                    </p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card p-0 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-[#0f3460] to-[#4a9eff] flex items-center justify-center">
                      <div className="text-center text-white">
                        <project.icon className="h-16 w-16 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">{project.industry}</h4>
                        <p className="text-white/80">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Project Process
            </h2>
            <p className="text-gray-300">
              Structured approach ensuring successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-white font-semibold mb-3">Discovery & Analysis</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive assessment of requirements, existing infrastructure, and business objectives.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-white font-semibold mb-3">Design & Planning</h3>
              <p className="text-gray-300 text-sm">
                Detailed solution design, project timeline, resource allocation, and risk assessment.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-white font-semibold mb-3">Implementation</h3>
              <p className="text-gray-300 text-sm">
                Professional installation, configuration, testing, and quality assurance processes.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-white font-semibold mb-3">Support & Maintenance</h3>
              <p className="text-gray-300 text-sm">
                Ongoing support, monitoring, maintenance, and optimization services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f3460] to-[#4a9eff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can help transform your IT infrastructure with proven solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#0f3460] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0f3460] transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

