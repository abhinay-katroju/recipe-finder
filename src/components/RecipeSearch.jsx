import React, { useState } from 'react'

const RecipeSearch = ({ onRecipesFound, onError, onLoading }) => {
  const [searchType, setSearchType] = useState('ingredient')
  const [searchQuery, setSearchQuery] = useState('')

  const searchOptions = [
    { value: 'ingredient', label: 'By Ingredient', placeholder: 'e.g., chicken, mushroom, tomato' },
    { value: 'category', label: 'By Category', placeholder: 'e.g., Dessert, Seafood, Vegetarian' },
    { value: 'area', label: 'By Cuisine', placeholder: 'e.g., Italian, Chinese, Mexican' }
  ]

  const popularIngredients = ['chicken', 'mushroom', 'salmon', 'pasta', 'rice', 'tomato', 'cheese', 'garlic']
  const popularCategories = ['Dessert', 'Seafood', 'Vegetarian', 'Breakfast', 'Chicken', 'Pasta']
  const popularAreas = ['Italian', 'Chinese', 'Mexican', 'Indian', 'French', 'Thai']

  const getPopularItems = () => {
    switch (searchType) {
      case 'ingredient': return popularIngredients
      case 'category': return popularCategories
      case 'area': return popularAreas
      default: return []
    }
  }

  const handleSearch = async (query = searchQuery) => {
    if (!query.trim()) {
      onError('Please enter a search term')
      return
    }

    onLoading(true)
    onError('')

    try {
      let url
      switch (searchType) {
        case 'ingredient':
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`
          break
        case 'category':
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(query)}`
          break
        case 'area':
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(query)}`
          break
        default:
          throw new Error('Invalid search type')
      }

      const response = await fetch(url)
      const data = await response.json()

      if (data.meals && data.meals.length > 0) {
        onRecipesFound(data.meals)
      } else {
        onError(`No recipes found for "${query}". Try a different search term.`)
      }
    } catch (error) {
      console.error('Search error:', error)
      onError('Failed to fetch recipes. Please check your internet connection and try again.')
    } finally {
      onLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  const handleQuickSearch = (item) => {
    setSearchQuery(item)
    handleSearch(item)
  }

  return (
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-3 sm:p-6 lg:p-8 mb-4 sm:mb-8 mx-1 sm:mx-0">
      <div className="max-w-2xl mx-auto">
        {/* Search Type Selector */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
            Choose Search Type
          </label>
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {searchOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSearchType(option.value)
                  setSearchQuery('')
                }}
                className={`p-2 sm:p-4 rounded-md sm:rounded-lg border-2 transition-all text-xs sm:text-base font-medium ${
                  searchType === option.value
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 hover:border-orange-300 text-gray-600'
                }`}
              >
                <span className="block sm:hidden">{option.label.split(' ')[1]}</span>
                <span className="hidden sm:block">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mb-4 sm:mb-6">
          <div className="space-y-2 sm:space-y-0 sm:flex sm:gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${searchOptions.find(opt => opt.value === searchType)?.label.toLowerCase()}...`}
              className="w-full px-3 sm:px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-sm sm:text-lg"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-4 sm:px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-bold text-sm sm:text-lg"
            >
              🔍 SEARCH
            </button>
          </div>
        </form>

        {/* Quick Search Options */}
        <div>
          <p className="text-xs sm:text-sm font-bold text-gray-800 mb-2 sm:mb-3">
            🔥 Quick Search:
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1 sm:gap-2">
            {getPopularItems().map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleQuickSearch(item)}
                className="px-2 sm:px-3 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-lg hover:from-orange-200 hover:to-red-200 transition-all text-xs sm:text-sm font-bold border border-orange-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeSearch