import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { sidebarTitleData } from "./SidebarData";
import { sidebarSubTitleData } from "./SidebarData";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
<<<<<<< HEAD
  const showSidebar = () => setSidebar(!sidebar);

  const [expanded, setExpanded] = React.useState(false);
=======
  const [expanded, setExpanded] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const showSidebar = () => setSidebar(!sidebar);

>>>>>>> 92c89a22178a8bcc98b6b754457a0e2e3cbd3f32
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

  return (
    <ClickAwayListener onClickAway={() => setSidebar(false)}>
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

<<<<<<< HEAD
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
=======
            {sidebarTitleData.map((item) => (
              <Accordion
                key={item.id}
                sx={titleHoverStyle}
                expanded={expanded === item.expandedName}
                onChange={handleChange(item.expandedName)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className="menu-bars__title">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                </AccordionSummary>

                {sidebarSubTitleData.map(
                  (subItem) =>
                    item.name === subItem.name && (
                      <AccordionDetails sx={{ padding: "0 2rem" }} key={subItem.id}>
                        <div className="menu-bars__subtitle" onClick={showSidebar}>
                          <Link to={subItem.path}>
                            <div
                              className={
                                isSelected === subItem.subName
                                  ? "sub_active sub_active__focus"
                                  : "sub_active"
                              }
                              name={subItem.subName}
                              onClick={() => setIsSelected(subItem.subName)}
                            >
                              <li>{subItem.subTitle}</li>
                            </div>
                          </Link>
                        </div>
                      </AccordionDetails>
                    ),
                )}
              </Accordion>
            ))}
>>>>>>> 92c89a22178a8bcc98b6b754457a0e2e3cbd3f32
          </ul>
        </nav>
      </div>
    </ClickAwayListener>
  );
};

export default Navbar;
