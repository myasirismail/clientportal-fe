import React from "react";
import { Box, Typography, Button, Chip, Card, Divider, Avatar, List, ListItem, ListItemAvatar, ListItemText, Grid, Paper } from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';

const mockVersions = [
  { version: 2, updated: "2 secs ago", by: "John Smith" },
  { version: 1, updated: "4 minutes ago", by: "John Smith" },
];

const mockActivities = [
  { type: "edit", user: "John Smith", action: "edited the document", time: "2 secs ago" },
  { type: "share", user: "Sarah Johnson", action: "shared with 3 people", time: "1 hour ago" },
  { type: "download", user: "Mike Brown", action: "downloaded the document", time: "2 hours ago" },
];

const getActivityIcon = (type) => {
  switch (type) {
    case "edit":
      return <EditIcon />;
    case "share":
      return <ShareIcon />;
    case "download":
      return <DownloadIcon />;
    default:
      return <InsertDriveFileIcon />;
  }
};

const PDFDetails = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "#f7f7f7", minHeight: "100vh", width: "100%" }}>
      <Grid container justifyContent="center" spacing={3}>
        {/* Main Content */}
        <Grid item size={8}>
          <Card sx={{ p: 3, borderRadius: 4, boxShadow: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  Project Scope Template <Chip label="docx" size="small" sx={{ ml: 1, borderRadius: 2 }} />
                </Typography>
                <Typography variant="caption" color="text.secondary">(70KB)</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" sx={{ borderRadius: 3 }}>Share</Button>
                <Button variant="contained" color="primary" sx={{ borderRadius: 3 }}>Download/Edit</Button>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ bgcolor: "#222", p: 2, borderRadius: 3, mb: 2, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Replace with PDF viewer or iframe for actual preview */}
              <Typography color="white" align="center">PDF Preview Here</Typography>
            </Box>
          </Card>
        </Grid>
        {/* Sidebar */}
        <Grid item size={4}>
          <Paper elevation={3} sx={{ p: 2, borderRadius: 4, bgcolor: '#fafbfc' }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>File Versions</Typography>
              <List>
                {mockVersions.map((ver, idx) => (
                  <ListItem key={ver.version} sx={{ borderRadius: 2, mb: 1, bgcolor: idx === 0 ? '#fffbe6' : '#f5f5f5', boxShadow: idx === 0 ? 1 : 0 }}>
                    <ListItemAvatar>
                      <Avatar variant="rounded" sx={{ borderRadius: 2, bgcolor: '#e3e3e3' }}>
                        <InsertDriveFileIcon color="primary" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography fontWeight={600} color={idx === 0 ? 'primary.main' : 'text.primary'}>{`View version ${ver.version}`}</Typography>}
                      secondary={`updated ${ver.updated} by ${ver.by}`}
                    />
                    <Button size="small" color="error" sx={{ borderRadius: 2 }}>delete</Button>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>Recent Activity</Typography>
              <List>
                {mockActivities.map((activity, index) => (
                  <ListItem key={index} sx={{ borderRadius: 2, mb: 1 }}>
                    <ListItemAvatar>
                      <Avatar variant="rounded" sx={{ borderRadius: 2, bgcolor: activity.type === 'edit' ? 'primary.main' : 
                                            activity.type === 'share' ? 'success.main' : 
                                            'info.main' }}>
                        {getActivityIcon(activity.type)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography fontWeight={500}>{`${activity.user} ${activity.action}`}</Typography>}
                      secondary={activity.time}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PDFDetails; 