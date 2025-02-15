export const Sidebar = () => {
    return (
      <div className="p-4 text-white">
        <div className="text-xl font-bold mb-4">Admin Dashboard</div>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Dashboard</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Users</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };