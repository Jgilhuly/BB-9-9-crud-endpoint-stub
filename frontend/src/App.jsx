import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import ProductList from './components/products/ProductList';
import UserList from './components/users/UserList';

// Import styles
import './styles/main.css';
import './styles/layout.css';
import './styles/components.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
