/// <reference types="react" />
export declare type TickerWidgetProps = {
    colorTheme?: string;
    isTransparent?: boolean;
    showSymbolLogo?: boolean;
    locale?: string;
    symbols?: any;
};
declare type TickerProps = {
    widgetProps?: TickerWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const Ticker: (props: TickerProps) => JSX.Element;
export default Ticker;
//# sourceMappingURL=Ticker.d.ts.map