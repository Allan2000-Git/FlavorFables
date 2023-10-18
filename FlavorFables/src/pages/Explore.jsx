import React, { useEffect, useState } from 'react'
import { useRecipeContext } from '../contexts/RecipeContext';
import {FiSearch} from 'react-icons/fi'
import RecipeCard from '../components/RecipeCard';
import {BeatLoader} from 'react-spinners'

const Explore = () => {
    const {data, fetchData, searchInput, setSearchInput, isLoading, limit, setLimit} = useRecipeContext();

    // console.log(data);

    
    const handleSearchedRecipe = (e) => {
        e.preventDefault()
        fetchData(searchInput)
    }
    
    const showMore = () => {
        setLimit(prev + 10)
        fetchData(searchInput)
    }
    
    useEffect(() => {
        fetchData(searchInput)
        setSearchInput("")
    }, [])


    
    return (
        <>
            <div className="w-full h-full bg-[var(--background-color)] mt-12">
                <div className="max-w-[1120px] mx-auto">
                    <form onSubmit={handleSearchedRecipe} className="flex items-center justify-center space-x-4 max-w-[500px]">
                        <input
                        className="input placeholder:text-[var(--text-color)] placeholder:text-[1rem] "
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="eg. Salad, Noodles, Chicken"
                        />
                        <button className="bg-[var(--primary-color)] text-white h-[50px] py-2 px-3 text-[1.1rem] rounded-md" type="submit"><FiSearch size="25px" /></button>
                    </form>
                    {
                        isLoading ?
                            (
                                <>
                                    <div className="text-center my-8">
                                        <BeatLoader color="var(--primary-color)" />
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                    <div className="my-8">
                                        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
                                        {
                                            data.map((item, index)=>{
                                                console.log(item.recipe);
                                                return(
                                                    <RecipeCard item={item} key={index} />
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        <div className="text-center my-8 text-white">
                            <button onClick={showMore} className="bg-[var(--primary-color)] px-6 py-3 rounded-md text-[1.1rem]" type="button">See more</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Explore
