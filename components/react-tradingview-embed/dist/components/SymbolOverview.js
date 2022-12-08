import React from "react";
const SymbolOverview = (props) => {
    const { widgetProps, widgetPropsAny } = props;
    let containerId = "symbol-overview-widget-container";
    if (widgetProps === null || widgetProps === void 0 ? void 0 : widgetProps.container_id) {
        containerId = widgetProps === null || widgetProps === void 0 ? void 0 : widgetProps.container_id;
    }
    const ref = React.createRef();
    React.useEffect(() => {
        let refValue;
        if (ref.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/tv.js";
            script.async = true;
            script.onload = () => {
                if (typeof TradingView !== "undefined") {
                    new TradingView.MediumWidget(Object.assign(Object.assign({ "symbols": [
                            [
                                "Apple",
                                "AAPL"
                            ],
                            [
                                "Google",
                                "GOOGL"
                            ],
                            [
                                "Microsoft",
                                "MSFT"
                            ]
                        ], "chartOnly": false, "width": "100%", "height": 400, "locale": "en", "colorTheme": "dark", "gridLineColor": "#2A2E39", "trendLineColor": "#1976D2", "fontColor": "#787B86", "underLineColor": "rgba(55, 166, 239, 0.15)", "isTransparent": false, "autosize": false, "container_id": containerId }, widgetProps), widgetPropsAny));
                }
            };
            ref.current.appendChild(script);
            refValue = ref.current;
        }
        return () => {
            if (refValue) {
                while (refValue.firstChild) {
                    refValue.removeChild(refValue.firstChild);
                }
            }
        };
    }, [ref, widgetProps, widgetPropsAny, containerId]);
    return React.createElement("div", { id: containerId, ref: ref });
};
export default SymbolOverview;
