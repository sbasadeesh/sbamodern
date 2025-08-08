import React, { useState, useEffect } from 'react';
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Shield,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Building,
  Users
} from 'lucide-react';

const HRLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'HR',
    department: 'Human Resources'
  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // Show message helper
  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 4000);
  };

  // Handle input changes for registration
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle input changes for login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!loginForm.email || !loginForm.password) {
      showMessage('error', 'Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });

      const result = await response.json();

      if (response.ok) {
        showMessage('success', 'Login successful! Redirecting...');
        
        // Store auth data in memory (not localStorage due to restrictions)
        // In a real app, you'd handle this with proper state management
        setTimeout(() => {
          // Redirect to job management or dashboard
          window.location.href = '/job-management'; // or handle with routing
        }, 1500);
      } else {
        showMessage('error', result.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      showMessage('error', 'Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password) {
      showMessage('error', 'Please fill in all required fields');
      return;
    }

    if (formData.password.length < 6) {
      showMessage('error', 'Password must be at least 6 characters long');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        showMessage('success', 'Registration successful! Please login.');
        setIsLogin(true);
        setFormData({
          email: '',
          password: '',
          name: '',
          role: 'HR',
          department: 'Human Resources'
        });
      } else {
        showMessage('error', result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      showMessage('error', 'Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Toggle between login and register
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage({ type: '', text: '' });
    setLoginForm({ email: '', password: '' });
    setFormData({
      email: '',
      password: '',
      name: '',
      role: 'HR',
      department: 'Human Resources'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-red-500 to-red-400 p-4 rounded-2xl w-20 h-20 mx-auto mb-6 shadow-2xl">
            <Shield className="w-12 h-12 text-white mx-auto" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            HR Portal
          </h1>
          <p className="text-gray-400">
            {isLogin ? 'Sign in to manage job listings and applications' : 'Create your HR account'}
          </p>
        </div>

        {/* Message Alert */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
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
        )}

        {/* Login/Register Card */}
        <div 
          className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 p-8 shadow-2xl"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-gray-900/40 opacity-50"></div>
          
          <div className="relative z-10">
            {/* Toggle Tabs */}
            <div className="flex mb-8 bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition-all duration-300 ${
                  isLogin 
                    ? 'bg-gradient-to-r from-red-500 to-red-400 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition-all duration-300 ${
                  !isLogin 
                    ? 'bg-gradient-to-r from-red-500 to-red-400 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Register
              </button>
            </div>

            {/* Login Form */}
            {isLogin ? (
              <div className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      className="w-full pl-12 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all duration-300"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              /* Register Form */
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Department Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Department</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                    >
                      <option value="Human Resources">Human Resources</option>
                      <option value="Recruitment">Recruitment</option>
                      <option value="People Operations">People Operations</option>
                      <option value="Talent Acquisition">Talent Acquisition</option>
                    </select>
                  </div>
                </div>

                {/* Role Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Role</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-all duration-300"
                    >
                      <option value="HR">HR Manager</option>
                      <option value="Recruiter">Recruiter</option>
                      <option value="HR Admin">HR Admin</option>
                      <option value="Talent Manager">Talent Manager</option>
                    </select>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all duration-300"
                      placeholder="Create a password"
                      minLength="6"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">Password must be at least 6 characters long</p>
                </div>

                {/* Register Button */}
                <button
                  onClick={handleRegister}
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={toggleMode}
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors duration-300"
                >
                  {isLogin ? 'Register here' : 'Sign in here'}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Secure HR Portal • Protected Access • Job Management System
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRLoginPage;