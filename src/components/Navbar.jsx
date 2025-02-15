export const Navbar = () => {
    return (
      <div className="h-16 px-4 flex items-center justify-between bg-white">
        <div className="text-xl font-semibold">Welcome, Admin</div>
        <div>
          <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
            Logout
          </button>
        </div>
      </div>
    );
  };