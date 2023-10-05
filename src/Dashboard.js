import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItems from "./ListItems";
import Charts from "./Charts";
import StatisticsInformation from "./StatisticsInformation";
import { useParams } from "react-router-dom";
import RouteChangeTracker from "./RouteChangeTracker";
import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Helmet } from "react-helmet-async";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        아파트 매매가 지표비교
      </Link>
      {new Date().getFullYear()}
      {"."}
      {" | email : kchdagitul@hanmail.net"}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(0)
    })
  }
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard(props) {
  const is_mobile = useMediaQuery(defaultTheme.breakpoints.down("sm"));
  let meta_tag_title = "";
  let meta_tag_link = "";

  let { menu } = useParams();
  let menu_str = "";

  if (menu === "12") {
    menu_str = "인구수 - 가구수";
    meta_tag_title = <title>인구수 - 가구수</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/12" />;
  } else if (menu === "11") {
    menu_str = "매매가격지수 - 세대수";
    meta_tag_title = <title>매매가격지수 - 세대수</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/11" />;
  } else if (menu === "10") {
    menu_str = "매매가격지수 - 인구수";
    meta_tag_title = <title>매매가격지수 - 인구수</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/10" />;
  } else if (menu === "9") {
    menu_str = "매매가격지수 - 통화량";
    meta_tag_title = <title>매매가격지수 - 통화량</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/9" />;
  } else if (menu === "8") {
    menu_str = "매매가격지수 - 건설업 평균임금";
    meta_tag_title = <title>매매가격지수 - 건설업 평균임금</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/8" />;
  } else if (menu === "7") {
    menu_str = "중위매매가격 - 기본형공사비";
    meta_tag_title = <title>중위매매가격 - 기본형공사비</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/7" />;
  } else if (menu === "6") {
    menu_str = "매매가격지수 - 건설공사비지수";
    meta_tag_title = <title>매매가격지수 - 건설공사비지수</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/6" />;
  } else if (menu === "5") {
    menu_str = "매매가격지수 - 매매거래량";
    meta_tag_title = <title>매매가격지수 - 매매거래량</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/5" />;
  } else if (menu === "4") {
    menu_str = "중위매매가격 - 가구당소득";
    meta_tag_title = <title>중위매매가격 - 가구당소득</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/4" />;
  } else if (menu === "3") {
    menu_str = "중위매매가격 - 중위전세가격";
    meta_tag_title = <title>중위매매가격 - 중위전세가격</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/3" />;
  } else if (menu === "2") {
    menu_str = "매매가격지수 - 전세가격지수";
    meta_tag_title = <title>매매가격지수 - 전세가격지수</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/2" />;
  } else if (menu === "1") {
    menu_str = "매매가격지수 - 가구당소득";
    meta_tag_title = <title>매매가격지수 - 가구당소득</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz/1" />;
  } else {
    menu = 0;
    menu_str = "매매가격지수 - PIR지수";
    meta_tag_title = <title>매매가격지수 - PIR지수</title>;
    meta_tag_link = <link rel="canonical" href="https://apt-indexer.xyz" />;
  }

  RouteChangeTracker();

  const [open, setOpen] = React.useState(!is_mobile);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [selected_menu_name, setSelectedMenuName] = React.useState(menu_str);
  const setSelectedMenu = (menu_name) => {
    setSelectedMenuName(menu_name);
  };

  useEffect(() => {
    setSelectedMenu(menu_str);
  }, [menu]);

  let chart_name1 = "";
  let csv_name1 = "";
  let statistics_information1 = "";
  let chart_name2 = "";
  let csv_name2 = "";
  let statistics_information2 = "";
  let statistics_information3 = "";
  let statistics_information4 = "";
  let statistics_information5 = "";

  switch (selected_menu_name) {
    case "인구수 - 가구수": {
      chart_name1 = "인구수";
      csv_name1 = "인구수_가구수_1.csv";
      statistics_information1 = (
        <ul>
          <li>
            인구수 : "거주자", "거주불명자", "재외국민"이 포함된 자료입니다. 단,
            외국인은 제외
          </li>
          <li>
            자료출처 : 행정안전부 - 주민등록 인구통계 - 주민등록 인구 및
            세대현황
          </li>
          <li>
            자세한 사항은&nbsp;
            <Link color="primary" href="https://jumin.mois.go.kr/">
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 인구수는 특정 지역 또는 국가에서 실제로 거주하는 인원의 수를
            의미합니다. 인구수는 주로 통계청이나 인구조사를 통해 파악됩니다.
            인구수는 지역이나 국가의 인구 구성 및 인구 변동을 파악하는 데
            사용됩니다. 이는 경제, 사회, 정책 등 다양한 분야에서 중요한
            지표입니다.
          </li>
        </ul>
      );
      chart_name2 = "가구수";
      csv_name2 = "인구수_가구수_2.csv";
      statistics_information2 = (
        <ul>
          <li>단위 : 가구</li>
          <li>
            가구 : 1인 또는 2인 이상이 모여서 취사, 취침 등 생계를 같이 하는
            생활단위
          </li>
          <li>
            가구수 : 일반가구, 집단가구(6인 이상 비혈연 가구, 기숙사, 사회시설
            등) 및 외국인가구를 대상으로 집계
          </li>
          <li>
            출처 : 통계청,「인구총조사」, 2022, 2023.09.08, 가구형태별 가구 및
            가구원
          </li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1JC1501&conn_path=I2"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 가구수는 특정 지역 또는 국가 내에서 형성된 가구의 수를
            의미합니다. 가구를 이루는 사람들의 집단으로, 일반적으로 동거하고
            있는 사람들로 구성됩니다. 가구수는 인구 조사를 통해 파악되며,
            가구구성과 인구 구조를 이해하는 데 사용됩니다. 가구수는 유형별로
            구분되기도 하며, 가구 구성원의 수, 연령 구성, 가구 형태 등을 파악할
            수 있습니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            인구수와 가구수는 상호 관련성을 가지고 있습니다. 일반적으로 인구수가
            증가하면 가구수도 함께 증가할 가능성이 있습니다. 추가적인 이유로는
            단행본을 기반으로 가족 구성원 분리 등의 통계적 차이로 인해 가구수가
            인구수를 상회할 수 있습니다.
          </li>
          <br />
          <li>
            인구수와 가구수 간의 관계는 부동산 시장에도 영향을 미칠 수 있습니다.
            가구수의 증가는 주택 수요 증가와 연결될 수 있으며, 이는 부동산
            시장에서 주택 가격 상승 및 거래 활동의 증가로 이어질 수 있습니다.
          </li>
          <br />
          <li>
            하지만 인구수와 가구수 간의 관계는 복잡하며, 지역, 국가, 시기에 따라
            다를 수 있습니다. 다른 요인들(예: 경기 상황, 인프라 발전, 정책 변화
            등)도 함께 고려되어야 합니다. 인구수와 가구수는 여러 가지 요인의
            작용으로 변동하기 때문에, 집족구조, 소득 변동, 가구 형태 등을 함께
            고려하여 종합적으로 분석해야 합니다.
          </li>
          <br />
          <li>
            따라서 인구수와 가구수는 인구 구성 및 부동산 시장의 건전성을
            이해하기 위한 중요한 지표입니다. 이들을 종합적으로 분석하면 인구
            변화 및 부동산 시장의 동향과 관련된 더 정확한 정보를 얻을 수
            있습니다. 그러나 지역, 국가, 시기 등에 따라 상황이 달라질 수
            있으므로 주의하여 해석해야 합니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/10">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            가구수는 대한민국 내에서 존재하는 가구의 수를 나타내는 지표입니다.
            대한민국의 가구수는 일반적으로 증가하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            2000년부터 최근까지의 데이터를 살펴보면, 대한민국의 가구수는
            전반적으로 증가하는 경향을 보입니다. 이는 인구증가, 가구 구성 변화,
            주택수요 증가 등 다양한 요인에 영향을 받습니다.
          </li>
          <br />
          <li>
            그러나 최근 몇 년간 가구수 증가세는 둔화되고 있는 추세입니다.
            출생율의 감소와 고령화 등으로 인해 가구 형태의 변화가 일어나고
            있습니다. 독립세대의 증가와 유부녀 가구의 증가 등이 가구수 증가를
            둔화시키는 요인 중 하나입니다.
          </li>
          <br />
          <li>
            정부는 가구수 변화에 대응하기 위해 주택 공급 정책 및 다양한 보조금
            지원 등을 통해 주거환경 개선을 추진하고 있습니다. 또한 경제 상황
            변화, 이민 인구 유입 등에 따라 가구수의 변동성이 있을 수 있습니다.
          </li>
          <br />
          <li>
            가구수는 가구 구성과 인구 구조의 변화를 파악하는 데 중요한
            지표입니다. 한 가구당 평균 인원 수, 주택 수요와 공급 등 다른 경제
            지표와 함께 종합적으로 파악하여 정책과 시장 동향을 이해하는 것이
            중요합니다.
          </li>
        </ul>
      );
      break;
    }
    case "매매가격지수 - 세대수": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_세대수_1.csv";
      statistics_information1 = (
        <ul>
          <li>매매가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 매매APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/10">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "세대수";
      csv_name2 = "매매가격지수_세대수_2.csv";
      statistics_information2 = (
        <ul>
          <li>
            세대수 : "거주자", "거주불명자", "재외국민"이 포함된 자료입니다. 단,
            외국인은 제외
          </li>
          <li>
            자료출처 : 행정안전부 - 주민등록 인구통계 - 주민등록 인구 및
            세대현황
          </li>
          <li>
            자세한 사항은&nbsp;
            <Link color="primary" href="https://jumin.mois.go.kr/">
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 세대수 통계는 특정 지역 또는 국가에서의 가구 수를 측정하는
            지표입니다. 일반적으로 가구원의 수를 포함하며, 세대수는 인구구조 및
            가구 구성에 대한 정보를 제공합니다. 세대수 통계는 부동산 시장에서
            주택 수요 및 가구 경제 활동에 영향을 미치는 인구 구성과 관련하여
            사용됩니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            매매가격지수와 세대수 통계는 부동산 시장과 인구 구성과의 관계에 대한
            중요한 지표입니다. 이들 간에는 연관성이 있을 수 있습니다. 주택
            수요는 일반적으로 인구 구성과 관련이 있으며, 인구가 증가할 경우 주택
            수요도 증가할 수 있습니다. 따라서 세대수가 증가할수록 매매가격지수도
            증가할 가능성이 있습니다.
          </li>
          <br />
          <li>
            반대로 세대수 감소는 주택 수요에도 영향을 미칠 수 있습니다. 세대수가
            감소하면 주택 수요도 감소할 수 있으며, 이는 매매가격지수에도 영향을
            미칠 수 있습니다.
          </li>
          <br />
          <li>
            하지만 매매가격지수와 세대수 통계 간의 연관성은 지역, 국가, 시기에
            따라 다를 수 있으며, 다른 요인들도 함께 고려되어야 합니다. 부동산
            시장은 다양한 요인에 영향을 받기 때문에 매매가격지수와 세대수 통계
            간의 연관성은 복잡하고 다양합니다.
          </li>
          <br />
          <li>
            따라서 매매가격지수와 세대수 통계는 부동산 시장과 인구 구성의 관계를
            이해하고 예측하는 데에 중요한 지표입니다. 이들을 종합적으로 분석하면
            부동산 시장의 건전성과 인구 변화에 대한 더 정확한 정보를 제공할 수
            있습니다. 그러나 지역, 국가, 시기 등에 따라 상황이 다양하므로
            주의하여 해석해야 합니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            세대수는 대한민국 내에서 세대별 가구 수를 나타내는 지표입니다.
            대한민국의 세대수는 일반적으로 감소하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            2000년부터 최근까지의 데이터를 살펴보면, 대한민국의 세대수는
            전반적으로 감소하는 경향을 보입니다. 이는 다양한 요인에 기인할 수
            있습니다.
            <br />
            <br />
            1. 출생율 감소: 출산율의 하락으로 인해 신생세대의 수가 줄어들고
            있습니다. 여성의 사회경제적인 참여 증가, 교육 수준 상승, 주거 여건
            개선 등의 사회적 변화로 출산율이 감소한 것으로 보입니다.
            <br />
            <br />
            2. 노령화: 대한민국의 고령 인구 비율이 상승하여 경제활동 인구 비율이
            감소하고 있습니다. 더 많은 사람들이 고령 연령으로 진입하면서
            세대수가 감소하는 것으로 나타납니다.
            <br />
            <br />
            3. 독립세대 증가: 가구 형태 변화로 인해 독립세대의 수가 증가하고
            있습니다. 젊은 세대의 경제활동 및 주거 독립을 통해 세대 수가 점차
            줄어들고 있습니다
            <br />
          </li>
          <br />
          <li>
            정부는 출산율 증가와 저출산 사회 초래 요인을 해결하기 위해 다양한
            정책을 추진하고 있습니다. 또한 노령화 사회에 대응하기 위해 노령
            인구의 경제 및 사회 참여를 촉진하는 정책도 진행하고 있습니다.
          </li>
          <br />
          <li>
            세대수는 가구 구성과 인구 구조의 변화를 파악하는 데 중요한
            지표입니다. 따라서 이러한 변화를 적절히 이해하고 대응하기 위해
            지속적인 연구와 분석이 필요합니다.
          </li>
        </ul>
      );
      break;
    }
    case "매매가격지수 - 인구수": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_인구수_1.csv";
      statistics_information1 = (
        <ul>
          <li>매매가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 매매APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/5">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "인구수";
      csv_name2 = "매매가격지수_인구수_2.csv";
      statistics_information2 = (
        <ul>
          <li>
            인구수 : "거주자", "거주불명자", "재외국민"이 포함된 자료입니다. 단,
            외국인은 제외
          </li>
          <li>
            자료출처 : 행정안전부 - 주민등록 인구통계 - 주민등록 인구 및
            세대현황
          </li>
          <li>
            자세한 사항은&nbsp;
            <Link color="primary" href="https://jumin.mois.go.kr/">
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 인구수 통계는 특정 지역 또는 국가의 인구 수를 측정한
            지표입니다. 이는 인구의 증가 및 감소 추이를 포함합니다. 인구수
            통계는 특정 지역의 인구 변동성과 인구구조를 파악하는데 사용됩니다.
            인구 변화는 시장 크기와 수요에 영향을 줄 수 있으며, 부동산 시장에서
            주택 가격과 거래 활동에도 영향을 줄 수 있습니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            매매가격지수와 인구수 통계는 부동산 시장과 인구 변화와의 상호 관계를
            이해하기 위한 두 개의 지표입니다. 이들 간에는 연관성이 있을 수
            있습니다. 예를 들어, 인구수가 증가할 경우, 주택 수요도 상승할 수
            있습니다. 이로 인해 주택 가격이 상승하고 매매가격지수도 증가할 수
            있습니다.
          </li>
          <br />
          <li>
            또한 인구수 변화는 지역의 부동산 시장 상황에도 영향을 줄 수
            있습니다. 인구가 증가하는 지역에서는 주택 수요도 증가하고, 이는 주택
            가격의 상승과 거래 활동의 증가로 이어질 수 있습니다.
          </li>
          <br />
          <li>
            그러나 매매가격지수와 인구수 통계 간의 연관성은 지역, 국가, 시기에
            따라 다를 수 있으며, 다른 요인들도 함께 고려되어야 합니다. 부동산
            시장은 여러 요인에 영향을 받기 때문에 매매가격지수와 인구수 통계
            사이의 연관성은 복잡하고 다양합니다.
          </li>
          <br />
          <li>
            따라서 매매가격지수와 인구수 통계는 부동산 시장과 인구 변화의 관계를
            이해하고 예측하는 데에 중요한 지표입니다. 이들을 종합적으로 분석하면
            부동산 시장의 건전성과 인구 변화에 대한 더 정확한 정보를 제공할 수
            있습니다. 그러나 지역, 국가, 시기 등에 따라 상황이 다양하므로
            주의하여 해석해야 합니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            인구수는 대한민국 내의 총 인구 수를 나타내는 지표입니다. 대한민국의
            인구수는 일반적으로 증가하는 경향을 보이고 있지만, 최근 몇 년간
            증가세가 둔화되고 있는 추세입니다.
          </li>
          <br />
          <li>
            2000년부터 최근까지의 데이터를 살펴보면, 대한민국의 인구수는
            전반적으로 증가하고 있습니다. 그러나 경제 발전과 함께 출산율의 하락,
            고령화인구의 증가 등으로 인해 인구 증가세는 둔화된 상황입니다.
          </li>
          <br />
          <li>
            인구 수 증가가 둔화되는 이유는 다음과 같습니다.
            <br />
            <br />
            1. 출산율 하락: 여성의 사회경제적인 참여 증가, 교육 수준 상승, 주거
            여건 개선 등의 사회적 변화로 출산율이 주춤되고 있습니다. 이는 인구
            증가율에 직접적인 영향을 미칩니다.
            <br />
            <br />
            2. 고령화: 대한민국의 고령 인구 비율이 상승하고 있습니다. 더 많은
            사람들이 고령 연령으로 진입하면서 인구 증가율이 감소하는 영향을
            미칩니다.
            <br />
            <br />
            3. 이민: 대한민국은 다양한 국적의 이민자를 유치하며 다문화 사회의
            특징을 가지고 있습니다. 이민인구의 증가는 인구수에 영향을 줄 수
            있지만, 전체적인 수준에서는 인구 증가율을 크게 영향을 주지 않고
            있습니다.
            <br />
          </li>
          <br />
          <li>
            정부는 출산율의 증가와 인구정책을 통해 인구 증가율을 안정화시키기
            위한 노력을 기울이고 있습니다. 인구 감소와 고령화에 따른 사회,
            경제적인 영향을 고려하여 적절한 정책을 시행하고 있습니다.
          </li>
          <br />
          <li>
            인구수는 국가의 경제, 사회, 정책 등에 영향을 미치는 중요한
            지표입니다. 인구 변동은 여러 분야에 영향을 미치며, 따라서 인구
            동향을 지속적으로 파악하고 대응하는 것이 중요합니다.
          </li>
        </ul>
      );
      break;
    }
    case "매매가격지수 - 통화량": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_통화량1.csv";
      statistics_information1 = (
        <ul>
          <li>매매가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 매매APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/2">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "통화량";
      csv_name2 = "매매가격지수_통화량2.csv";
      statistics_information2 = (
        <ul>
          <li>통화량 : M2(광의통화)</li>
          <li>단위 : 십억원</li>
          <br />
          <li>
            M2(광의통화) = M1 + 만기2년미만 정기예적금 + 시장형상품 +
            만기2년미만 실적배당형상품 + 만기2년미만 금융채 + 기타(CMA,
            신탁형증권저축, 종금사 발행어음, 2년미만 거주자 외화예금)
          </li>
          <li>
            자료출처 : 한국은행,「통화금융통계」, 2023.06, 2023.09.04, M2 상품별
            구성내역(평잔, 계절조정계열)
          </li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kosis.kr/statHtml/statHtml.do?orgId=301&tblId=DT_101Y003&conn_path=I2"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 통화량 통계는 경제에서 통화의 수량과 변동을 측정하는
            지표입니다. 통화량은 일반적으로 국가의 통화 또는 통화판단을
            의미하며, 주로 중앙은행이 제공하는 데이터를 기반으로 산출됩니다.
            통화량 통계는 통화의 추이와 변동성을 파악하여 경제 활동을 평가하는
            데 사용됩니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            매매가격지수와 통화량 통계는 부동산 시장과 통화의 상호 관계를
            이해하는 데에 중요한 지표입니다. 이들 지표 간에는 일부 연관성이 있을
            수 있습니다. 일반적으로 매매가격지수란 주택 가격 상승에 따라
            통화량이 늘어날 경향이 있을 수 있습니다. 부동산 시장에서 주택 가격이
            상승하면 투자 및 대출 활동이 증가하여 통화의 수량도 더 많아질 수
            있기 때문입니다.
          </li>
          <br />
          <li>
            반대로 매매가격지수의 하락은 부동산 시장과 통화량 간의 연관성을 갖고
            있을 수 있습니다. 주택 가격의 하락으로 인해 부동산 시장에서의 투자
            및 대출 활동이 저하될 수 있으며, 이는 통화의 수량도 감소할 수
            있습니다.
          </li>
          <br />
          <li>
            그러나 통화량은 다른 요인들(예: 중앙은행 정책, 경기 상황, 인플레이션
            등)의 영향도 받으므로 매매가격지수와 통화량 통계 간의 연관성은
            복잡하고 다양합니다.
          </li>
          <br />
          <li>
            따라서 매매가격지수와 통화량 통계는 부동산 시장과 통화의 상호관계를
            이해하고 예측하는 데에 중요한 지표입니다. 이들을 종합적으로 분석하면
            부동산 시장의 건전성과 경제 활동의 동향을 평가하는데 더 정확한
            정보를 제공할 수 있습니다. 그러나 지역, 국가, 시기 등에 따라 상황이
            달라질 수 있으므로 주의하여 해석해야 합니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            통화량은 대한민국 내의 통화의 총량을 나타내는 지표입니다. 대한민국의
            통화량은 일반적으로 상승하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            최근 몇 년간의 데이터를 살펴보면, 대한민국의 통화량은 전반적으로
            증가하고 있습니다. 이러한 상승은 다양한 요인에 기인할 수 있습니다.
            <br />
            <br />
            1. 경제성장: 경제적인 성장은 통화 수요를 증가시키며, 이로 인해 통화
            공급도 확대될 수 있습니다. 대한민국의 경제 성장에 따라 통화량이
            증가하는 경향을 보일 수 있습니다.
            <br />
            <br />
            2. 인플레이션: 과도한 통화 공급은 물가 상승을 초래할 수 있습니다.
            인플레이션 문제를 해결하기 위해 통화량을 증가시키는 경향이 있을 수
            있습니다.
            <br />
            <br />
            3. 외환수급: 외화의 유입이 증가할 경우 통화량 또한 증가할 수
            있습니다. 외화 수급이 통화량 상승과 연관될 수 있습니다.
            <br />
            <br />
            4. 정부 정책: 정부의 통화 정책은 통화량의 변동에 영향을 미칠 수
            있습니다. 통화량을 확대하거나 축소하는 조치는 경제에 따른 정책
            방향에 따라 달라질 수 있습니다.
            <br />
          </li>
          <br />
          <li>
            통화량은 경제활동과 금융시장에 큰 영향을 미치는 중요한 지표이지만,
            단순히 통화량 상승만으로 전체 경제 상황을 평가하는 것은 어렵습니다.
            적절한 통화 균형과 안정성을 유지하기 위해 정부와 중앙은행은 통화량을
            조절하는 여러 정책을 시행하고 있습니다.
          </li>
          <br />
          <li>
            따라서 통화량은 정부 정책의 영향과 경제 환경에 따라 변동할 수 있는
            지표이며, 다른 경제 지표와 함께 종합적으로 판단하는 것이 중요합니다.
          </li>
        </ul>
      );
      break;
    }
    case "매매가격지수 - 건설업 평균임금": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_건설업일평균임금_1.csv";
      statistics_information1 = (
        <ul>
          <li>매매가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 매매APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/2">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "건설업 평균임금";
      csv_name2 = "매매가격지수_건설업일평균임금_2.csv";
      statistics_information2 = (
        <ul>
          <li>
            건설업 평균임금 : 사용자가 근로의 대가로 노동자에게 일급으로
            지급하는 기본급여액
          </li>
          <li>1일 8시간을 기준 금액</li>
          <li>자료출처 : 대한건설협회</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="http://www.cak.or.kr/board/boardList.do?boardId=spend_wage&menuId=61"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 건설업 평균임금 통계는 건설업에서 종사하는 노동자들의 평균
            임금을 나타내는 지표입니다. 이는 건설업 내에서의 노동력의 가치와
            수요에 대한 정보를 제공합니다. 건설업 평균임금 통계는 부동산
            시장에서 건설활동의 건조지 및 노동 수요를 파악하는 데에 사용됩니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            매매가격지수와 건설업 평균임금 통계는 부동산 시장 및 건설업과 관련된
            두 개의 지표입니다. 이들 지표는 서로 연관성을 가질 수 있습니다.
            일반적으로 건설업 평균임금이 상승할 경우, 건설업에서의 노동비용이
            증가하여 주택 건설 비용이 상승할 수 있습니다. 이로 인해
            매매가격지수도 상승할 가능성이 있습니다.
          </li>
          <br />
          <li>
            반대로 건설업 평균임금이 하락하면 주택 건설 비용도 감소할 수 있으며,
            매매가격지수에도 영향을 미칠 수 있습니다. 그러나 이러한 연관성은
            지역, 국가, 시기에 따라 다를 수 있으며, 다른 요인들도 함께
            고려되어야 합니다. 예를 들어, 건설 재료 가격, 규제 등이
            매매가격지수에도 영향을 줄 수 있습니다.
          </li>
          <br />
          <li>
            따라서 매매가격지수와 건설업 평균임금 통계는 부동산 시장과 건설업의
            상호관계를 이해하고 예측하는 데에 중요한 지표입니다. 이들을
            종합적으로 분석하면 부동산 시장의 건전성과 건설활동 동향에 대한 더
            정확한 정보를 얻을 수 있습니다. 그러나 지역, 국가, 시기에 따라
            상황이 달라질 수 있으므로 주의하여 해석해야 합니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            건설업 평균임금은 대한민국에서 건설업 종사자들의 평균 급여 수준을
            나타내는 지표입니다. 대한민국의 건설업 평균임금은 일반적으로
            상승하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            최근 몇 년간의 데이터를 살펴보면, 대한민국의 건설업 평균임금은
            전반적으로 상승하고 있습니다. 이는 건설업 내의 노동자들의 임금
            수준이 점차 향상되고 있다는 것을 의미합니다.
          </li>
          <br />
          <li>
            건설업 평균임금의 상승은 여러 요인에 기인할 수 있습니다. 이는 다음과
            같은 요소들에 영향을 받을 수 있습니다.
            <br />
            <br />
            1. 경기 상황: 대한민국의 경제가 성장 및 회복 추세일 때에는 건설업의
            수요가 증가하고, 이로 인해 노동 수요도 증가할 수 있습니다. 따라서
            노동 수요와 건설업 평균임금은 경기 상황과 관련성이 있을 수 있습니다.
            <br />
            <br />
            2. 기술 요구도: 건설업은 기술과 노동력이 밀접하게 연결되어 있습니다.
            현대 건설업에서는 고도의 기술을 필요로 하며, 이는 노동자들에게 더
            높은 기술과 노동력을 요구할 수 있습니다. 높은 기술 요구도는 건설업
            평균임금 상승에 영향을 미칠 수 있습니다.
            <br />
            <br />
            3. 노동시장 상황: 노동시장의 상황 변동은 임금수준에 영향을 줄 수
            있습니다. 일자리 수요와 공급의 불균형이 발생하거나, 노동자들의
            조직화 정도에 따라 건설업 평균임금도 변동할 수 있습니다.
            <br />
          </li>
          <br />
          <li>
            정부는 건설업 노동자들의 권익을 보호하고 건설업 임금 수준을
            안정화시키기 위해 다양한 노력을 기울이고 있습니다. 또한 건설업체들도
            노동자의 근로환경 개선과 경쟁력 확보를 위해 임금 수준에 주목하고
            있습니다.
          </li>
          <br />
          <li>
            건설업 평균임금은 건설업 노동자들의 생활수준과 건설업체의 경쟁력을
            판단하는 데 유용한 지표입니다. 그러나 이는 전반적인 경향을 파악하는
            것이므로 개인적인 상황과 지역적인 변동성을 고려해야 합니다.
          </li>
        </ul>
      );
      break;
    }
    case "중위매매가격 - 기본형공사비": {
      chart_name1 = "중위매매가격";
      csv_name1 = "중위매매가격_기본형공사비_1.csv";
      statistics_information1 = (
        <ul>
          <li>
            중위매매가격 : 표본주택의 매매가격을 순서대로 정렬했을 때 정중앙에
            위치한 매매가격
          </li>
          <li>자료출처 : KB 월간시계열 - 중위매매</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/3">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "기본형공사비";
      csv_name2 = "중위매매가격_기본형공사비_2.csv";
      statistics_information2 = (
        <ul>
          <li>기본형공사비 : 분양가상한제 적용주택의 기본형건축비</li>
          <li>지상층건축비, 단위 : 천원/㎡</li>
          <li>2019-03-01 ~ : 16 ~ 25층 이하, 60㎡ 초과 ~ 85㎡ 이하</li>
          <li>
            2008-02-28 ~ 2018.03.01 : 11 ~ 20층 이하, 60㎡ 초과 ~ 85㎡ 이하
          </li>
          <li>자료출처 : 한국주택협회</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://www.housing.or.kr/user/boardList.do?handle=72&siteId=home&id=home_030104000000"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 기본형공사비는 주택을 건설하기 위해 필요한 기본 공사의 비용을
            나타냅니다. 이는 주택의 구조, 인테리어, 외부 필요 사항 등을 포함하며
            건설 시 이러한 기본 공사의 비용을 반영합니다. 기본형공사비는 부동산
            시장에서 주택 건설 비용 동향을 분석하는 데에 사용됩니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            중위매매가격과 기본형공사비는 부동산 시장의 건축과 가격 측면을
            나타내는 지표입니다. 이들 지표 간에는 연관성이 있을 수 있습니다.
            일반적으로 기본형공사비가 상승할 경우, 주택 건설 비용이 상승하여
            중위매매가격에 영향을 줄 수 있습니다. 주택 건설 비용의 증가로 인해
            주택 가격이 상승할 수 있기 때문입니다.
          </li>
          <br />
          <li>
            반대로 기본형공사비가 하락할 경우, 주택 건설 비용의 감소로 인해
            중위매매가격에도 영향을 미칠 수 있습니다. 그러나 이러한 연관성은
            지역, 국가, 시기에 따라 다를 수 있습니다. 아울러 시장에 영향을
            미치는 다른 요인들(예: 건설 재료 가격, 노동력 시장, 규제 등)도 함께
            고려되어야 합니다.
          </li>
          <br />
          <li>
            중위매매가격과 기본형공사비는 부동산 시장의 건전성과 건설 활동을
            분석하고 예측하는 데에 중요한 지표입니다. 이들을 함께 종합적으로
            분석하면 부동산 시장의 건축과 가격 동향에 대한 더 정확한 정보를 얻을
            수 있습니다. 그러나 지역이나 시기에 따라 상황이 달라질 수 있으므로
            유의하여 해석해야 합니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/3">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            기본형공사비는 대한민국에서 기본적인 건축공사를 수행하는 데 필요한
            공사비용을 나타내는 지표입니다. 대한민국의 기본형공사비는 일반적으로
            상승하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            2000년부터 최근까지의 데이터를 살펴보면, 대한민국의 기본형공사비는
            전반적으로 상승하고 있습니다. 이는 건설업체의 재료 및 노동비용 등이
            증가하면서 공사비용이 상승하는 것을 의미합니다.
          </li>
          <br />
          <li>
            기본형공사비 상승의 주된 이유는 다음과 같습니다.
            <br />
            <br />
            1. 재료비 상승: 기본형공사에 사용되는 재료의 가격이 상승하면
            공사비용도 증가합니다. 예를 들어 철강, 시멘트, 목재 등의 원자재 가격
            상승이 기본형공사비 상승에 영향을 줄 수 있습니다.
            <br />
            <br />
            2. 노동비 상승: 기본형공사에 필요한 인력의 급여가 증가하면
            공사비용도 상승합니다. 인력의 수급 부족이나 노동시장의 상황 변동
            등이 노동비 상승에 영향을 미칠 수 있습니다.
            <br />
            <br />
            3. 부가비용 상승: 건축자재의 공급 부족, 각종 규제 요소, 건설현장의
            환경적인 요인 등이 기본형공사비에 영향을 미칩니다.
            <br />
          </li>
          <br />
          <li>
            정부는 기본형공사비 상승과 관련하여 건설업체 지원, 건축자재의
            안정적인 공급 조성, 비용 절감 방안 등을 모색하고 있습니다. 또한
            정부의 인프라 사업, 주택 공급 등의 정책에 따라 기본형공사비의
            경향성이 변화할 수 있습니다.
          </li>
          <br />
          <li>
            기본형공사비 상승은 주택 및 인프라 등 건설 활동에 영향을 미치는
            중요한 요소입니다. 또한 경제 전체의 건강성을 판단하는 데에도 사용될
            수 있습니다. 따라서 기본형공사비의 변동을 주시하여 시장 동향을
            파악하는 것이 중요합니다.
          </li>
        </ul>
      );
      break;
    }
    case "매매가격지수 - 건설공사비지수": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_건설공사비지수_1.csv";
      statistics_information1 = (
        <ul>
          <li>매매가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 매매APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/1">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "건설공사비지수";
      csv_name2 = "매매가격지수_건설공사비지수_2.csv";
      statistics_information2 = (
        <ul>
          <li>
            건설공사비지수 : 건설공사 직접공사비(재료, 노무, 장비 등)의
            가격변동을 측정하는 지수
          </li>
          <li>기준시점 : 2015년 = 100.0</li>
          <li>출처 : KICT 공사비원가관리센터</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://cost.kict.re.kr/#/notice/file/detail/36467"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 건설공사비지수는 부동산 시장과 밀접한 관련이 있는 지표입니다.
            이는 건설 공사의 비용 변동을 측정하여 부동산 시장에서 건축 및 개량
            작업의 가격 동향을 파악하는 데 사용됩니다. 건설공사비지수는 건설
            재료, 노동비, 기계 장비 등의 비용을 포함하며, 이를 통해 부동산
            시장에서의 건축 활동의 변동성을 분석할 수 있습니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            매매가격지수와 건설공사비지수는 부동산 시장의 건전성과 활성성을
            평가하는 데에 중요한 지표입니다. 두 지표는 서로 연관성을 가지고
            있습니다. 일반적으로 건설공사비지수가 상승할 경우, 주택 건설 비용이
            상승하고 이로 인해 주택 판매 가격에 영향을 미칠 수 있습니다. 이는
            매매가격지수의 상승으로 이어질 수 있습니다.
          </li>
          <br />
          <li>
            반대로 건설공사비지수가 하락할 경우, 주택 건설 비용이 감소하고 이로
            인해 주택 가격에도 영향을 미칠 수 있습니다. 이는 매매가격지수의
            하락으로 이어질 수 있습니다.
          </li>
          <br />
          <li>
            그러나 이러한 연관성은 지역, 국가, 시기에 따라 다를 수 있으며, 다른
            요인들과 함께 종합적으로 고려되어야 합니다. 부동산 시장은 여러
            요인의 영향을 받기 때문에 매매가격지수와 건설공사비지수 사이의
            연관성은 복잡하고 다양할 수 있습니다.
          </li>
          <br />
          <li>
            따라서 매매가격지수와 건설공사비지수는 부동산 시장의 건전성과
            활성성을 평가하는 데에 활용되는 지표로서, 유의미한 연관성을 가질 수
            있지만, 상황에 따라 다른 추세를 나타낼 수 있습니다. 이를 종합적으로
            분석하여 부동산 시장의 건전성 및 활성성을 평가하는 데에 활용할 수
            있습니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            건설공사비지수는 대한민국에서 건설업의 공사비용 변동을 나타내는
            지표입니다. 대한민국의 건설공사비지수는 일반적으로 상승하는 경향을
            보이고 있습니다.
          </li>
          <br />
          <li>
            2000년부터 최근까지의 데이터를 살펴보면, 대한민국의 건설공사비지수는
            전반적으로 상승하고 있습니다. 이는 건설업체의 재료 및 노동비용 등이
            증가하면서 공사비용이 상승하는 것을 의미합니다.
          </li>
          <br />
          <li>
            건설공사비지수 상승의 주된 이유는 다음과 같습니다.
            <br />
            <br />
            1. 재료비 상승: 건설공사에 사용되는 재료의 가격이 상승하면
            공사비용도 증가합니다. 예를 들어 철강, 시멘트, 목재 등의 원자재 가격
            상승이 건설공사비지수 상승에 영향을 줄 수 있습니다.
            <br />
            <br />
            2. 노동비 상승: 건설공사에 필요한 인력의 급여가 증가하면 공사비용도
            상승합니다. 인력의 수급 부족이나 노동시장의 상황 변동 등이 노동비
            상승에 영향을 미칠 수 있습니다.
            <br />
            <br />
            3. 기타 요인: 토지 가격 상승, 건설업체의 경영 비용 증가, 각종 규제
            요소 등도 공사비지수 상승에 영향을 줄 수 있습니다.
            <br />
          </li>
          <br />
          <li>
            정부는 건설비용 상승과 관련하여 건설업체 지원 및 비용 절감 방안을
            모색하고 있습니다. 정부의 인프라 사업, 주택 공급 등의 정책에 따라
            건설공사비지수의 경향성이 변화할 수 있습니다.
          </li>
          <br />
          <li>
            건설공사비지수 상승은 주택 및 인프라 등 건설 활동에 영향을 미치는
            중요한 요소입니다. 공사비용 상승은 부동산 시장이나 경제 전반의
            건강성을 판단하는 데에도 사용될 수 있습니다. 따라서 건설공사비지수의
            변동을 주시하여 시장 동향을 파악하는 것이 중요합니다.
          </li>
        </ul>
      );
      break;
    }
    case "매매가격지수 - 매매거래량": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_거래량_1.csv";
      statistics_information1 = (
        <ul>
          <li>매매가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 매매APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/1">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "매매거래량";
      csv_name2 = "매매가격지수_거래량_2.csv";
      statistics_information2 = (
        <ul>
          <li>매매거래량 : 월별 아파트 매매거래량</li>
          <li>통계표명 : 월별_아파트매매</li>
          <li>출처 : 국토교통부</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://www.reb.or.kr/r-one/na/ntt/selectNttInfo.do?mi=9511&bbsId=1109&nttSn=44765"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 매매거래량은 부동산 시장에서 발생한 실제 매매 거래의 수를
            나타내는 지표입니다. 주택 매매 거래의 거래 횟수나 거래 수량을
            의미합니다. 매매거래량은 시장의 활성화 정도와 거래 활동 성질을
            나타내며, 시장에서의 거래 활발성을 파악하는 데에 사용됩니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            매매가격지수와 매매거래량은 부동산 시장 분석에 중요한 지표이며, 상호
            연관성을 가지고 있습니다. 일반적으로 매매가격지수와 매매거래량은
            연관성이 높아집니다. 즉, 매매 거래량이 증가하면 매매가격지수도
            상승하는 경향을 보이고, 매매 거래량이 감소하면 매매가격지수도 하락할
            가능성이 있습니다. 이는 시장에서의 거래 활동이 주택 가격에 영향을
            미치기 때문입니다. 매매 거래 수요가 증가하면 주택 가격을 끌어올릴 수
            있으며, 반대로 거래 수요의 감소는 주택 가격의 하락을 초래할 수
            있습니다.
          </li>
          <br />
          <li>
            그러나 연간 매매거래량이나 분기 매매거래량과 매매가격지수 간의
            정확한 관계는 지역이나 시기에 따라 다를 수 있습니다. 다른 요인들이
            함께 고려되어야 하며, 거래량과 가격 변동 간의 시차가 있을 수
            있습니다.
          </li>
          <br />
          <li>
            따라서 매매가격지수와 매매거래량은 부동산 시장 분석에서 함께
            고려되는 지표이며, 추세를 종합적으로 파악하여 부동산 시장의 건전성과
            활발성을 평가하는 데에 사용됩니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            아파트 매매거래량은 대한민국에서 아파트의 매매 거래가 얼마나
            이루어지고 있는지를 나타내는 지표입니다. 대한민국의 아파트
            매매거래량은 일반적으로 변동성이 있으며, 최근 몇 년간은 상승 추세를
            보이고 있습니다.
          </li>
          <br />
          <li>
            2010년부터 2019년까지의 데이터를 살펴보면, 대한민국의 아파트
            매매거래량은 전반적으로 상승하고 있습니다. 특히 2010년대 중반부터
            아파트 매매 거래가 크게 증가하고 있습니다.
          </li>
          <br />
          <li>
            이러한 상승 추세는 주택 구입을 통한 자산 형성의 수요, 부동산 투자
            등의 요인에 의해 영향을 받았을 것으로 예상됩니다. 또한
            대한민국에서는 주택 구입에 대한 정부 정책의 영향도 매매 거래량에
            영향을 미치고 있습니다.
          </li>
          <br />
          <li>
            매매거래량은 부동산 시장의 건전성과 활성도를 나타내는 중요한
            지표입니다. 큰 변동성을 가질 수 있으며, 외부 요인들이 매매 거래량에
            영향을 줄 수 있습니다. 예를 들어, 정부의 부동산 규제 정책이나
            금융정책, 경제 상황 변동 등은 아파트 매매 거래량에 영향을 미칠 수
            있습니다.
          </li>
          <br />
          <li>
            아파트 매매거래량은 부동산 시장의 활기와 경기 상황을 파악하는 데
            유용한 지표이지만, 단순히 거래량만으로는 시장의 구체적인 상황을
            완벽하게 판단하기는 어렵습니다. 따라서 관련된 다른 지표와 함께
            종합적으로 분석해야 합니다.
          </li>
        </ul>
      );
      break;
    }
    case "중위매매가격 - 가구당소득": {
      chart_name1 = "중위매매가격";
      csv_name1 = "중위매매가격_가구당소득_1.csv";
      statistics_information1 = (
        <ul>
          <li>
            중위매매가격 : 표본주택의 매매가격을 순서대로 정렬했을 때 정중앙에
            위치한 매매가격
          </li>
          <li>자료출처 : KB 월간시계열 - 중위매매</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/3">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "가구당소득";
      csv_name2 = "중위매매가격_가구당소득_2.csv";
      statistics_information2 = (
        <ul>
          <li>가구당소득 : 가구의 소득(경상소득 + 비경상소득)</li>
          <li>월소득 5분위별에서 3분위에 해당</li>
          <li>
            자료출처 : KOSIS - 주제별 통계 - 소득 소비 자산 - 가계소득지출
          </li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1L9V003&vw_cd=MT_ZTITLE&list_id=G_A_10_004_001&scrId=&seqNo=&lang_mode=ko&obj_var_id=&itm_id=&conn_path=MT_ZTITLE&path=%252FstatisticsList%252FstatisticsListIndex.do"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 가구당소득은 특정 지역 또는 국가의 가구 수입을 가구 인원 수로
            나눈 값으로, 가구당 평균 소득을 의미합니다. 가구당소득은 해당 지역의
            경제 상황과 가계경제의 건강상태를 나타내는 지표입니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            중위매매가격과 가구당소득은 부동산 시장과 가계경제 간의 관련성을
            파악하는 데 중요한 지표입니다. 일반적으로 중위매매가격이 상승할
            경우, 부동산 시장에서 주택 가격이 상승하는 것을 의미합니다.
            가구당소득이 높을수록 주택 구매자들의 구매력이 높아질 가능성이 있어
            중위매매가격의 상승을 견인할 수 있습니다.
          </li>
          <br />
          <li>
            또한 가구당소득의 증가는 부동산 시장에 영향을 줄 수 있습니다. 더
            높은 가구당소득은 주택 구매를 위한 자금 조달 능력을 향상시키고, 주택
            시장의 수요를 높일 수 있습니다.
          </li>
          <br />
          <li>
            중위매매가격과 가구당소득은 부동산 시장의 건전성과 가계경제 건강
            상태를 평가하는 데에 중요한 지표입니다. 두 지표를 종합적으로
            분석하면 부동산 시장의 건전성과 가계경제의 안정성을 예측하고
            평가하는 데에 도움이 됩니다. 그러나 중위매매가격과 가구당소득 사이의
            연관성은 지역, 국가, 시기에 따라 다를 수 있으며, 다른 요인들도 함께
            고려되어야 합니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/3">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            가구당 소득은 대한민국에서 조정가구와 가사주의 소득을 합친 것으로,
            가구 내의 모든 구성원의 소득을 합산하여 나눈 값입니다. 대한민국의
            가구당 소득은 일반적으로 상승하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            2000년부터 최근까지의 데이터를 살펴보면, 대한민국의 가구당 소득은
            전반적으로 상승하고 있습니다. 특히 2000년대 후반부터 2010년대
            중반까지의 기간에 가장 큰 상승세를 보였습니다. .
          </li>
          <br />
          <li>
            이러한 상승세는 한 가구 내의 총 소득이 증가하면서 가구당 소득도
            상승하는 경향을 반영합니다. 가구 내 구성원의 고용률 증가, 임금 상승,
            기업의 성과 향상 등 여러 요인이 이러한 가구당 소득 상승에
            기여하였습니다.
          </li>
          <br />
          <li>
            그러나 상승세가 모든 가구에 공평하게 적용되고 있는 것은 아닙니다.
            소득 격차가 여전히 존재하여 상위 소득층은 가구당 소득의 상승세를
            보이는 반면, 하위 소득층은 소득 상승 폭이 제한되고 있습니다. 이는
            소득분배의 불균형 문제로 여겨집니다.
          </li>
          <br />
          <li>
            정부는 소득격차 축소와 저소득층의 생활 개선을 위해 다양한 정책을
            시행하고 있습니다. 그러나 여전히 가구당 소득의 불균형은 개선이
            필요한 과제로 남아있습니다.
          </li>
          <br />
          <li>
            따라서 대한민국의 가구당 소득은 일반적으로는 상승하고 있지만,
            소득격차가 여전히 존재하고 있음을 알 수 있습니다. 가구당 소득 상승과
            함께 모든 인구층의 소득 개선을 위해 지속적인 노력이 필요합니다.
          </li>
        </ul>
      );
      break;
    }
    case "중위매매가격 - 중위전세가격": {
      chart_name1 = "중위매매가격";
      csv_name1 = "중위매매가격.csv";
      statistics_information1 = (
        <ul>
          <li>
            중위매매가격 : 표본주택의 매매가격을 순서대로 정렬했을 때 정중앙에
            위치한 매매가격
          </li>
          <li>자료출처 : KB 월간시계열 - 중위매매</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 중위매매가격은 부동산 시장에서 실제로 매매가 이루어진 주택의
            가격의 중간값을 의미합니다. 즉, 모든 주택의 가격을 크기순으로 정렬한
            후, 중간에 위치한 값이 중위매매가격이 됩니다. 중위매매가격은 매매
            거래로 인해 실제로 형성된 가격을 기반으로 하며, 시장에서의 주택 가격
            동향을 파악하는 데에 사용됩니다.
          </li>
        </ul>
      );
      chart_name2 = "중위전세가격";
      csv_name2 = "중위전세가격.csv";
      statistics_information2 = (
        <ul>
          <li>
            중위전세가격 : 표본주택의 전세가격을 순서대로 정렬했을 때 정중앙에
            위치한 전세가격
          </li>
          <li>자료출처 : KB 월간시계열 - 중위전세</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 중위전세가격은 부동산 시장에서 전세(임대) 거래로 형성된
            주택의 전세 가격의 중간값을 의미합니다. 이는 전세 시장에서 실제로
            이루어진 거래에 기반하여 계산됩니다. 중위전세가격은 주택의 전세
            시장에서의 가격 동향을 파악하는 데에 사용됩니다
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            중위매매가격과 중위전세가격은 부동산 시장에서 주택 가격을 분석하고
            평가하는 데에 사용되는 지표로서 관련성을 가지고 있습니다. 일반적으로
            중위매매가격이 상승할 경우 중위전세가격도 상승하는 경향이 있습니다.
            이는 매매 가격의 상승이 전세 시장으로 옮겨져 전세 가격에도 영향을
            미치기 때문입니다.
          </li>
          <br />
          <li>
            주택 가격은 부동산 시장의 건전성과 경기를 판단하는 중요한
            지표입니다. 중위매매가격과 중위전세가격은 주택 가격 동향을 측정하고,
            시장의 건강 상태를 파악하는 데에 활용됩니다. 이러한 지표를 함께
            분석할 경우, 부동산 시장의 건전성을 평가하는 데에 더 정확한 정보를
            제공할 수 있습니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            중위매매가격은 대한민국에서 매매되는 주택의 가격 중간값을 말합니다.
            대한민국의 중위매매가격은 일반적으로 상승하는 경향을 보이고
            있습니다.
          </li>
          <br />
          <li>
            2010년부터 최근까지의 데이터를 살펴보면, 대한민국의 중위매매가격은
            전반적으로 상승하고 있습니다. 특히 수도권을 중심으로 중위매매가격
            상승폭이 크게 나타났습니다. 수도권 외 지역에서도 일부 지역에서는
            중위매매가격 상승이 지속되고 있습니다.
          </li>
          <br />
          <li>
            중위매매가격 상승의 주된 이유는 수요와 공급의 불균형으로 설명됩니다.
            대한민국에서는 주택 구입에 대한 장벽이 높아 중상위 소득층의 주택
            수요가 계속해서 증가하고 있습니다. 또한 부동산 투자 등에 의해 수요가
            더 증가할 수 있습니다.
          </li>
          <br />
          <li>
            중위매매가격 상승은 주택 소유자에게는 긍정적인 영향을 줄 수 있으나,
            주택을 구입하기 어려운 청년층과 저소득층에게는 주택 구입의 어려움을
            야기할 수 있습니다.
          </li>
          <br />
          <li>
            정부는 주택 시장 안정을 위해 부동산 정책을 시행하고 있으며, 주택
            공급 확대 등을 통해 중위매매가격 상승세를 조절하고자 노력하고
            있습니다.
          </li>
          <br />
          <li>
            중위매매가격은 부동산 시장의 건전성과 주택 가치를 평가하는 중요한
            지표입니다. 대한민국의 중위매매가격 상승은 부동산 시장의 상황과
            거주자들의 주택 구입력과 관련된 요소들과 상관관계가 있으며, 정부
            정책의 영향도 크게 작용할 수 있습니다.
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            중위전세가격은 대한민국에서 전세 시장에서 매매되는 주택의 가격
            중간값을 나타냅니다. 대한민국의 중위전세가격은 전반적으로 상승하는
            경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            중위전세가격은 수요와 공급의 상황에 따라 변동합니다. 대한민국에서는
            주택 구입에 대한 장벽이 높아 전세 시장이 활발하게 운영되고 있습니다.
            그로 인해 전세 수요가 지속적으로 증가하면서 중위전세가격도 상승하는
            경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            특히 수도권을 중심으로 중위전세가격 상승폭이 크게 나타납니다. 수도권
            외 지역에서도 전체적인 경향성은 상승하는 편이지만, 상대적으로 낮은
            상승 폭을 보일 수도 있습니다.
          </li>
          <br />
          <li>
            중위전세가격 상승의 주된 이유는 주택 수요와 공급의 불균형으로
            설명됩니다. 많은 사람들이 주택을 구매하기 어려워 전세 시장으로
            유입되는 수요가 증가하면서 전세가격이 상승하는 것입니다. 또한 부동산
            투자 등의 요인도 중위전세가격 상승에 영향을 미치고 있습니다.
          </li>
          <br />
          <li>
            그러나 최근 몇 년간 정부의 부동산 정책과 주택 공급 확충 정책에 따라
            중위전세가격 상승세가 조절되고 있습니다. 그러나 전반적으로는 전세
            가격이 상승하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            중위전세가격은 부동산 시장의 건전성과 전세주택의 가치를 평가하는
            중요한 지표입니다. 대한민국의 중위전세가격 상승은 전세 시장의 상황과
            정부 정책의 영향을 받으며, 부동산 시장의 안정성과 가구들의 전세 시장
            참여 여부 등 다양한 요소에 영향을 받을 수 있습니다.
          </li>
        </ul>
      );
      break;
    }
    case "매매가격지수 - 전세가격지수": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수.csv";
      statistics_information1 = (
        <ul>
          <li>매매가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 매매APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "전세가격지수";
      csv_name2 = "전세가격지수.csv";
      statistics_information2 = (
        <ul>
          <li>전세가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 전세APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 전세가격지수는 전세(임대) 거래를 기반으로 한 주택 가격의
            변동을 측정합니다. 주택에 대한 전세 시장에서 발생한 거래를 분석하여
            전세 가격의 상승 또는 하락을 나타내는 지표입니다. 전세가격지수는
            일반적으로 매가격지수보다 조금 뒤처져 있는 것이 특징입니다. 이는
            전세 시장에서 매매 거래보다 변동이 더 일어날 때가 있기 때문입니다.
            전세가격지수는 임대 시장의 건강상태와 인기도, 전매수요 등을 파악하는
            데에 사용됩니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            매가격지수와 전세가격지수는 부동산 시장에서 주택 가격의 상승 또는
            하락을 측정하는 두 가지 다른 지표입니다. 이러한 지표는 특정 지역이나
            국가의 부동산 시장 분석에 사용됩니다. 두 지표는 서로 연관성을 가지고
            있는데, 일반적으로 매가격지수의 상승에 따라 전세가격지수도 상승할
            가능성이 있습니다. 이는 부동산 가격 상승이 매매 시장에서 전세
            시장으로 옮겨질 수 있는 경향을 나타냅니다. 그러나 지역이나 시기에
            따라 매가격지수와 전세가격지수가 다를 수도 있으며, 시장 상황에 따라
            서로 다른 추세를 보일 수도 있습니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            전세가격지수는 대한민국에서 전세 시장의 가격 변동을 나타내는
            지표입니다. 대한민국의 전세가격지수는 일반적으로 상승하는 경향을
            보이고 있습니다.
          </li>
          <br />
          <li>
            2010년부터 최근까지의 데이터를 살펴보면, 대한민국의 전세가격지수는
            전반적으로 상승하고 있습니다. 특히 수도권을 중심으로 전세가격
            상승폭이 크게 나타났습니다. 수도권 외 지역에서도 일부 지역에서는
            전세가격 상승이 지속되고 있습니다.
          </li>
          <br />
          <li>
            전세가격지수 상승의 주된 이유는 수요와 공급의 불균형으로 설명됩니다.
            대한민국에서는 주택 구입에 대한 장벽이 높아 전세 시장이 활발하게
            운영되고 있습니다. 이에 따라 전세 수요가 지속적으로 증가하면서
            전세가격도 상승하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            또한 전세주택의 수요와 소자금 부족으로 인해 전세시장이 호황을
            나타내고 있습니다. 이는 많은 사람들이 전세로 주택을 구하는 경우가
            많아지고 전세 가격이 상승하는 원인 중 하나입니다.
          </li>
          <br />
          <li>
            그러나 최근 몇 년간 정부의 부동산 규제 정책과 주택 공급 정책에 따라
            전세가격 상승세가 조절되고 있습니다. 이러한 규제 정책은 전세시장의
            안정과 주택 구입에 대한 부담을 완화하고자 시행되었습니다.
          </li>
          <br />
          <li>
            전세가격지수는 부동산 시장의 건전성과 전세주택의 가치를 평가하는
            중요한 지표입니다. 대한민국의 전세가격지수 상승은 전세시장의 상황과
            관련이 깊으며, 정부 정책의 영향이 크게 작용할 수 있습니다.
          </li>
        </ul>
      );
      break;
    }
    case "매매가격지수 - PIR지수": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_PIR지수.csv";
      statistics_information1 = (
        <ul>
          <li>매매가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 매매APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 매매가격지수는 특정 지역이나 국가에서 발생하는 부동산 매매
            거래의 가격 변동을 측정하는 지표입니다. 일반적으로 기준 연도의
            가격을 100으로 설정하고, 그 이후의 가격 수준을 비교하여 상승 또는
            하락을 측정합니다. 매매가격지수는 주택 가격의 상승 또는 하락 추세를
            파악하는 데 도움이 되며, 시장의 열화나 불안정성을 인식할 수
            있습니다.
          </li>
        </ul>
      );
      chart_name2 = "PIR지수";
      csv_name2 = "PIR지수.csv";
      statistics_information2 = (
        <ul>
          <li>
            PIR(Price to income ratio)= 평균 주택가격(3분위)/가구 연소득(3분위)
          </li>
          <li>평균 주택가격 : 1분위 ~ 5분위, 가구 연소득 : 1분위 ~ 5분위</li>
          <li>
            PIR은 주택가격을 가구소득으로 나눈 값입니다. (PIR이 10이라면
            주택가격은 연소득의 10배입니다.)
          </li>
          <li>자료출처 : KB 월간시계열 - PIR(월별)</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : PIR지수는 부동산 가격 대비 가구 수입의 비율을 나타내는
            지표입니다. 이는 국가 또는 특정 지역에서 주택 시장의 건전성을
            평가하는 데 사용됩니다. PIR지수가 높을수록 주거 비용 대비 소득이
            높은 것이며, 이는 부동산 시장의 과열이나 과도한 부동산 투기의
            가능성을 시사할 수 있습니다. 또한 PIR지수가 낮을수록 주택 시장이
            접근 가능하고 안정적인 것으로 간주될 수 있습니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            매매가격지수와 PIR지수는 부동산 시장을 평가하고 예측하는 데에 서로
            연관성을 갖고 있습니다. 보통 매매가격지수가 상승하면 부동산 시장의
            활성화와 가격 상승이 나타나는 경우가 많습니다. 이에 따라 PIR지수가
            상승하여 주거 비용 대비 소득이 증가할 수 있습니다. 반대로
            매매가격지수가 하락할 경우 부동산 시장이 침체되고, 이로 인해
            PIR지수가 낮아질 수 있습니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            매매가격지수는 대한민국에서 부동산 시장의 가격 변동성을 나타내는
            지표입니다. 대한민국의 매매가격지수는 일반적으로 상승하는 경향을
            보이고 있습니다.
          </li>
          <br />
          <li>
            2010년부터 2019년까지의 데이터를 살펴보면, 대한민국의 매매가격지수는
            전반적으로 상승하고 있습니다. 특히 수도권을 중심으로 매매가격
            상승폭이 크게 나타났습니다. 그러나 최근 몇 년간은 정부의 부동산 규제
            정책을 통해 매매가격 상승세가 조절되고 있습니다.
          </li>
          <br />
          <li>
            각 지역별로는 서울을 비롯한 수도권이 매매가격 상승폭이 크게 나타나고
            있으며, 일부 광역시와 도시들도 비슷한 경향성을 보이고 있습니다.
            그러나 일부 지방 지역에서는 매매가격 상승폭이 상대적으로 낮거나
            안정적인 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            또한 최근 몇 년간은 정부의 부동산 규제 정책에 따라 매매가격 상승세가
            조절되고 있습니다. 이러한 규제 정책은 과도한 가격 상승을 억제하고
            가격 안정을 위해 시행되었으며, 일부 지역에서는 가격 하락세를 보이고
            있습니다.
          </li>
          <br />
          <li>
            하지만 대한민국의 부동산 시장은 여전히 매우 활발하며 매매가격 상승과
            하락이 주기적으로 발생하고 있습니다. 추가적인 정부 규제 정책에 따라
            매매가격 상승세가 어떻게 변할지는 예측할 수 없으며, 시장 변동에 따라
            매매가격지수의 경향성도 변할 수 있습니다.
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            PIR(Price-to-Income Ratio)지수는 주거용 부동산 가격과 대중의 소득
            수준 간의 비율을 나타내는 지표입니다. 대한민국의 PIR지수는 상승하는
            경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            최근 몇 년간 대한민국의 주택가격은 상승세를 유지하며 PIR지수도
            상승하고 있습니다. 이는 주택 가격이 소득 대비로 상대적으로 높아지고
            있는 것을 의미합니다. 특히 수도권을 중심으로 PIR지수 상승폭이
            컸습니다. 이러한 상황은 주택 구매에 대한 소득의 비중이 크게 증가하고
            있다는 것을 나타냅니다.
          </li>
          <br />
          <li>
            주택 가격 상승과 PIR지수 상승은 대부분의 민간 가구들이 주택을
            구매하기 어렵게 만들고 있으며, 청년층의 주택 구매력 감소와 부동산
            시장의 불안정성을 야기하고 있습니다. 이에 대한 대응책으로 정부는
            주택 공급 확충과 부동산 규제를 통해 PIR지수가 과도하게 상승하지
            않도록 조절하고 있습니다.
          </li>
          <br />
          <li>
            PIR지수는 부동산 시장의 건전성과 주거용 부동산의 가치를 평가하는
            중요한 지표입니다. 따라서 대한민국의 PIR지수 상승이 주택시장과 소득
            격차 등에 어떤 영향을 미칠지 지속적인 연구와 관찰이 필요합니다.
          </li>
        </ul>
      );
      break;
    }
    case "매매가격지수 - 가구당소득": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_가구당소득.csv";
      statistics_information1 = (
        <ul>
          <li>매매가격지수 : 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 : 2022년 1월 = 100.0</li>
          <li>자료출처 : KB 월간시계열 - 매매APT</li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kbland.kr/webview.html#/main/statistics?blank=true"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      chart_name2 = "가구당소득";
      csv_name2 = "가구당소득.csv";
      statistics_information2 = (
        <ul>
          <li>가구당소득 : 가구의 소득(경상소득 + 비경상소득)</li>
          <li>월소득 5분위별에서 3분위에 해당</li>
          <li>
            자료출처 : KOSIS - 주제별 통계 - 소득 소비 자산 - 가계소득지출
          </li>
          <li>
            자세한 사항은&nbsp;
            <Link
              color="primary"
              href="https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1L9V003&vw_cd=MT_ZTITLE&list_id=G_A_10_004_001&scrId=&seqNo=&lang_mode=ko&obj_var_id=&itm_id=&conn_path=MT_ZTITLE&path=%252FstatisticsList%252FstatisticsListIndex.do"
            >
              링크
            </Link>
            &nbsp;참조
          </li>
          <br />
          <li>
            설명 : 가구당 소득은 특정 지역 또는 국가에서 가구 단위로 나누어진 총
            소득을 의미합니다. 이는 가계 경제의 건강상태와 소비력을 나타내는
            지표입니다. 가구당 소득은 국가의 경제 성장과 노동 시장 상황, 소득
            격차 등 여러 요인에 영향을 받습니다. 부동산 시장에 대한 가구당
            소득의 영향은 주택 구매자들의 구매력에 따라 부동산 가격 수준을
            결정하는 데 중요한 역할을 합니다. 높은 가구당 소득은 부동산 가격
            상승에 영향을 줄 수 있습니다.
          </li>
        </ul>
      );
      statistics_information3 = (
        <ul>
          <li>
            매가격지수와 가구당 소득은 부동산 시장과 가계경제 간의 연관성을
            가지고 있습니다. 일반적으로 매가격지수의 상승은 부동산 가격 상승과
            연결되고, 이는 부동산 구매자들의 구매력과 관련이 있을 수 있습니다.
            가구당 소득이 높아질수록 부동산 시장의 가격 상승 가능성이 높아질 수
            있습니다. 그러나 이러한 연관성은 일반적인 경향성을 나타내는 것이며,
            지역이나 시기에 따라 다를 수 있습니다.
          </li>
        </ul>
      );
      statistics_information4 = (
        <ul>
          <li>
            설명 :
            <Link color="primary" href="https://apt-indexer.xyz/">
              링크
            </Link>
            &nbsp; - 설명 참조
          </li>
        </ul>
      );
      statistics_information5 = (
        <ul>
          <li>
            가구당 소득은 대한민국에서 조정가구와 가사주의 소득을 합친 것으로,
            가구 내의 모든 구성원의 소득을 합산하여 나눈 값입니다. 대한민국의
            가구당 소득은 일반적으로 상승하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            2000년부터 최근까지의 데이터를 살펴보면, 가구당 소득이 전반적으로
            상승하고 있는 것으로 나타납니다. 한 가구 내의 총 소득이 증가하면
            가구당 소득도 상승하는 경향을 보이고 있습니다.
          </li>
          <br />
          <li>
            하지만 이러한 경향이 모든 가구에 공평하게 적용되고 있는 것은
            아닙니다. 소득 격차가 존재하여 상위 소득층은 가구당 소득의 상승세를
            보이는 반면, 하위 소득층은 소득 상승 폭이 제한되고 있는 실정입니다.
          </li>
          <br />
          <li>
            또한 가구당 소득의 상승은 지역 간의 차이도 보입니다. 수도권이나 큰
            도시에서는 가구당 소득이 상대적으로 높은 반면, 지방이나 작은
            도시에서는 가구당 소득이 낮은 경향을 보입니다.
          </li>
          <br />
          <li>
            따라서 대한민국의 가구당 소득은 전반적으로는 상승하고 있는
            경향이지만, 소득격차가 여전히 존재하고 지역간 불균형도 발생하고
            있음을 알 수 있습니다. 이는 정부와 사회의 노력이 필요한 과제로
            여겨집니다.
          </li>
        </ul>
      );
      break;
    }
    default: {
      break;
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>{meta_tag_title}</Helmet>
      <Helmet>{meta_tag_link}</Helmet>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px" // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" })
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              아파트 매매가 지표비교
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1]
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItems menu_index={menu} setListNameFunc={setSelectedMenu} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Charts
                    chart_name1={chart_name1}
                    csv_name1={csv_name1}
                    chart_name2={chart_name2}
                    csv_name2={csv_name2}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <StatisticsInformation
                    chart_name1={chart_name1}
                    statistics_information1={statistics_information1}
                    chart_name2={chart_name2}
                    statistics_information2={statistics_information2}
                    statistics_information3={statistics_information3}
                    statistics_information4={statistics_information4}
                    statistics_information5={statistics_information5}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
