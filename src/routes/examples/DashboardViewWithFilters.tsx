import React, { useState } from "react";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { FilterContextItem } from "@gooddata/sdk-backend-spi";

import * as LdmExt from "../../ldm/ext";
import * as Ldm from "../../ldm/full";
import { DashboardView } from "../../components/DashboardEmbedding";

const filters = [newPositiveAttributeFilter(Ldm.LocationState, ["California", "Florida"])];

export const DashboardViewWithFilters = () => {
    const [dashboardFilters, setDashboardFilters] = useState<FilterContextItem[] | undefined>();

    return (
        <>
            <h3>Filters</h3>
            Filters from dashboard: {dashboardFilters ? JSON.stringify(dashboardFilters) : "Loading..."}
            <DashboardView
                dashboard={LdmExt.ExampleDashboard}
                filters={filters}
                onLoaded={dashboard => setDashboardFilters(dashboard.filterContext?.filters ?? [])}
            />
        </>
    );
};
