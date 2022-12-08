/// <reference types="react" />
export declare type SymbolOverviewWidgetProps = {
    symbols?: any;
    chartOnly?: boolean;
    width?: string | number;
    height?: string | number;
    locale?: string;
    colorTheme?: string;
    gridLineColor?: string;
    trendLineColor?: string;
    fontColor?: string;
    underLineColor?: string;
    isTransparent?: boolean;
    autosize?: boolean;
    container_id?: string;
};
declare type SymbolOverviewProps = {
    widgetProps?: SymbolOverviewWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const SymbolOverview: (props: SymbolOverviewProps) => JSX.Element;
export default SymbolOverview;
//# sourceMappingURL=SymbolOverview.d.ts.map