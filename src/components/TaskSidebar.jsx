import React from 'react';
import { Box, Typography, IconButton, Button, Stack, Avatar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import MessageIcon from '@mui/icons-material/Message';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';

const navLinks = [
  { label: 'Dashboard', icon: <DashboardIcon />, active: true },
  { label: 'Jobs', icon: <WorkIcon /> },
  { label: 'Schedule', icon: <CalendarMonthIcon /> },
  { label: 'Community', icon: <GroupsIcon /> },
  { label: 'Messages', icon: <MessageIcon /> },
  { label: 'Document', icon: <DescriptionIcon /> },
];

const projects = [
  { name: 'Project One', color: '#ff4d6d', active: true },
  { name: 'Project Two', color: '#3b82f6' },
  { name: 'Project Three', color: '#a855f7' },
  { name: 'Project Four', color: '#f59e42' },
];

const TaskSidebar = () => {
  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        bgcolor: '#fff',
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(100,108,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 3,
        position: 'fixed',
        left: 24,
        top: 24,
        zIndex: 100,
      }}
    >
      {/* Top: Logo and Navigation */}
      <Box>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
          <Avatar sx={{ bgcolor: '#646cff', width: 44, height: 44, fontWeight: 700, fontSize: 24, mr: 1 }}>M</Avatar>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#2d223c', letterSpacing: 1 }}>MyTask</Typography>
        </Box>
        {/* Navigation Links */}
        <Stack spacing={1.5}>
          {navLinks.map((item, idx) => (
            <Button
              key={item.label}
              startIcon={item.icon}
              variant={item.active ? 'contained' : 'text'}
              sx={{
                justifyContent: 'flex-start',
                borderRadius: '12px',
                px: 2.5,
                py: 1.2,
                fontWeight: 600,
                color: item.active ? '#fff' : '#646cff',
                bgcolor: item.active ? '#646cff' : 'transparent',
                boxShadow: item.active ? '0 4px 16px rgba(100,108,255,0.10)' : 'none',
                textTransform: 'none',
                fontSize: 17,
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: item.active ? '#535bf2' : 'rgba(100,108,255,0.08)',
                  color: '#535bf2',
                },
              }}
              disableElevation
              fullWidth
            >
              {item.label}
            </Button>
          ))}
        </Stack>
        {/* Projects Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="subtitle2" sx={{ color: '#b0b3c6', fontWeight: 700, mb: 1, letterSpacing: 1 }}>PROJECTS</Typography>
          <Stack spacing={1.2}>
            {projects.map((proj) => (
              <Box key={proj.name} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: proj.color, boxShadow: proj.active ? '0 0 0 3px #e0e7ff' : 'none' }} />
                <Typography sx={{ color: proj.active ? '#2d223c' : '#64748b', fontWeight: proj.active ? 700 : 500, fontSize: 16 }}>{proj.name}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
      {/* Bottom: Support and Logout */}
      <Box>
        <Button
          startIcon={<HelpOutlineIcon />}
          sx={{
            justifyContent: 'flex-start',
            borderRadius: '12px',
            px: 2.5,
            py: 1.2,
            fontWeight: 600,
            color: '#646cff',
            bgcolor: 'rgba(100,108,255,0.06)',
            textTransform: 'none',
            fontSize: 16,
            mb: 1.5,
            '&:hover': {
              bgcolor: 'rgba(100,108,255,0.12)',
              color: '#535bf2',
            },
          }}
          fullWidth
        >
          Support
        </Button>
        <Button
          startIcon={<LogoutIcon />}
          sx={{
            justifyContent: 'flex-start',
            borderRadius: '12px',
            px: 2.5,
            py: 1.2,
            fontWeight: 600,
            color: '#f87171',
            bgcolor: 'rgba(248,113,113,0.06)',
            textTransform: 'none',
            fontSize: 16,
            '&:hover': {
              bgcolor: 'rgba(248,113,113,0.12)',
              color: '#dc2626',
            },
          }}
          fullWidth
        >
          Log Out
        </Button>
      </Box>
    </Box>
  );
};

export default TaskSidebar; 