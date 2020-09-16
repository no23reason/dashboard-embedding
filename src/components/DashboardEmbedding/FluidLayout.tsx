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

export const FluidLayout: React.FC<IFluidLayoutProps> = () => {
    return <div>FluidLayout</div>;
};
