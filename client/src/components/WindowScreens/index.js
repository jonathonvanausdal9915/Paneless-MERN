import './index.scss';
import Loader from 'react-loaders';
import React, { useState } from 'react';


import CategoryMenu from '../../components/CategoryMenu';
import ProductList from '../../components/ProductList';
import Cart from '../../components/Cart';

const Screens = () => {
 
    return ( <>
    <div className="box">
    <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
    <Loader type="ball-rotate" />
  </>
    )
}
export default Screens