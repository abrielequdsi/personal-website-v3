import React, { useState, useEffect } from 'react'
import styles from './Loader.module.css'
import Image from 'next/image'

const Loader = () => {
  const [fading, setFading] = useState(0)

  useEffect(() => {
    setTimeout(() => setFading(1), 500)
  }, [])

  return (
    <div className={fading && styles.loaderHidden}>
      <div
        className={'bg-vampire-black h-screen flex justify-center items-center'}
      >
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <Image
              className="animate-pulse"
              src="/main_logo.svg"
              width={72.5}
              height={72.5}
            />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Loader
