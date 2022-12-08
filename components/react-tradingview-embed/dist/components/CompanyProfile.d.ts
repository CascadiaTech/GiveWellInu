/// <reference types="react" />
export declare type CompanyProfileWidgetProps = {
    symbol?: string;
    width?: string | number;
    height?: string | number;
    colorTheme?: string;
    isTransparent?: boolean;
    locale?: string;
};
declare type CompanyProfileProps = {
    widgetProps?: CompanyProfileWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const CompanyProfile: (props: CompanyProfileProps) => JSX.Element;
export default CompanyProfile;
//# sourceMappingURL=CompanyProfile.d.ts.map