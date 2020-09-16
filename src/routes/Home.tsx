import React from "react";

import Page from "../components/Page";

import { BasicDashboardView } from "./examples/BasicDashboardView";
import { DashboardViewWithFilters } from "./examples/DashboardViewWithFilters";
import { DashboardViewWithExport } from "./examples/DashboardViewWithExport";
import { DashboardViewWithDrilling } from "./examples/DashboardViewWithDrilling";
import { BasicDashboardLoader } from "./examples/BasicDashboardLoader";
import { DashboardLoaderWithOverrides } from "./examples/DashboardLoaderWithOverrides";
import { DashboardLoaderWithoutLayout } from "./examples/DashboardLoaderWithoutLayout";

const Home = () => {
    return (
        <Page>
            <BasicDashboardView />
            <DashboardViewWithFilters />
            <DashboardViewWithExport />
            <DashboardViewWithDrilling />

            <BasicDashboardLoader />
            <DashboardLoaderWithOverrides />
            <DashboardLoaderWithoutLayout />
        </Page>
    );
};

export default Home;
