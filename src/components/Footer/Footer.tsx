import React from 'react'

import styles from './Footer.module.scss';

interface Props {
  className: string;
}

const Footer = ({className}: Props) => {
  return <div className={`${styles.footer} ${className}`}>© Frontenders 2024 Все права защищены.</div>
  
}
Footer
export default Footer