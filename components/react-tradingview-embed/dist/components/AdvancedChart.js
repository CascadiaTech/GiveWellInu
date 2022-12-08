import React from "react";
export function AdvancedChart(props) {
    const { widgetProps, widgetPropsAny } = props;
    let containerId = "advanced-chart-widget-container";
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
                    new TradingView.widget(Object.assign(Object.assign({ "width": "100%", "height": "640px", "symbol": "BITMEX:XBTUSD", "interval": "240", "range": "1M", "timezone": "Etc/UTC", "theme": "dark", "style": "9", "locale": "en", "toolbar_bg": "rgba(0, 0, 0, 0.8)", "hide_top_toolbar": false, "hide_side_toolbar": false, "withdateranges": true, "save_image": true, "enable_publishing": false, "container_id": containerId }, widgetProps), widgetPropsAny));
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

