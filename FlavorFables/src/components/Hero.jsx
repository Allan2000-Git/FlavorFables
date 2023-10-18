import React from 'react'
import {GiCampCookingPot} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className="w-full h-[90vh] bg-[var(--background-color)] text-white">
                <div className="max-w-[1120px] mx-auto flex items-center justify-between">
                    <div className="flex flex-col justify-center h-[80vh] gap-y-14">
                        <h1 className="text-5xl"><span className="text-[var(--primary-color)]">FlavorFables</span> - Your Culinary Journey Starts Here</h1>
                        <h2 className="text-2xl">Explore, Create, Share: Your Flavorful Journey</h2>
                        <div className="space-x-6">
                            <Link to="/explore"><button className="bg-[var(--primary-color)] px-6 py-3 rounded-md text-[1.1rem]" type="button">Explore Meals</button></Link>
                            <button className="bg-[var(--secondary-color)] px-6 py-3 rounded-md text-[1.1rem]" type="button">Saved Meals</button>
                        </div>
                    </div>
                    <div>
                        <figure className="w-[480px]">
                            <img src="../src/assets/Recipe book-pana.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[var(--text-color-light)]">
                    <p>FlavorFables: Where Dishes Dance and Jokes Spice Things Up!</p>
                    <p>{<GiCampCookingPot size="30px" color="var(--primary-color)" />}</p>
                </div>
            </div>
        </>
    )
}

export default Hero
