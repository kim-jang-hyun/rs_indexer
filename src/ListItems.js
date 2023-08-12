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
        setListNameFunc("매매가격지수 - 거래량");
        break;
      case 6:
        navigate("/6");
        setListNameFunc("매매가격지수 - 건설공사비지수");
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
        <ListItemText primary="매매가격지수 - 거래량" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex == 6}
        onClick={() => selectListItem(6)}
      >
        <ListItemText primary="매매가격지수 - 건설공사비지수" />
      </ListItemButton>
    </React.Fragment>
  );
}
