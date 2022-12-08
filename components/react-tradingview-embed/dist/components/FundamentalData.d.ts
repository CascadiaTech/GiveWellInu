/// <reference types="react" />
export declare type FundamentalDataWidgetProps = {
    symbol?: string;
    colorTheme?: string;
    isTransparent?: boolean;
    largeChartUrl?: string;
    displayMode?: string;
    width?: string | number;
    height?: string | number;
    locale?: string;
};
declare type FundamentalDataProps = {
    widgetProps?: FundamentalDataWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const FundamentalData: (props: FundamentalDataProps) => JSX.Element;
export default FundamentalData;
//# sourceMappingURL=FundamentalData.d.ts.map