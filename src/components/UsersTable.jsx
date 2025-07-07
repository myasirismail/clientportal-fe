import React, { useState } from 'react';
import {
  Box, Typography, Button, Paper, Avatar, TextField, MenuItem, Select, InputAdornment, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Stack
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const mockUsers = [
  { name: 'Adrian Baker', lastSignedIn: 'Active less than 10 minutes ago', permission: 'Workspace Owner', avatar: '', follow: 'Follow workspace' },
  { name: 'Chris Jones', lastSignedIn: "Active Thu Feb 13 '19", permission: 'Workspace Owner', avatar: '', follow: 'Follow workspace' },
  { name: 'George Allen', lastSignedIn: 'Active 11 seconds ago', permission: 'Contributor', avatar: '', follow: 'Follow workspace' },
  { name: 'Harry Williams', lastSignedIn: 'Active less than 10 minutes ago', permission: 'Contributor', avatar: '', follow: 'Follow workspace' },
  { name: 'Henry Williams', lastSignedIn: "Active Wed Jul 19 '17", permission: 'Can Comment', avatar: '', follow: 'Follow workspace' },
  { name: 'Jane Chapman', lastSignedIn: "Active Wed Jul 19 '17", permission: 'Contributor', avatar: '', follow: 'Follow workspace' },
  { name: 'Joe Brown', lastSignedIn: 'Active 19 hours ago', permission: 'Workspace Owner', avatar: '', follow: 'Follow workspace' },
  { name: 'Ralph Stephens', lastSignedIn: "Active Mon Jun 27 '16", permission: 'Can Comment', avatar: '', follow: 'Follow workspace' },
  { name: 'Steve Morris', lastSignedIn: "Active Wed Jul 19 '17", permission: 'Read Only', avatar: '', follow: 'Follow workspace' },
];

const permissionOptions = [
  'Workspace Owner',
  'Contributor',
  'Can Comment',
  'Read Only',
];

const followOptions = [
  'Follow workspace',
  'Unfollow workspace',
];

const statusOptions = [
  'Choose One',
  'Active',
  'Inactive',
];

const UsersTable = () => {
  const [status, setStatus] = useState('Choose One');
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(mockUsers);

  return (
    <Box sx={{ 
      bgcolor: '#fafafa', 
      minHeight: '100vh', 
      py: 4, 
      px: { xs: 2, md: 4 }
    }}>
      <Box sx={{ 
        maxWidth: '1200px', 
        mx: 'auto'
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 4 
        }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              color: '#562583',
              letterSpacing: '-0.5px'
            }}
          >
            Client Extranet
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#562583', 
              borderRadius: 1.5, 
              textTransform: 'none', 
              fontWeight: 500,
              px: 3,
              py: 1,
              '&:hover': { 
                bgcolor: '#4a1f6e',
                boxShadow: '0 4px 12px rgba(86, 37, 131, 0.2)'
              } 
            }}
          >
            Invite users
          </Button>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2, 
          mb: 3,
          flexWrap: { xs: 'wrap', sm: 'nowrap' }
        }}>
          <Select
            value={status}
            onChange={e => setStatus(e.target.value)}
            size="small"
            sx={{ 
              minWidth: 150, 
              bgcolor: '#fff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#e0e0e0'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#562583'
              }
            }}
          >
            {statusOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
          </Select>
          <TextField
            size="small"
            placeholder="Search by name or email"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ 
              width: { xs: '100%', sm: 300 }, 
              bgcolor: '#fff',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e0e0e0'
                },
                '&:hover fieldset': {
                  borderColor: '#562583'
                }
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" sx={{ color: '#562583' }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>

        <TableContainer 
          component={Paper} 
          sx={{ 
            borderRadius: 2, 
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
            border: '1px solid #f0f0f0',
            maxHeight:'55vh',
            overflowY:'auto',
            width:'100%',
            scrollbarWidth:'thin',
            scrollbarColor:'#562583 #f7f8fa'
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: '#562583' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#562583' }}>Last signed in</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#562583' }}>Permission</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#562583' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, idx) => (
                <TableRow 
                  key={user.name}
                  sx={{ 
                    '&:hover': { 
                      bgcolor: '#fafafa'
                    }
                  }}
                >
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Avatar 
                        sx={{ 
                          width: 36, 
                          height: 36,
                          bgcolor: '#562583',
                          fontSize: '0.875rem'
                        }}
                      >
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Typography sx={{ fontWeight: 500 }}>{user.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ color: '#666' }}>{user.lastSignedIn}</TableCell>
                  <TableCell>
                    <Select
                      value={user.permission}
                      size="small"
                      sx={{ 
                        minWidth: 150,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#e0e0e0'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#562583'
                        }
                      }}
                      onChange={e => {
                        const updated = [...users];
                        updated[idx].permission = e.target.value;
                        setUsers(updated);
                      }}
                    >
                      {permissionOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={user.follow}
                      size="small"
                      sx={{ 
                        minWidth: 150,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#e0e0e0'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#562583'
                        }
                      }}
                      onChange={e => {
                        const updated = [...users];
                        updated[idx].follow = e.target.value;
                        setUsers(updated);
                      }}
                    >
                      {followOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default UsersTable; 