
'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming your custom card component path
import Image from 'next/image';
interface Product {
  id: number;
  title: string;
  price: number; 
  description: string;
  category: string;
  image: string; 
  rating: { rate: number; count: number }; 
}

function Box(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json() as Product[];
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" grid grid-rows-1 sm:grid-cols-4 lg:grid-rows-3 gap-2 p-3 m-3 h-auto">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.category}</CardDescription>
          </CardHeader>
          <CardContent>
            {/* <p>{product.description}</p> */}
            <Image
            src={product.image}
              alt={`${product.title}-cover`}
              width={500}
              height={600}
            />
            {/* Add image and price display if available in your API response
            {product.image && <img src={product.image} alt={product.title} />}
            {product.price && <p>Price: ${product.price.toFixed(2)}</p>} */}
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
            {/* Optionally display rating information if available */}
            {product.rating && (
              <p>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Box;
