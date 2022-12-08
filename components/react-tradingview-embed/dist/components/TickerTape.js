import React from "react";
const TickerTape = (props) => {
    const { widgetProps, widgetPropsAny } = props;
    const ref = React.createRef();
    React.useEffect(() => {
        let refValue;
        if (ref.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/"
                + "embed-widget-ticker-tape.js";
            script.async = true;
            script.type = "text/javascript";
            script.innerHTML = JSON.stringify(Object.assign(Object.assign({ "showSymbolLogo": true, "colorTheme": "dark", "isTransparent": false, "displayMode": "adaptive", "locale": "en", "symbols": [
                    {
                        "proName": "FOREXCOM:SPXUSD",
                        "title": "S&P 500"
                    },
                    {
                        "proName": "FOREXCOM:NSXUSD",
                        "title": "Nasdaq 100"
                    },
                    {
                        "proName": "FX_IDC:EURUSD",
                        "title": "EUR/USD"
                    },
                    {
                        "proName": "BITSTAMP:BTCUSD",
                        "title": "BTC/USD"
                    },
                    {
                        "proName": "BITSTAMP:ETHUSD",
                        "title": "ETH/USD"
                    }
                ] }, widgetProps), widgetPropsAny));
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
export default TickerTape;
