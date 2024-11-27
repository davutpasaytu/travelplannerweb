import React, { useState } from 'react';
import axios from 'axios';
 
const CatComponent = () => {
  const [catImage, setCatImage] = useState(null);
 
  const fetchCat = async () => {
    try {
      const response = await axios.get('http://localhost:5001/cat');
      setCatImage(response.data);
    } catch (error) {
      console.error('Kedi resmi yüklenirken hata oluştu:', error);
    }
  };
 
  return (
<div>
<h1>Kedi Resmi</h1>
<button onClick={fetchCat}>Kedi Getir</button>
      {catImage && <img src={`https://cataas.com/cat/${catImage._id}?position=center`} alt="Kedi" />}
</div>
  );
};
 
export default CatComponent;