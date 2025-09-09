import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(product);
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="product-card">
      <h3>{product?.name}</h3>
      <p className="description">{product?.description}</p>
      <div className="product-details">
        <p className="price">${product?.price}</p>
        {product?.category && (
          <p className="category">{product.category}</p>
        )}
      </div>
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

export default ProductCard;
