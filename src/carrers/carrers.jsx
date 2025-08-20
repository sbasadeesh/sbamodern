import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Coffee,
  Zap,
  Target,
  Award,
  ChevronRight,
  Search,
  Filter,
  DollarSign,
  Calendar,
  Building,
  Globe,
  Star,
  Play,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// Sample job data - replace with your API data
const sampleJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$120K - $160K",
    description: "Join our frontend team to build cutting-edge user interfaces using React, TypeScript, and modern web technologies.",
    requirements: ["React", "TypeScript", "CSS", "GraphQL", "Testing"],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "New York",
    type: "Full-time", 
    experience: "2-4 years",
    salary: "$90K - $130K",
    description: "Create beautiful and intuitive user experiences for our platform used by millions of users worldwide.",
    requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 years", 
    salary: "$80K - $110K",
    description: "Analyze complex datasets to drive business decisions and improve our products through data-driven insights.",
    requirements: ["SQL", "Python", "Tableau", "Statistics"],
    posted: "3 days ago"
  }
];

const benefits = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Work-Life Balance", 
    description: "Flexible working hours, remote work options, and unlimited PTO"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Career Growth",
    description: "Learning stipend, mentorship programs, and clear career progression paths"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Recognition",
    description: "Performance bonuses, employee appreciation programs, and achievement awards"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Culture",
    description: "Inclusive environment, team building activities, and collaborative workspace"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation",
    description: "20% time for personal projects, hackathons, and cutting-edge technology"
  }
];

const companyStats = [
  { label: "Team Members", value: "250+" },
  { label: "Countries", value: "12" },
  { label: "Years of Excellence", value: "8" },
  { label: "Client Satisfaction", value: "98%" }
];

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
  });

  const departments = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Analytics'];

  // Fetch jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        // Try to fetch from API, fallback to sample data
        const res = await fetch('http://localhost:5000/jobs');
        if (res.ok) {
          const jobs = await res.json();
          setAllJobs(jobs);
          setFilteredJobs(jobs);
        } else {
          throw new Error('API not available');
        }
      } catch (err) {
        console.log('Using sample data:', err.message);
        // Use sample data if API is not available
        setAllJobs(sampleJobs);
        setFilteredJobs(sampleJobs);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search and department
  useEffect(() => {
    let filtered = allJobs;
    
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedDepartment !== 'All') {
      filtered = filtered.filter(job => job.department === selectedDepartment);
    }
    
    setFilteredJobs(filtered);
  }, [searchTerm, selectedDepartment, allJobs]);

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitApplication = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      alert('Please fill all fields and upload resume');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('resume', formData.resume);
    data.append('jobTitle', selectedJob.title);

    try {
      const res = await fetch('http://localhost:5000/apply-jobs', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      alert(result.message || 'Application submitted!');
      setFormData({ name: '', email: '', phone: '', resume: null });
      setSelectedJob(null);
    } catch (err) {
      console.error(err);
      alert('Failed to submit application.');
    }
  };

   // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens only once
      mirror: false // Whether elements should animate out while scrolling past
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent" data-aos="zoom-in">
              Build Your Future
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
              Join our innovative team and shape the future of technology. We're looking for passionate individuals who want to make an impact.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={300 + index * 100}>
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">Open Positions</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="pl-12 pr-8 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-12">
              <div className="text-gray-400">Loading positions...</div>
            </div>
          ) : (
            /* Job Listings */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredJobs.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-400">No positions found matching your criteria.</div>
                </div>
              ) : (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-red-500 transition-all duration-700 p-6"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      
                    }}
                    data-aos="fade-up"
                    data-aos-delay={job.id * 100}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-red-100 transition-colors duration-300 mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          {/* {job.salary && <div className="text-red-400 font-semibold">{job.salary}</div>} */}
                          <div className="text-gray-500 text-sm">{job.experience}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.requirements.slice(0, ).map((req, index) => (
                          <span key={index} className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-xs">
                            {req}
                          </span>
                        ))}
                        {/* {job.requirements.length > 3 && (
                          <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs">
                            +{job.requirements.length - 3} more
                          </span>
                        )} */}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{job.posted}</span>
                        <button
                          onClick={() => handleApply(job)}
                          className="bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white px-6 py-2 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm font-semibold"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We believe in creating an environment where our team can thrive, innovate, and grow together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-red-500 transition-all duration-700 p-6"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white flex items-center justify-center h-full">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-red-100 transition-colors duration-300 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We foster an inclusive, collaborative environment where innovation thrives. Our team is our greatest asset, and we invest in creating a workplace where everyone can do their best work.
              </p>
              
              <div className="space-y-4">
                {[
                  "Inclusive and diverse workplace",
                  "Continuous learning opportunities", 
                  "Flexible work arrangements",
                  "Open communication and feedback"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div
              className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 h-64"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-30"></div>
              <div className="relative z-10 flex justify-center items-center h-full">
                <div className="text-center">
                  <Play className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <p className="text-white">Company Culture Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Apply for {selectedJob.title}</h3>
            <p className="text-gray-400 mb-6">Submit your details and resume to apply.</p>

            <div className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
              />
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-red-600 file:text-white hover:file:bg-red-700"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setSelectedJob(null)}
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitApplication}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;