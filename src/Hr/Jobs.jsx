import React, { useState, useEffect, useRef } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Search,
  Filter,
  MapPin,
  Clock,
  Building,
  DollarSign,
  Users,
  Eye,
  AlertCircle,
  CheckCircle,
  ChevronDown,
  Check
} from 'lucide-react';

const JobManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    experience: '',
    salary: '',
    description: '',
    requirements: [],
    posted: new Date().toLocaleDateString()
  });

  const departments = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Analytics', 'Sales', 'HR'];
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  
  // Common requirements/skills options
  const availableRequirements = [
    'React', 'Vue.js', 'Angular', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java', 'PHP',
    'HTML', 'CSS', 'SASS', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'GraphQL', 'REST API',
    'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
    'Git', 'CI/CD', 'Agile', 'Scrum', 'Figma', 'Adobe Creative Suite', 'Sketch',
    'Project Management', 'Team Leadership', 'Communication Skills', 'Problem Solving',
    'Data Analysis', 'SEO', 'Content Marketing', 'Social Media', 'Google Analytics',
    'Bachelor\'s Degree', 'Master\'s Degree', 'Certification Required'
  ].sort();

  // Fetch jobs from API
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/jobs');
      if (response.ok) {
        const jobsData = await response.json();
        setJobs(jobsData);
        setFilteredJobs(jobsData);
      } else {
        throw new Error('Failed to fetch jobs');
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      showMessage('error', 'Failed to fetch jobs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Filter jobs
  useEffect(() => {
    let filtered = jobs;
    
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedDepartment !== 'All') {
      filtered = filtered.filter(job => job.department === selectedDepartment);
    }
    
    setFilteredJobs(filtered);
  }, [searchTerm, selectedDepartment, jobs]);

  // Show message helper
  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Open modal for adding new job
  const handleAddJob = () => {
    setEditingJob(null);
    setFormData({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      experience: '',
      salary: '',
      description: '',
      requirements: [],
      posted: new Date().toLocaleDateString()
    });
    setShowModal(true);
  };

  // Open modal for editing existing job
  const handleEditJob = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      salary: job.salary || '',
      description: job.description,
      requirements: Array.isArray(job.requirements) ? job.requirements : [],
      posted: job.posted
    });
    setShowModal(true);
  };

  // Save job (add or update)
  const handleSaveJob = async () => {
    if (!formData.title || !formData.department || !formData.location || !formData.description) {
      showMessage('error', 'Please fill in all required fields');
      return;
    }

    try {
      const jobData = {
        ...formData,
        id: editingJob ? editingJob.id : Date.now() // Use timestamp as ID for new jobs
      };

      const url = editingJob 
        ? `http://localhost:5000/jobs/${editingJob.id}`
        : 'http://localhost:5000/jobs';
      
      const method = editingJob ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData)
      });

      if (response.ok) {
        showMessage('success', `Job ${editingJob ? 'updated' : 'added'} successfully`);
        setShowModal(false);
        fetchJobs(); // Refresh the jobs list
      } else {
        throw new Error(`Failed to ${editingJob ? 'update' : 'add'} job`);
      }
    } catch (error) {
      console.error('Error saving job:', error);
      showMessage('error', `Failed to ${editingJob ? 'update' : 'add'} job`);
    }
  };

  // Delete job
  const handleDeleteJob = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/jobs/${jobId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        showMessage('success', 'Job deleted successfully');
        fetchJobs(); // Refresh the jobs list
      } else {
        throw new Error('Failed to delete job');
      }
    } catch (error) {
      console.error('Error deleting job:', error);
      showMessage('error', 'Failed to delete job');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Job Management</h1>
              <p className="text-gray-400">Manage your job listings and opportunities</p>
            </div>
            <button
              onClick={handleAddJob}
              className="bg-gradient-to-r from-red-500 to-red-400 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 flex items-center gap-2 font-semibold"
            >
              <Plus className="w-5 h-5" />
              Add New Job
            </button>
          </div>
        </div>
      </div>

      {/* Message Alert */}
      {message.text && (
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className={`p-4 rounded-lg flex items-center gap-3 ${
            message.type === 'success' 
              ? 'bg-green-900/30 border border-green-700 text-green-300' 
              : 'bg-red-900/30 border border-red-700 text-red-300'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            {message.text}
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
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

        {/* Job Cards */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-400">Loading jobs...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredJobs.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400">No jobs found matching your criteria.</div>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-red-500 transition-all duration-300 p-6"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
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
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditJob(job)}
                          className="p-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 rounded-lg transition-colors duration-300"
                          title="Edit Job"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="p-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg transition-colors duration-300"
                          title="Delete Job"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mb-4">
                      {job.salary && (
                        <div className="flex items-center gap-2 text-red-400 font-semibold mb-2">
                          {job.salary}
                        </div>
                      )}
                      <div className="text-gray-500 text-sm mb-2">{job.experience}</div>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {job.description}
                      </p>
                    </div>

                    {/* Requirements */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(Array.isArray(job.requirements) ? job.requirements : []).slice(0, ).map((req, index) => (
                        <span key={index} className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-xs">
                          {req}
                        </span>
                      ))}
                      {/* {job.requirements && job.requirements.length > 3 && (
                        <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs">
                          +{job.requirements.length - 3} more
                        </span>
                      )} */}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Posted: {job.posted}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Modal for Add/Edit Job */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full border border-gray-700 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">
                {editingJob ? 'Edit Job' : 'Add New Job'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Job Title */}
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Job Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                  placeholder="e.g., Senior Frontend Developer"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-gray-300 mb-2">Department *</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select Department</option>
                  {departments.slice(1).map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Job Type */}
              <div>
                <label className="block text-gray-300 mb-2">Job Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-300 mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                  placeholder="e.g., Remote / San Francisco"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-gray-300 mb-2">Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select Experience</option>
                  <optgroup label='Range Wise'>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2-3 years">2-3 years</option>
                    <option value="3-4 years">3-4 years</option>
                  </optgroup>
                  <optgroup label='Year Wise'>
                    <option value="1+ years">1+ years</option>
                    <option value="2+ years">2+ years</option>
                    <option value="3+ years">3+ years</option>
                    <option value="4+ years">4+ years</option>
                    <option value="5+ years">5+ years</option>
                    <option value="6+ years">6+ years</option>
                    <option value="7+ years">7+ years</option>
                    <option value="8+ years">8+ years</option>
                    <option value="9+ years">9+ years</option>
                    <option value="10+ years">10+ years</option>
                  </optgroup>
                </select>
              </div>

              {/* Salary */}
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Salary Range</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                  placeholder="e.g., $120K - $160K"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Job Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none resize-none"
                  placeholder="Describe the role, responsibilities, and what makes it exciting..."
                />
              </div>

              {/* Requirements - Multiselect */}
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Requirements & Skills</label>
                <MultiSelect
                  options={availableRequirements}
                  selected={formData.requirements}
                  onChange={(selected) => setFormData(prev => ({ ...prev, requirements: selected }))}
                  placeholder="Select skills and requirements..."
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3 bg-gray-800 cursor-pointer text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveJob}
                className="flex-1 px-6 py-3 cursor-pointer bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                {editingJob ? 'Update Job' : 'Add Job'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  
  );
};

// MultiSelect Component
const MultiSelect = ({ options, selected, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selected.includes(option)
  );

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (!selected.includes(option)) {
      onChange([...selected, option]);
    }
    setSearchTerm('');
  };

  const handleRemove = (option) => {
    onChange(selected.filter(item => item !== option));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Selected Items */}
      <div
        onClick={handleToggle}
        className="min-h-[48px] px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer hover:border-red-500 focus-within:border-red-500 transition-colors duration-300"
      >
        <div className="flex flex-wrap gap-2">
          {selected.length === 0 && (
            <span className="text-gray-500">{placeholder}</span>
          )}
          {selected.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm"
            >
              {item}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(item);
                }}
                className="hover:bg-red-800/50 rounded-full p-0.5 transition-colors duration-200"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
        <ChevronDown
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-64 overflow-hidden">
          {/* Search Input */}
          <div className="p-3 border-b border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search requirements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-500 focus:border-red-500 focus:outline-none text-sm"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Options List */}
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 text-sm">
                {searchTerm ? 'No matching options found' : 'All options selected'}
              </div>
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors duration-200 text-sm text-white flex items-center gap-2"
                >
                  <Plus className="w-4 h-4 text-green-400" />
                  {option}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobManagement;