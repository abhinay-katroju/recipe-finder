import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-orange-400">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
            🍽️ Recipe Finder
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Discover delicious recipes for your next meal
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header