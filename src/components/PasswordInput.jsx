import React, { forwardRef } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const PasswordInput = forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <FormControl sx={{ width: "100%", margin: "1px 0"}}>
      {props.label ? (
        <InputLabel htmlFor="outlined-adornment-password">
          {props.label}
        </InputLabel>
      ) : null}
      <OutlinedInput
          ref={ref}
        {...props}
        variant="filled"
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        sx={{ borderRadius: 0, background:"#ffffff" }}
        size={props.size}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={props.label}
      />
      
    </FormControl>
    {props.error ? (
        <Typography color={"red"} fontSize={"12px"} marginTop={"4px"}>
          {props.error}
        </Typography>
      ):null} 
      </>       
  );
});

export default PasswordInput;
