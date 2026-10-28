'use client'

import { Children, React, createContext } from "react"




export const ThemeContext = createContext(null)



export const ThemeProvider = () => {

    return (
        <ThemeContext.Provider value={ThemeContext}>
            {Children}
        </ThemeContext.Provider>

    )
}