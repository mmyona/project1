import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Router2 = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "unity/Build/개개비.loader.js",
    dataUrl: "unity/Build/개개비.data",
    frameworkUrl: "unity/Build/개개비.framework.js",
    codeUrl: "unity/Build/개개비.wasm",
  });

  useEffect(() => {
    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
    };
  }, [detachAndUnloadImmediate]);

  return (
    <div>
      <div>Unity map</div>
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default Router2;
