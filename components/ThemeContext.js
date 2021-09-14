import React, { useContext, useState, useEffect } from "react";
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const [activeProject, setActiveProject] = useState(null);
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [searchLoading, setSearchLoading] = useState(false);

    return (
        <ThemeContext.Provider
            value={{
                projects,
                setProjects,
                menuOpen,
                setMenuOpen,
                activeProject,
                setActiveProject,
                categories,
                setCategories,
                page,
                setPage,
                searchLoading,
                setSearchLoading,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
