import React from 'react'
import styles from './Side.module.css'

const Side = ({ children, orientation }) => {
  return (
    <div
      className={
        orientation == 'left' ? styles.divDecorLeft : styles.divDecorRight
      }
    >
      <>{children}</>
    </div>
  )
}

export default Side
