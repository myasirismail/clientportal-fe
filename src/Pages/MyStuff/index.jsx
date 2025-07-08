import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  Chip,
  Card,
  CardContent,
  Stack,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useNavigate } from "react-router-dom";
import "./MyStuff.scss";
import { useState } from "react";
import { useEffect } from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import { LinearProgress } from "@mui/material";
import StatCard from "../../components/StatCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import InfoIcon from "@mui/icons-material/Info";

const approvalRequests = [
  { label: "Complete", value: 1, color: "#4caf50" },
  { label: "Outstanding", value: 1, color: "#ff9800" },
  { label: "Overdue", value: 2, color: "#f44336" },
];
const formSubmissions = [
  { label: "Complete", value: 1, color: "#4caf50" },
  { label: "Outstanding", value: 0, color: "#ff9800" },
  { label: "Overdue", value: 1, color: "#f44336" },
];
const infoRequests = [
  { label: "Submitted", value: 12, color: "#4caf50" },
  { label: "Outstanding", value: 2, color: "#ff9800" },
  { label: "Overdue", value: 2, color: "#f44336" },
];

const tasks = [
  {
    id: 1,
    status: "In Progress",
    title: "Complete Tax Documentation",
    progress: 60,
    due: "15/05/2024",
    assigned: "John Smith",
    created: "01/05/2024",
  },
  {
    id: 2,
    status: "Completed",
    title: "Annual Report Review",
    progress: 100,
    due: "10/05/2024",
    assigned: "Sarah Miller",
    created: "28/04/2024",
  },
  {
    id: 3,
    status: "Not Started",
    title: "Client Meeting Notes",
    progress: 0,
    due: "20/05/2024",
    assigned: "Mike Ross",
    created: "05/05/2024",
  },
];

