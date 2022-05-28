import React from 'react'
import { Side } from '@components/ui'
import styles from './RightLineDecor.module.css'

const RightLineDecor = () => {
  return (
    <Side orientation="right">
      <div className={styles.divDecor}>
        <a href="#">web.qudsi@gmail.com</a>
      </div>
    </Side>
  )
}

export default RightLineDecor
