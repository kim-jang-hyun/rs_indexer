import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ListItems({ menu_index, setListNameFunc }) {
  const [selectedIndex, setSelectedIndex] = useState(menu_index);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedIndex(menu_index);
  }, [menu_index]);

  function selectListItem(index) {
    setSelectedIndex(index);
    switch (index) {
      case 0:
        navigate("/");
        setListNameFunc("매매가격지수 - PIR지수");
        break;
      case 1:
        navigate("/1");
        setListNameFunc("매매가격지수 - 가구당소득");
        break;
      case 2:
        navigate("/2");
        setListNameFunc("매매가격지수 - 전세가격지수");
        break;
      case 3:
        navigate("/3");
        setListNameFunc("중위매매가격 - 중위전세가격");
        break;
      case 4:
        navigate("/4");
        setListNameFunc("중위매매가격 - 가구당소득");
        break;
      case 5:
        navigate("/5");
        setListNameFunc("매매가격지수 - 매매거래량");
        break;
      case 6:
        navigate("/6");
        setListNameFunc("매매가격지수 - 건설공사비지수");
        break;
      case 7:
        navigate("/7");
        setListNameFunc("중위매매가격 - 기본형공사비");
        break;
      case 8:
        navigate("/8");
        setListNameFunc("매매가격지수 - 건설업 평균임금");
        break;
      case 9:
        navigate("/9");
        setListNameFunc("매매가격지수 - 통화량");
        break;
      case 10:
        navigate("/10");
        setListNameFunc("매매가격지수 - 인구수");
        break;
      case 11:
        navigate("/11");
        setListNameFunc("매매가격지수 - 세대수");
        break;
    }
  }

  return (
    <React.Fragment>
      <ListItemButton
        selected={selectedIndex == 0}
        onClick={() => selectListItem(0)}
      >
        <ListItemText primary="매매가격지수 - PIR지수" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 1}
        onClick={() => selectListItem(1)}
      >
        <ListItemText primary="매매가격지수 - 가구당소득" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 2}
        onClick={() => selectListItem(2)}
      >
        <ListItemText primary="매매가격지수 - 전세가격지수" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 3}
        onClick={() => selectListItem(3)}
      >
        <ListItemText primary="중위매매가격 - 중위전세가격" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 4}
        onClick={() => selectListItem(4)}
      >
        <ListItemText primary="중위매매가격 - 가구당소득" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 5}
        onClick={() => selectListItem(5)}
      >
        <ListItemText primary="매매가격지수 - 매매거래량" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 6}
        onClick={() => selectListItem(6)}
      >
        <ListItemText primary="매매가격지수 - 건설공사비지수" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 7}
        onClick={() => selectListItem(7)}
      >
        <ListItemText primary="중위매매가격 - 기본형공사비" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 8}
        onClick={() => selectListItem(8)}
      >
        <ListItemText primary="매매가격지수 - 건설업 평균임금" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 9}
        onClick={() => selectListItem(9)}
      >
        <ListItemText primary="매매가격지수 - 통화량" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 10}
        onClick={() => selectListItem(10)}
      >
        <ListItemText primary="매매가격지수 - 인구수" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 11}
        onClick={() => selectListItem(11)}
      >
        <ListItemText primary="매매가격지수 - 세대수" />
      </ListItemButton>
    </React.Fragment>
  );
}
