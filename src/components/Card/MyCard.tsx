import { Card } from 'antd';
import Image from 'next/image'
import { MyCardProps } from './model';
import { ShoppingCartOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons';

import styles from './MyCard.module.scss';



const MyCard = ({image, title, value}: MyCardProps) => {
  return (
  <div className={styles.wrapper}>
      <Card
      className={styles.card}
      title={title}
      hoverable={true}
      cover={
        <Image
          className={styles.img}
          width={250}
          height={250}
          alt="image"
          src={image}
        />

      }
    >
      <div className={styles.actions}>
          <ShoppingCartOutlined  key='cart'/>
          <HeartOutlined key='favourite'/>
          <SearchOutlined  key = 'search'/>
      </div>
      <p className={styles.value}>${value}</p>
    </Card>
  </div>
  )
}

export default MyCard