import React from 'react';
import { Drawer, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, IconButton, Divider, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const statusOptions = [
  { value: 'submitted', label: 'Submitted' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'overdue', label: 'Overdue' },
];

// Dummy data for the pie chart
const chartData = [
  { name: 'Submitted', value: 45, color: '#4CAF50' },
  { name: 'In Progress', value: 30, color: '#2196F3' },
  { name: 'Overdue', value: 25, color: '#F44336' },
];

const FilterDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { bgcolor: '#f7f7f7' } }}>
      <Box sx={{ width: 380, px: 3, height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#f7f7f7' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }} color="text.primary">Filter Information Requests</Typography>
            <IconButton onClick={onClose}><CloseIcon /></IconButton>
          </Box>
          <TextField label="Type to filter" variant="outlined" fullWidth size="small" sx={{ mb: 2 }} />
          <Divider sx={{ mb: 2 }} />
          <TextField label="Date range filter" type="date" variant="outlined" fullWidth size="small" sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} />
          <Divider sx={{ mb: 2 }} />
          <FormControl fullWidth sx={{ mb: 2 }} size="small">
            <InputLabel>Assigned to filter</InputLabel>
            <Select label="Assigned to filter" defaultValue="">
              <MenuItem value="">Select assignee</MenuItem>
              <MenuItem value="Kayleigh Lang">Kayleigh Lang</MenuItem>
              <MenuItem value="Megan Wild">Megan Wild</MenuItem>
            </Select>
          </FormControl>
          <Divider sx={{ mb: 2 }} />
          <FormControl fullWidth sx={{ mb: 2 }} size="small">
            <InputLabel>Workspace filter</InputLabel>
            <Select label="Workspace filter" defaultValue="">
              <MenuItem value="">Select workspace</MenuItem>
              <MenuItem value="Personal Tax">Personal Tax</MenuItem>
              <MenuItem value="Onboarding Workspace">Onboarding Workspace</MenuItem>
            </Select>
          </FormControl>
          <Divider sx={{ mb: 2 }} />
          <FormControl fullWidth sx={{ mb: 2 }} size="small">
            <InputLabel>Status filter</InputLabel>
            <Select label="Status filter" defaultValue="">
              <MenuItem value="">All</MenuItem>
              {statusOptions.map(opt => (
                <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Box>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer; 