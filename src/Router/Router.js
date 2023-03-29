import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

//routing components
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Mypage } from "../pages/Mypage";
import { Signup } from "../pages/Signup";
import { Info } from "../pages/Info";
import { Request } from "../pages/Request";
import { UnityList } from "../pages/UnityList";
import { MainHeader } from "../components/Header2";
import { Center } from "../pages/Center";

//unity components
import { Unity1 } from "../pages/Unity1";

export const Router = () => {
  return (
    <Container>
      <MainHeader />
      <Routes className="magin">
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/unity1" element={<Unity1 />} />
        <Route path="/list" element={<UnityList />} />
        <Route path="/request" element={<Request />} />
        <Route path="/info" element={<Info />} />
        <Route path="/center" element={<Center />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div``;
