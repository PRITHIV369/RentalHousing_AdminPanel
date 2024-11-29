import React from 'react';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white flex flex-col">
        <div className="py-4 px-6 text-center">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 px-4">
            <li className="hover:bg-purple-600 p-2 rounded-lg">
              <a href="#" className="flex items-center space-x-3">
                <span className="material-icons">dashboard</span>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="hover:bg-purple-600 p-2 rounded-lg">
              <a href="#" className="flex items-center space-x-3">
                <span className="material-icons">apartment</span>
                <span>Manage Properties</span>
              </a>
            </li>
            <li className="hover:bg-purple-600 p-2 rounded-lg">
              <a href="#" className="flex items-center space-x-3">
                <span className="material-icons">people</span>
                <span>Manage Users</span>
              </a>
            </li>
            <li className="hover:bg-purple-600 p-2 rounded-lg">
              <a href="#" className="flex items-center space-x-3">
                <span className="material-icons">insights</span>
                <span>Reports</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="py-4 text-center">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Welcome to Admin Panel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Total Properties</h2>
            <p className="text-3xl font-bold text-purple-700 mt-4">120</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Total Tenants</h2>
            <p className="text-3xl font-bold text-purple-700 mt-4">300</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Total Landlords</h2>
            <p className="text-3xl font-bold text-purple-700 mt-4">50</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
