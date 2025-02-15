import React, { useState, useEffect, useRef } from 'react';

export const Navbar = ({ isModalOpen, setIsModalOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, setIsModalOpen]);

  const handleSearchClick = () => {
    console.log('Search clicked, attempting to set modal open');
    setIsModalOpen(true);
  };

  return (
    <div className="h-16 px-4 flex items-center justify-between bg-white">
      <div className="flex-1 flex justify-center">
        <button
          onClick={handleSearchClick}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100 w-96"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-gray-400">Search anything...</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-[2px] bg-white/30 z-[100000] flex items-center justify-center">
          <div 
            ref={modalRef}
            className="bg-white/80 backdrop-blur-[4px] shadow-xl rounded-lg p-6 w-full max-w-2xl border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Search</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
        </div>
      )}

      <div className="relative">
        <button 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-colors"
        >
          <img 
            src="https://api.dicebear.com/6.x/avataaars/svg?seed=Felix" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </button>

        {isProfileOpen && (
          <div 
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-[99999]"
          >
            <div className="px-4 py-2 border-b border-gray-200">
              <div className="font-medium text-gray-800">John Doe</div>
              <div className="text-sm text-gray-500">john@example.com</div>
            </div>
            
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </a>

            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
              Settings
            </a>

            <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
};