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
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 mx-2 sm:mx-0">
      <div className="max-w-2xl mx-auto">
        {/* Search Type Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Search Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {searchOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSearchType(option.value)
                  setSearchQuery('')
                }}
                className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-sm sm:text-base font-medium ${
                  searchType === option.value
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 hover:border-orange-300 text-gray-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchOptions.find(opt => opt.value === searchType)?.placeholder}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-base sm:text-lg"
            />
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-base sm:text-lg w-full sm:w-auto"
            >
              🔍 Search
            </button>
          </div>
        </form>

        {/* Quick Search Options */}
        <div>
          <p className="text-xs sm:text-sm font-medium text-gray-700 mb-3">
            Popular {searchOptions.find(opt => opt.value === searchType)?.label.toLowerCase()}:
          </p>
          <div className="flex flex-wrap gap-2">
            {getPopularItems().map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleQuickSearch(item)}
                className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-orange-100 hover:text-orange-700 transition-colors text-xs sm:text-sm font-medium"
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