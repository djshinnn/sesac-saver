import { v4 } from "uuid";

export const SidebarData = [
  { id: v4(), path: "/", title: "통합 모니터링" },
  { id: v4(), path: "/charging", title: "충전소 모니터링" },
  { id: v4(), path: "/chargingstationlist", title: "충전소 목록" },
  { id: v4(), path: "/errorlist", title: "충전기 장애 목록" },
  { id: v4(), path: "/errorregist", title: "충전기 장애 등록" },
  { id: v4(), path: "/stationhistory", title: "충전소 기간별 내역" },
  { id: v4(), path: "/memberhistory", title: "회원 기간별 내역" },
  { id: v4(), path: "/memberlist", title: "회원 목록" },
  { id: v4(), path: "/membercardlist", title: "회원 결제 카드 목록" },
  { id: v4(), path: "/memberpaylist", title: "회원 결제 내역" },
  { id: v4(), path: "/notice", title: "공지사항" },
  { id: v4(), path: "/faq", title: "FAQ" },
  { id: v4(), path: "/faqedit", title: "FAQ 등록/변경" },
  { id: v4(), path: "/privatepolicy", title: "개인정보 방침" },
  { id: v4(), path: "/mypage", title: "비밀번호 수정" },
];
