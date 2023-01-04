import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import Integration from "./Monitoring/pages/Integration";
import Charging from "./Monitoring/pages/Charging";
import DetailItem from "./Monitoring/pages/DetailItem";

import Companies from "./ChargerManagement/pages/Companies";
import ChargingStation from "./ChargerManagement/pages/ChargingStation";
import ErrorList from "./ChargerManagement/pages/ErrorList";
import ErrorRegist from "./ChargerManagement/pages/ErrorRegist";

import StationHistory from "./ChargingHistory/pages/StationHistory";
import StationHistoryMonthly from "./ChargingHistory/pages/StationHistoryMonthly";
import MemberHistory from "./ChargingHistory/pages/MemberHistory";
import MemberHistoryMonthly from "./ChargingHistory/pages/MemberHistoryMonthly";

import MemberList from "./MemberManagement/pages/MemberList";
import MemberCardList from "./MemberManagement/pages/MemberCardList";
import MemberPayList from "./MemberManagement/pages/MemberPayList";

import Notice from "./CustomerService/pages/Notice";
import NoticeEdit from "./CustomerService/pages/NoticeEdit";
import FAQ from "./CustomerService/pages/FAQ";
import FAQEdit from "./CustomerService/pages/FAQEdit";
import PrivatePolicy from "./CustomerService/pages/PrivatePolicy";

import MyPage from "./MyPage/pages/MyPage";
import Login from "./Login/pages/Login";
import Sidebar from "./Navigation/pages/Sidebar";

import "./App.scss";

ChartJS.unregister(ChartDataLabels);

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Sidebar />
      <Routes>
        {/* Monitoring */}
        <Route path="/" element={<Integration />} />
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
      </Routes>
    </Router>
  );
}

export default App;
