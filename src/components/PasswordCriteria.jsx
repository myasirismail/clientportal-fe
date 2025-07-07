import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { IconSelector } from "./IconSelector";

function PasswordCriteria({ state, passwordValidation, color = "#ffffff" }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      mx={"auto"}
      gap={1}
      my={2}
    >
      <Stack display={"flex"} flexDirection={"column"} rowGap={1}>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <IconSelector
            length={state.password.length}
            validatorField={passwordValidation["length"]}
          />
          <Typography color={color} variant="variant2" fontSize={"12px"}>
            password length 8-15 characters
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <IconSelector
            length={state.password.length}
            validatorField={passwordValidation["upperCase"]}
          />
          <Typography color={color} variant="variant2" fontSize={"12px"}>
            1 uppercase letter
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <IconSelector
            length={state.password.length}
            validatorField={passwordValidation["lowerCase"]}
          />
          <Typography color={color} variant="variant2" fontSize={"12px"}>
            1 lowercase letter
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <IconSelector
            length={state.password.length}
            validatorField={passwordValidation["digit"]}
          />
          <Typography color={color} variant="variant2" fontSize={"12px"}>
            1 digit
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <IconSelector
            length={state.password.length}
            validatorField={passwordValidation["specialCase"]}
          />
          <Typography color={color} variant="variant2" fontSize={"12px"}>
            1 special letter
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default PasswordCriteria;
