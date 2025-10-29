import { useState } from 'react'
import RecipeSearch from './components/RecipeSearch'
import RecipeCard from './components/RecipeCard'
import Header from './components/Header'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleRecipesFound = (foundRecipes) => {
    setRecipes(foundRecipes)
    setError('')
  }

  const handleError = (errorMessage) => {
    setError(errorMessage)
    setRecipes([])
  }

  const handleLoading = (isLoading) => {
    setLoading(isLoading)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Header />
      
      <main className="container mx-auto px-1 sm:px-4 py-2 sm:py-8 max-w-7xl">
        <RecipeSearch 
          onRecipesFound={handleRecipesFound}
          onError={handleError}
          onLoading={handleLoading}
        />
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-3 rounded-lg mt-4 sm:mt-6 text-center mx-2 sm:mx-0 text-sm sm:text-base">
            {error}
          </div>
        )}
        
        {loading && (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-block animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-orange-500"></div>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">Finding delicious recipes...</p>
          </div>
        )}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-6 mt-4 sm:mt-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
        
        {recipes.length === 0 && !loading && !error && (
          <div className="text-center py-8 sm:py-12 px-4">
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🍳</div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">Ready to Cook?</h2>
            <p className="text-gray-500 text-sm sm:text-base">Search for recipes by ingredient, category, or area to get started!</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
