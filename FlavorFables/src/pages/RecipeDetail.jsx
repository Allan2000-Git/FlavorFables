import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useRecipeContext } from '../contexts/RecipeContext';
import {AiFillPushpin} from 'react-icons/ai'

const RecipeDetail = () => {

    const [recipe, setRecipe] = useState("")
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    const fetchRecipe = async(id) => {
      const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=75ee2d72&app_key=f779d4a7076748c9827cbf91bba7228c        `
      
      setLoading(true)

      try {
          const response = await fetch(url)
          const data = await response.json();

          setRecipes(data.recipe)
          setLoading(false)

          console.log(recipes);
      } catch (error) {
          setLoading(false)
          console.log(error);
        }
      }

    useEffect(() => {
      console.log(id);
      fetchRecipe(id)
    }, [id])

    return (
      <>
        <div className="w-full h-[90x] py-4 bg-[var(--background-color)] text-white my-10">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-3 items-center">
            <figure>
              <img className="rounded-md" src={recipes.image} alt={`${recipes.label} recipe image`} />
            </figure>
            <div className="space-y-14">
              <h1 className="text-4xl">{recipes.label}</h1>
              <div className="flex gap-x-2">
                <span className="recipe">{ recipes.cuisineType } </span>
                <span className="recipe">{ recipes.mealType }</span> 
                <span className="recipe">{ recipes.dishType }</span>
                <span className="recipe">{ recipes.dietLabels }</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center space-y-4">
                  <h2 className="values">{Math.round(recipes.calories)}</h2>
                  <p className="text-[var(--text-color-light)]">Calories</p>
                </div>
                <div className="text-center space-y-4">
                  <h2 className="values">{Math.round(recipes.totalWeight)}</h2>
                  <p className="text-[var(--text-color-light)]">Total Weight</p>
                </div>
                <div className="text-center space-y-4">
                  <h2 className="values">{recipes.totalTime ? Math.round(recipes.totalTime) : "MAGIC"}</h2>
                  <p className="text-[var(--text-color-light)]">Total Time (mins)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default RecipeDetail
