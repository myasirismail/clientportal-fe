import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const WorkspaceCreationModal = ({ open, onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    if (name.trim()) {
      onCreate({ name, description });
      setName('');
      setDescription('');
    }
  };

  const handleClose = () => {
    setName('');
    setDescription('');
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="xs" 
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3 }
      }}
    >
      <DialogTitle sx={{ borderRadius: 3, pb: 1.5 }}>Create Workspace</DialogTitle>
      <DialogContent sx={{ borderRadius: 3 }}>
        <Box component="form" sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Workspace Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoFocus
            fullWidth
            size="small"
            InputProps={{ sx: { borderRadius: 2 } }}
          />
          <TextField
            label="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            multiline
            minRows={2}
            fullWidth
            size="small"
            InputProps={{ sx: { borderRadius: 2 } }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ borderRadius: 3, pb: 2, px: 3 }}>
        <Button onClick={handleClose} color="inherit" variant="text" sx={{ borderRadius: 2 }}>Cancel</Button>
        <Button onClick={handleCreate} variant="contained" color="primary" disabled={!name.trim()} sx={{ borderRadius: 2 }}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkspaceCreationModal; 