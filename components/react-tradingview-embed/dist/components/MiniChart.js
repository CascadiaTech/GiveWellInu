import React from "react";
const MiniChart = (props) => {
    const { widgetProps, widgetPropsAny } = props;
    const ref = React.createRef();
    React.useEffect(() => {
        let refValue;
        if (ref.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/"
                + "embed-widget-mini-symbol-overview.js";
            script.async = true;
            script.type = "text/javascript";
            script.innerHTML = JSON.stringify(Object.assign(Object.assign({ "symbol": "BITMEX:XBTUSD", "width": 350, "height": 220, "locale": "en", "dateRange": "12M", "colorTheme": "dark", "trendLineColor": "#37a6ef", "underLineColor": "rgba(55, 166, 239, 0.15)", "isTransparent": false, "autosize": false, "largeChartUrl": "" }, widgetProps), widgetPropsAny));
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
    }, [ref, widgetProps, widgetPropsAny]);
    return React.createElement("div", { ref: ref });
};
export default MiniChart;
