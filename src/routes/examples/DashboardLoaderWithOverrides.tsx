import React from "react";

import * as LdmExt from "../../ldm/ext";
import { DashboardLoader, FluidLayout, contentFactory } from "../../components/DashboardEmbedding";

export const DashboardLoaderWithOverrides = () => (
    <>
        <h3>DashboardLoader with FluidLayout with customized contentFactory</h3>
        <DashboardLoader dashboard={LdmExt.ExampleDashboard}>
            {({ dashboard, error, isLoading, theme }) => {
                if (isLoading) {
                    return <div>Loading...</div>;
                }

                return (
                    <FluidLayout
                        theme={theme}
                        rows={contentFactory(dashboard!, {
                            columnOverrides: [
                                {
                                    predicate: (rowIndex, columnIndex) => rowIndex === 0 && columnIndex === 1,
                                    override: (dashboardColumn, layoutColumn) => ({
                                        content: (
                                            <>
                                                {layoutColumn.content}
                                                <img src="https://place-hold.it/100x100" alt="Placeholder" />
                                                <div>Appending custom content is no problem</div>
                                            </>
                                        ),
                                    }),
                                },
                                {
                                    predicate: (rowIndex, columnIndex) => rowIndex === 1 && columnIndex === 0,
                                    override: (dashboardColumn, layoutColumn) => ({
                                        content: (
                                            <>
                                                <img src="https://place-hold.it/100x100" alt="Placeholder" />
                                                <div>Replacing content as a whole is no problem, either</div>
                                            </>
                                        ),
                                    }),
                                },
                            ],
                        })}
                    />
                );
            }}
        </DashboardLoader>
    </>
);
