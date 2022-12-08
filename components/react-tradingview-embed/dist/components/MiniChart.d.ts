/// <reference types="react" />
export declare type MiniChartWidgetProps = {
    symbol?: string;
    width?: string | number;
    height?: string | number;
    locale?: string;
    dateRange?: string;
    colorTheme?: string;
    trendLineColor?: string;
    underLineColor?: string;
    isTransparent?: boolean;
    autosize?: boolean;
    largeChartUrl?: string;
};
declare type MiniChartProps = {
    widgetProps?: MiniChartWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const MiniChart: (props: MiniChartProps) => JSX.Element;
export default MiniChart;
//# sourceMappingURL=MiniChart.d.ts.map