const renderPieChart = (data) => (
  <ResponsiveContainer width={60} height={60}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="label"
        cx="50%"
        cy="50%"
        innerRadius={18}
        outerRadius={28}
        paddingAngle={2}
        stroke="none"
      >
        {data.map((entry, idx) => (
          <Cell key={`cell-${idx}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

// Task Card component
function TaskCard({ task }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 1, height: "100%", width: "100%" }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Chip
            label={task.status}
            color={task.status === "Completed" ? "success" : task.status === "In Progress" ? "info" : "error"}
            size="small"
            sx={{ fontWeight: 700, mr: 1 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700, flexGrow: 1 }}>
            {task.title}
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Progress: {task.progress}%
          </Typography>
          <LinearProgress variant="determinate" value={task.progress} sx={{ height: 8, borderRadius: 5, mt: 0.5 }} />
        </Box>
        <Box sx={{ bgcolor: "#f5f5fa", borderRadius: 2, p: 1, mb: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <PersonIcon sx={{ fontSize: 16, color: "primary.main" }} />
            <Typography variant="body2">
              <b>Assigned:</b> {task.assigned}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2">
          <b>Due:</b> {task.due}
        </Typography>
        <Typography variant="body2">
          <b>Created:</b> {task.created}
        </Typography>
      </CardContent>
    </Card>
  );
}

const MyStuff = () => {
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState([]);
  useEffect(() => {
    // TODO: Fetch workspaces from API
    // This is a placeholder for demonstration
    setWorkspaces([
      {
        id: 1,
        name: "Workspace 1",
        description: "Description for workspace 1",
        memberCount: 5,
        lastActivity: "2 hours ago",
        members: [
          { id: 1, name: "John Doe", avatar: "JD" },
          { id: 2, name: "Sarah Miller", avatar: "SM" },
          { id: 3, name: "Mike Ross", avatar: "MR" },
        ],
      },
      {
        id: 2,
        name: "Workspace 2",
        description: "Description for workspace 2",
        memberCount: 3,
        lastActivity: "5 hours ago",
        members: [
          { id: 4, name: "Alice King", avatar: "AK" },
          { id: 5, name: "Bob Lee", avatar: "BL" },
        ],
      },
    ]);
  }, []);
  const handleWorkspaceClick = (workspaceId) => {
    navigate(`/workspace-detail`);
  };
  return (
    <Box className="my-stuff-root" sx={{ p: { xs: 1, md: 3 }, bgcolor: "#f7f7f7", minHeight: "100vh" }}>
      <Grid container spacing={3}>
        {/* Top Stats */}
        <Grid item size={12} pt={2}>
          <Box
            sx={{ display: "flex", gap: 3, alignItems: "stretch", justifyContent: "space-between", flexWrap: "wrap" }}
          >
            <StatCard
              title="Approval Requests"
              icon={<CheckCircleIcon />}
              chart={renderPieChart(approvalRequests)}
              stats={approvalRequests}
            />
            <StatCard
              title="Read Requests"
              icon={<MarkEmailReadIcon />}
              description="Send a request to acknowledge that a file has been read."
            />
            <StatCard
              title="Form Submissions"
              icon={<AssignmentTurnedInIcon />}
              chart={renderPieChart(formSubmissions)}
              stats={formSubmissions}
            />
            <StatCard
              title="Information Requests"
              icon={<InfoIcon />}
              chart={renderPieChart(infoRequests)}
              stats={infoRequests}
              onClick={() => navigate("/information-requests")}
              highlight
            />
          </Box>
        </Grid>
        {/* Portfolios */}
        <Grid item size={12}>
          <Paper
            className="my-stuff-portfolios"
            elevation={1}
            sx={{ p: 2, display: "flex", gap: 2, borderRadius: 3, flexDirection: "column" }}
          >
            <Typography fontWeight={700}>My Workspaces</Typography>
            <Box sx={{ flexGrow: 1, width: "100%" }}>
              <Grid container spacing={3}>
                {workspaces.map((workspace) => (
                  <Grid item size={4} key={workspace.id}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        boxShadow: "0 2px 8px rgba(80, 112, 255, 0.1)",
                        bgcolor: "#fff",
                        p: 0,
                        border: "1px solid #f0f1f3",
                        minHeight: 210,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "box-shadow 0.2s, border 0.2s",
                        cursor: "pointer",
                        "&:hover": {
                          boxShadow: "0 4px 16px rgba(80, 112, 255, 0.10)",
                          border: "1.5px solid #1976d2",
                          backgroundColor: "#f7faff",
                        },
                      }}
                      onClick={() => handleWorkspaceClick(workspace.id)}
                    >
                      <CardContent sx={{ p: 2.2, pb: 1.5 }}>
                        <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                          <DescriptionIcon sx={{ color: "#90a4ae", fontSize: 17 }} />
                          <Typography variant="caption" color="#7b8a9c" sx={{ fontWeight: 400 }}>
                            {workspace.description}
                          </Typography>
                        </Stack>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 500, mb: 0.5, color: "#222", fontSize: "1.05rem" }}
                          noWrap
                        >
                          {workspace.name}
                        </Typography>
                        <Stack direction="row" spacing={1} mb={1.2}>
                          <Chip
                            icon={<PeopleAltIcon sx={{ fontSize: 15 }} />}
                            label={`${workspace.memberCount}`}
                            size="small"
                            sx={{
                              bgcolor: "#f4f7fa",
                              color: "#1976d2",
                              fontWeight: 400,
                              borderRadius: 1,
                              height: 24,
                              fontSize: "0.80rem",
                              px: 0.5,
                            }}
                          />
                          <Chip
                            icon={<AccessTimeIcon sx={{ fontSize: 15 }} />}
                            label={workspace.lastActivity}
                            size="small"
                            sx={{
                              bgcolor: "#f4f7fa",
                              color: "#7b8a9c",
                              fontWeight: 400,
                              borderRadius: 1,
                              height: 24,
                              fontSize: "0.80rem",
                              px: 0.5,
                            }}
                          />
                        </Stack>
                        <Divider sx={{ my: 1.2 }} />
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <AvatarGroup max={3} sx={{ "& .MuiAvatar-root": { width: 28, height: 28, fontSize: 13 } }}>
                            {workspace.members.map((member) => (
                              <Tooltip title={member.name} key={member.id}>
                                <Avatar sx={{ bgcolor: "#e3f0fc", color: "#1976d2", fontWeight: 500, fontSize: 13 }}>
                                  {member.avatar}
                                </Avatar>
                              </Tooltip>
                            ))}
                          </AvatarGroup>
                          <Box sx={{ flexGrow: 1 }} />
                          <Button
                            variant="outlined"
                            size="small"
                            endIcon={<ArrowForwardIosIcon sx={{ fontSize: 13 }} />}
                            sx={{
                              borderRadius: 2,
                              textTransform: "none",
                              fontWeight: 400,
                              px: 1.5,
                              fontSize: "0.85rem",
                              minWidth: 0,
                              height: 30,
                              borderColor: "#e0e3e7",
                              color: "#1976d2",
                              boxShadow: "none",
                              pointerEvents: "none",
                            }}
                          >
                            Open
                          </Button>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Grid>
        {/* Tasks */}
        <Grid item size={12}>
          <Paper className="my-stuff-tasks" elevation={1} sx={{ p: 2, borderRadius: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
              <Typography fontWeight={700}>My Tasks</Typography>
              <Button variant="contained" size="small" color="secondary">
                New task
              </Button>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
                gap: 2,
              }}
            >
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyStuff;
