import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const Unity1 = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "unity1/Build/test.loader.js",
    dataUrl: "unity1/Build/test.data",
    frameworkUrl: "unity1/Build/test.framework.js",
    codeUrl: "unity1/Build/test.wasm",
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
      <Unity unityProvider={unityProvider} style={{ height: "500px" }} />
    </div>
  );
};
