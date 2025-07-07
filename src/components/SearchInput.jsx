import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput({ initiateSearch, ...props }) {
  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        boxShadow: "none",
        border: "1px solid lightgray",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" {...props} />
      <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
