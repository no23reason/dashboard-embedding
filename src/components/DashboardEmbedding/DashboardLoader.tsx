import React, { useEffect, useRef, useState } from "react";
import { IAnalyticalBackend, IDashboard } from "@gooddata/sdk-backend-spi";
import { ObjRef } from "@gooddata/sdk-model";
import { mockDashboard } from "./mocks";

type DashboardLoaderChildren = (args: {
    dashboard: IDashboard | undefined;
    isLoading: boolean;
    error: any;
}) => JSX.Element;

interface IDashboardLoaderProps {
    workspace?: string;
    backend?: IAnalyticalBackend;
    dashboard: ObjRef;
    children: DashboardLoaderChildren;
}

export const DashboardLoader: React.FC<IDashboardLoaderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const timeoutId = useRef<number>();
    useEffect(() => {
        timeoutId.current = window.setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => window.clearTimeout(timeoutId.current);
    });

    return (
        <div>
            DashboardLoader
            {children({ isLoading, dashboard: isLoading ? undefined : mockDashboard, error: null })}
        </div>
    );
};
