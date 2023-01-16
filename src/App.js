import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

// LandingPage
import LandingPage from "./common/LandingPage";

// Monitoring
import Integration from "./Monitoring/pages/Integration";
import Charging from "./Monitoring/pages/Charging";
import DetailItem from "./Monitoring/pages/DetailItem";

// ChargerManagement
import Companies from "./ChargerManagement/pages/Companies";
import ChargingStation from "./ChargerManagement/pages/ChargingStation";
import ErrorList from "./ChargerManagement/pages/ErrorList";
import ErrorRegist from "./ChargerManagement/pages/ErrorRegist";

// ChargingHistory
import StationHistory from "./ChargingHistory/pages/StationHistory";
import StationHistoryMonthly from "./ChargingHistory/pages/StationHistoryMonthly";
import MemberHistory from "./ChargingHistory/pages/MemberHistory";
import MemberHistoryMonthly from "./ChargingHistory/pages/MemberHistoryMonthly";

// MemberManagement
import MemberList from "./MemberManagement/pages/MemberList";
import MemberCardList from "./MemberManagement/pages/MemberCardList";
import MemberPayList from "./MemberManagement/pages/MemberPayList";

// CustomerService
import Notice from "./CustomerService/pages/Notice";
import NoticeEdit from "./CustomerService/pages/NoticeEdit";
import FAQ from "./CustomerService/pages/FAQ";
import FAQEdit from "./CustomerService/pages/FAQEdit";
import PrivatePolicy from "./CustomerService/pages/PrivatePolicy";

// MyPage
import MyPage from "./MyPage/pages/EditPassword";
import Login from "./Login/pages/Login";

// Sidebar
import Sidebar from "./Navigation/pages/Sidebar";

// 404
import PageNotFound from "./common/404";

// login
import LoginButton from "./Login/components/LoginButton";

import { auth } from "./firebase/firebase";

import "./App.scss";

ChartJS.unregister(ChartDataLabels);

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  console.log(user);

  const navigateHandler = () => {
    if (user === undefined || user === null) {
      return;
    }

    !user && navigate("/");
  };

  useEffect(() => {
    navigateHandler();
  }, [user]);

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      {user && <Sidebar />}

      {/* Login Button */}
      {user && <LoginButton />}

      <Routes>
        {/* Monitoring */}
        <Route path="/integration" element={<Integration />} />

        <Route path="/charging/:stationId" element={<Charging />} />
        <Route path="/detailitem/:itemId" element={<DetailItem />} />

        {/* ChargerManagement */}
        <Route path="/companies" element={<Companies />} />
        <Route path="/chargingstation" element={<ChargingStation />} />
        <Route path="/errorlist" element={<ErrorList />} />
        <Route path="/errorregist" element={<ErrorRegist />} />

        {/* ChargingHistory */}
        <Route path="/stationhistory" element={<StationHistory />} />
        <Route path="/stationhistory/monthly" element={<StationHistoryMonthly />} />
        <Route path="/memberhistory" element={<MemberHistory />} />
        <Route path="/memberhistory/monthly" element={<MemberHistoryMonthly />} />

        {/* MemberManageMent */}
        <Route path="/memberlist" element={<MemberList />} />
        <Route path="/membercardlist" element={<MemberCardList />} />
        <Route path="/memberpaylist" element={<MemberPayList />} />

        {/* CustomerService */}
        <Route path="/notice" element={<Notice />} />
        <Route path="/noticeedit" element={<NoticeEdit />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faqedit" element={<FAQEdit />} />
        <Route path="/privatepolicy" element={<PrivatePolicy />} />

        {/* MyPage */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />

        {/* LandingPage */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
