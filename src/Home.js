import React, {useState, useEffect} from 'react'
import {Redirect, useLocation, withRouter} from "react-router-dom";
import MenuDraw from "./MenuDraw";
import useScript from "./useScript";


function Home(props) {
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({})
    let currentLocation = useLocation();
    const webSwingScriptOne =
        " var webswingInstance0 = {\n" +
        "        options: {\n" +
        "            autoStart: true,\n" +
        "            recording: getParam('recording'),\n" +
        "            binarySocket: getParam('binarySocket'),\n" +
        "            debugPort: getParam('debugPort'),\n" +
        "            recordingPlayback: getParam('recordingPlayback'),\n" +
        "            connectionUrl:'https://www.imperialigem2020.live/sboldesigner' \n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "    function getParam(name) {\n" +
        "        name = name.replace(/[\\[]/, \"\\\\\\[\").replace(/[\\]]/, \"\\\\\\]\");\n" +
        "        var results = new RegExp(\"[\\\\?&]\" + name + \"=([^&#]*)\").exec(location.href);\n" +
        "        return results == null ? null : decodeURIComponent(results[1]);\n" +
        "    }"

    const webSwingScriptTwo =
        "function webFunction(window, document) {\n" +
        "        console.log('function ran'); \n" +
        "        var loader = function () {\n" +
        "        console.log('function ran 2'); \n" +
        "            var baseUrl = 'https://www.imperialigem2020.live/sboldesigner';\n" +
        "            baseUrl = baseUrl.indexOf(\"/\", baseUrl.length - 1) !== -1 ? baseUrl : (baseUrl + \"/\");\n" +
        "            var xmlhttp = new XMLHttpRequest();\n" +
        "            xmlhttp.onreadystatechange = function () {\n" +
        "                if (xmlhttp.readyState == XMLHttpRequest.DONE) {\n" +
        "                    var version = xmlhttp.status == 200 ? xmlhttp.responseText : \"undefined\";\n" +
        "                    var script = document.createElement(\"script\"),\n" +
        "                        tag = document.getElementsByTagName(\"script\")[0];\n" +
        "                    script.src = baseUrl + \"javascript/webswing-embed.js?version=\" + version;\n" +
        "                    tag.parentNode.insertBefore(script, tag);\n" +
        "                }\n" +
        "            };\n" +
        "            xmlhttp.open(\"GET\", baseUrl + \"rest/version\", true);\n" +
        "            xmlhttp.send();\n" +
        "        };\n" +
        "        window.addEventListener ? window.addEventListener(\"test\", loader, false) : window.attachEvent(\"test\", loader);\n" +
        "    }"
    const webSwingScriptTwoAttributes = {"data-webswing-global-var": "webswing"};



    useScript(webSwingScriptOne, {}, false, false);
    useScript(webSwingScriptTwo, webSwingScriptTwoAttributes, false, false);
    useEffect(() =>{
        const onLoad = window.dispatchEvent;
        const testFunc = window.webFunction;
        testFunc(window, document);
        onLoad(new Event('test') );
    },[])

    //Custom function to intercept tab selection to allow for saving of data etc before changing tabs.
    let handleTabSelection = function (location, index) {
        console.log(`In Home Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
        setNavigateTo({path: location.path, push: true, state: {referrer: currentLocation}})
        setNavigate(true)
    }
    if (navigate) {
        return (<Redirect
            to={{
                pathname: navigateTo.path,
                push: navigateTo.push,
                state: navigateTo.state
            }}
        />)
    }
    return (
        [<MenuDraw {...props} handleTabSelection={handleTabSelection}/>,
            <div className="webswing-element" data-webswing-instance="webswingInstance0" style={{height: '100vh'}}>
            </div>]
    )
}

export default withRouter(Home);
