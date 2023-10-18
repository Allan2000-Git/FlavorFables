import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="w-full h-[90x] py-4 bg-[var(--background-color)] text-white sticky top-0">
                <div className="max-w-[1120px] mx-auto flex items-center justify-between">
                    <div className="flex items-center justify-center space-x-2">
                        <figure className="w-[120px]">
                            <img className="rounded-lg" src="../src/assets/FlavorFables-logos_transparent.png" alt="FlavorFables logo" />
                        </figure> 
                    </div>
                    <div>
                        <ul className="flex items-center justify-center space-x-8 text-[1.1rem]">
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/explore">
                                    Explore
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
