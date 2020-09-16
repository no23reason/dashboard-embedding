import React from "react";

import * as LdmExt from "../../ldm/ext";
import { DashboardLoader, FluidLayout, contentFactory } from "../../components/DashboardEmbedding";

export const BasicDashboardLoader = () => (
    <>
        <h3>DashboardLoader with FluidLayout with default contentFactory</h3>
        <DashboardLoader dashboard={LdmExt.ExampleDashboard}>
            {({ dashboard, error, isLoading, theme }) => {
                if (isLoading) {
                    return <div>Loading...</div>;
                }

                return <FluidLayout theme={theme} rows={contentFactory(dashboard!)} />;
            }}
        </DashboardLoader>
    </>
);
