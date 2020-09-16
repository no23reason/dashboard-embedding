import React from "react";
import { HeaderPredicates } from "@gooddata/sdk-ui";

import * as LdmExt from "../../ldm/ext";
import { DashboardView } from "../../components/DashboardEmbedding";

const drillableItems = [HeaderPredicates.attributeItemNameMatch("California")];

export const DashboardViewWithDrilling = () => {
    return (
        <>
            <h3>Drilling</h3>
            <DashboardView
                dashboard={LdmExt.ExampleDashboard}
                drillableItems={drillableItems}
                onDrill={e => alert("Drilling " + JSON.stringify(e.drillContext, null, 2))}
            />
        </>
    );
};
