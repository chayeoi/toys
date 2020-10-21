import React from 'react'
import styles from './Dialog.module.css'

type Props = {
  correctAnswerIndex: number;
  score: number;
  selectedIndex: number | null;
  setNextStage(): void;
  setInitialStage(): void;
}

const Dialog = ({
  correctAnswerIndex,
  score,
  selectedIndex,
  setNextStage,
  setInitialStage,
}: Props) => (
    <div className={styles.wrapper}>
      {correctAnswerIndex === selectedIndex
        ? (
          <>
            <p className={styles.paragraph}>That's right!</p>
            <button
              type="button"
              className={styles.button}
              onClick={setNextStage}
            >
              Next color
            </button>
          </>
        )
        : (
          <>
            <p className={styles.paragraph}>Too bad :(</p>
            <p className={styles.score}>Score: {score}</p>
            <button
              type="button"
              className={styles.button}
              onClick={setInitialStage}
            >
              Play again
          </button>
          </>
        )}
    </div>
  )

export default Dialog
