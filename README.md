# Recipe Finder - Take-Home Challenge Submission

## 🍽️ Overview

Recipe Finder is a modern React web application designed for **Taylor**, a busy professional who wants quick and efficient recipe discovery based on available ingredients, food categories, or cuisines. This project was developed as part of a take-home challenge to demonstrate full-stack development skills using React and public APIs.

## 👨‍💼 User Persona & Need

**Name:** Taylor  
**Occupation:** Busy Professional  
**Need:** Taylor wants help in the kitchen when he comes home. He needs to find recipes based on:
- Available ingredients he has at home
- What he's in the mood for
- Time available for cooking
- Dietary preferences or restrictions

## 🚀 Live Demo

**Local Development:** `http://localhost:5173`  
**GitHub Repository:** https://github.com/abhinay-katroju/recipe-finder  
**Live Deployment:** [Will be added after deployment]

## ✨ Features

### 🔍 Multi-Search Functionality
- **By Ingredient:** Find recipes using ingredients you have at home
- **By Category:** Browse recipes by meal type (Dessert, Seafood, Vegetarian, etc.)
- **By Cuisine:** Explore recipes from different cultures (Italian, Chinese, Mexican, etc.)

### 🎯 User Experience
- **Quick Search Buttons:** Popular ingredients, categories, and cuisines for instant access
- **Smart Suggestions:** Curated lists of popular options to inspire cooking
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices
- **Loading States:** Visual feedback during API requests
- **Error Handling:** User-friendly error messages for failed requests or no results

### 🎨 Design & Interface
- **Modern UI:** Clean, intuitive interface with Tailwind CSS
- **Recipe Cards:** Beautiful cards with recipe images and expandable details
- **Gradient Background:** Appealing orange-to-red gradient theme
- **Interactive Elements:** Hover effects and smooth transitions

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.2.0** - Modern React with hooks for state management
- **Vite 4.4.5** - Fast build tool and development server

### Styling
- **Tailwind CSS 3.3.0** - Utility-first CSS framework for responsive design
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility

### API Integration
- **TheMealDB API** - Free recipe database with rich meal data
  - Ingredient search: `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`
  - Category search: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
  - Area search: `https://www.themealdb.com/api/json/v1/1/filter.php?a={area}`

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Node.js 20.11.0** - Runtime environment

## 📁 Project Structure

```
recipe-finder/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header with branding
│   │   ├── RecipeSearch.jsx    # Search interface with multiple options
│   │   └── RecipeCard.jsx      # Individual recipe display cards
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Custom styles
│   ├── index.css               # Tailwind directives
│   └── main.jsx                # Application entry point
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 20.11.0 or higher
- npm 10.2.4 or higher
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhinay-katroju/recipe-finder.git
   cd recipe-finder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎮 Usage Guide

### Getting Started
1. **Choose Search Type:** Select from "By Ingredient", "By Category", or "By Cuisine"
2. **Enter Search Term:** Type your search query or click a quick suggestion button
3. **Browse Results:** View recipe cards with images and basic information
4. **View Details:** Click "View Details" to expand recipe information and access full recipe links

### Search Examples

**By Ingredient:**
- "chicken" - Find chicken-based recipes
- "mushroom" - Discover mushroom dishes
- "tomato" - Explore tomato recipes

**By Category:**
- "Dessert" - Sweet treats and desserts
- "Vegetarian" - Plant-based meals
- "Breakfast" - Morning meal ideas

**By Cuisine:**
- "Italian" - Pasta, pizza, and Italian classics
- "Chinese" - Stir-fries and Asian flavors
- "Mexican" - Tacos, enchiladas, and spicy dishes

## 🔧 Architecture & Design Decisions

### Component Architecture
- **Header:** Simple, clean branding component
- **RecipeSearch:** Complex search interface with state management
- **RecipeCard:** Reusable card component with image fallback handling
- **App:** Main container managing global state and API communication

### State Management
- React's built-in `useState` hooks for local state management
- Props drilling for parent-child communication
- Centralized error and loading state management

### API Integration
- Fetch API for HTTP requests
- Error handling for network failures and empty results
- Loading states for better user experience

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Grid layouts that adapt to screen size
- Touch-friendly buttons and interface elements

## 🧪 Testing & Quality Assurance

### Manual Testing Completed
- ✅ Search functionality across all three types
- ✅ Quick suggestion buttons
- ✅ Error handling for invalid searches
- ✅ Loading states during API calls
- ✅ Responsive design on multiple screen sizes
- ✅ Image fallback handling
- ✅ Recipe card expand/collapse functionality

### Error Scenarios Handled
- Network connection failures
- API endpoint unavailability
- Empty search results
- Invalid search parameters
- Image loading failures

## 🚀 Deployment Options

### Recommended Platforms
1. **Vercel** - Optimal for React/Vite projects
2. **Netlify** - Easy deployment with drag-and-drop
3. **GitHub Pages** - Free hosting for GitHub repositories

### Build for Production
```bash
npm run build
```
This creates a `dist/` folder with optimized production files.

## 📋 Take-Home Challenge Requirements Met

### ✅ Level 1 (50%) - Working with AI
- Developed with AI assistance for problem-solving and implementation
- GitHub Copilot used throughout development process

### ✅ Level 2 (30%) - Working Application
- Fully functional Recipe Finder application
- All core features implemented and tested
- Ready for deployment to hosting platforms

### ✅ Level 3 (20%) - Code Sharing
- Complete source code with comprehensive documentation
- Clear setup instructions and usage guide
- Well-structured codebase with comments

## 🎯 User Need Fulfillment

**Taylor's Requirements Addressed:**
- ✅ **Ingredient-based search** - Find recipes with available ingredients
- ✅ **Mood-based discovery** - Browse by food categories and cuisines
- ✅ **Time-efficient interface** - Quick search suggestions and clean UI
- ✅ **Comprehensive options** - Multiple search methods for different needs

## 🔄 Future Enhancements

- Recipe favorites and bookmarking
- Nutritional information display
- Cooking time and difficulty filters
- Recipe rating and reviews
- Shopping list generation
- User accounts and personalization

## 👨‍💻 Developer

**Abhinay Katroju**  
**GitHub:** https://github.com/abhinay-katroju  
**Project Repository:** https://github.com/abhinay-katroju/recipe-finder

## 📄 License

This project is part of a take-home challenge submission.

---

*Last Updated: October 29, 2025*
