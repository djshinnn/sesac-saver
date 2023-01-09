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
  const [expanded, setExpanded] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const showSidebar = () => setSidebar(!sidebar);

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

            {sidebarTitleData.map((item) => (
              <Accordion
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
                      <AccordionDetails sx={{ padding: "0 2rem" }}>
                        <div className="menu-bars__subtitle" onClick={showSidebar}>
                          <Link to={subItem.path}>
                            <div
                              className={
                                isSelected === subItem.subName
                                  ? "sub_active sub_active__focus"
                                  : "sub_active"
                              }
                              name={subItem.subName}
                              onClick={(e) => setIsSelected(subItem.subName)}
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
          </ul>
        </nav>
      </div>
    </ClickAwayListener>
  );
};

export default Navbar;
