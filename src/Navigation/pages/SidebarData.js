import { v4 } from "uuid";

import { AiOutlineLineChart } from "react-icons/ai";
import { TbRecharging } from "react-icons/tb";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineAudit } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const sidebarTitleData = [
  {
    id: v4(),
    title: "모니터링",
    expandedName: "panel1",
    name: "Monitoring",
    icon: <AiOutlineLineChart />,
  },
  {
    id: v4(),
    title: "충전기 관리",
    expandedName: "panel2",
    name: "ChargerManagement",
    icon: <TbRecharging />,
  },
  {
    id: v4(),
    title: "충전 내역",
    expandedName: "panel3",
    name: "ChargingHistory",
    icon: <AiOutlineCalendar />,
  },
  {
    id: v4(),
    title: "회원 관리",
    expandedName: "panel4",
    name: "MemberManageMent",
    icon: <AiOutlineAudit />,
  },
  {
    id: v4(),
    title: "고객관리",
    expandedName: "panel5",
    name: "CustomerService",
    icon: <AiOutlineNotification />,
  },
  { id: v4(), title: "마이페이지", expandedName: "panel6", name: "MyPage", icon: <CgProfile /> },
];

export const sidebarSubTitleData = [
  {
    id: v4(),
    path: "/integration",
    subTitle: "통합 모니터링",
    name: "Monitoring",
    subName: "Monitoring",
  },
  {
    id: v4(),
    path: "/companies",
    subTitle: "충전 사업자 목록",
    name: "ChargerManagement",
    subName: "Companies",
  },
  {
    id: v4(),
    path: "/chargingstation",
    subTitle: "충전소 및 충전기 목록 등록/변경",
    name: "ChargerManagement",
    subName: "ChargingStation",
  },
  {
    id: v4(),
    path: "/errorlist",
    subTitle: "충전기 고장 목록",
    name: "ChargerManagement",
    subName: "ErrorList",
  },
  {
    id: v4(),
    path: "/errorregist",
    subTitle: "충전기 고장 등록",
    name: "ChargerManagement",
    subName: "ErrorRegist",
  },
  {
    id: v4(),
    path: "/stationhistory",
    subTitle: "충전소 기간별 내역",
    name: "ChargingHistory",
    subName: "StationHistory",
  },
  {
    id: v4(),
    path: "/stationhistory/monthly",
    subTitle: "충전소 월별 내역",
    name: "ChargingHistory",
    subName: "StationHistoryMonthly",
  },
  {
    id: v4(),
    path: "/memberhistory",
    subTitle: "회원 기간별 내역",
    name: "ChargingHistory",
    subName: "MemberHistory",
  },
  {
    id: v4(),
    path: "/memberhistory/monthly",
    subTitle: "회원 월별 내역",
    name: "ChargingHistory",
    subName: "MemberHistoryMonthly",
  },
  {
    id: v4(),
    path: "/memberlist",
    subTitle: "회원 목록",
    name: "MemberManageMent",
    subName: "MemberList",
  },
  {
    id: v4(),
    path: "/membercardlist",
    subTitle: "회원 결제 카드 목록",
    name: "MemberManageMent",
    subName: "MemberCardList",
  },
  {
    id: v4(),
    path: "/memberpaylist",
    subTitle: "회원 결제 내역",
    name: "MemberManageMent",
    subName: "MemberPayList",
  },
  { id: v4(), path: "/notice", subTitle: "공지사항", name: "CustomerService", subName: "Notice" },
  {
    id: v4(),
    path: "/noticeedit",
    subTitle: "공지사항 등록/변경",
    name: "CustomerService",
    subName: "NoticeEdit",
  },
  { id: v4(), path: "/faq", subTitle: "FAQ", name: "CustomerService", subName: "FAQ" },
  {
    id: v4(),
    path: "/faqedit",
    subTitle: "FAQ 등록/변경",
    name: "CustomerService",
    subName: "FAQEdit",
  },
  // {
  //   id: v4(),
  //   path: "/privatepolicy",
  //   subTitle: "개인정보 방침",
  //   name: "CustomerService",
  //   subName: "PrivatePolicy",
  // },
  { id: v4(), path: "/mypage", subTitle: "비밀번호 수정", name: "MyPage", subName: "MyPage" },
];
