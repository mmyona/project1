import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const Unity1 = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "unity/Build/test.loader.js",
    dataUrl: "unity/Build/test.data",
    frameworkUrl: "unity/Build/test.framework.js",
    codeUrl: "unity/Build/test.wasm",
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
      <Unity unityProvider={unityProvider} style={{ height: "500px" }} />
    </div>
  );
};
