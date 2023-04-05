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
import { Unity2 } from "../pages/Unity2";
import { Center } from "../pages/Center";
import { Find } from "../pages/Find";

//unity components
import { Unity1 } from "../pages/Unity1";

export const Router = () => {
  return (
    <Container>
      <Routes className="margin">
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unity1" element={<Unity1 />} />
        <Route path="/unity2" element={<Unity2 />} />
        <Route path="/list" element={<UnityList />} />
        <Route path="/request" element={<Request />} />
        <Route path="/info" element={<Info />} />
        <Route path="/center" element={<Center />} />
        <Route path="/find" element={<Find />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div``;
