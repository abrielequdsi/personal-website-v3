import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from '@components/common'
import { useRouter } from 'next/router'
import { Loader } from '@components/ui'
import styles from './Layout.module.css'

type LayoutProps = {
  children: React.ReactNode;
};


const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading && isHome ? (
      <Loader />
    ) : (
      <div className={styles.fadeIn}>
        <div className="relative bg-whiteoverflow-hidden">
          <div className="relative pt-6 sm:pt-8 md:pt-8 ">
            <Navbar />
            <main className="mx-auto max-w-7xl px-6 xs:px-10 sm:px-10 md:px-32 ">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    )}
    
  </>
  );
}

export default Layout
