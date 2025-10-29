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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <RecipeSearch 
          onRecipesFound={handleRecipesFound}
          onError={handleError}
          onLoading={handleLoading}
        />
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-6 text-center">
            {error}
          </div>
        )}
        
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <p className="mt-4 text-gray-600">Finding delicious recipes...</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
        
        {recipes.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍳</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ready to Cook?</h2>
            <p className="text-gray-500">Search for recipes by ingredient, category, or area to get started!</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
