import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense } from "react";

//routing components
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Mypage } from "../pages/Mypage";
import { Info } from "../pages/Info";
import { Request } from "../pages/Request";
import { Questions } from "../pages/Questions";
import { Bugs } from "../pages/Bugs";
import { Center } from "../pages/Center";
import { Find } from "../pages/Find";
import { Certify } from "../pages/Certify";
import { EditData } from "../pages/EditData";
import { PrivUnityList } from "../pages/PrivUnityList";
import { PrivUnityInfo } from "../pages/PrivUnityInfo";
import { Check } from "../pages/Check";

//unity components
import { UnityList } from "../pages/UnityList";
import { Chess } from "../unityMaps/Chess";
import { Park } from "../unityMaps/Park";
import { Plaza } from "../unityMaps/Plaza";
import { Unity4 } from "../unityMaps/Unity4";
import { Unity5 } from "../unityMaps/Unity5";
import { UnityInfo } from "../pages/UnityInfo";
import { Loading } from "../components/Loading";
import { MainHeader } from "../components/Header3";
import { Footer } from "../components/Footer";

const Overlaps = ({ hasHeader, hasFooter }) => {
  return (
    <>
      {hasHeader && <MainHeader />}
      <Outlet />
      {hasFooter && <Footer />}
    </>
  );
};

export const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes className="margin">
        <Route element={<Overlaps hasHeader={true} hasFooter={true} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/edit" element={<EditData />} />
          <Route path="/publist" element={<UnityList />} />
          <Route path="/privlist" element={<PrivUnityList />} />
          <Route path="/info" element={<Info />} />
          <Route path="/center" element={<Center />} />
          <Route path="/qa" element={<Questions />} />
          <Route path="/request" element={<Request />} />
          <Route path="/bugs" element={<Bugs />} />
          <Route path="/find" element={<Find />} />
          <Route path="/check/:unityId" element={<Check />} />
          <Route path="/certify" element={<Certify />} />
          <Route path="/publist/:unityId" element={<UnityInfo />} />
          <Route path="/privlist/:unityId" element={<PrivUnityInfo />} />
        </Route>
        <Route element={<Overlaps hasHeader={false} hasFooter={false} />}>
          <Route path="/unity1" element={<Chess />} />
          <Route path="/unity2" element={<Park />} />
          <Route path="/unity3" element={<Plaza />} />
          <Route path="/unity4" element={<Unity4 />} />
          <Route path="/unity5" element={<Unity5 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
