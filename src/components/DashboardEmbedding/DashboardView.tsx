import React from "react";
import { IAnalyticalBackend, IDashboard } from "@gooddata/sdk-backend-spi";
import { IFilter, ObjRef } from "@gooddata/sdk-model";
import {
    IDrillableItem,
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

export const DashboardView: React.FC<IDashboardViewProps> = () => {
    return <div>DashboardView</div>;
};
