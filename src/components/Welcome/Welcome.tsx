import classNames from 'classnames';

import styles from "./Welcome.module.scss";

interface Props {
  className: string
}

const Welcome = ({className} : Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.info}>
        <h2>Welcome to our store</h2>
        <h1>
          Let`s make a better <span>life</span>
        </h1>
        <p>bla bla bla</p>
      </div>
    </div>
  );
};

export default Welcome;
