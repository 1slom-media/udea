import Admission from "../pages/admission";
import BaEnglish from "../pages/baenglish";
import BscInfarmation from "../pages/bscInfarmation";
import BscInternatiol from "../pages/bscInternational";
import BscAccounting from "../pages/bscaccaunting";
import Business from "../pages/business";
import Conventry from "../pages/coventry";
import Digitial from "../pages/digitial";
import Foundation from "../pages/foundation";
import Home from "../pages/home";
import Life from "../pages/life";
import News from "../pages/news";
import Programs from "../pages/programs";

export const DataRouter = [
  {
    id: 1,
    path: "/",
    Element: <Home />,
  },
  {
    id: 2,
    path: "/programs",
    Element: <Programs />,
  },
  {
    id: 3,
    path: "/sociallife",
    Element: <Life />,
  },
  {
    id: 4,
    path: "/admission",
    Element: <Admission />,
  },
  {
    id: 4,
    path: "/news",
    Element: <News />,
  },
  {
    id: 5,
    path: "/business",
    Element: <Business />,
  },
  {
    id: 6,
    path: "/coventry",
    Element: <Conventry />,
  },
  {
    id: 7,
    path: "/digitial",
    Element: <Digitial/>,
  },
  {
    id: 8,
    path: "/bscinfarmation",
    Element: <BscInfarmation/>,
  },
  {
    id: 9,
    path: "/baenglish",
    Element: <BaEnglish/>,
  },
  {
    id: 10,
    path: "/bscinternational",
    Element: <BscInternatiol/>,
  },
  {
    id: 11,
    path: "/bscaccaunting",
    Element: <BscAccounting/>,
  },
  {
    id: 12,
    path: "/foundationaccounting",
    Element: <Foundation/>,
  },
];
