import React from 'react';
import { GetProducts } from '../../lib/hooks/useProducts';

const HomePage: React.FC<any> = () => {
  const { productsData } = GetProducts(2, 2);

  console.log('PRODUCT: ', productsData);

  return (
    <React.Fragment>
      <div className="text-black">Home Page</div>
    </React.Fragment>
  );
};

export default HomePage;
