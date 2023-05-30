import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useNavigate } from "react-router-dom";

export const Plaza = () => {
  const navigate = useNavigate();

  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "Plaza/Build/Plaza.loader.js",
    dataUrl: "Plaza/Build/Plaza.data",
    frameworkUrl: "Plaza/Build/Plaza.framework.js",
    codeUrl: "Plaza/Build/Plaza.wasm",
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
