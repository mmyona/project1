import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const Unity3 = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "unity3/Build/project1.loader.js",
    dataUrl: "unity3/Build/project1.data",
    frameworkUrl: "unity3/Build/project1.framework.js",
    codeUrl: "unity3/Build/project1.wasm",
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
