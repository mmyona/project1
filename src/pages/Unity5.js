import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const Unity5 = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "unity5/Build/camera_bgm.loader.js",
    dataUrl: "unity5/Build/camera_bgm.data",
    frameworkUrl: "unity5/Build/camera_bgm.framework.js",
    codeUrl: "unity5/Build/camera_bgm.wasm",
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
