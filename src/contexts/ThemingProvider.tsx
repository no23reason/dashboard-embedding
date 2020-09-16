import React, { createContext, useContext } from "react";
import { Theme } from "../components/DashboardEmbedding/types";

const ThemeContext = createContext<Theme>({
    color: "blue",
});

export const ThemeProvider: React.FC = ({ children }) => {
    return <ThemeContext.Provider value={{ color: "blue" }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
