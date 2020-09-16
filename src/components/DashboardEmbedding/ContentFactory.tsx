import React from "react";
import {
    IDashboard,
    IFluidLayoutRow as MetadataFluidLayoutRow,
    IFluidLayoutColumn as MetadataFluidLayoutColumn,
} from "@gooddata/sdk-backend-spi";
import { IFluidLayoutRow, IFluidLayoutColumn } from "./types";

type ColumnMapper = (column: MetadataFluidLayoutColumn) => IFluidLayoutColumn;
type RowMapper = (row: MetadataFluidLayoutRow, columnMapper: ColumnMapper) => IFluidLayoutRow;

interface IContentFactoryMappers {
    columnMapper?: ColumnMapper;
    rowMapper?: RowMapper;
}

const defaultMappers: IContentFactoryMappers = {
    columnMapper: column => {
        return {
            content: <div>{JSON.stringify(column.content)}</div>,
            size: column.size,
            style: column.style,
        };
    },
    rowMapper: (row, columnMapper) => {
        return {
            header: row.header,
            columns: row.columns.map(columnMapper),
        };
    },
};

export const contentFactory = (
    dashboard: IDashboard,
    mappers: IContentFactoryMappers = defaultMappers,
): IFluidLayoutRow[] => {
    const { layout } = dashboard;
    if (!layout) {
        return [];
    }

    const { rowMapper = defaultMappers.rowMapper!, columnMapper = defaultMappers.columnMapper! } = mappers;

    return layout.fluidLayout.rows.map(row => rowMapper(row, columnMapper));
};
