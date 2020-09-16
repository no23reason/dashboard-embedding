import React from "react";
import { IFluidLayoutRow, Theme } from "./types";

interface IFluidLayoutProps {
    rows: IFluidLayoutRow[];
    theme?: Theme;
    visualizeRows?: boolean;
    classNames?: string;
    onMouseLeave?: () => void;
    activeHeaderRowId?: string;
    isRowDropzoneVisible?: boolean;
}

/**
 * Component used to render content in a responsive way.
 */
export const FluidLayout: React.FC<IFluidLayoutProps> = ({ rows, theme }) => {
    return (
        <>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ border: "1px dashed gray" }}>
                    <h4 style={{ color: theme?.color }}>{(row.header as any)?.title}</h4>
                    <div style={{ display: "flex" }}>
                        {row.columns.map((column, columnIndex) => (
                            <div
                                key={columnIndex}
                                style={{
                                    border: "1px dashed lightgray",
                                    margin: 10,
                                    width: `${(column.size.xl.width / 12) * 100}%`,
                                }}
                            >
                                {column.content}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};
