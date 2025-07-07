import React from "react";
import { Box, Stack, Typography, Avatar, Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const links = [
  "Holiday",
  "Expenses",
  "Travel",
  "Templates",
  "Suppliers",
  "Info Base"
];

function Header({ onEditBackground, backgroundImage, overlay }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 280,
        background: backgroundImage
          ? `linear-gradient(90deg, rgba(20,20,40,${overlay}) 0%, rgba(30,30,60,${overlay}) 100%), url('${backgroundImage}') center/cover`
          : `linear-gradient(90deg, rgba(20,20,40,${overlay}) 0%, rgba(30,30,60,${overlay}) 100%), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80') center/cover`,
        color: "#fff",
        px: { xs: 3, md: 8 },
        py: 4,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        zIndex: 2,
        borderRadius: "24px",
        margin: '0 16px',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Top right social icons */}
      <Stack 
        direction="row" 
        spacing={1} 
        sx={{ 
          position: "absolute", 
          top: 24, 
          right: 32,
          '& .MuiIconButton-root': {
            p: 1,
            color: 'rgba(255,255,255,0.7)',
            transition: 'all 0.3s ease',
            '&:hover': { 
              color: '#fff', 
              background: 'rgba(255,255,255,0.12)',
              transform: 'translateY(-2px)'
            }
          }
        }}
      >
        <IconButton color="inherit" size="medium"><LinkedInIcon fontSize="small" /></IconButton>
        <IconButton color="inherit" size="medium"><TwitterIcon fontSize="small" /></IconButton>
        <IconButton color="inherit" size="medium"><FacebookIcon fontSize="small" /></IconButton>
        <IconButton color="inherit" size="medium"><InstagramIcon fontSize="small" /></IconButton>
        <IconButton color="inherit" size="medium"><YouTubeIcon fontSize="small" /></IconButton>
      </Stack>
      {/* Main header content */}
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2, mb: 1 }}>
        <Avatar 
          sx={{ 
            bgcolor: '#646cff', 
            width: 48, 
            height: 48, 
            fontWeight: 700, 
            fontSize: 24,
            boxShadow: '0 4px 12px rgba(100, 108, 255, 0.3)'
          }}
        >
          L
        </Avatar>
        <Typography 
          variant="h4" 
          fontWeight={700} 
          sx={{ 
            letterSpacing: 0.5,
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          LYCA
        </Typography>
        <Button 
          onClick={onEditBackground} 
          size="small" 
          variant="outlined" 
          sx={{ 
            ml: 2, 
            borderRadius: "12px", 
            color: '#fff', 
            borderColor: 'rgba(255,255,255,0.3)', 
            textTransform: 'none', 
            fontWeight: 500, 
            px: 2.5, 
            py: 1, 
            minWidth: 0, 
            backdropFilter: 'blur(4px)',
            transition: 'all 0.3s ease',
            '&:hover': { 
              borderColor: '#fff', 
              background: 'rgba(255,255,255,0.12)',
              transform: 'translateY(-1px)'
            } 
          }}
        >
          Edit background
        </Button>
      </Stack>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          mb: 3, 
          color: 'rgba(255,255,255,0.9)', 
          fontWeight: 400, 
          fontSize: 18, 
          ml: 8,
          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        Empowering the future of the financial services industry
      </Typography>
      <Typography 
        variant="subtitle2" 
        sx={{ 
          fontWeight: 600, 
          mb: 2, 
          ml: 8, 
          color: 'rgba(255,255,255,0.9)', 
          letterSpacing: 0.5,
          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        Useful Links
      </Typography>
      <Stack 
        direction="row" 
        spacing={2} 
        sx={{ 
          ml: 8,
          '& .MuiButton-root': {
            fontSize: 16,
            px: 3,
            py: 1.2,
            borderRadius: "12px",
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            fontWeight: 500,
            boxShadow: 'none',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(4px)',
            '&:hover': {
              background: 'rgba(255,255,255,0.16)',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            },
            textTransform: 'none',
          }
        }}
      >
        {links.map(link => (
          <Button
            key={link}
            href="#"
            variant="contained"
            disableElevation
          >
            {link}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}

export default Header; 