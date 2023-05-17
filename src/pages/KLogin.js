import React, { useState, useEffect } from "react";
import KakaoLogin from "react-kakao-login";
import axios from "axios";

export const KLogin = () => {
  const [isKakaoLoggedin, setIsKakaoLoggedin] = useState(false);
  const [id, setId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [provider, setProvider] = useState("kakao");

  const onKakaoLoginSuccess = (res) => {
    console.log(res); // 로그인 성공 시 콘솔에 결과 출력
    setIsKakaoLoggedin(true);
    setAccessToken(res.response.access_token);
    const {
      profile: { id },
      response: { access_token: accessToken, refresh_token: refreshToken },
    } = res;

    // 서버에게 token 넘겨주기
    sendTokenToServer(accessToken);
  };

  const onKakaoLoginFail = (error) => {
    console.log(error); // 로그인 실패 시 콘솔에 에러 출력
    setIsKakaoLoggedin(false);
  };

  useEffect(() => {
    // 로그인 상태 체크
    console.log(process.env.REACT_APP_KAKAO_JS_KEY);
    window.Kakao.Auth.getStatusInfo((statusInfo) => {
      if (statusInfo.status === "connected") {
        setIsKakaoLoggedin(true);
      }
    });
  }, []);

  const sendTokenToServer = (token) => {
    // 서버에게 토큰을 전송하는 코드 작성
    axios
      .post("/api/login", { token })
      .then((response) => {
        // 서버 응답 처리
        console.log(response);
      })
      .catch((error) => {
        // 에러 처리
        console.log(error);
      });
  };

  return (
    <div>
      {isKakaoLoggedin ? (
        <div>카카오톡 로그인 완료</div>
      ) : (
        <KakaoLogin
          token={process.env.REACT_APP_KAKAO_JS_KEY}
          buttonText="카카오톡으로 로그인"
          onSuccess={onKakaoLoginSuccess}
          onFailure={onKakaoLoginFail}
          getProfile={true}
        />
      )}
    </div>
  );
};
