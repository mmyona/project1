import React, { useState, useEffect } from "react";
import KakaoLogin from "react-kakao-login";
import axios from "axios";
import styled from "styled-components";
import { Btn } from "./atoms/Button";

export const KLogin = () => {
  const [isKakaoLoggedin, setIsKakaoLoggedin] = useState(false);
  /*const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [provider, setProvider] = useState("kakao");*/

  useEffect(() => {
    // 로그인 상태 체크
    //window.Kakao.Auth.getStatusInfo((statusInfo) => {
    if (localStorage.getItem("authorization")) {
      setIsKakaoLoggedin(true);
    }
  }, []);

  const onKakaoLoginSuccess = (res) => {
    setIsKakaoLoggedin(true);
    //setAccessToken(res.response.access_token);
    const {
      profile: { id },
      response: { access_token: accessToken, refresh_token: refreshToken },
    } = res;
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function (response) {
        // const { nickname, profile_image } = response.properties;
        // 닉네임과 프로필 사진 URL을 사용할 수 있습니다.
        localStorage.setItem("nickname", response.properties.nickname);
        localStorage.setItem(
          "profile_image",
          response.properties.profile_image
        );
      },
      fail: function (error) {
        console.log(error); // 에러 처리
      },
    });
    localStorage.setItem("authorization", accessToken);
    localStorage.setItem("userId", res.profile.id);
    sendTokenToServer(accessToken);
  };

  const onKakaoLoginFail = (error) => {
    console.log(error); // 로그인 실패 시 콘솔에 에러 출력
    setIsKakaoLoggedin(false);
  };

  const handleKakaoLogout = (e) => {
    e.preventDefault();
    sendServerToLogout(localStorage.getItem("authorization"));
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.API.request({
        url: "/v1/user/logout",
        success: function (response) {},
        fail: function (error) {
          console.log(error);
        },
      });
      // 상태와 데이터 초기화
      localStorage.removeItem("authorization");
      localStorage.removeItem("userId");
      localStorage.removeItem("nickname");
      localStorage.removeItem("profile_image");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
      setIsKakaoLoggedin(false);
    }
  };

  const sendTokenToServer = (token) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/oauth/kakao/login?access_token=${token}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendServerToLogout = (token) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/oauth/kakao/logout?access_token=${token}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
