import { useEffect } from 'react';

const useScript = (scriptContent, attributes = {}, async = false, defer = false) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.async = async;
        script.defer = defer;
        script.innerHTML = scriptContent;

        document.body.appendChild(script);

        for (let key of Object.keys(attributes)) {
            script.setAttribute(key.toString(), attributes[key].toString())
            console.log(key + " -> " + attributes[key])
        }

        return () => {
            // document.body.removeChild(script);
        }
    }, [scriptContent]);
};

export default useScript;
