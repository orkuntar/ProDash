import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main wrapper */}
      <div className="flex">
        {/* Sidebar */}
        <div className="fixed h-screen w-64 bg-gray-800">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="ml-64 w-full">
          {/* Navbar */}
          <div className="fixed w-[calc(100%-16rem)] bg-white shadow-sm">
            <Navbar />
          </div>

          {/* Content */}
          <div className="pt-16 p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;