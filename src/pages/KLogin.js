import React, { useState, useEffect } from "react";
import KakaoLogin from "react-kakao-login";

export const KLogin = () => {
  const [isKakaoLoggedin, setIsKakaoLoggedin] = useState(false);

  const onKakaoLoginSuccess = (result) => {
    console.log(result); // 로그인 성공 시 콘솔에 결과 출력
    setIsKakaoLoggedin(true);
  };

  const onKakaoLoginFail = (error) => {
    console.log(error); // 로그인 실패 시 콘솔에 에러 출력
    setIsKakaoLoggedin(false);
  };

  useEffect(() => {
    // 로그인 상태 체크
    window.Kakao.Auth.getStatusInfo((statusInfo) => {
      if (statusInfo.status === "connected") {
        setIsKakaoLoggedin(true);
      }
    });
  }, []);

  return (
    <div>
      {isKakaoLoggedin ? (
        <div>카카오톡 로그인 완료</div>
      ) : (
        <KakaoLogin
          jsKey={process.env.REACT_APP_KAKAO_JS_KEY}
          buttonText="카카오톡으로 로그인"
          onSuccess={onKakaoLoginSuccess}
          onFailure={onKakaoLoginFail}
          getProfile={true}
        />
      )}
    </div>
  );
};
