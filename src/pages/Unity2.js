import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const Unity2 = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "unity2/Build/개개비.loader.js",
    dataUrl: "unity2/Build/개개비.data",
    frameworkUrl: "unity2/Build/개개비.framework.js",
    codeUrl: "unity2/Build/개개비.wasm",
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
