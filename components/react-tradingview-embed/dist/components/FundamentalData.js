import React from "react";
const FundamentalData = (props) => {
    const { widgetProps, widgetPropsAny } = props;
    const ref = React.createRef();
    React.useEffect(() => {
        let refValue;
        if (ref.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/"
                + "embed-widget-financials.js";
            script.async = true;
            script.type = "text/javascript";
            script.innerHTML = JSON.stringify(Object.assign(Object.assign({ "symbol": "NASDAQ:NVDA", "colorTheme": "dark", "isTransparent": false, "largeChartUrl": "", "displayMode": "regular", "width": 480, "height": 830, "locale": "en" }, widgetProps), widgetPropsAny));
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
export default FundamentalData;
