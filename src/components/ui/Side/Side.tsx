import React from 'react'
import styles from './Side.module.css'

type SideProps = {
  children: React.ReactNode,
  orientation: string
}

const Side = ({ children, orientation }: SideProps) => {
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
