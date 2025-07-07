import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Avatar, AvatarGroup, Chip, Stack, Divider, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WorkspaceCreationModal from './WorkspaceCreationModal';

const Workspaces = () => {
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // TODO: Fetch workspaces from API
    // This is a placeholder for demonstration
    setWorkspaces([
      { 
        id: 1, 
        name: 'Workspace 1', 
        description: 'Description for workspace 1',
        memberCount: 5,
        lastActivity: '2 hours ago',
        members: [
          { id: 1, name: 'John Doe', avatar: 'JD' },
          { id: 2, name: 'Sarah Miller', avatar: 'SM' },
          { id: 3, name: 'Mike Ross', avatar: 'MR' }
        ]
      },
      { 
        id: 2, 
        name: 'Workspace 2', 
        description: 'Description for workspace 2',
        memberCount: 3,
        lastActivity: '5 hours ago',
        members: [
          { id: 4, name: 'Alice King', avatar: 'AK' },
          { id: 5, name: 'Bob Lee', avatar: 'BL' }
        ]
      },
    ]);
  }, []);

  const handleWorkspaceClick = (workspaceId) => {
    navigate(`/workspace-detail`);
  };

  const handleCreateWorkspace = (workspace) => {
    // Optionally, add the new workspace to the list
    setWorkspaces(prev => [
      ...prev,
      {
        id: prev.length + 1,
        name: workspace.name,
        description: workspace.description,
        memberCount: 1,
        lastActivity: 'just now',
        members: [],
      }
    ]);
    setModalOpen(false);
  };

  return (
    <Box sx={{
      bgcolor: '#f6f8fb',
      minHeight: '100vh',
      py: { xs: 2, sm: 4 },
      px: { xs: 1, sm: 3, md: 6 },
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 }
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: '#222',
            letterSpacing: '-0.5px',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          Workspaces
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModalOpen(true)}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            px: 2.5,
            py: 0.7,
            fontWeight: 500,
            fontSize: '0.95rem',
            minWidth: 0,
            boxShadow: 'none',
            height: 36,
          }}
        >
          + Create Workspace
        </Button>
      </Box>
      <Grid container spacing={3}>
        {workspaces.map((workspace) => (
          <Grid item size={4} key={workspace.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: '0 2px 8px rgba(80, 112, 255, 0.1)',
                bgcolor: '#fff',
                p: 0,
                border: '1px solid #f0f1f3',
                minHeight: 210,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'box-shadow 0.2s, border 0.2s',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(80, 112, 255, 0.10)',
                  border: '1.5px solid #1976d2',
                  backgroundColor: '#f7faff',
                },
              }}
              onClick={() => handleWorkspaceClick(workspace.id)}
            >
              <CardContent sx={{ p: 2.2, pb: 1.5 }}>
                <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                  <DescriptionIcon sx={{ color: '#90a4ae', fontSize: 17 }} />
                  <Typography variant="caption" color="#7b8a9c" sx={{ fontWeight: 400 }}>
                    {workspace.description}
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 500, mb: 0.5, color: '#222', fontSize: '1.05rem' }}
                  noWrap
                >
                  {workspace.name}
                </Typography>
                <Stack direction="row" spacing={1} mb={1.2}>
                  <Chip
                    icon={<PeopleAltIcon sx={{ fontSize: 15 }} />}
                    label={`${workspace.memberCount}`}
                    size="small"
                    sx={{
                      bgcolor: '#f4f7fa',
                      color: '#1976d2',
                      fontWeight: 400,
                      borderRadius: 1,
                      height: 24,
                      fontSize: '0.80rem',
                      px: 0.5,
                    }}
                  />
                  <Chip
                    icon={<AccessTimeIcon sx={{ fontSize: 15 }} />}
                    label={workspace.lastActivity}
                    size="small"
                    sx={{
                      bgcolor: '#f4f7fa',
                      color: '#7b8a9c',
                      fontWeight: 400,
                      borderRadius: 1,
                      height: 24,
                      fontSize: '0.80rem',
                      px: 0.5,
                    }}
                  />
                </Stack>
                <Divider sx={{ my: 1.2 }} />
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 28, height: 28, fontSize: 13 } }}>
                    {workspace.members.map((member) => (
                      <Tooltip title={member.name} key={member.id}>
                        <Avatar sx={{ bgcolor: '#e3f0fc', color: '#1976d2', fontWeight: 500, fontSize: 13 }}>
                          {member.avatar}
                        </Avatar>
                      </Tooltip>
                    ))}
                  </AvatarGroup>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button
                    variant="outlined"
                    size="small"
                    endIcon={<ArrowForwardIosIcon sx={{ fontSize: 13 }} />}
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 400,
                      px: 1.5,
                      fontSize: '0.85rem',
                      minWidth: 0,
                      height: 30,
                      borderColor: '#e0e3e7',
                      color: '#1976d2',
                      boxShadow: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    Open
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <WorkspaceCreationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateWorkspace}
      />
    </Box>
  );
};

export default Workspaces; 