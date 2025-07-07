import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Radio, RadioGroup, FormControlLabel, Typography, Box, LinearProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PollModal = ({ open, onClose, question, options, onVote }) => {
  const [selected, setSelected] = useState('');
  // Dummy votes for preview
  const [votes, setVotes] = useState(Array(options.length + 1).fill(0)); // +1 for Declined
  const totalVotes = votes.reduce((a, b) => a + b, 0);

  const handleVote = () => {
    if (selected) {
      const idx = options.indexOf(selected);
      setVotes(v => v.map((n, i) => i === idx ? n + 1 : n));
      if (onVote) onVote(selected);
    }
    onClose();
  };
  const handleDecline = () => {
    setVotes(v => v.map((n, i) => i === options.length ? n + 1 : n));
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 5,
          boxShadow: '0 8px 32px 0 rgba(60,72,100,0.18)',
          background: '#fafbfc',
          p: 0,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 4, pt: 3, pb: 0 }}>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 22, p: 0, bgcolor: 'transparent', flex: 1 }}>
          {question}
        </DialogTitle>
        <IconButton onClick={onClose} sx={{ ml: 2, color: '#bdbdbd', borderRadius: 2, '&:hover': { bgcolor: '#f0f1f3' } }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ px: 4, pt: 1, pb: 0 }}>
        <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: 16, fontWeight: 500 }}>
          Select your choice and vote…
        </Typography>
        <RadioGroup value={selected} onChange={e => setSelected(e.target.value)}>
          {options.map((opt, idx) => (
            <FormControlLabel
              key={idx}
              value={opt}
              control={<Radio sx={{ p: 0.5, mr: 1, '&.Mui-checked': { color: '#562583' }, borderRadius: 2 }} />}
              label={<Box sx={{ fontSize: 16, fontWeight: 500, px: 2, py: 1, borderRadius: 3, bgcolor: selected === opt ? '#f3eaff' : '#f7f8fa', transition: 'background 0.2s' }}>{opt}</Box>}
              sx={{ mb: 1, borderRadius: 3 }}
            />
          ))}
        </RadioGroup>
        <Box sx={{ mt: 3 }}>
          {options.map((opt, idx) => (
            <Box key={idx} sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 15, mb: 0.5 }}>{opt}</Typography>
              <LinearProgress
                variant="determinate"
                value={totalVotes ? (votes[idx] / totalVotes) * 100 : 0}
                sx={{
                  height: 12,
                  borderRadius: 6,
                  background: '#ececec',
                  mb: 0.5,
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 6,
                    background: '#562583',
                  },
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {votes[idx]} votes / {totalVotes ? Math.round((votes[idx] / totalVotes) * 100) : 0}%
              </Typography>
            </Box>
          ))}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 15, mb: 0.5 }}>Declined to vote</Typography>
            <LinearProgress
              variant="determinate"
              value={totalVotes ? (votes[options.length] / totalVotes) * 100 : 0}
              sx={{
                height: 12,
                borderRadius: 6,
                background: '#ececec',
                mb: 0.5,
                '& .MuiLinearProgress-bar': {
                  borderRadius: 6,
                  background: '#bdbdbd',
                },
              }}
            />
            <Typography variant="caption" color="text.secondary">
              {votes[options.length]} votes / {totalVotes ? Math.round((votes[options.length] / totalVotes) * 100) : 0}%
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500, pl: 0.5 }}>Total {totalVotes} votes</Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ pr: 4, pl: 4, pb: 3, pt: 2, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
        <Button
          onClick={handleDecline}
          sx={{
            textTransform: 'none',
            color: '#6d6d6d',
            fontWeight: 500,
            borderRadius: 3,
            px: 3,
            py: 1.2,
            background: '#f7f8fa',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#ececec' },
          }}
        >
          Decline
        </Button>
        <Button
          onClick={handleVote}
          variant="contained"
          sx={{
            textTransform: 'none',
            bgcolor: '#562583',
            fontWeight: 600,
            borderRadius: 3,
            px: 3,
            py: 1.2,
            boxShadow: 'none',
            '&:hover': { bgcolor: '#4a1f6e' },
          }}
          disabled={!selected}
        >
          Vote Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PollModal; 