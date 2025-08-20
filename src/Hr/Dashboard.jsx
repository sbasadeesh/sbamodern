import { useState } from "react";
import { Menu, X, Briefcase, FileText, Home, Settings, User } from "lucide-react";

import Applications from "./Applications";
import DashboardStats from "./Stats";
import JobManagement from "./Jobs";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeView, setActiveView] = useState('jobs');

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'jobs', label: 'Job List', icon: Briefcase },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'jobs':
        return <JobManagement />;
      case 'applications':
        return <Applications />;
      case 'settings':
        return <div style={{padding: '2rem'}}>Settings coming soon...</div>;
      case 'dashboard':
        return <DashboardStats />;
      default:
        return <JobManagement />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed Position */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-black shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:fixed lg:z-auto`}>
        
        {/* Sidebar Header - Fixed */}
        <div className="flex items-center justify-between h-16 px-6 bg-black border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Job Portal</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation - Scrollable if needed */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-4">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveView(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeView === item.id
                        ? 'bg-red-800 text-white border border-red-600'
                        : 'text-gray-100 hover:bg-gray-800'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile Section - Fixed at bottom */}
        <div className="p-4 border-t border-gray-700 bg-black">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-300" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-100">Admin User</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Top Navigation Bar - Mobile Only */}
        <header className="bg-white shadow-sm border-b border-gray-200 lg:hidden relative z-40">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">
              {navigationItems.find(item => item.id === activeView)?.label || 'Job List'}
            </h1>
            <div className="w-6"></div>
          </div>
        </header>

        {/* Page Content - Only scroll when needed */}
        <main className="flex-1 ">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;