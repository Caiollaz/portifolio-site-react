import { createContext, ReactNode, useContext } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { theme } from "../_config/styles/theme"

interface IContext {
    theme: DefaultTheme;
}

const ThemeContext = createContext<IContext>({} as IContext);

interface Props {
    children: ReactNode;
}

export function ThemeContextProvider({ children }: Props){
    return (
        <ThemeContext.Provider
            value={{
                theme
            }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);