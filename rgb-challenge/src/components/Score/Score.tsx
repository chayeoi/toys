import React from 'react'
import styles from './Score.module.css'

type Props = {
  score: number;
}

const Score = ({ score }: Props) => (
  <p className={styles.wrapper}>Score: {score}</p>
)

export default Score
