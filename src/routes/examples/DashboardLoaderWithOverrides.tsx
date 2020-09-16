import React from "react";

import * as LdmExt from "../../ldm/ext";
import { DashboardLoader, FluidLayout, contentFactory } from "../../components/DashboardEmbedding";

export const DashboardLoaderWithOverrides = () => (
    <>
        <h3>DashboardLoader with FluidLayout with customized contentFactory</h3>
        <DashboardLoader dashboard={LdmExt.ExampleDashboard}>
            {({ dashboard, error, isLoading }) => {
                if (isLoading) {
                    return <div>Loading...</div>;
                }

                return (
                    <FluidLayout
                        rows={contentFactory(dashboard!, {
                            columnOverrides: [
                                {
                                    predicate: (rowIndex, columnIndex) => rowIndex === 0 && columnIndex === 1,
                                    override: (column, mappedColumn) => ({
                                        content: (
                                            <>
                                                {mappedColumn.content}
                                                <img src="https://place-hold.it/200x200" alt="Placeholder" />
                                                <div>Appending custom content is no problem</div>
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
