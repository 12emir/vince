import React, { useContext, useState, useEffect } from "react";
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <ThemeContext.Provider
            value={{
                menuOpen,
                setMenuOpen,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
