import React, { createContext, useContext, useState } from "react";
import { Theme } from "../components/DashboardEmbedding/types";

interface ThemeManipulation {
    setColor: (color: string) => void;
}

const ThemeContext = createContext<Theme & ThemeManipulation>({
    color: "#0000FF",
    setColor: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
    const [color, setColor] = useState("#0000FF");
    return <ThemeContext.Provider value={{ color, setColor }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
