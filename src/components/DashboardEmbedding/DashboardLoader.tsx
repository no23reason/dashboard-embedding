import React, { useEffect, useRef, useState } from "react";
import { IAnalyticalBackend, IDashboard } from "@gooddata/sdk-backend-spi";
import { ObjRef } from "@gooddata/sdk-model";
import { mockDashboard } from "./mocks";
import { useTheme } from "../../contexts/ThemeProvider";
import { Theme } from "./types";

type DashboardLoaderChildren = (args: {
    dashboard: IDashboard | undefined;
    isLoading: boolean;
    error: any;
    theme: Theme;
}) => JSX.Element;

interface IDashboardLoaderProps {
    workspace?: string;
    backend?: IAnalyticalBackend;
    dashboard: ObjRef;
    children: DashboardLoaderChildren;
    theme?: Theme;
}

/**
 * Component allowing the flexible embedding of dashboards. It handles the downloading of the dashboard.
 */
export const DashboardLoader: React.FC<IDashboardLoaderProps> = ({ children, theme }) => {
    const [isLoading, setIsLoading] = useState(true);
    const themeFromContext = useTheme();

    const usedTheme = theme ?? themeFromContext;

    const timeoutId = useRef<number>();
    useEffect(() => {
        timeoutId.current = window.setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => window.clearTimeout(timeoutId.current);
    });

    return (
        <div>
            {children({
                isLoading,
                dashboard: isLoading ? undefined : mockDashboard,
                error: null,
                theme: usedTheme,
            })}
        </div>
    );
};
