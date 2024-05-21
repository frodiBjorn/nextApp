'use client';
import { Button } from 'antd'
interface Card {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
interface Cards{
  products: Card[] 
}

const  updateProducts = async (): Promise<Card> => {
  return fetch('https://dummyjson.com/products/add',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "id": 0,
      "title": "iPhone 9999",
      "description": "An apple mobile which is nothing like apple",
      "price": 666,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    })
  }).then(response => response.json());
}

export const AddToCart = () => {

const update = async () => {
    updateProducts();
}    
  return (
        <Button type='primary' onClick={update}>
          add
        </Button>
  )
}
