import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const YeayPage: NextPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

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

  // Increase the number of hearts to 100 for extra love!
  const heartsArray = Array.from({ length: 100 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    angle: Math.random() * 360,
    size: 24 + Math.random() * 24, // size between 24px and 48px
    delay: Math.random() * 5, // random delay in seconds
    duration: 3 + Math.random() * 3, // random duration between 3s and 6s
  }))

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 flex items-center justify-center overflow-hidden rounded-3xl mt-10">
      {/* Render more moving love hearts */}
      {heartsArray.map((heart, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animation: `float ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <svg
            className="text-red-500"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              opacity: 0.7,
              transform: `rotate(${heart.angle}deg)`,
            }}
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
      ))}
      {/* Main card */}
      <div className="z-10 bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 text-center">
        <h1 className="text-6xl font-extrabold text-pink-700 mb-4">YEAYYY!</h1>
        <p className="text-xl text-gray-700">Lots of love for you!</p>
        <a
          href="https://www.youtube.com/watch?v=jAtSn39THdo" // Replace with your desired YouTube URL
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          Open This
        </a>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}

export default YeayPage
