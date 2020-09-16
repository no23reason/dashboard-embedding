import React from "react";
import { IFluidLayoutRow } from "./types";

interface IFluidLayoutProps {
    rows: IFluidLayoutRow[];
    visualizeRows?: boolean;
    classNames?: string;
    onMouseLeave?: () => void;
    activeHeaderRowId?: string;
    isRowDropzoneVisible?: boolean;
}

/**
 * Component used to render content in a responsive way.
 */
export const FluidLayout: React.FC<IFluidLayoutProps> = ({ rows }) => {
    return (
        <>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ backgroundColor: "orange" }}>
                    {(row.header as any)?.title}
                    <br />
                    <div style={{ display: "flex" }}>
                        {row.columns.map((column, columnIndex) => (
                            <div
                                key={columnIndex}
                                style={{
                                    backgroundColor: "yellow",
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
