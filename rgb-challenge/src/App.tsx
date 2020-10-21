import React, { useCallback, useState } from 'react'
import styles from './App.module.css'
import { Dialog, Game, Heading } from './components'
import { createRGBCode, sampleIntLessThan } from './utils'

const App = () => {
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState(() => [
    { key: 0, color: createRGBCode() },
    { key: 1, color: createRGBCode() },
    { key: 2, color: createRGBCode() },
  ])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(() => sampleIntLessThan(3))

  const selectAnswer = useCallback((event) => {
    const { name } = event.target

    if (Number(name) === correctAnswerIndex) {
      setScore(prevScore => prevScore + 1)
      setSelectedIndex(Number(name))
    } else {
      setSelectedIndex(Number(name))
    }
  }, [correctAnswerIndex])

  const setNextStage = useCallback(() => {
    setAnswers([
      { key: 0, color: createRGBCode() },
      { key: 1, color: createRGBCode() },
      { key: 2, color: createRGBCode() },
    ])
    setCorrectAnswerIndex(sampleIntLessThan(3))
    setSelectedIndex(null)
  }, [])

  const setInitialStage = useCallback(() => {
    setAnswers([
      { key: 0, color: createRGBCode() },
      { key: 1, color: createRGBCode() },
      { key: 2, color: createRGBCode() },
    ])
    setCorrectAnswerIndex(sampleIntLessThan(3))
    setSelectedIndex(null)
    setScore(0)
  }, [])

  return (
    <div className={styles.wrapper}>
      <Heading />
      <Game
        answers={answers}
        correctAnswerIndex={correctAnswerIndex}
        score={score}
        selectAnswer={selectAnswer}
        selectedIndex={selectedIndex}
      />
      {selectedIndex !== null && (
        <Dialog
          score={score}
          correctAnswerIndex={correctAnswerIndex}
          selectedIndex={selectedIndex}
          setInitialStage={setInitialStage}
          setNextStage={setNextStage}
        />
      )}
    </div>
  )
}

export default App
