import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function DarkModeProvider({ children }) {
    const [darkTheme, setDarkModeTheme] = useState(true);

    function toggleTheme() {
        setDarkModeTheme((prev) => !prev);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}
