import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Avatar,
  TextField,
  Button,
  Paper,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ForumIcon from "@mui/icons-material/Forum";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import FileExplorer from "../components/FileExplorer";
import DiscussionsFeed from "../components/DiscussionsFeed";
import Members from "../components/Members";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import UsersTable from "../components/UsersTable";
import CalendarComponent from "../components/Calendar";
import TaskSidebar from "../components/TaskSidebar";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import TaskPage from "./Dashboard/TaskPage";

const sidebarWidth = 200;

const navItems = [
  { label: "About", icon: <InfoIcon /> },
  // { label: 'Discussions', icon: <ForumIcon /> },
  { label: "Files", icon: <InsertDriveFileIcon /> },
  { label: "Tasks", icon: <AssignmentIcon /> },
  // { label: "Calendar", icon: <CalendarTodayIcon /> },
  { label: "Members", icon: <GroupIcon /> },
  // { label: 'Options', icon: <MoreHorizIcon />, subMenu: [
  //   { label: 'Users', icon: <PersonIcon /> },
  //   { label: 'Features', icon: <LayersIcon /> },
  //   { label: 'Settings', icon: <SettingsIcon /> },
  //   { label: 'Activity', icon: <HistoryIcon /> },
  // ] },
];

const posts = [
  {
    id: 1,
    user: { name: "Chris Jones", avatar: "" },
    time: "Tue May 9 16",
    workspace: "Project Workspace",
    content: "project costings.xls",
    fileType: "excel",
    comments: [
      {
        id: 1,
        user: { name: "George Allen", avatar: "" },
        time: "22 hours ago",
        content: "Couple of changes needed. Document version 1 has been approved by Joe Brown",
        reply: true,
      },
    ],
  },
  {
    id: 2,
    user: { name: "Chris Jones", avatar: "" },
    time: "Tue May 9 16",
    workspace: "Project Workspace",
    content: "proposal.docx",
    fileType: "word",
    comments: [],
  },
];

