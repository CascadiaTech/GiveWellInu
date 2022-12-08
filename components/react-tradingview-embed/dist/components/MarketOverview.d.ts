/// <reference types="react" />
export declare type MarketOverviewWidgetProps = {
    colorTheme?: string;
    dateRange?: string;
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
    tabs?: any;
};
declare type MarketOverviewProps = {
    widgetProps?: MarketOverviewWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const MarketOverview: (props: MarketOverviewProps) => JSX.Element;
export default MarketOverview;
//# sourceMappingURL=MarketOverview.d.ts.map