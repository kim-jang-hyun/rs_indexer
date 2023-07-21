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
        매매가 지표 비교
      </Link>{" "}
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

  let { menu } = useParams();
  let menu_str = "";
  if (menu == 1) {
    menu_str = "매매가격지수 - 가구당소득";
  } else {
    menu = 0;
    menu_str = "매매가격지수 - PIR지수";
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
    console.log("dashboard - menu : " + menu_str);
    setSelectedMenu(menu_str);
  }, [menu]);

  let chart_name1 = "";
  let csv_name1 = "";
  let statistics_information1 = "";
  let chart_name2 = "";
  let csv_name2 = "";
  let statistics_information2 = "";

  switch (selected_menu_name) {
    case "매매가격지수 - PIR지수": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_PIR지수.csv";
      statistics_information1 = (
        <ul>
          <li>가격지수는 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 = 2022년 1월</li>
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
            주택가격은 연소득의 10배입니다.){" "}
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
        </ul>
      );
      break;
    }
    case "매매가격지수 - 가구당소득": {
      chart_name1 = "매매가격지수";
      csv_name1 = "매매가격지수_가구당소득.csv";
      statistics_information1 = (
        <ul>
          <li>가격지수는 기준시점 대비 조사 시점의 가격 비율입니다.</li>
          <li>기준시점 = 2022년 1월</li>
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
        </ul>
      );
      chart_name2 = "가구당소득";
      csv_name2 = "가구당소득.csv";
      statistics_information2 = (
        <ul>
          <li>소득 : 가구의 소득(경상소득 + 비경상소득)</li>
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
              매매가 지표 비교
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
