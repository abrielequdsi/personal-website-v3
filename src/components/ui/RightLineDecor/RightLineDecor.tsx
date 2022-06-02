import React from 'react'
import { Side } from '@components/ui'
import styles from './RightLineDecor.module.css'

const RightLineDecor = (): JSX.Element => {
  return (
    <Side orientation="right">
      <div className={styles.divDecor}>
        <a href="mailto:web.qudsi@gmail.com">web.qudsi@gmail.com</a>
      </div>
    </Side>
  )
}

export default RightLineDecor
