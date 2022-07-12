import React, { FC, ReactNode } from 'react';
import styles from './Wrapper.module.scss';

type PropsType = {
  children: ReactNode;
};

const Wrapper: FC<PropsType> = ({ children }): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
