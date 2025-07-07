import React from 'react';
import { Drawer, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const statusOptions = [
  { value: 'submitted', label: 'Submitted' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'overdue', label: 'Overdue' },
];

const InformationRequestsFilterDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Filter Information Requests</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>
        <TextField label="Type to filter" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Date range filter" type="date" variant="outlined" fullWidth sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Assigned to filter</InputLabel>
          <Select label="Assigned to filter" defaultValue="">
            <MenuItem value="">Select assignee</MenuItem>
            <MenuItem value="Kayleigh Lang">Kayleigh Lang</MenuItem>
            <MenuItem value="Megan Wild">Megan Wild</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Workspace filter</InputLabel>
          <Select label="Workspace filter" defaultValue="">
            <MenuItem value="">Select workspace</MenuItem>
            <MenuItem value="Personal Tax">Personal Tax</MenuItem>
            <MenuItem value="Onboarding Workspace">Onboarding Workspace</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Status filter</InputLabel>
          <Select label="Status filter" defaultValue="">
            <MenuItem value="">All</MenuItem>
            {statusOptions.map(opt => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Placeholder for donut chart */}
          <Box sx={{ width: 120, height: 120, borderRadius: '50%', bgcolor: '#f5f5fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="caption" color="text.secondary">Donut Chart</Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default InformationRequestsFilterDrawer; 