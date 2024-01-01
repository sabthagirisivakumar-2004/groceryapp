import React, { useState } from 'react';

const GroceryStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    // You can add additional logic here based on the selected category
  };

  return (
    <div>
      

      <div>
        
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="Filter">Filter</option>
          <option value="Low To High">Low To High</option>
          <option value="High To Low">High To Low</option>
          <option value="Top Brands">Top Brands</option>
          <option value="Top Rating">Top Rating</option>
          {/* Add more options as needed */}
        </select>
      </div>

     
      
    </div>
  );
};

export default GroceryStore;
