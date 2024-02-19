"use client";

import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  img: string;
  decs: string;
}

interface ProductSelectionProps {
  products: Product[];
}

const ProductSelection: React.FC<ProductSelectionProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderedProducts, setOrderedProducts] = useState<Product[]>([]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      setOrderedProducts(prevProducts => [...prevProducts, selectedProduct]);
      setSelectedProduct(null); // Reset selectedProduct after adding to cart
    }
  };

  return (
    <div className='flex'>
      {products.map((product, index) => (
        <div key={index} onClick={() => handleProductClick(product)}>
          <p>{product.name}</p>
          <p><img src={product.img} alt={product.name} style={{ maxWidth: '100px' }} /></p>
          <p>{product.decs}</p>
        </div>
      ))}
      {selectedProduct && (
        <AddToCartPopup
          product={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}
      <OrderTable orderedProducts={orderedProducts} />
    </div>
  );
};

interface AddToCartPopupProps {
  product: Product;
  onAddToCart: () => void;
}

const AddToCartPopup: React.FC<AddToCartPopupProps> = ({ product, onAddToCart }) => {
  return (
    <div>
      <p>{product.name}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

interface OrderTableProps {
  orderedProducts: Product[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orderedProducts }) => {
  return (
    <div className='mt-[50px] ml-[300px]'>
      <h2>Order Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hinh</th>
            <th>Mo Ta</th>
          </tr>
        </thead>
        <tbody>
          {orderedProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td><img src={product.img} alt={product.name} style={{ maxWidth: '100px' }} /></td>
              <td>{product.decs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'kep toc', img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lr3tzi37p09ld1', decs:'day la san pham 1'},
    { id: 2, name: 'day thun', img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', decs:'day la san pham 1' },
    // Thêm các sản phẩm khác
  ];

  return (
    <div>
      <ProductSelection products={products} />
    </div>
  );
};

export default App;
