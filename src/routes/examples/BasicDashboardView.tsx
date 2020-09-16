import React from "react";

import * as LdmExt from "../../ldm/ext";
import { DashboardView } from "../../components/DashboardEmbedding";

export const BasicDashboardView = () => (
    <>
        <h3>Basic usage</h3>
        My app's content, independent of GoodData.
        <DashboardView dashboard={LdmExt.ExampleDashboard} />
    </>
);
