import React from 'react'
import styles from './ColorCode.module.css'

type Props = {
  answer: {
    key: number;
    color: string;
  };
}

const ColorCode = ({ answer }: Props) => (
  <p className={styles.wrapper}>{answer.color}</p>
)

export default ColorCode
