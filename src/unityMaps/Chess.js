import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useNavigate } from "react-router-dom";

export const Chess = () => {
  const navigate = useNavigate();

  const { unityProvider, UNSAFE__detachAndUnloadImmediate } = useUnityContext({
    loaderUrl: "Chess/Build/Chess.loader.js",
    dataUrl: "Chess/Build/Chess.data",
    frameworkUrl: "Chess/Build/Chess.framework.js",
    codeUrl: "Chess/Build/Chess.wasm",
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        // ESC key (key code 27) is pressed, navigate to previous page
        navigate(-1);
      }
    };

    // Register event listener
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

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
