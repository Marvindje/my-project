import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  const categories = ['Hommes', 'Femmes', 'Accessoires']; // Updated categories

  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-4 p-4 rounded shadow text-lg">
        {categories.map((category) => (
          <Link to={`/${category.toLowerCase()}`} key={category} className="font-semibold">
            <div>{category}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
