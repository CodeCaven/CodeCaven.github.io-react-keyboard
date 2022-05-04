import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Keyboard from './components/Keyboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Keyboard />
  </React.StrictMode>
);

export default root;

// To create a new React app....
// npx create-react-app my-app

// See react.org fo tutorials and guides
// and https://www.taniarascia.com/getting-started-with-react/

