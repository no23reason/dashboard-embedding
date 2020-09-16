import React from "react";
import {
    IDashboard,
    IFluidLayoutRow as MetadataFluidLayoutRow,
    IFluidLayoutColumn as MetadataFluidLayoutColumn,
} from "@gooddata/sdk-backend-spi";
import { IFluidLayoutRow, IFluidLayoutColumn } from "./types";

/**
 * Allows customization of a layout column.
 *
 * @param dashboardColumn - column as defined in the dashboard
 * @param layoutColumn - column as converted by the default logic
 * @returns Partial IFluidLayoutColumn that will be merged with the IFluidLayoutColumn created by the default logic
 */
type ColumnOverride = (
    dashboardColumn: MetadataFluidLayoutColumn,
    layoutColumn: IFluidLayoutColumn,
) => Partial<IFluidLayoutColumn>;

/**
 * Allows customization of a layout row.
 *
 * @param dashboardRow - row as defined in the dashboard
 * @param layoutRow - row as converted by the default logic
 * @returns Partial IFluidLayoutRow that will be merged with the IFluidLayoutRow created by the default logic
 */
type RowOverride = (
    dashboardRow: MetadataFluidLayoutRow,
    layoutRow: IFluidLayoutRow,
) => Partial<IFluidLayoutRow>;

/**
 * Hooks allowing overrides of the default contentFactory logic
 */
interface IContentFactoryOverrides {
    /**
     * List of overrides to column logic. Each item specifies a predicate which is used to determine if the particular override should be used.
     * For each column, the first override with predicate returning true is used.
     */
    columnOverrides?: {
        predicate: (rowIndex: number, columnIndex: number) => boolean;
        override: ColumnOverride;
    }[];

    /**
     * List of overrides to row. Each item specifies a predicate which is used to determine if the particular override should be used.
     * For each row, the first override with predicate returning true is used.
     */
    rowOverrides?: { predicate: (rowIndex: number) => boolean; override: RowOverride }[];
}

/**
 * Converts a dashboard to a form that can be used in FluidLayout.
 *
 * @param dashboard - dashboard to convert
 * @param overrides - optionally specify overrides to the row/column conversion logic. This allows you to customize the way the items will be rendered
 */
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