const WorkspaceDetailPage = () => {
  const [tab, setTab] = useState(0);
  const [sideBarItem, setSideBarItem] = useState("About");
  const [postText, setPostText] = useState("");

  // Mock data for statistics
  const workspaceStats = {
    totalTasks: 12,
    completedTasks: 8,
    totalFiles: 17,
    recentFiles: 5,
    memberCount: 5,
    lastActivity: "2 hours ago",
    description: "Project workspace for managing client documents and tasks",
    createdDate: "May 1, 2024",
  };

  // Chart data
  const taskData = [
    { name: "Completed", value: workspaceStats.completedTasks },
    { name: "Pending", value: workspaceStats.totalTasks - workspaceStats.completedTasks },
  ];

  const fileActivityData = [
    { name: "Jan", files: 4 },
    { name: "Feb", files: 6 },
    { name: "Mar", files: 8 },
    { name: "Apr", files: 5 },
    { name: "May", files: workspaceStats.recentFiles },
  ];

  const memberActivityData = [
    { name: "Mon", activity: 4 },
    { name: "Tue", activity: 3 },
    { name: "Wed", activity: 5 },
    { name: "Thu", activity: 2 },
    { name: "Fri", activity: 6 },
  ];

  const COLORS = ["#4CAF50", "#FFC107"];
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: sidebarWidth,
          height: "88vh",
          // background: "linear-gradient(135deg, #f7f8fa 60%, #e3e8f0 100%)",
          backgroundColor: "#fff",
          borderRight: "1px solid #eee",
          pt: 2,
          mt: 2,
          position: "sticky",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          zIndex: 1200,
          boxShadow: "2px 0 8px 0 rgba(80,112,255,0.04)",
        }}
      >
        {/* Workspace Info */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2, px: 2 }}>
          <Avatar sx={{ width: 64, height: 64, mb: 1, boxShadow: 2 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#222", mb: 0.5, textAlign: "center" }}>
            Project Workspace
          </Typography>
          <Typography variant="caption" sx={{ color: "#7b8a9c", textAlign: "center" }}>
            Manage client documents and tasks
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <List sx={{ mt: 2 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                px: 2,
                backgroundColor: sideBarItem === item.label ? "#e3e8f0" : "transparent",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.2s",
                "&:hover": {
                  backgroundColor: "#f0f4fa",
                },
                ...(sideBarItem === item.label && {
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 8,
                    bottom: 8,
                    width: 4,
                    borderRadius: 2,
                    background: "linear-gradient(180deg, #1976d2 60%, #64b5f6 100%)",
                  },
                }),
              }}
              onClick={() => setSideBarItem(item.label)}
            >
              <ListItemIcon
                sx={{ minWidth: 36, color: sideBarItem === item.label ? "#1976d2" : "#7b8a9c", fontSize: 22 }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: sideBarItem === item.label ? 600 : 400,
                  color: sideBarItem === item.label ? "#1976d2" : "#222",
                }}
              />
            </ListItem>
          ))}

          <Box sx={{ mt: 1, ml: 4 }}>
            {(sideBarItem === "Options" ||
              sideBarItem === "Users" ||
              sideBarItem === "Features" ||
              sideBarItem === "Settings" ||
              sideBarItem === "Activity") &&
              navItems[6]?.subMenu?.map((item) => (
                <ListItem
                  button
                  key={item.label}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    px: 2,
                    backgroundColor: sideBarItem === item.label ? "#f0f0f0" : "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => setSideBarItem(item.label)}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 15 }} />
                </ListItem>
              ))}
          </Box>
        </List>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          maxHeight: "85vh",
          overflowY: "auto",
          width: "100%",
          scrollbarWidth: "none",
          scrollbarColor: "#562583 #f7f8fa",
        }}
      >
        {/* Main Centered Content */}
        <Box sx={{ width: "100%", maxWidth: "90%", mt: 3, mb: 2 }}>
          {sideBarItem === "Files" ? (
            <FileExplorer />
          ) : sideBarItem === "Discussions" ? (
            <DiscussionsFeed />
          ) : sideBarItem === "Members" ? (
            <Members />
          ) : sideBarItem === "Users" ? (
            <UsersTable />
          ) : // ) : sideBarItem === "Calendar" ? (
          //   <CalendarComponent />
          sideBarItem === "Tasks" ? (
            <TaskPage />
          ) : sideBarItem === "About" ? (
            <Box>
              {/* Workspace Description */}
              <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <DescriptionIcon sx={{ color: "#90a4ae" }} />
                  <Typography variant="h6">Workspace Description</Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary">
                  {workspaceStats.description}
                </Typography>
              </Paper>

              {/* Statistics Grid */}
              <Grid container spacing={3}>
                {/* Tasks Statistics */}
                <Grid item size={6}>
                  <Paper sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                    <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                      <AssignmentIcon sx={{ color: "#1976d2" }} />
                      <Typography variant="h6">Tasks</Typography>
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                          {workspaceStats.totalTasks}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Total Tasks
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h4" color="success.main" sx={{ fontWeight: 600 }}>
                          {workspaceStats.completedTasks}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Completed
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box sx={{ height: 200, mt: 2 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={taskData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {taskData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  </Paper>
                </Grid>

                {/* Files Statistics */}
                <Grid item size={6}>
                  <Paper sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                    <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                      <InsertDriveFileIcon sx={{ color: "#1976d2" }} />
                      <Typography variant="h6">Files</Typography>
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                          {workspaceStats.totalFiles}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Total Files
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h4" color="info.main" sx={{ fontWeight: 600 }}>
                          {workspaceStats.recentFiles}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Recent Updates
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box sx={{ height: 200, mt: 2 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={fileActivityData}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="files" stroke="#1976d2" fill="#1976d2" fillOpacity={0.3} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </Box>
                  </Paper>
                </Grid>

                {/* Workspace Info */}
                <Grid item size={12}>
                  <Paper sx={{ p: 3, borderRadius: 2 }}>
                    <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                      <InfoIcon sx={{ color: "#1976d2" }} />
                      <Typography variant="h6">Workspace Information</Typography>
                    </Stack>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <PeopleAltIcon sx={{ color: "#1976d2" }} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {workspaceStats.memberCount}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Members
                            </Typography>
                          </Box>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <AccessTimeIcon sx={{ color: "#1976d2" }} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {workspaceStats.lastActivity}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Last Activity
                            </Typography>
                          </Box>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <CalendarTodayIcon sx={{ color: "#1976d2" }} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {workspaceStats.createdDate}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Created Date
                            </Typography>
                          </Box>
                        </Stack>
                      </Grid>
                    </Grid>
                    <Box sx={{ height: 200, mt: 3 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={memberActivityData}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="activity" stroke="#1976d2" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          ) : sideBarItem === "Users" ? (
            <UsersTable />
          ) : sideBarItem === "Calendar" ? (
            <CalendarComponent />
          ) : sideBarItem === "Tasks" ? (
            <TaskSidebar />
          ) : (
            <>
              {/* Post Input */}
              <Paper sx={{ mb: 2, p: 2, borderRadius: 2, boxShadow: "none", border: "1px solid #eee" }}>
                <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 1 }}>
                  <Tab label="Post" />
                  <Tab label="Poll" />
                  <Tab label="Announcement" />
                </Tabs>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Avatar sx={{ mt: 1 }} />
                  <TextField
                    fullWidth
                    multiline
                    minRows={2}
                    placeholder="What's on your mind?"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    sx={{ background: "#fafbfc", borderRadius: 1 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton size="small">
                            <AttachFileIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1, gap: 1 }}>
                  <Button size="small" sx={{ textTransform: "none" }}>
                    Cancel
                  </Button>
                  <Button size="small" variant="contained" sx={{ textTransform: "none" }} endIcon={<SendIcon />}>
                    Post
                  </Button>
                </Box>
              </Paper>

              {/* Feed */}
              <Stack spacing={2}>
                {posts.map((post) => (
                  <Paper key={post.id} sx={{ p: 2, borderRadius: 2, boxShadow: "none", border: "1px solid #eee" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                        {post.user.name}
                      </Typography>
                      <Typography variant="caption" sx={{ ml: 1, color: "text.secondary" }}>
                        {post.time} · {post.workspace}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      {post.fileType === "excel" && <InsertDriveFileIcon sx={{ color: "green", mr: 1 }} />}
                      {post.fileType === "word" && <InsertDriveFileIcon sx={{ color: "blue", mr: 1 }} />}
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {post.content}
                      </Typography>
                    </Box>
                    {post.comments.map((comment) => (
                      <Box key={comment.id} sx={{ ml: 5, mt: 1, p: 1, background: "#f5f6fa", borderRadius: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {comment.user.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                          {comment.time}
                        </Typography>
                        <Typography variant="body2">{comment.content}</Typography>
                      </Box>
                    ))}
                  </Paper>
                ))}
              </Stack>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default WorkspaceDetailPage;
