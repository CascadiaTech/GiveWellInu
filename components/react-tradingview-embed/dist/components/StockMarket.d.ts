/// <reference types="react" />
export declare type StockMarketWidgetProps = {
    colorTheme?: string;
    dateRange?: string;
    exchange?: string;
    showChart?: boolean;
    locale?: string;
    largeChartUrl?: string;
    isTransparent?: boolean;
    showSymbolLogo?: boolean;
    width?: string | number;
    height?: string | number;
    plotLineColorGrowing?: string;
    plotLineColorFalling?: string;
    gridLineColor?: string;
    scaleFontColor?: string;
    belowLineFillColorGrowing?: string;
    belowLineFillColorFalling?: string;
    symbolActiveColor?: string;
};
declare type StockMarketProps = {
    widgetProps?: StockMarketWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const StockMarket: (props: StockMarketProps) => JSX.Element;
export default StockMarket;
//# sourceMappingURL=StockMarket.d.ts.map