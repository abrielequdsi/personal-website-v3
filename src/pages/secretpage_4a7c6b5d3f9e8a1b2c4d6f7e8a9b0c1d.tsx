import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'

const SECRET_HASH = '4a7c6b5d3f9e8a1b2c4d6f7e8a9b0c1d'

const SecretPage: NextPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [noCount, setNoCount] = useState(0)

  useEffect(() => {
    // Check for the authentication flag in localStorage
    const isAuthenticated = localStorage.getItem('authenticated')
    if (isAuthenticated !== 'true') {
      // Redirect to the 404 page if the user is not authenticated.
      router.push('/404')
    } else {
      // User is authenticated; allow rendering the secret content.
      setLoading(false)
    }
  }, [router])

  if (loading) {
    return <p>Loading...</p>
  }

  // Build the confirmation message as a JSX element,
  // making each "really" bold.
  const confirmationMessage =
    noCount > 0 && (
      <span>
        Are you
        {Array.from({ length: noCount - 1 }, (_, i) => (
          <span key={i} className="font-bold"> REALLY</span>
        ))}
        {' sure?'}
      </span>
    )

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 flex flex-col items-center justify-center p-4 rounded-3xl mt-10">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-10 text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          {/* Row with left heart, image in the middle, and right heart */}
          <div className="flex items-center justify-center space-x-4">
            <svg
              className="w-24 h-24 text-red-500 animate-pulse"
              style={{ animationDuration: '3s' }}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <div className="w-24 h-24 rounded-full border-4 border-pink-500 shadow-lg overflow-hidden">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4E03AQErsGyQBWBaNA/profile-displayphoto-shrink_200_200/B4EZPrH5t4HsAY-/0/1734816539896?e=2147483647&v=beta&t=Wj0OD9FFr_R8Rh_CEJ8lWb2pdJLfpP4lm9d72RSM-wQ"
                alt="Girlfriend Picture"
                width={96}  // width in pixels
                height={96} // height in pixels
                className="rounded-full"
              />
            </div>
            <svg
              className="w-24 h-24 text-red-500 animate-pulse"
              style={{ animationDuration: '3s' }}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold text-pink-700 mt-4">
            Will you be my valentine?
          </h1>
        </div>
        <p className="text-lg text-gray-700 mb-8">
          You have unlocked this secret space filled with love and cute vibes.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {/* Yes Button with a gradient from pink-500 to pink-700 and a happy emoji */}
            <button
              onClick={() => router.push(`/secretpageyes_${SECRET_HASH}`)}
              className="px-6 py-3 bg-gradient-to-r from-pink-300 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-pink-600 hover:to-pink-800 transition duration-300"
            >
              Yes 😊
            </button>
            {/* No Button with a gradient from pink-600 to pink-800 and a sad emoji */}
            <button
              onClick={() => setNoCount(noCount + 1)}
              className="px-6 py-3 bg-gradient-to-r from-pink-300 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-pink-700 hover:to-pink-900 transition duration-300"
            >
              No 😢
            </button>
          </div>
          {noCount > 0 && (
            <p className="mt-4 text-lg text-pink-600">{confirmationMessage}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SecretPage
