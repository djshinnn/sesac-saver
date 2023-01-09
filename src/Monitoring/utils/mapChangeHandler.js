import MapSE from "../../assets/images/map_se.png";
import MapGG from "../../assets/images/map_gg.png";
import MapCB from "../../assets/images/map_cb.png";
import MapCN from "../../assets/images/map_cn.png";
import MapGB from "../../assets/images/map_gb.png";
import MapGN from "../../assets/images/map_gn.png";
import MapGW from "../../assets/images/map_gw.png";
import MapJB from "../../assets/images/map_jb.png";
import MapJN from "../../assets/images/map_jn.png";
import MapJJ from "../../assets/images/map_jj.png";

export const mapChangeHandler = (regionCode) => {
  switch (regionCode) {
    case "su":
      return MapSE;
    case "gg":
      return MapGG;
    case "cb":
      return MapCB;
    case "cn":
      return MapCN;
    case "gb":
      return MapGB;
    case "gn":
      return MapGN;
    case "gw":
      return MapGW;
    case "jb":
      return MapJB;
    case "jn":
      return MapJN;
    case "jj":
      return MapJJ;
    default:
      return MapSE;
  }
};
