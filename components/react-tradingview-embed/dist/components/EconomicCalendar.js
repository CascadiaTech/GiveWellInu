import React from "react";
const EconomicCalendar = (props) => {
    const { widgetProps, widgetPropsAny } = props;
    const ref = React.createRef();
    React.useEffect(() => {
        let refValue;
        if (ref.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/"
                + "embed-widget-events.js";
            script.async = true;
            script.type = "text/javascript";
            script.innerHTML = JSON.stringify(Object.assign(Object.assign({ "colorTheme": "dark", "isTransparent": false, "width": "510", "height": "600", "locale": "en", "importanceFilter": "-1,0,1" }, widgetProps), widgetPropsAny));
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
export default EconomicCalendar;
