import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const Unity4 = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "unity4/Build/room1.loader.js",
    dataUrl: "unity4/Build/room1.data",
    frameworkUrl: "unity4/Build/room1.framework.js",
    codeUrl: "unity4/Build/room1.wasm",
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
