import { Button } from "antd";
import MyCard from "../Card/MyCard";

import styles from "./Cards.module.scss";
import { AddToCart } from "../AddToCart/AddToCart";
import Pagination from "../Pagination/Pagination";
interface Card {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
interface Cards {
  products: Card[];
  total: number;
  skip: number;
  limit: number;
}

const getData = async (): Promise<Cards> => {
  // 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

  return fetch("https://dummyjson.com/products?limit=4", {
    // cache:'force-cache',
    // next:{
    //   revalidate,: 5
    //}
  }).then((response) => response.json());
};

const Cards = async ({  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  }}) => {

  const data = await getData();
  const totalPages = Math.floor(data.total / data.limit);

  return (
    <div className={styles.cards}>
      <AddToCart />
      {data.products.map((item) => (
        <MyCard
          key={item.id}
          image={item.images[0]}
          title={item.title}
          value={item.price}
        />
      ))}
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Cards;
