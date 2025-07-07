import React from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

const WelcomeMessage = ({ onNext }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom align="center">
        Welcome to the Client Portal
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }} align="center">
        We're excited to have you on board! Let's get you set up with your account.
      </Typography>

      <Paper 
        sx={{ 
          p: 3, 
          mb: 4,
          borderRadius: 3,
          '& .MuiListItem-root': {
            borderRadius: 2,
            mb: 1,
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          },
          '& .MuiListItemIcon-root': {
            minWidth: 40,
          }
        }}
      >
        <Typography variant="h6" gutterBottom>
          What to Expect
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Personal Information"
              secondary="Set up your basic profile information"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SecurityIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Secure Password"
              secondary="Create a strong password for your account"
            />
          </ListItem>
        </List>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onNext}
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
            }
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomeMessage; 