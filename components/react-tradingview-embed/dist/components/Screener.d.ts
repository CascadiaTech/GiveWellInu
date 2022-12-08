/// <reference types="react" />
export declare type ScreenerWidgetProps = {
    width?: string | number;
    height?: string | number;
    defaultColumn?: string;
    defaultScreen?: string;
    market?: string;
    showToolbar?: boolean;
    colorTheme?: string;
    locale?: string;
};
declare type ScreenerProps = {
    widgetProps?: ScreenerWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const Screener: (props: ScreenerProps) => JSX.Element;
export default Screener;
//# sourceMappingURL=Screener.d.ts.map