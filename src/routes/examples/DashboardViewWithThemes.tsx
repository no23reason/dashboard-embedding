import React from "react";

import * as LdmExt from "../../ldm/ext";
import { DashboardView } from "../../components/DashboardEmbedding";

export const DashboardViewWithThemes = () => (
    <>
        <h3>Themes</h3>
        <DashboardView dashboard={LdmExt.ExampleDashboard} theme={{ color: "red" }} />
    </>
);
