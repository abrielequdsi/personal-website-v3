import { useState, useEffect } from 'react'
import { Navbar, Footer } from '@components/common'
import { useRouter } from 'next/router'
import { Loader } from '@components/ui'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
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
                {/* px-4 max-w-7xl mx-auto sm:px-6 md:px-14 */}
                {/* px-4 max-w-2xl mx-auto sm:px-6 lg:px-8 lg:max-w-7xl */}
                {/* px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 */}
                {/* max-w-4xl */}
                {/* px-4 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 */}
                {/* px-4 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 */}
                {/* max-w-4xl */}

                {children}
              </main>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Layout
