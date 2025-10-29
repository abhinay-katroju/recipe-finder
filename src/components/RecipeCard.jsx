import React, { useState } from 'react'

const RecipeCard = ({ recipe }) => {
  const [imageError, setImageError] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-32 sm:h-48 bg-gradient-to-br from-orange-100 to-red-100">
        {!imageError ? (
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">🍽️</div>
              <p className="text-gray-500 text-xs sm:text-sm hidden sm:block">Image not available</p>
            </div>
          </div>
        )}
        
        <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <button
            onClick={toggleDetails}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-1 sm:p-2 shadow-lg transition-all"
            title="View details"
          >
            <svg
              className={`w-3 h-3 sm:w-5 sm:h-5 transition-transform ${showDetails ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-2 sm:p-4">
        <h3 className="font-bold text-xs sm:text-lg text-gray-800 mb-1 sm:mb-2 line-clamp-2 leading-tight">
          {recipe.strMeal}
        </h3>
        
        {showDetails && (
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
            <div className="space-y-2 text-xs sm:text-sm text-gray-600">
              <p><span className="font-medium">Recipe ID:</span> {recipe.idMeal}</p>
              
              <div className="flex gap-2 mt-3">
                <a
                  href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 sm:py-3 px-3 rounded-lg transition-colors font-medium text-xs sm:text-sm"
                >
                  View Full Recipe
                </a>
              </div>
            </div>
          </div>
        )}

        {!showDetails && (
          <div className="flex items-center justify-between mt-1 sm:mt-3">
            <button
              onClick={toggleDetails}
              className="text-orange-600 hover:text-orange-700 text-xs sm:text-sm font-bold bg-orange-50 px-2 py-1 rounded-md"
            >
              Details
            </button>
            <div className="text-xs text-gray-400 hidden sm:block">
              ID: {recipe.idMeal}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecipeCard