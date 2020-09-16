import React from "react";

import Page from "../components/Page";

import { BasicDashboardView } from "./examples/BasicDashboardView";
import { DashboardViewWithFilters } from "./examples/DashboardViewWithFilters";
import { DashboardViewWithExport } from "./examples/DashboardViewWithExport";
import { DashboardViewWithDrilling } from "./examples/DashboardViewWithDrilling";
import { DashboardViewWithThemes } from "./examples/DashboardViewWithThemes";
import { BasicDashboardLoader } from "./examples/BasicDashboardLoader";
import { DashboardLoaderWithOverrides } from "./examples/DashboardLoaderWithOverrides";
import { DashboardLoaderWithoutLayout } from "./examples/DashboardLoaderWithoutLayout";
import { useTheme } from "../contexts/ThemeProvider";

const Home = () => {
    const { color, setColor } = useTheme();
    return (
        <Page>
            Mock theme provider (changing title color):{" "}
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            <BasicDashboardView />
            <DashboardViewWithFilters />
            <DashboardViewWithExport />
            <DashboardViewWithDrilling />
            <DashboardViewWithThemes />
            <BasicDashboardLoader />
            <DashboardLoaderWithOverrides />
            <DashboardLoaderWithoutLayout />
        </Page>
    );
};

export default Home;
