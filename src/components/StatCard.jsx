import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

const StatCard = ({ title, icon, chart, stats = [], description, onClick, highlight = false }) => {
  return (
    <Paper
      elevation={highlight ? 4 : 2}
      sx={{
        flex: 1,
        minWidth: 220,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        p: 2,
        borderRadius: 3,
        cursor: onClick ? "pointer" : "default",
        transition: "box-shadow 0.2s, background 0.2s",
        bgcolor: highlight ? "#f3eaff" : "#fff",
        "&:hover": onClick ? { boxShadow: 6, background: "#f3eaff" } : {},
      }}
      onClick={onClick}
    >
      <Stack direction="row" alignItems="center" spacing={1} sx={{ width: "100%", justifyContent: "center" }}>
        {icon && <Box sx={{ fontSize: 28, color: "primary.main", display: "flex", alignItems: "center" }}>{icon}</Box>}
        <Typography fontWeight={700} sx={{ fontSize: 17 }}>
          {title}
        </Typography>
      </Stack>
      {chart && <Box sx={{ mt: 0.5 }}>{chart}</Box>}
      {stats.length > 0 && (
        <Box sx={{ mt: 1, width: "100%" }}>
          {stats.map((item) => (
            <Box key={item.label} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
              <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: "50%" }} />
              <Typography fontSize={14}>
                {item.label} {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
      {description && (
        <Typography fontSize={13} color="text.secondary" sx={{ mt: 1, textAlign: "center" }}>
          {description}
        </Typography>
      )}
    </Paper>
  );
};

export default StatCard;
