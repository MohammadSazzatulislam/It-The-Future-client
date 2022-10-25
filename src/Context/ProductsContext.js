import React from 'react';
import { createContext } from 'react';
import DataLoader from '../Loader/DataLoader';

export const AllProductsContext = createContext()

const ProductsContext = ({children}) => {

    const products  = DataLoader()

    return (
      <AllProductsContext.Provider value={products}>
        {children}
      </AllProductsContext.Provider>
    );
};

export default ProductsContext;