import React, { useState, useEffect } from "react";
import KakaoLogin from "react-kakao-login";
import axios from "axios";
import styled from "styled-components";
import { Btn } from "./atoms/Button";

export const KLogin = () => {
  const [isKakaoLoggedin, setIsKakaoLoggedin] = useState(false);
  const [id, setId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [provider, setProvider] = useState("kakao");

  useEffect(() => {
    // 로그인 상태 체크
    window.Kakao.Auth.getStatusInfo((statusInfo) => {
      if (statusInfo.status === "connected") {
        setIsKakaoLoggedin(true);
      }
    });
    console.log(isKakaoLoggedin);
  }, []);

  const onKakaoLoginSuccess = (res) => {
    console.log(res); // 로그인 성공 시 콘솔에 결과 출력
    setIsKakaoLoggedin(true);
    setAccessToken(res.response.access_token);
    const {
      profile: { id },
      response: { access_token: accessToken, refresh_token: refreshToken },
    } = res;
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function (response) {
        console.log(response); // 사용자 정보 출력
        const { nickname, profile_image } = response.properties;
        // 닉네임과 프로필 사진 URL을 사용할 수 있습니다.
        console.log(nickname, profile_image);
      },
      fail: function (error) {
        console.log(error); // 에러 처리
      },
    });
    // 서버에게 token 넘겨주기
    sendTokenToServer(accessToken);
  };

  const onKakaoLoginFail = (error) => {
    console.log(error); // 로그인 실패 시 콘솔에 에러 출력
    setIsKakaoLoggedin(false);
  };

  const sendTokenToServer = (token) => {
    // 서버에게 토큰을 전송하는 코드 작성
    axios
      .post("/api/login", { token }, { withCredentials: true })
      .then((response) => {
        // 서버 응답 처리
        console.log(response);
      })
      .catch((error) => {
        // 에러 처리
        console.log(error);
      });
  };

  const handleKakaoLogout = (e) => {
    e.preventDefault();
    window.Kakao.Auth.logout(() => {
      // 서버에 로그아웃 요청 보내기
      axios
        .post("/api/logout", null, { withCredentials: true })
        .then((response) => {
          // 서버 응답 처리
          console.log(response);
        })
        .catch((error) => {
          // 에러 처리
          console.log(error);
        });

      // 상태와 데이터 초기화
      setIsKakaoLoggedin(false);
      setAccessToken("");
      setRefreshToken("");

      // 기타 초기화 작업 수행
    });
  };

  return (
    <div>
      {isKakaoLoggedin ? (
        <div>
          <Btn
            btnText="로그아웃"
            width="8rem"
            fontsize="0.8rem"
            type="submit"
            onClick={handleKakaoLogout}
          />
        </div>
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
