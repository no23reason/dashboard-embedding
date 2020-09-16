import React, { useEffect, useRef } from "react";
import { IAnalyticalBackend, IDashboard } from "@gooddata/sdk-backend-spi";
import { IFilter, ObjRef } from "@gooddata/sdk-model";
import {
    IDrillableItem,
    IExportFunction,
    IHeaderPredicate,
    OnError,
    OnExportReady,
    OnFiredDrillEvent,
} from "@gooddata/sdk-ui";

interface IDashboardViewProps {
    workspace?: string;
    backend?: IAnalyticalBackend;
    dashboard: ObjRef;
    filters?: IFilter[];
    drillableItems?: Array<IDrillableItem | IHeaderPredicate>;
    onDrill?: OnFiredDrillEvent;
    onLoaded?: (dashboard: IDashboard) => void;
    onError?: OnError;
    onExportReady?: OnExportReady;
}

export const DashboardView: React.FC<IDashboardViewProps> = ({ onExportReady }) => {
    const timeoutId = useRef<number>();
    useEffect(() => {
        timeoutId.current = window.setTimeout(
            () => {
                const mockExporter: IExportFunction = config => {
                    alert(`Exporting with config ${JSON.stringify(config)}`);
                    return Promise.resolve({ uri: "/gdc/export/123" });
                };
                onExportReady?.(mockExporter);
            },
            3000,
            [],
        );

        return () => window.clearTimeout(timeoutId.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>DashboardView</div>;
};
