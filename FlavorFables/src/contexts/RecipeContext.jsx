import {createContext, useContext, useState} from 'react'

const RecipeContext = createContext();

export const RecipeContextProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [limit, setLimit] = useState(20)
    const [searchInput, setSearchInput] = useState("Chicken");

    const fetchData = async (query) => {
        const REACT_APP_EDAMAM_APP_ID = "75ee2d72"
        const REACT_APP_EDAMAM_API_KEY = "f779d4a7076748c9827cbf91bba7228c"

        const url = `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_EDAMAM_APP_ID}&app_key=${REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}`;
        
        setIsLoading(true)

        try {
            const response = await fetch(`${url}`);

            const result = await response.json();
            
            setData(result.hits)
            setIsLoading(false)

            setSearchInput("")

            // console.log(data);

        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }

    return(
        <RecipeContext.Provider value={{data, fetchData, searchInput, setSearchInput, isLoading, limit, setLimit}}>
        {children}
        </RecipeContext.Provider>
    )
    
}

export const useRecipeContext = () =>{
    return useContext(RecipeContext)
}