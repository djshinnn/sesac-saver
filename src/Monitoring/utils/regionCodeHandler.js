export const regionCodeHandler = (regionPickData) => {
  switch (regionPickData.regionCode[0]) {
    case "su":
      return "서울특별시";
    case "gg":
      return "경기도";
    case "gw":
      return "강원도";
    case "cb":
      return "충청북도";
    case "cn":
      return "충청남도";
    case "jb":
      return "전라북도";
    case "jn":
      return "전라남도";
    case "gb":
      return "경상북도";
    case "gn":
      return "경상남도";
    case "jj":
      return "제주도";
    default:
      return "서울특별시";
  }
};
