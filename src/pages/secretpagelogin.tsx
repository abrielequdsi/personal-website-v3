import React, { useState } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Link from 'next/link'

const SECRET_HASH = '4a7c6b5d3f9e8a1b2c4d6f7e8a9b0c1d'
const SECRET_PASS = 'kubethecat169'

const SecretPageLogin: NextPage = () => {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Hardcoded password; change this value as needed.
    if (password === SECRET_PASS) {
      // Set an authentication flag in localStorage
      localStorage.setItem('authenticated', 'true')
      router.push(`/secretpage_${SECRET_HASH}`)
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  return (
    <div className="max-w-md mx-auto py-20">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="text-3xl font-bold text-center mb-6">Secret Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs italic mb-4">{error}</p>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4 text-center">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-700">Go back home</a>
        </Link>
      </div>
    </div>
  )
}

export default SecretPageLogin
