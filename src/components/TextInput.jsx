import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function TextInput(props) {
  return (
    <>
      <TextField error={props.error ? true : false} {...props} />
      {props.error && (
        <Typography color={"red"} fontSize={"12px"} marginTop={"4px"}>
          {props.error}
        </Typography>
      )}
    </>
  );
}
