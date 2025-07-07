import React, { useState } from 'react';
import {
  Button,
  Avatar,
  Box,
  Typography,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import './TaskPage.css';

const statusColors = {
  Active: 'success',
  Assigned: 'error',
  'In Progress': 'info',
  Stopped: 'warning',
  Unassign: 'secondary',
};

const initialTasks = [
  { name: 'Setup meeting with nursery', deadline: '12 Dec 2020', status: 'Active', workingTime: '00:45:14', assignee: 'A' },
  { name: 'Marketing Coordinator', deadline: '12 Dec 2020', status: 'Assigned', workingTime: '00:45:14', assignee: 'B' },
  { name: 'Marketing Communication', deadline: '12 Dec 2020', status: 'Active', workingTime: '00:45:14', assignee: 'C' },
  { name: 'Quality Control Coordinator', deadline: '12 Dec 2020', status: 'In Progress', workingTime: '00:45:14', assignee: 'D' },
  { name: 'Administrative Analyst', deadline: '12 Dec 2020', status: 'Active', workingTime: '00:45:14', assignee: 'E' },
  { name: 'Marketing Coordinator', deadline: '12 Dec 2020', status: 'Active', workingTime: '00:45:14', assignee: 'F' },
  { name: 'Quality Control Coordinator', deadline: '12 Dec 2020', status: 'Stopped', workingTime: '00:45:14', assignee: 'G' },
  { name: 'Marketing Communication', deadline: '12 Dec 2020', status: 'Active', workingTime: '00:45:14', assignee: 'H' },
  { name: 'Administrative Analyst', deadline: '12 Dec 2020', status: 'Unassign', workingTime: '00:45:14', assignee: 'I' },
];

export default function TaskPage() {
  const [tasks] = useState(initialTasks);
  const navigate = useNavigate();

  return (
    <Box className="task-page-container" sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Box 
        className="task-header" 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 4 
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600,
            color: '#1e293b',
            fontSize: '1.5rem'
          }}
        >
          Tasks
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/create-task')}
          sx={{ 
            borderRadius: "12px",
            bgcolor: '#646cff',
            textTransform: 'none',
            fontWeight: 500,
            px: 3,
            py: 1,
            boxShadow: '0 4px 12px rgba(100, 108, 255, 0.2)',
            '&:hover': {
              bgcolor: '#535bf2',
              transform: 'translateY(-1px)',
              boxShadow: '0 6px 16px rgba(100, 108, 255, 0.3)'
            }
          }}
        >
          Add Task
        </Button>
      </Box>
      <Box 
        className="task-table" 
        sx={{ 
          bgcolor: 'white', 
          borderRadius: "16px", 
          p: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          border: 'none'
        }}
      >
        <Box 
          className="task-table-header" 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', 
            gap: 3, 
            mb: 3,
            color: '#64748b',
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          <Typography>Task name</Typography>
          <Typography>Deadline</Typography>
          <Typography>Status</Typography>
          <Typography>Working time</Typography>
          <Typography>Assignee</Typography>
        </Box>
        {tasks.map((task, idx) => (
          <Box 
            className="task-table-row" 
            key={idx} 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', 
              gap: 3, 
              mb: 2,
              p: 2,
              borderRadius: "12px",
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#f8fafc',
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }
            }}
          >
            <Typography sx={{ color: '#1e293b', fontWeight: 500 }}>{task.name}</Typography>
            <Typography sx={{ color: '#64748b' }}>{task.deadline}</Typography>
            <Chip
              label={task.status}
              color={statusColors[task.status]}
              size="small"
              sx={{ 
                borderRadius: "8px",
                fontWeight: 500,
                '& .MuiChip-label': {
                  px: 1.5
                }
              }}
            />
            <Typography sx={{ color: '#64748b' }}>{task.workingTime}</Typography>
            <Avatar 
              sx={{ 
                width: 36, 
                height: 36,
                bgcolor: '#646cff',
                fontWeight: 600,
                fontSize: '0.875rem',
                boxShadow: '0 2px 8px rgba(100, 108, 255, 0.2)'
              }}
            >
              {task.assignee}
            </Avatar>
          </Box>
        ))}
      </Box>
    </Box>
  );
} 