import { createContext,useContext } from "react";

//Step1: create context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () => {}
})

// Step2: instantiate context provider
export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}