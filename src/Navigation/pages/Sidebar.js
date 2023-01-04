import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={showSidebar}>
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">✅모니터링</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <li>
                    <Link to="/">통합 모니터링</Link>
                  </li>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">✅충전기 관리</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <li>
                    <Link to="/companies">충전소 사업자 목록</Link>
                  </li>
                  <li>
                    <Link to="/chargingstation">충전소 목록</Link>
                  </li>
                  <li>
                    <Link to="/errorlist">충전기 장애 목록</Link>
                  </li>
                  <li>
                    <Link to="/errorregist">충전기 장애 등록</Link>
                  </li>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">✅충전 내역</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <li>
                    <Link to="/stationhistory">충전소 기간별 내역</Link>
                  </li>
                  <li>
                    <Link to="/stationhistory/monthly">충전소 월별 내역</Link>
                  </li>
                  <li>
                    <Link to="/memberhistory">회원 기간별 내역</Link>
                  </li>
                  <li>
                    <Link to="/memberhistory/monthly">회원 월별 내역</Link>
                  </li>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">✅회원 관리</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <li>
                    <Link to="/memberlist">회원 목록</Link>
                  </li>
                  <li>
                    <Link to="/membercardlist">회원 결제 카드 목록</Link>
                  </li>
                  <li>
                    <Link to="/memberpaylist">회원 결제 내역</Link>
                  </li>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">✅고객관리</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <li>
                    <Link to="/notice">공지사항</Link>
                  </li>
                  <li>
                    <Link to="/noticeedit">공지사항 등록/변경</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/faqedit">FAQ 등록/변경</Link>
                  </li>
                  <li>
                    <Link to="/privatepolicy">개인정보 방침</Link>
                  </li>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">✅마이페이지</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <li>
                    <Link to="/mypage">비밀번호 수정</Link>
                  </li>
                </div>
              </AccordionDetails>
            </Accordion>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
