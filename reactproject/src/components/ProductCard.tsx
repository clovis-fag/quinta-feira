import React from 'react';
import '../styles/productCard.css';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon }) => {
  return (
    <div className="product-card">
      <div className="icon">
        <img src={icon} alt={`${title} ícone`} width="50" height="50" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
