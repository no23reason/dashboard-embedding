import React from "react";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model";

import * as LdmExt from "../../ldm/ext";
import * as Ldm from "../../ldm/full";
import { DashboardView } from "../../components/DashboardEmbedding";

const filters = [newPositiveAttributeFilter(Ldm.LocationState, ["California", "Florida"])];

export const DashboardViewWithFilters = () => (
    <>
        <h3>Filters</h3>
        <DashboardView dashboard={LdmExt.ExampleDashboard} filters={filters} />
    </>
);
