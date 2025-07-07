import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Divider,
  Button,
  Avatar,
  Stack,
  IconButton,
  Link,
  Modal,
  Slider,
  Input,
  FormControlLabel,
  Switch
} from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Header from "./Header";
import HeaderBackgroundModal from "./HeaderBackgroundModal";
import TaskPage from './TaskPage';

const stats = [
  { label: "RECENT FILES", value: 17 },
  { label: "FILE UPDATES", value: 5 },
  { label: "RECENT POSTS", value: 3 },
  { label: "TASKS COMPLETED", value: 8 },
  { label: "TASKS CREATED", value: 12 },
];

const news = [
  {
    title: "Hot off the press!",
    desc: "You can add or remove this news feed from your dashboard in the 'Look and Feel' section of your account Settings. To edit or remove individual...",
    color: "#5a6d7c",
    views: 6,
    likes: 4,
    comments: 2,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Come and have a look around our new European HQ",
    desc: "Hi all, as you know we recently needed to move out of our current HQ due to expanding, and we're...",
    color: "#b6e27b",
    views: 9,
    likes: 5,
    comments: 1,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Introducing our new Project Leader",
    desc: "Please join me in welcoming John Smith as our new Project Leader. John joins us after a long career of managing major projects in the...",
    color: "#e7a6d3",
    views: 8,
    likes: 3,
    comments: 1,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
];

const activityFeed = [
  {
    user: {
      name: "Chris Jones",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    time: "1 hour ago",
    comment: "commented less than an hour ago",
    post: {
      user: "Joe Brown",
      date: "Wed Mar 22 '17",
      workspace: "Project Workspace",
      file: {
        name: "Market Analysis 2018 Data.doc",
        icon: <InsertDriveFileIcon sx={{ color: '#1976d2', mr: 1 }} />
      }
    },
    replies: [
      {
        user: {
          name: "Steve Morris",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        text: "Looks fine, you can send this over for approval.",
        time: "58 min ago"
      },
      {
        user: {
          name: "Adrian Baker",
          avatar: "https://randomuser.me/api/portraits/men/65.jpg"
        },
        text: "Do you know who produced this report?",
        time: "55 min ago"
      },
      {
        user: {
          name: "Chris Jones",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        text: "Could you make sure Jane Chapman checks this for approval?",
        time: "53 min ago"
      }
    ]
  }
];

const links = [
  "Holiday",
  "Expenses",
  "Travel",
  "Templates",
  "Suppliers",
  "Info Base"
];

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState({ image: '', overlay: 0.7 });

  const handleEditBackground = () => setModalOpen(true);
  const handleSaveBackground = ({ image, overlay }) => setHeaderBg({ image, overlay });

  return (
    <Box sx={{ width: '100%', bgcolor: '#F8F9FF', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Banner */}
      <Header 
        onEditBackground={handleEditBackground}
        backgroundImage={headerBg.image}
        overlay={headerBg.overlay}
      />
      <HeaderBackgroundModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveBackground}
        initialImage={headerBg.image}
        initialOverlay={headerBg.overlay}
      />
      {/* Main Content */}
      <Grid container spacing={3} padding={3}>
        {/* Left: Activity Feed */}
        <Grid item xs={12}>
          {/* Activity Bar */}
          <Paper 
            elevation={0} 
            sx={{ 
              padding: "20px", 
              borderRadius: "16px", 
              mb: 4, 
              display: 'flex', 
              alignItems: 'center', 
              gap: 3, 
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              justifyContent: "space-between",
              bgcolor: 'white',
              border: 'none'
            }}
          >
            <Typography variant="subtitle1" fontWeight={700} color="#646cff" sx={{ lineHeight: 1, fontSize: 24 }}>
              Activity <span style={{ color: '#64748b', fontWeight: 400, fontSize: 14 }}>Last 30 days</span>
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: '#e2e8f0' }} />
            {stats.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <Box sx={{ textAlign: 'center', minWidth: 120 }}>
                  <Typography variant="h4" fontWeight={700} color="#646cff" sx={{ lineHeight: 1, fontSize: 28 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, letterSpacing: 0.5, fontSize: 11, textTransform: 'uppercase' }}>
                    {stat.label}
                  </Typography>
                </Box>
                {idx < stats.length - 1 && <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: '#e2e8f0' }} />}
              </React.Fragment>
            ))}
            <Button 
              variant="contained" 
              size="small" 
              sx={{ 
                borderRadius: "12px", 
                fontWeight: 600, 
                minWidth: 120, 
                bgcolor: '#646cff',
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(100, 108, 255, 0.2)',
                '&:hover': {
                  bgcolor: '#535bf2',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 6px 16px rgba(100, 108, 255, 0.3)'
                }
              }}
            >
              Add Updates
            </Button>
          </Paper>

          {/* Activity Feed */}
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              borderRadius: "16px", 
              minHeight: 350, 
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              bgcolor: 'white',
              border: 'none'
            }}
          >
            <TaskPage />
          </Paper>
        </Grid>

        {/* Right: News Cards */}
        <Grid item xs={12}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 0, 
              borderRadius: "16px", 
              minHeight: 350, 
              border: 'none',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              bgcolor: 'white'
            }}
          >
            {/* News Header */}
            <Box 
              sx={{ 
                p: 3, 
                borderBottom: '1px solid',
                borderColor: '#e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'white'
              }}
            >
              <Typography variant="h6" fontWeight={700} sx={{ color: '#1e293b' }}>
                Latest News
              </Typography>
              <Button 
                variant="text" 
                size="small"
                sx={{ 
                  color: '#646cff',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(100, 108, 255, 0.08)'
                  }
                }}
              >
                View All
              </Button>
            </Box>

            {/* News Content */}
            <Box sx={{ p: 3 }}>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: 3
              }}>
                {news.map((item, idx) => (
                  <Paper
                    key={item.title}
                    elevation={0}
                    sx={{
                      p: 0,
                      borderRadius: "16px",
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: '100%',
                        height: 160,
                        background: item.color, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0,0,0,0.05)'
                        }
                      }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        style={{ 
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        }} 
                      />
                    </Box>
                    <Box 
                      sx={{ 
                        flex: 1,
                        p: 2.5, 
                        background: '#fff', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box>
                        <Typography 
                          variant="subtitle1" 
                          fontWeight={700} 
                          sx={{ 
                            mb: 1, 
                            color: item.color,
                            fontSize: '1rem',
                            letterSpacing: '-0.01em',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontSize: '0.875rem',
                            color: 'text.secondary',
                            lineHeight: 1.5,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                      <Stack 
                        direction="row" 
                        spacing={2} 
                        alignItems="center"
                        sx={{ 
                          mt: 2,
                          pt: 2,
                          borderTop: '1px solid',
                          borderColor: 'divider'
                        }}
                      >
                        <Stack direction="row" spacing={0.75} alignItems="center">
                          <VisibilityOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 500 }}>
                            {item.views}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.75} alignItems="center">
                          <ThumbUpAltOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 500 }}>
                            {item.likes}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.75} alignItems="center">
                          <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 500 }}>
                            {item.comments}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
