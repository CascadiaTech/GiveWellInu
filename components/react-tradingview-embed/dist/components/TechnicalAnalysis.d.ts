/// <reference types="react" />
export declare type TechnicalAnalysisWidgetProps = {
    interval?: string;
    width?: string | number;
    isTransparent?: boolean;
    height?: string | number;
    symbol?: string;
    showIntervalTabs?: boolean;
    locale?: string;
    colorTheme?: string;
};
declare type TechnicalAnalysisProps = {
    widgetProps?: TechnicalAnalysisWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const TechnicalAnalysis: (props: TechnicalAnalysisProps) => JSX.Element;
export default TechnicalAnalysis;
//# sourceMappingURL=TechnicalAnalysis.d.ts.map