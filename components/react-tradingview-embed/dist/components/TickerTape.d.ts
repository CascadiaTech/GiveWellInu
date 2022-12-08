/// <reference types="react" />
export declare type TickerTapeWidgetProps = {
    showSymbolLogo?: boolean;
    colorTheme?: string;
    isTransparent?: boolean;
    displayMode?: string;
    locale?: string;
    symbols?: any;
};
declare type TickerTapeProps = {
    widgetProps?: TickerTapeWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const TickerTape: (props: TickerTapeProps) => JSX.Element;
export default TickerTape;
//# sourceMappingURL=TickerTape.d.ts.map