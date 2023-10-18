import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({item}) => {

    const { image, label, cuisineType, dietLabel, mealType, uri } = item.recipe

    const id = uri.split("#")[1]

    return (
        <>
            <Link to={`/recipe/${id}`} >
                <div className='block text-left cursor-pointer'>
                    <div className='bg-[var(--secondary-color)] inline-block py-4 px-4 rounded-md'>
                        <img className="rounded-md object-cover" src={image} alt={`${label} image`} />
                        <h4 className='text-xl font-semibold py-4 text-white'>{label}</h4>
                        <p className='text-sm text-[var(--text-color-light)]'>{mealType}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default RecipeCard
