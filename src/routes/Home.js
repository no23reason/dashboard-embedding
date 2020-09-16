import { newRelativeDateFilter } from "@gooddata/sdk-model";
import React, { useRef } from "react";
import { DashboardLoader, DashboardView } from "../components/DashboardEmbedding";

import Page from "../components/Page";
import * as Ldm from "../ldm/full";
import * as LdmExt from "../ldm/ext";

const Home = () => {
    const filters = useRef([newRelativeDateFilter(Ldm.DateDate, "GDC.time.date", -7, 7)]);

    return (
        <Page>
            My app's content, independent of GoodData.
            <DashboardView dashboard={LdmExt.ExampleDashboard} />
            Maybe even some filters?
            <DashboardView dashboard={LdmExt.ExampleDashboard} filters={filters.current} />
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
