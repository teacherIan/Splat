import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Canvas } from '@react-three/fiber';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="header_outline">
      Doug's <br /> Found
      <br /> Wood
      <br />
    </div>
    <div className="header">
      Doug's <br /> Found
      <br /> Wood
      <br />
    </div>

    <Canvas camera={{ position: [0, 10, 1.5] }}>
      <App />
    </Canvas>
  </React.StrictMode>
);
