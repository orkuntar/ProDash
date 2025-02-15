import React, { useState } from 'react';
import Layout from './components/Layout';
import { Card } from './components/Card';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div 
          className={`will-change-transform ${
            isModalOpen ? 'opacity-20 pointer-events-none' : ''
          }`}
          style={{
            transform: isModalOpen ? 'translateZ(0)' : 'none',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card title="Total Users" /> 
            <Card title="Total Orders" /> 
            <Card title="Total Revenue" /> 
            <Card title="Total Products" /> 
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;