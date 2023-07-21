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
    </React.Fragment>
  );
}
