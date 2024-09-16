import React from 'react';
import '../styles/productCard.css'; // Atualize o caminho do arquivo CSS

interface ProductCardProps {
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description }) => {
  return (
    <div className="product-card">
      <div className="icon">
        {/* Certifique-se de ajustar o caminho do ícone corretamente */}
        <img src="/src/assets/icon.svg" alt="Ícone do Produto" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
