import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Button,
  Divider,
  CircularProgress
} from '@mui/material';

const WorkspaceDetails = () => {
  const { workspaceId } = useParams();
  const navigate = useNavigate();
  const [workspace, setWorkspace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch workspace details from API
    // This is a placeholder for demonstration
    setTimeout(() => {
      setWorkspace({
        id: workspaceId,
        name: `Workspace ${workspaceId}`,
        description: 'Detailed description of the workspace',
        createdAt: new Date().toISOString(),
        members: [
          { id: 1, name: 'John Doe', role: 'Admin' },
          { id: 2, name: 'Jane Smith', role: 'Member' },
        ],
        status: 'Active'
      });
      setLoading(false);
    }, 1000);
  }, [workspaceId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">{workspace.name}</Typography>
        <Button 
          variant="outlined" 
          onClick={() => navigate('/workspaces')}
        >
          Back to Workspaces
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Workspace Information</Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">Description</Typography>
            <Typography variant="body1">{workspace.description}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">Status</Typography>
            <Typography variant="body1">{workspace.status}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">Created At</Typography>
            <Typography variant="body1">
              {new Date(workspace.createdAt).toLocaleDateString()}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Members</Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {workspace.members.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle1">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Role: {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default WorkspaceDetails; 