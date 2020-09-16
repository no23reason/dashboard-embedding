import React, { useState } from "react";
import { IExportFunction } from "@gooddata/sdk-ui";

import * as LdmExt from "../../ldm/ext";
import { DashboardView } from "../../components/DashboardEmbedding";

export const DashboardViewWithExport = () => {
    const [exporter, setExporter] = useState<IExportFunction | undefined>();

    return (
        <>
            <h3>Export dashboard</h3>
            {exporter ? (
                <button type="button" onClick={() => exporter({ format: "csv" })}>
                    Export
                </button>
            ) : (
                <div>Getting export function...</div>
            )}
            <DashboardView dashboard={LdmExt.ExampleDashboard} onExportReady={e => setExporter(() => e)} />
        </>
    );
};
