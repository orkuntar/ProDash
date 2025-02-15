import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

const Layout = ({ children, isModalOpen, setIsModalOpen }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Main wrapper */}
      <div className="flex">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-screen w-64">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="ml-64 flex-1">
          {/* Navbar */}
          <div className="fixed top-0 right-0 left-64 h-16 bg-white dark:bg-gray-800 shadow-sm z-10 transition-colors duration-200">
            <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>

          {/* Content */}
          <div className="pt-20 px-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;