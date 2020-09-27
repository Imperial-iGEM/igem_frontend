import React, {useEffect} from 'react'


function SBOLDesigner(props) {
    useEffect(() =>{
            const onLoad = window.dispatchEvent;
            const webswingFinction = window.webFunction;
            webswingFinction(window, document);
            onLoad(new Event('initialiseDesigner') );
    },[])

    return (
        <div className="webswing-element" data-webswing-instance="webswingInstance0" style={{height: '80vh'}}>
        </div>
    )
}

export default SBOLDesigner;
