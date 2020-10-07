import React, {useEffect} from 'react'


function SBOLDesigner(props) {
    useEffect(() =>{
            const onLoad = window.dispatchEvent;
            const webswingFinction = window.webFunction;
            webswingFinction(window, document);
            onLoad(new Event('initialiseDesigner') );
    },[])

    useEffect(() => {
        function waitForPingService() {
            console.log("Waiting for service");
            if (typeof window.pingService !== "undefined") {
                window.runSend();
            } else {
                setTimeout(waitForPingService, 250);
            }
        }

        waitForPingService();
    }, [])


    return (
        <div className="webswing-element" data-webswing-instance="webswingInstance0" style={{height: '100vh'}}>
        </div>
    )
}

export default SBOLDesigner;
