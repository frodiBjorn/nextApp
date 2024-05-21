import { Button } from 'antd';
import MyCard from '../Card/MyCard'

import styles from './Cards.module.scss';
import { AddToCart } from '../AddToCart/AddToCart';
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

 const  getData = async (): Promise<Cards> => {
  return fetch('https://dummyjson.com/products',{
    // cache:'force-cache',
    next:{
      revalidate: 5
    }
  }).then(response => response.json());
}



const Cards = async () => {
  const data = await getData();


  
  return (
    <div className={styles.cards}>
      <AddToCart />
        { data.products.map(item => (

            <MyCard 
                key={item.id}
                image={item.images[0]}
                title={item.title}
                value={item.price}
            />
            ))
        }

    </div>
  )
}

export default Cards