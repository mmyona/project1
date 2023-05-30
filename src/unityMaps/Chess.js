import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const Chess = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "Chess/Build/Chess.loader.js",
    dataUrl: "Chess/Build/Chess.data",
    frameworkUrl: "Chess/Build/Chess.framework.js",
    codeUrl: "Chess/Build/Chess.wasm",
  });

  useEffect(() => {
    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
    };
  }, [detachAndUnloadImmediate]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};
