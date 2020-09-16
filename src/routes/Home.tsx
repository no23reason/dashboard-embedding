import { newPositiveAttributeFilter } from "@gooddata/sdk-model";
import React, { useState } from "react";
import { DashboardLoader, DashboardView } from "../components/DashboardEmbedding";

import Page from "../components/Page";
import * as LdmExt from "../ldm/ext";
import * as Ldm from "../ldm/full";
import { IExportFunction } from "@gooddata/sdk-ui";

const filters = [newPositiveAttributeFilter(Ldm.LocationState, ["California", "Florida"])];

const Home = () => {
    const [exporter, setExporter] = useState<IExportFunction | undefined>();

    return (
        <Page>
            <h3>Basic usage</h3>
            My app's content, independent of GoodData.
            <DashboardView dashboard={LdmExt.ExampleDashboard} />
            <h3>Filters</h3>
            <DashboardView dashboard={LdmExt.ExampleDashboard} filters={filters} />
            <h3>Export dashboard</h3>
            {exporter ? (
                <button type="button" onClick={() => exporter({ format: "csv" })}>
                    Export
                </button>
            ) : (
                <div>Getting export function...</div>
            )}
            <DashboardView dashboard={LdmExt.ExampleDashboard} onExportReady={e => setExporter(() => e)} />
            <h3>Maximum flexibility with DashboardLoader</h3>
            <DashboardLoader dashboard={LdmExt.ExampleDashboard}>
                {({ dashboard, error, isLoading }) => {
                    if (isLoading) {
                        return <div>Loading...</div>;
                    }

                    return <pre>{JSON.stringify(dashboard, null, 2)}</pre>;
                }}
            </DashboardLoader>
        </Page>
    );
};

export default Home;
