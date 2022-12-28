import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import Integration from "./Monitoring/pages/Integration";
import Charging from "./Monitoring/pages/Charging";
import DetailItem from "./Monitoring/pages/DetailItem";

import ChargingStationEdit from "./ChargerManagement/pages/ChargingStationEdit";
import ChargingStationList from "./ChargerManagement/pages/ChargingStationList";
import ErrorList from "./ChargerManagement/pages/ErrorList";
import ErrorRegist from "./ChargerManagement/pages/ErrorRegist";

import StationHistory from "./ChargingHistory/pages/StationHistory";
import MemberHistory from "./ChargingHistory/pages/MemberHistory";

import MemberList from "./MemberManagement/pages/MemberList";
import MemberCardList from "./MemberManagement/pages/MemberCardList";
import MemberPayList from "./MemberManagement/pages/MemberPayList";

import Notice from "./CustomerService/pages/Notice";
import FAQ from "./CustomerService/pages/FAQ";
import FAQEdit from "./CustomerService/pages/FAQEdit";
import PrivatePolicy from "./CustomerService/pages/PrivatePolicy";

import MyPage from "./MyPage/pages/MyPage";
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
        <Route path="/chargingstationlist" element={<ChargingStationList />} />
        <Route
          path="/chargingstationedit/:stationId"
          element={<ChargingStationEdit />}
        />
        <Route path="/errorlist" element={<ErrorList />} />
        <Route path="/errorregist" element={<ErrorRegist />} />

        {/* ChargingHistory */}
        <Route path="/stationhistory" element={<StationHistory />} />
        <Route path="/memberhistory" element={<MemberHistory />} />

        {/* MemberManageMent */}
        <Route path="/memberlist" element={<MemberList />} />
        <Route path="/membercardlist" element={<MemberCardList />} />
        <Route path="/memberpaylist" element={<MemberPayList />} />

        {/* CustomerService */}
        <Route path="/notice" element={<Notice />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faqedit" element={<FAQEdit />} />
        <Route path="/privatepolicy" element={<PrivatePolicy />} />

        {/* MyPage */}
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
