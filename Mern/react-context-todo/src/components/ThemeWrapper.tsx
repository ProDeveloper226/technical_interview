import React from 'react';
import { ThemeContextType, Theme } from '../@types/theme';
import { ThemeContext } from '../context/themeContext';

interface Props {
    children: React.ReactNode;
}

const ThemeWrapper: React.FC<Props> = ({ children }) => {
    const { theme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType;
    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        changeTheme(event.target.value as Theme);
    };

    return (
        <div data-theme={theme}>
            <select name="toggleTheme" onChange={handleThemeChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            {children}
        </div>
    );
};

export default ThemeWrapper;