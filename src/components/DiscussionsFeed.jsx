import React, { useState } from 'react';
import { Paper, Tabs, Tab, Box, Avatar, TextField, Button, InputAdornment, IconButton, Stack, Typography } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import PollModal from './PollModal';

const posts = [
  {
    id: 1,
    user: { name: 'Chris Jones', avatar: '' },
    time: 'Tue May 9 16',
    workspace: 'Project Workspace',
    content: 'project costings.xls',
    fileType: 'excel',
    comments: [
      {
        id: 1,
        user: { name: 'George Allen', avatar: '' },
        time: '22 hours ago',
        content: 'Couple of changes needed. Document version 1 has been approved by Joe Brown',
        reply: true,
      },
    ],
  },
  {
    id: 2,
    user: { name: 'Chris Jones', avatar: '' },
    time: 'Tue May 9 16',
    workspace: 'Project Workspace',
    content: 'proposal.docx',
    fileType: 'word',
    comments: [],
  },
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

const DiscussionsFeed = () => {
  const [tab, setTab] = useState(0);
  const [postText, setPostText] = useState('');
  const [pollQuestion, setPollQuestion] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '']);
  const [pollModalOpen, setPollModalOpen] = useState(false);

  const handleOptionChange = (idx, value) => {
    setPollOptions(options => options.map((opt, i) => i === idx ? value : opt));
  };
  const handleAddOption = () => {
    setPollOptions(options => [...options, '']);
  };
  const handleRemoveOption = (idx) => {
    if (pollOptions.length > 2) {
      setPollOptions(options => options.filter((_, i) => i !== idx));
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 22, color: '#222' }}>
          Project Workspace
        </Typography>
        <Button variant="outlined" sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 500, borderColor: '#562583', color: '#562583', '&:hover': { bgcolor: '#f3eaff', borderColor: '#4a1f6e' } }}>
          Follow Workspace
        </Button>
      </Box>

      {/* Post Input */}
      {tab === 0 && (
        <Paper sx={{ mb: 3, p: { xs: 2, md: 3 }, borderRadius: 3, boxShadow: '0 2px 16px 0 rgba(60,72,100,0.04)', border: '1px solid #f0f1f3', background: '#fff' }}>
          <Tabs 
            value={tab} 
            onChange={(_, v) => setTab(v)} 
            sx={{ 
              mb: 2, 
              minHeight: 36,
              '& .MuiTab-root.Mui-selected': {
                color: '#562583',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#562583',
              }
            }} 
            TabIndicatorProps={{ style: { height: 2, borderRadius: 1 } }}
          >
            <Tab label="Post" sx={{ minHeight: 36, fontWeight: 500, fontSize: 15 }} />
            <Tab label="Poll" sx={{ minHeight: 36, fontWeight: 500, fontSize: 15 }} />
            <Tab label="Announcement" sx={{ minHeight: 36, fontWeight: 500, fontSize: 15 }} />
          </Tabs>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ mt: 0.5, width: 44, height: 44, bgcolor: '#562583', fontWeight: 600, fontSize: 20 }} />
            <TextField
              fullWidth
              multiline
              minRows={2}
              placeholder="What's on your mind?"
              value={postText}
              onChange={e => setPostText(e.target.value)}
              sx={{ 
                background: '#f7f8fa', 
                borderRadius: 2, 
                fontSize: 16, 
                border: 'none', 
                boxShadow: 'none',
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#562583',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#562583',
                  },
                },
              }}
              InputProps={{
                style: { fontSize: 16 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small" sx={{ color: '#562583' }}><AttachFileIcon /></IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 1 }}>
            <Button size="small" sx={{ textTransform: 'none', borderRadius: 2, px: 3, fontWeight: 500, color: 'grey.700' }}>Cancel</Button>
            <Button 
              size="small" 
              variant="contained" 
              sx={{ 
                textTransform: 'none', 
                borderRadius: 2, 
                px: 3, 
                fontWeight: 500, 
                boxShadow: 'none',
                bgcolor: '#562583',
                '&:hover': {
                  bgcolor: '#4a1f6e',
                }
              }} 
              endIcon={<SendIcon />}
            >
              Post
            </Button>
          </Box>
        </Paper>
      )}
      {tab === 1 && (
        <Paper sx={{ mb: 3, p: { xs: 2, md: 3 }, borderRadius: 3, boxShadow: '0 4px 24px 0 rgba(60,72,100,0.08)', border: 'none', background: '#fff' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Poll Question"
              placeholder="Type your question here..."
              value={pollQuestion}
              onChange={e => setPollQuestion(e.target.value)}
              InputProps={{
                sx: {
                  background: '#f7f8fa',
                  borderRadius: 2,
                  boxShadow: 'none',
                  border: 'none',
                  '& fieldset': { border: 'none' },
                  fontSize: 17,
                  px: 1.5,
                }
              }}
            />
            {pollOptions.map((option, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, position: 'relative' }}>
                <TextField
                  fullWidth
                  placeholder={`Option ${idx + 1}`}
                  value={option}
                  onChange={e => handleOptionChange(idx, e.target.value)}
                  InputProps={{
                    sx: {
                      background: '#f7f8fa',
                      borderRadius: 2,
                      boxShadow: 'none',
                      border: 'none',
                      '& fieldset': { border: 'none' },
                      fontSize: 16,
                      px: 1.5,
                      transition: 'box-shadow 0.2s',
                      '&:hover': { boxShadow: '0 2px 8px 0 rgba(60,72,100,0.06)' },
                    }
                  }}
                />
                {pollOptions.length > 2 && (
                  <IconButton size="small" onClick={() => handleRemoveOption(idx)} sx={{ color: '#bdbdbd', '&:hover': { color: '#e57373', bgcolor: 'transparent' } }}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={handleAddOption}
              sx={{
                alignSelf: 'flex-start',
                color: '#562583',
                fontWeight: 500,
                textTransform: 'none',
                px: 1.5,
                borderRadius: 2,
                background: 'none',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#f3eaff' },
              }}
            >
              Add Option
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 1 }}>
              <Button size="small" sx={{ textTransform: 'none', borderRadius: 2, px: 3, fontWeight: 500, color: 'grey.700', background: 'none', boxShadow: 'none' }}>Cancel</Button>
              <Button 
                size="small" 
                variant="contained" 
                sx={{ 
                  textTransform: 'none', 
                  borderRadius: 2, 
                  px: 3, 
                  fontWeight: 500, 
                  boxShadow: 'none',
                  bgcolor: '#562583',
                  '&:hover': {
                    bgcolor: '#4a1f6e',
                  }
                }} 
                endIcon={<SendIcon />}
                onClick={() => setPollModalOpen(true)}
              >
                Post Poll
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
      {tab === 2 && (
        <Paper sx={{ mb: 3, p: { xs: 2, md: 3 }, borderRadius: 3, boxShadow: '0 2px 16px 0 rgba(60,72,100,0.04)', border: '1px solid #f0f1f3', background: '#fff' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Avatar sx={{ mt: 0.5, width: 44, height: 44, bgcolor: '#562583', fontWeight: 600, fontSize: 20 }} />
            <TextField
              fullWidth
              multiline
              minRows={2}
              placeholder="What's on your mind?"
              value={postText}
              onChange={e => setPostText(e.target.value)}
              sx={{ 
                background: '#f7f8fa', 
                borderRadius: 2, 
                fontSize: 16, 
                border: 'none', 
                boxShadow: 'none',
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#562583',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#562583',
                  },
                },
              }}
              InputProps={{
                style: { fontSize: 16 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small" sx={{ color: '#562583' }}><AttachFileIcon /></IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 1 }}>
            <Button size="small" sx={{ textTransform: 'none', borderRadius: 2, px: 3, fontWeight: 500, color: 'grey.700' }}>Cancel</Button>
            <Button 
              size="small" 
              variant="contained" 
              sx={{ 
                textTransform: 'none', 
                borderRadius: 2, 
                px: 3, 
                fontWeight: 500, 
                boxShadow: 'none',
                bgcolor: '#562583',
                '&:hover': {
                  bgcolor: '#4a1f6e',
                }
              }} 
              endIcon={<SendIcon />}
            >
              Post Announcement
            </Button>
          </Box>
        </Paper>
      )}

      {/* Feed */}
      <Stack spacing={2}>
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            style={{ display: 'flex', width: '100%' }}
          >
            <Paper
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                width: '100%',
                boxShadow: '0 2px 16px 0 rgba(60,72,100,0.04)',
                border: '1px solid #f0f1f3',
                background: '#fff',
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: '0 4px 24px 0 rgba(60,72,100,0.10)' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <Avatar sx={{ width: 40, height: 40, mr: 1.5, bgcolor: '#562583', fontWeight: 600, fontSize: 18 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: 16, color: 'text.primary' }}>{post.user.name}</Typography>
                <Typography variant="caption" sx={{ ml: 1, color: 'text.secondary', fontSize: 13 }}>{post.time} · {post.workspace}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                {post.fileType === 'excel' && <InsertDriveFileIcon sx={{ color: 'success.main', mr: 1 }} />}
                {post.fileType === 'word' && <InsertDriveFileIcon sx={{ color: 'info.main', mr: 1 }} />}
                <Typography variant="body1" sx={{ fontWeight: 500, fontSize: 15, color: '#562583', cursor: 'pointer' }}>{post.content}</Typography>
              </Box>
              {post.comments.map(comment => (
                <Box key={comment.id} sx={{ ml: 6, mt: 1.5, p: 1.5, background: '#f8fafd', borderRadius: 2, border: '1px solid #f0f1f3' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', fontSize: 15 }}>{comment.user.name}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: 12 }}>{comment.time}</Typography>
                  <Typography variant="body2" sx={{ fontSize: 15, color: 'text.secondary', mt: 0.5 }}>{comment.content}</Typography>
                </Box>
              ))}
            </Paper>
          </motion.div>
        ))}
      </Stack>

      <PollModal
        open={pollModalOpen}
        onClose={() => setPollModalOpen(false)}
        question={pollQuestion}
        options={pollOptions}
        onVote={() => setPollModalOpen(false)}
      />
    </>
  );
};

export default DiscussionsFeed; 