// context/themeContext.tsx
import * as React from 'react';
import { Theme, ThemeContextType } from '../@types/theme';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

interface Props {
    children: React.ReactNode;
}
const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [themeMode, setThemeMode] = React.useState<Theme>('light');
    return (
        <ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;