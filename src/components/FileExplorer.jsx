import React from 'react';
import { Box, Typography, Paper, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, InputBase, Divider, Chip, Stack, Fade, Tooltip } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FilterListIcon from '@mui/icons-material/FilterList';
import EmailIcon from '@mui/icons-material/Email';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { motion } from 'framer-motion';

const folders = [
  'research',
  'reports',
  'main proposal docs',
  'imagery',
  'costings',
  'appendices',
];

const labels = [
  { label: 'analysis', color: 'error' },
  { label: 'appendices', color: 'warning' },
  { label: 'benefits', color: 'success' },
  { label: 'budgets', color: 'warning' },
  { label: 'charts', color: 'info' },
  { label: 'costings', color: 'primary' },
  { label: 'growth', color: 'success' },
  { label: 'imagery', color: 'warning' },
];

const FileExplorer = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      gap: 3, 
      p: 2,
      background: '#fafafa',
      minHeight: '100vh',
      width: '100%'
    }}>
      {/* Main File List */}
      <Box sx={{ flex: 1, width: '100%' }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 3, 
          mt: 1,
          background: 'white',
          p: 2,
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
        }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 700, 
            flex: 1,
            background: 'linear-gradient(45deg, #562583, #7b3c9e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.5rem'
          }}>
            Project Workspace
          </Typography>
          <Button 
            variant="contained" 
            size="small" 
            sx={{ 
              ml: 2, 
              textTransform: 'none',
              transition: 'all 0.2s ease',
              background: 'linear-gradient(45deg, #562583, #7b3c9e)',
              borderRadius: '12px',
              px: 2,
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 12px rgba(86, 37, 131, 0.2)',
                background: 'linear-gradient(45deg, #562583, #7b3c9e)',
              }
            }}
          >
            Follow this workspace
          </Button>
        </Box>
        <Paper sx={{ 
          p: 2.5, 
          mb: 2, 
          borderRadius: '16px', 
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)', 
          border: '1px solid rgba(0,0,0,0.06)',
          transition: 'all 0.3s ease',
          background: 'white',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 2.5,
            background: '#f8f9fa',
            p: 1.5,
            borderRadius: '12px'
          }}>
            <Tooltip title="Sort items">
              <Button 
                variant="outlined" 
                size="small" 
                startIcon={<SortIcon />} 
                sx={{ 
                  mr: 1, 
                  textTransform: 'none',
                  transition: 'all 0.2s ease',
                  borderColor: '#e0e0e0',
                  borderRadius: '10px',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    borderColor: '#562583',
                    color: '#562583'
                  }
                }}
              >
                Sort
              </Button>
            </Tooltip>
            <Tooltip title="List view">
              <IconButton 
                size="small"
                sx={{ 
                  transition: 'all 0.2s ease',
                  color: '#562583',
                  borderRadius: '10px',
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    background: 'rgba(86, 37, 131, 0.04)'
                  }
                }}
              >
                <ViewListIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Grid view">
              <IconButton 
                size="small"
                sx={{ 
                  transition: 'all 0.2s ease',
                  color: '#562583',
                  borderRadius: '10px',
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    background: 'rgba(86, 37, 131, 0.04)'
                  }
                }}
              >
                <ViewModuleIcon />
              </IconButton>
            </Tooltip>
            <Typography sx={{ ml: 2, fontSize: 15, color: '#666', fontWeight: 500 }}>
              Folders : <span style={{ color: '#562583', cursor: 'pointer', fontWeight: 600 }}>Project Workspace</span>
            </Typography>
          </Box>
          <List sx={{ p: 0 }}>
            {folders.map((folder, idx) => (
              <Fade in timeout={500} style={{ transitionDelay: `${idx * 50}ms` }}>
                <ListItem 
                  key={folder} 
                  sx={{ 
                    borderRadius: '12px',
                    mb: 1,
                    transition: 'all 0.2s ease',
                    background: '#fafafa',
                    '&:hover': { 
                      background: 'rgba(86, 37, 131, 0.04)',
                      transform: 'translateX(4px)'
                    }
                  }}
                  secondaryAction={
                    <Button 
                      size="small" 
                      variant="outlined" 
                      sx={{ 
                        textTransform: 'none', 
                        minWidth: 0, 
                        px: 1.5, 
                        fontSize: 13,
                        height: '20px',
                        transition: 'all 0.2s ease',
                        borderColor: '#e0e0e0',
                        borderRadius: '10px',
                        '&:hover': {
                          background: 'rgba(86, 37, 131, 0.08)',
                          borderColor: '#562583',
                          color: '#562583'
                        }
                      }}
                    >
                      Options
                    </Button>
                  }
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <FolderIcon sx={{ 
                      color: '#fbc02d',
                      transition: 'all 0.2s ease',
                      '&:hover': { transform: 'scale(1.1)' }
                    }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={{ 
                        color: '#562583', 
                        fontWeight: 600, 
                        fontSize: 15, 
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': { color: '#7b3c9e' }
                      }}>
                        {folder}
                      </Typography>
                    } 
                  />
                </ListItem>
              </Fade>
            ))}
          </List>
        </Paper>
      </Box>
      {/* Right Panel */}
      <Box sx={{ width: 280, minWidth: 240, mt: 1 }}>
        <Paper sx={{ 
          p: 2.5, 
          mb: 2, 
          borderRadius: '16px', 
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)', 
          border: '1px solid rgba(0,0,0,0.06)',
          transition: 'all 0.3s ease',
          background: 'white',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }
        }}>
          <Button 
            variant="contained" 
            size="small" 
            startIcon={<UploadFileIcon />}
            sx={{ 
              width: '100%', 
              mb: 1.5, 
              textTransform: 'none',
              transition: 'all 0.2s ease',
              background: 'linear-gradient(45deg, #562583, #7b3c9e)',
              borderRadius: '12px',
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 12px rgba(86, 37, 131, 0.2)',
                background: 'linear-gradient(45deg, #562583, #7b3c9e)',
              }
            }}
          >
            Upload files
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            startIcon={<AddIcon />}
            sx={{ 
              width: '100%', 
              mb: 1.5, 
              textTransform: 'none',
              transition: 'all 0.2s ease',
              borderColor: '#e0e0e0',
              borderRadius: '12px',
              '&:hover': {
                transform: 'translateY(-1px)',
                borderColor: '#562583',
                color: '#562583'
              }
            }}
          >
            New
          </Button>
          <Divider sx={{ my: 2 }} />
          {[
            { text: 'Filter by user', icon: <FilterListIcon /> },
            { text: 'Approval report', icon: <FilterListIcon /> },
            { text: 'Upload via email', icon: <EmailIcon /> },
            { text: 'View trash', icon: <DeleteOutlineIcon /> }
          ].map((item) => (
            <Button 
              key={item.text}
              size="small" 
              startIcon={item.icon}
              sx={{ 
                width: '100%', 
                justifyContent: 'flex-start', 
                textTransform: 'none', 
                mb: 1,
                color: '#666',
                transition: 'all 0.2s ease',
                borderRadius: '10px',
                '&:hover': {
                  background: 'rgba(86, 37, 131, 0.04)',
                  transform: 'translateX(4px)',
                  color: '#562583'
                }
              }}
            >
              {item.text}
            </Button>
          ))}
          <Divider sx={{ my: 2 }} />
          <InputBase 
            placeholder="Filter by label" 
            size="small" 
            sx={{ 
              width: '100%', 
              mb: 2, 
              px: 1.5, 
              py: 1, 
              background: '#f8f9fa', 
              borderRadius: '12px', 
              fontSize: 14,
              transition: 'all 0.2s ease',
              '&:focus-within': {
                background: '#f0f0f5',
                boxShadow: '0 2px 8px rgba(86, 37, 131, 0.05)'
              }
            }} 
          />
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {labels.map(l => (
              <Chip 
                key={l.label} 
                label={l.label} 
                color={l.color} 
                size="small" 
                sx={{ 
                  mb: 0.5, 
                  fontWeight: 500, 
                  textTransform: 'lowercase',
                  transition: 'all 0.2s ease',
                  borderRadius: '8px',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: '0 2px 4px rgba(86, 37, 131, 0.1)'
                  }
                }} 
              />
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default FileExplorer; 