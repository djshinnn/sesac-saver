import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiOutlineLineChart } from "react-icons/ai";
import { TbRecharging } from "react-icons/tb";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineAudit } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const titleHoverStyle = {
    backgroundColor: "#191c29",
    color: "white",

    "&:hover": {
      // backgroundColor: "white",
      color: "#1E73BE",

      // borderRadius: "0.5rem",
    },
  };

  // const subHoverStyle = {
  //   // backgroundColor: "#191c29",
  //   color: "white",
  //   "&:hover": {
  //     // backgroundColor: "white",
  //     color: "#1E73BE",
  //     // borderRadius: "0.5rem",
  //   },
  // };

  const subHoverStyle = {
    backgroundColor: "#2c3045",
    verticalAlign: "middle",
    "&:hover": {
      backgroundColor: "#1E73BE",
    },
  };
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={showSidebar}>
              <Link to="#" className="menu-bars" style={{ color: sidebar ? "white" : "black" }}>
                <AiOutlineClose className="menu-bars__close" />
              </Link>
            </li>

            <Accordion
              sx={titleHoverStyle}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">
                  <span>
                    <AiOutlineLineChart />
                  </span>
                  <span>모니터링</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <Link to="/">
                    <div className="sub_active">
                      <li>통합 모니터링</li>
                    </div>
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={titleHoverStyle}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">
                  <span>
                    <TbRecharging />
                  </span>
                  <span>충전기 관리</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <Link to="/companies">
                    <div className="sub_active">
                      <li>충전소 사업자 목록</li>
                    </div>
                  </Link>
                  <Link to="/chargingstation">
                    <div className="sub_active">
                      <li>충전소 목록</li>
                    </div>
                  </Link>
                  <Link to="/errorlist">
                    <div className="sub_active">
                      <li>충전기 장애 목록</li>
                    </div>
                  </Link>
                  <Link to="/errorregist">
                    <div className="sub_active">
                      <li>충전기 장애 등록</li>
                    </div>
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={titleHoverStyle}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">
                  <span>
                    <AiOutlineCalendar />
                  </span>
                  <span>충전 내역</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <Link to="/stationhistory">
                    <div className="sub_active">
                      <li>충전소 기간별 내역</li>
                    </div>
                  </Link>
                  <Link to="/stationhistory/monthly">
                    <div className="sub_active">
                      <li>충전소 월별 내역</li>
                    </div>
                  </Link>
                  <Link to="/memberhistory">
                    <div className="sub_active">
                      <li>회원 기간별 내역</li>
                    </div>
                  </Link>
                  <Link to="/memberhistory/monthly">
                    <div className="sub_active">
                      <li>회원 월별 내역</li>
                    </div>
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={titleHoverStyle}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">
                  <span>
                    <AiOutlineAudit />
                  </span>
                  <span>회원 관리</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <Link to="/memberlist">
                    <div className="sub_active">
                      <li>회원 목록</li>
                    </div>
                  </Link>
                  <Link to="/membercardlist">
                    <div className="sub_active">
                      <li>회원 결제 카드 목록</li>
                    </div>
                  </Link>
                  <Link to="/memberpaylist">
                    <div className="sub_active">
                      <li>회원 결제 내역</li>
                    </div>
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={titleHoverStyle}
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">
                  <span>
                    <AiOutlineNotification />
                  </span>
                  <span>고객관리</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <Link to="/notice">
                    <div className="sub_active">
                      <li>공지사항</li>
                    </div>
                  </Link>
                  <Link to="/noticeedit">
                    <div className="sub_active">
                      <li>공지사항 등록/변경</li>
                    </div>
                  </Link>
                  <Link to="/faq">
                    <div className="sub_active">
                      <li>FAQ</li>
                    </div>
                  </Link>
                  <Link to="/faqedit">
                    <div className="sub_active">
                      <li>FAQ 등록/변경</li>
                    </div>
                  </Link>
                  <Link to="/privatepolicy">
                    <div className="sub_active">
                      <li>개인정보 방침</li>
                    </div>
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={titleHoverStyle}
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="menu-bars__title">
                  <span>
                    <CgProfile />
                  </span>
                  <span>마이페이지</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="menu-bars__subtitle" onClick={showSidebar}>
                  <Link to="/mypage">
                    <div className="sub_active">
                      <li>비밀번호 수정</li>
                    </div>
                  </Link>
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
