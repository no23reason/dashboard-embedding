import React from "react";
import { IDashboard } from "@gooddata/sdk-backend-spi";
import { IFluidLayoutRow, IFluidLayoutColumn } from "./types";

export const contentFactory = (dashboard: IDashboard): IFluidLayoutRow[] => {
    const { layout } = dashboard;
    if (!layout) {
        return [];
    }

    return layout.fluidLayout.rows.map(
        (row): IFluidLayoutRow => {
            return {
                header: row.header,
                columns: row.columns.map(
                    (column): IFluidLayoutColumn => {
                        return {
                            content: <div>{JSON.stringify(column.content)}</div>,
                            size: column.size,
                            style: column.style,
                        };
                    },
                ),
            };
        },
    );
};
