import { useState } from 'react';

export const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuId) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  return (
    <div className="h-full w-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">ProDash</h1>
        </div>
        
        <nav>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => toggleMenu('dashboard')}
                className="w-full flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Dashboard</span>
                </div>
                <svg 
                  className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${openMenus.dashboard ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenus.dashboard && (
                <ul className="mt-2 ml-6 space-y-1">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Overview</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Analytics</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Reports</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-200/50 rounded-lg transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="group-hover:text-blue-400 transition-colors">Users</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-200/50 rounded-lg transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:text-blue-400 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="group-hover:text-blue-400 transition-colors">Products</span>
              </a>
            </li>
            <li>
              <button 
                onClick={() => toggleMenu('menu')}
                className="w-full flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">Menu</span>
                </div>
                <svg 
                  className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${openMenus.menu ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenus.menu && (
                <ul className="mt-2 ml-6 space-y-1">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Submenu Item 1</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Submenu Item 2</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-200/50 rounded-lg transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="group-hover:text-blue-400 transition-colors">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};