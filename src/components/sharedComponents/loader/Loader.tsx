import React from 'react';
import { Spin } from 'antd';
import './loader.css'; // Import your stylesheet for custom styles

const Loader: React.FC = () => (
  <div className="overlay-container">
    <div className="spinner-container">
      <Spin size='large' />
      <p className='text-lg font-bold'>Loading ...</p>
    </div>
  </div>
);

export default Loader;
