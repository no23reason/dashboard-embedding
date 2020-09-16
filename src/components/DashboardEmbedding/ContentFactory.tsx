import React from "react";
import {
    IDashboard,
    IFluidLayoutRow as MetadataFluidLayoutRow,
    IFluidLayoutColumn as MetadataFluidLayoutColumn,
} from "@gooddata/sdk-backend-spi";
import { IFluidLayoutRow, IFluidLayoutColumn } from "./types";

type ColumnOverride = (
    column: MetadataFluidLayoutColumn,
    mappedColumn: IFluidLayoutColumn,
) => Partial<IFluidLayoutColumn>;
type RowOverride = (row: MetadataFluidLayoutRow, mappedRow: IFluidLayoutRow) => Partial<IFluidLayoutRow>;

interface IContentFactoryOverrides {
    columnOverrides?: {
        predicate: (rowIndex: number, columnIndex: number) => boolean;
        override: ColumnOverride;
    }[];
    rowOverrides?: { predicate: (rowIndex: number) => boolean; override: RowOverride }[];
}

export const contentFactory = (
    dashboard: IDashboard,
    overrides: IContentFactoryOverrides = {},
): IFluidLayoutRow[] => {
    const { layout } = dashboard;
    if (!layout) {
        return [];
    }

    return layout.fluidLayout.rows.map((row, rowIndex) => {
        const mappedRow = {
            header: row.header,
            columns: row.columns.map((column, columnIndex) => {
                const mappedColumn = {
                    content: <div>{JSON.stringify(column.content)}</div>,
                    size: column.size,
                    style: column.style,
                };

                const columnOverrideFunction = overrides?.columnOverrides?.find(override =>
                    override.predicate(rowIndex, columnIndex),
                )?.override;

                const columnOverride = columnOverrideFunction?.(column, mappedColumn) ?? {};

                return {
                    ...mappedColumn,
                    ...columnOverride,
                };
            }),
        };

        const rowOverrideFunction = overrides?.rowOverrides?.find(override => override.predicate(rowIndex))
            ?.override;

        const rowOverride = rowOverrideFunction?.(row, mappedRow) ?? {};

        return {
            ...mappedRow,
            ...rowOverride,
        };
    });
};
