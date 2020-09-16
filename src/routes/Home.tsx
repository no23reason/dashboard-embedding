import { newRelativeDateFilter } from "@gooddata/sdk-model";
import React, { useRef, useState } from "react";
import { DashboardLoader, DashboardView } from "../components/DashboardEmbedding";

import Page from "../components/Page";
import * as LdmExt from "../ldm/ext";
import { IExportFunction } from "@gooddata/sdk-ui";

const Home = () => {
    const filters = useRef([newRelativeDateFilter(LdmExt.dateDimension, "GDC.time.date", -7, 7)]);
    const [exporter, setExporter] = useState<IExportFunction | undefined>();

    return (
        <Page>
            My app's content, independent of GoodData.
            <DashboardView dashboard={LdmExt.ExampleDashboard} />
            Maybe some filters?
            <DashboardView dashboard={LdmExt.ExampleDashboard} filters={filters.current} />
            Or export handling?
            {exporter && (
                <button type="button" onClick={() => exporter({ format: "csv" })}>
                    Export
                </button>
            )}
            <DashboardView dashboard={LdmExt.ExampleDashboard} onExportReady={e => setExporter(() => e)} />
            Or if we need more flexibility
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
