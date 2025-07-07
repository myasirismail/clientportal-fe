import React from 'react';
import { Box, Typography, Button, Paper, Avatar, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Tooltip from '@mui/material/Tooltip';

const workspaceOwners = [
  { name: 'Adrian Baker', avatar: '', role: '' },
  { name: 'Chris Jones', avatar: '', role: '' },
  { name: 'Joe Brown', avatar: '', role: '' },
];

const members = [
  { name: 'George Allen', avatar: '', role: '' },
  { name: 'Harry Williams', avatar: '', role: '' },
  { name: 'Henry Williams', avatar: '', role: 'Accountant' },
  { name: 'Jane Chapman', avatar: '', role: 'Sales Manager' },
  { name: 'Ralph Stephens', avatar: '', role: 'Head of Design' },
  { name: 'Steve Morris', avatar: '', role: '' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      type: 'spring',
      stiffness: 60,
    },
  }),
};

const Members = () => (
  <Box sx={{ bgcolor: '#f7f7f7', minHeight: '100vh', py: 4 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#222' }}>Client Extranet</Typography>
      <Tooltip title="Invite users">
        <IconButton 
          sx={{ 
            bgcolor: '#562583', 
            borderRadius: '18px', 
            boxShadow: 'none',
            color: '#fff',
            p: 1.2,
            '&:hover': { bgcolor: '#46206b' }
          }}
        >
          <PersonAddAlt1Icon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </Box>
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#222' }}>Workspace owners</Typography>
      <Box sx={{ display: 'flex', gap: 3 }}>
        {workspaceOwners.map((owner, i) => (
          <motion.div
            key={owner.name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            style={{ display: 'flex' }}
          >
            <Paper sx={{
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              minWidth: 200,
              borderRadius: '18px',
              boxShadow: '0 2px 12px rgba(86,37,131,0.06)',
              bgcolor: '#fff',
              border: '1px solid #f0eef6',
            }}>
              <Avatar sx={{ mr: 2, width: 48, height: 48, bgcolor: '#ede7f6', color: '#562583', fontWeight: 700, fontSize: 24, borderRadius: '12px' }} />
              <Box>
                <Typography variant="subtitle2" sx={{ color: '#222', fontWeight: 600 }}>{owner.name}</Typography>
                {owner.role && <Typography variant="caption" color="text.secondary">{owner.role}</Typography>}
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#222' }}>Members</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            style={{ display: 'flex' }}
          >
            <Paper sx={{
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              minWidth: 200,
              borderRadius: '18px',
              boxShadow: '0 2px 12px rgba(86,37,131,0.06)',
              bgcolor: '#fff',
              border: '1px solid #f0eef6',
            }}>
              <Avatar sx={{ mr: 2, width: 48, height: 48, bgcolor: '#ede7f6', color: '#562583', fontWeight: 700, fontSize: 24, borderRadius: '12px' }} />
              <Box>
                <Typography variant="subtitle2" sx={{ color: '#222', fontWeight: 600 }}>{member.name}</Typography>
                {member.role && <Typography variant="caption" color="text.secondary">{member.role}</Typography>}
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  </Box>
);

export default Members; 