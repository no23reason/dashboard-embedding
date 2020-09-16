import React from "react";

import * as LdmExt from "../../ldm/ext";
import { DashboardLoader } from "../../components/DashboardEmbedding";

export const DashboardLoaderWithoutLayout = () => (
    <>
        <h3>DashboardLoader without FluidLayout</h3>
        <DashboardLoader dashboard={LdmExt.ExampleDashboard}>
            {({ dashboard, error, isLoading }) => {
                if (isLoading) {
                    return <div>Loading...</div>;
                }

                return <pre>{JSON.stringify(dashboard, null, 2)}</pre>;
            }}
        </DashboardLoader>
    </>
);
