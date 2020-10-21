import React from 'react'
import styles from './Game.module.css'
import Answers from '../Answers'
import Score from '../Score'
import ColorCode from '../ColorCode'

type Props = {
  answers: { key: number; color: string; }[];
  correctAnswerIndex: number;
  score: number;
  selectAnswer(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  selectedIndex: number | null;
}

const Game = ({
  answers,
  correctAnswerIndex,
  score,
  selectAnswer,
  selectedIndex,
}: Props) => (
  <div className={styles.wrapper}>
    <Score score={score} />
    <div className={styles.centered}>
      <ColorCode answer={answers[correctAnswerIndex]} />
      <Answers
        answers={answers}
        selectAnswer={selectAnswer}
        selectedIndex={selectedIndex}
      />
    </div>
  </div>
)

export default Game
