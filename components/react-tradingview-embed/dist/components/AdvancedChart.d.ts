/// <reference types="react" />
export declare type AdvancedChartWidgetProps = {
    width?: string | number;
    height?: string | number;
    autosize?: boolean;
    symbol?: string;
    interval?: string;
    range?: string;
    timezone?: string;
    theme?: string;
    style?: string;
    locale?: string;
    toolbar_bg?: string;
    hide_top_toolbar?: boolean;
    hide_side_toolbar?: boolean;
    withdateranges?: boolean;
    save_image?: boolean;
    enable_publishing?: boolean;
    allow_symbol_change?: boolean;
    container_id?: string;
};
declare type AdvancedChartProps = {
    widgetProps?: AdvancedChartWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const AdvancedChart: (props: AdvancedChartProps) => JSX.Element;
export default AdvancedChart;
//# sourceMappingURL=AdvancedChart.d.ts.map