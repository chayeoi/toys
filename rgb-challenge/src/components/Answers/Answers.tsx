import React from 'react'
import classnames from 'classnames/bind'
import styles from './Answers.module.css'

type Props = {
  answers: { key: number; color: string; }[];
  selectAnswer(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  selectedIndex: number | null;
}

const cx = classnames.bind(styles)

const Answers = ({ answers, selectAnswer, selectedIndex }: Props) => (
  <ul className={styles.answers}>
    {answers.map(answer => (
      <li
        key={answer.key}
        className={cx('answer', { selected: selectedIndex === answer.key })}
        style={{ backgroundColor: answer.color }}
      >
        <button
          type="button"
          name={String(answer.key)}
          className={cx('button', { selected: selectedIndex === answer.key })}
          onClick={selectAnswer}
        />
      </li>
    ))}
  </ul>
)

export default Answers
