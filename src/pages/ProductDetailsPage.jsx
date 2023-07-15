import React from 'react';

// Importer les images
import image1 from '../assets/images projet 1 /ali-muhamad-hT1R6Z5pY5I-unsplash.jpg';
import image2 from '../assets/images projet 1 /chase-charaba-3JAOcgZ_ZXU-unsplash.jpg';
import image3 from '../assets/images projet 1 /haryo-setyadi-acn5ERAeSb4-unsplash.jpg';

const categories = [
  { id: 1, name: 'Category 1', image: image1 },
  { id: 2, name: 'Category 2', image: image2 },
  { id: 3, name: 'Category 3', image: image3 },
];

const ProductCategories = () => {
  return (
    <div>
      <h2>Product Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map(category => (
          <div key={category.id} className="text-center">
            <img src={category.image} alt={category.name} className="w-32 h-32 object-cover mb-2" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
