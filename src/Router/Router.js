import { Routes, Route } from "react-router-dom";

//routing components
import Home from "../pages/Home";
import Login from "../pages/Login";
import Mypage from "../pages/Mypage";
import Signup from "../pages/Signup";

//unity components
import Unity1 from "../pages/Unity1";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unity1" element={<Unity1 />} />
      </Routes>
    </>
  );
};
