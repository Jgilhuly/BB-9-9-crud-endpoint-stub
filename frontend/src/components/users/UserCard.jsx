import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(user);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <div className="user-card">
      <h3>{user?.name}</h3>
      <p className="email">{user?.email}</p>
      <p className="age">Age: {user?.age}</p>
      <div className="card-actions">
        <button 
          className="btn btn-primary btn-sm" 
          onClick={handleEdit}
        >
          Edit
        </button>
        <button 
          className="btn btn-danger btn-sm" 
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
