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
import { PivotTable } from "@gooddata/sdk-ui-pivot";

import * as Ldm from "../../ldm/full";
import { mockDashboard } from "./mocks";
import { useTheme } from "../../contexts/ThemingProvider";
import { Theme } from "./types";

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
    theme?: Theme;
}

export const DashboardView: React.FC<IDashboardViewProps> = ({
    onExportReady,
    filters,
    onDrill,
    drillableItems,
    onLoaded,
    theme,
}) => {
    const timeoutId = useRef<number>();
    useEffect(() => {
        timeoutId.current = window.setTimeout(
            () => {
                const mockExporter: IExportFunction = config => {
                    alert(`Exporting with config ${JSON.stringify(config)}`);
                    return Promise.resolve({ uri: "/gdc/export/123" });
                };
                onExportReady?.(mockExporter);
                onLoaded?.(mockDashboard);
            },
            3000,
            [],
        );

        return () => window.clearTimeout(timeoutId.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const themeFromContext = useTheme();

    const usedTheme = theme ?? themeFromContext;

    return (
        <div style={{ border: "1px solid grey", color: usedTheme.color }}>
            <h4>Sample dashboard (hardcoded table)</h4>
            <div style={{ height: 200 }}>
                <PivotTable
                    measures={[Ldm.$AvgCheckSize]}
                    rows={[Ldm.LocationState]}
                    filters={filters}
                    onDrill={onDrill}
                    drillableItems={drillableItems}
                />
            </div>
        </div>
    );
};
