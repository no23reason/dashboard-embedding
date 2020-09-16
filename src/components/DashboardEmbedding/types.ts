import { IDrillableItem, IHeaderPredicate } from "@gooddata/sdk-ui";

export type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IFluidLayoutSize {
    width: number;
    heightAsRatio?: number;
}

export interface IFluidLayoutColSize {
    xl: IFluidLayoutSize;
    xs?: IFluidLayoutSize;
    sm?: IFluidLayoutSize;
    md?: IFluidLayoutSize;
    lg?: IFluidLayoutSize;
}

export interface IAfterColumnRenderParams {
    id: string;
    columnRef: React.RefObject<HTMLDivElement>;
    currentColumnWidth: ColumnWidth;
}

type SectionHeader = ISectionHeader | ISectionDescription;

export interface ISectionHeader {
    title: string;
    description?: string;
}

export interface ISectionDescription {
    description: string;
}

export interface IFluidLayoutColumn {
    style?: string;
    content:
        | JSX.Element
        | ((
              drillableItems: Array<IDrillableItem | IHeaderPredicate> /* maybe other values */,
          ) => JSX.Element); // this allows users to put absolutely anything here
    size: IFluidLayoutColSize;
    minHeight?: number;
    afterColumnRender?: (params: IAfterColumnRenderParams) => JSX.Element;
}

export interface IFluidLayoutRow {
    style?: string;
    header?: SectionHeader;
    columns: IFluidLayoutColumn[];
}
