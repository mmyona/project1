import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

//routing components
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Mypage } from "../pages/Mypage";
import { Signup } from "../pages/Signup";
import { Info } from "../pages/Info";
import { Request } from "../pages/Request";
import { Questions } from "../pages/Questions";
import { Bugs } from "../pages/Bugs";
import { CenterMenu } from "../components/CenterMenu";
import { Center } from "../pages/Center";
import { Find } from "../pages/Find";
import { Certify } from "../pages/Certify";

//unity components
import { UnityList } from "../pages/UnityList";
import { Unity1 } from "../unityMaps/Unity1";
import { Unity2 } from "../unityMaps/Unity2";
import { Unity3 } from "../unityMaps/Unity3";
import { Unity4 } from "../unityMaps/Unity4";
import { Unity5 } from "../unityMaps/Unity5";
import { UnityInfo } from "../pages/UnityInfo";
import { KLogin } from "../pages/KLogin";

export const Router = () => {
  return (
    <Container>
      <Routes className="margin">
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list/:unityId" element={<UnityInfo />} />
        <Route path="/unity1" element={<Unity1 />} />
        <Route path="/unity2" element={<Unity2 />} />
        <Route path="/unity3" element={<Unity3 />} />
        <Route path="/unity4" element={<Unity4 />} />
        <Route path="/unity5" element={<Unity5 />} />
        <Route path="/publist" element={<UnityList />} />
        <Route path="/privlist" element={<UnityList />} />
        <Route path="/info" element={<Info />} />
        <Route path="/center" element={<Center />} />
        <Route path="/qa" element={<Questions />} />
        <Route path="/request" element={<Request />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/find" element={<Find />} />
        <Route path="/certify" element={<Certify />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div``;
