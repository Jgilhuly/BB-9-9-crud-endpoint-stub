import React, { useState } from 'react';
import { useUsers } from '../../hooks/useUsers';
import UserCard from './UserCard';
import UserModal from './UserModal';

const UserList = () => {
  const { 
    users, 
    loading, 
    error, 
    createUser, 
    updateUser, 
    deleteUser 
  } = useUsers();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter users based on search term (name or email)
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleCreateUser = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
    }
  };

  const handleModalSubmit = async (formData) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id, formData);
      } else {
        await createUser(formData);
      }
      setIsModalOpen(false);
      setEditingUser(null);
    } catch (error) {
      console.error('Failed to save user:', error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  if (loading && users.length === 0) {
    return <div className="loading">Loading users...</div>;
  }

  return (
    <div className="user-list">
      <div className="list-header">
        <h2>Users</h2>
        <button 
          className="btn btn-primary" 
          onClick={handleCreateUser}
        >
          Add User
        </button>
      </div>

      <div className="list-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {error && (
        <div className="error">
          Error: {error}
        </div>
      )}

      {filteredUsers.length === 0 ? (
        <div className="empty-state">
          <h3>No users found</h3>
          <p>
            {users.length === 0 
              ? "Get started by adding your first user."
              : "Try adjusting your search."
            }
          </p>
        </div>
      ) : (
        <div className="users-grid">
          {filteredUsers.map(user => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
            />
          ))}
        </div>
      )}

      <UserModal
        isOpen={isModalOpen}
        user={editingUser}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default UserList;
