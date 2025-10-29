import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-500 shadow-xl">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-6">
        <div className="text-center">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2 tracking-tight">
            🍽️ RECIPE FINDER
          </h1>
          <p className="text-orange-100 text-xs sm:text-base lg:text-lg font-medium">
            Find amazing recipes in seconds
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header