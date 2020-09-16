import React from "react";
import {
    IDashboard,
    IFluidLayoutRow as MetadataFluidLayoutRow,
    IFluidLayoutColumn as MetadataFluidLayoutColumn,
} from "@gooddata/sdk-backend-spi";
import { IFluidLayoutRow, IFluidLayoutColumn } from "./types";

type ColumnOverride = (column: MetadataFluidLayoutColumn) => Partial<IFluidLayoutColumn>;
type RowOverride = (row: MetadataFluidLayoutRow) => Partial<IFluidLayoutRow>;

interface IContentFactoryOverrides {
    columnOverride?: ColumnOverride;
    rowOverride?: RowOverride;
}

export const contentFactory = (
    dashboard: IDashboard,
    overrides: IContentFactoryOverrides = {},
): IFluidLayoutRow[] => {
    const { layout } = dashboard;
    if (!layout) {
        return [];
    }

    return layout.fluidLayout.rows.map(row => {
        const mappedRow = {
            header: row.header,
            columns: row.columns.map(column => {
                const mappedColumn = {
                    content: <div>{JSON.stringify(column.content)}</div>,
                    size: column.size,
                    style: column.style,
                };
                const columnOverride = overrides.columnOverride?.(column) ?? {};

                return {
                    ...mappedColumn,
                    ...columnOverride,
                };
            }),
        };

        const rowOverride = overrides.rowOverride?.(row) ?? {};

        return {
            ...mappedRow,
            ...rowOverride,
        };
    });
};
