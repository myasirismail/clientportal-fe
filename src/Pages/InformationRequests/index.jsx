import React, { useState } from "react";
import { Box, Typography, Chip, LinearProgress, IconButton, ToggleButton, ToggleButtonGroup, Card, CardContent, Collapse, Button, Menu, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TableRowsIcon from '@mui/icons-material/TableRows';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import { justifyContent } from "@mui/system";
import Drawer from '@mui/material/Drawer';
import FilterDrawer from "../../components/InformationRequests/FilterDrawer";
import { useNavigate } from 'react-router-dom';

const statusColors = {
  "In Progress": "info",
  "Submitted": "success",
  "Overdue": "error",
};

const columns = [
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={statusColors[params.value] || "default"}
        size="small"
        sx={{ fontWeight: 700, minWidth: 90 }}
      />
    ),
    sortable: false,
  },
  { field: "workspace", headerName: "Workspace", width: 170 },
  { field: "title", headerName: "Title", width: 220 },
  {
    field: "progress",
    headerName: "Progress",
    width: 120,
    renderCell: (params) => (
      <Box sx={{ width: '100%' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 13 }}>{params.value}%</Typography>
        <LinearProgress variant="determinate" value={params.value} sx={{ height: 8, borderRadius: 5, mt: 0.5 }} />
      </Box>
    ),
    sortable: false,
  },
  {
    field: "people",
    headerName: "People",
    width: 260,
    renderCell: (params) => (
      <Box sx={{ bgcolor: '#f5f5fa', borderRadius: 2, p: 1,mt:1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <EmailIcon sx={{ fontSize: 16, color: 'primary.main' }} />
          <Typography variant="body2"><b>Sent to:</b> {params.row.sentTo}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <VisibilityIcon sx={{ fontSize: 16, color: 'primary.main' }} />
          <Typography variant="body2"><b>Viewed:</b> {params.row.viewed}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <PersonIcon sx={{ fontSize: 16, color: 'primary.main' }} />
          <Typography variant="body2"><b>Assigned:</b> {params.row.assigned}</Typography>
        </Box>
      </Box>
    ),
    sortable: false,
  },
  { field: "due", headerName: "Due", width: 120 },
  { field: "created", headerName: "Created", width: 120 },
  {
    field: "actions",
    headerName: "",
    width: 60,
    sortable: false,
    filterable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: () => (
      <IconButton size="small">
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

const rows = [
  { id: 1, status: "In Progress", workspace: "M1013 - Mills, Ellie", title: "End of Year Checklist", progress: 2, sentTo: "waynepope@gmail.com", viewed: "-", due: "13/05/2024", assigned: "Kayleigh Lang", created: "13/05/2024" },
  { id: 2, status: "Submitted", workspace: "M1013 - Mills, Ellie", title: "End of Year Accounts Information Request", progress: 100, sentTo: "Megan Wild", viewed: "24/05/2024", due: "24/05/2024", assigned: "Kayleigh Lang", created: "13/05/2024" },
  { id: 3, status: "In Progress", workspace: "Onboarding Workspace", title: "Corporate Tax", progress: 0, sentTo: "Kayleigh Lang", viewed: "-", due: "-", assigned: "Kayleigh Lang", created: "03/05/2024" },
  { id: 4, status: "Submitted", workspace: "L1012 - Lang, Ellis", title: "Year End Accounts Information Request", progress: 0, sentTo: "megan.wild02@gmail.com", viewed: "28/03/2024", due: "19/04/2024", assigned: "Kayleigh Lang", created: "28/03/2024" },
  { id: 5, status: "Submitted", workspace: "W1023 - Wild, Megan", title: "Personal Tax Checklist", progress: 0, sentTo: "megan.wild02@gmail.com", viewed: "-", due: "22/03/2024", assigned: "Kayleigh Lang", created: "20/03/2024" },
  { id: 6, status: "Submitted", workspace: "K1011 - King, Bradley", title: "Personal Tax Checklist", progress: 3, sentTo: "megan.wild02@gmail.com", viewed: "20/03/2024", due: "22/03/2024", assigned: "Kayleigh Lang", created: "20/03/2024" },
  { id: 7, status: "Submitted", workspace: "W1023 - Wild, Megan", title: "Personal Tax Checklist", progress: 0, sentTo: "megan.wild02@gmail.com", viewed: "15/03/2024", due: "15/03/2024", assigned: "Kayleigh Lang", created: "15/03/2024" },
  { id: 8, status: "Submitted", workspace: "L1012 - Lang, Ellis", title: "End of Year Checklist", progress: 100, sentTo: "Kayleigh Lang", viewed: "15/03/2024", due: "15/03/2024", assigned: "Kayleigh Lang", created: "15/03/2024" },
  { id: 9, status: "Submitted", workspace: "O1015 - Oliver, Katie", title: "End of Year Checklist", progress: 44, sentTo: "Kayleigh Lang", viewed: "14/03/2024", due: "14/03/2024", assigned: "Kayleigh Lang", created: "14/03/2024" },
  { id: 10, status: "Overdue", workspace: "G1007 - Gilbert, Alex", title: "Audit Checklist", progress: 1, sentTo: "megan.wild02@gmail.com", viewed: "08/03/2024", due: "29/03/2024", assigned: "Kayleigh Lang", created: "08/03/2024" },
  { id: 11, status: "Submitted", workspace: "N1014 - Norris, James", title: "End of Year Checklist", progress: 100, sentTo: "Kayleigh Lang", viewed: "-", due: "-", assigned: "Kayleigh Lang", created: "08/03/2024" },
  { id: 12, status: "Submitted", workspace: "Personal Tax", title: "Personal Tax Checklist", progress: 100, sentTo: "max123abc@gmail.com", viewed: "-", due: "-", assigned: "Kayleigh Lang", created: "08/03/2024" },
  { id: 13, status: "Submitted", workspace: "C1003 - Chambers, Karl", title: "Personal Tax Checklist", progress: 100, sentTo: "Kayleigh Lang", viewed: "07/03/2024", due: "07/03/2024", assigned: "Kayleigh Lang", created: "06/03/2024" },
  { id: 14, status: "Submitted", workspace: "B1002 - Bridge, Alexander", title: "Personal Tax Checklist", progress: 100, sentTo: "Kayleigh Lang", viewed: "07/03/2024", due: "07/03/2024", assigned: "Kayleigh Lang", created: "06/03/2024" },
  { id: 15, status: "Submitted", workspace: "A1001 - Adams, Carla", title: "Personal Tax Checklist", progress: 100, sentTo: "Kayleigh Lang", viewed: "06/03/2024", due: "06/03/2024", assigned: "Kayleigh Lang", created: "06/03/2024" },
  { id: 16, status: "Overdue", workspace: "Personal Tax", title: "Personal Tax Docs Required", progress: 0, sentTo: "megan.wild02@gmail.com", viewed: "06/03/2024", due: "06/03/2024", assigned: "Kayleigh Lang", created: "05/03/2024" },
];

// Card view component
function RequestCard({ request, onClick }) {
  return (
    <Card onClick={onClick} sx={{ cursor: 'pointer', borderRadius: 3, boxShadow: 1, height: '100%', width: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Chip label={request.status} color={statusColors[request.status] || "default"} size="small" sx={{ fontWeight: 700, mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, flexGrow: 1 }}>{request.title}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{request.workspace}</Typography>
        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>Progress: {request.progress}%</Typography>
          <LinearProgress variant="determinate" value={request.progress} sx={{ height: 8, borderRadius: 5, mt: 0.5 }} />
        </Box>
        <Box sx={{ bgcolor: '#f5f5fa', borderRadius: 2, p: 1, mb: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EmailIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography variant="body2"><b>Sent to:</b> {request.sentTo}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <VisibilityIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography variant="body2"><b>Viewed:</b> {request.viewed}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PersonIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography variant="body2"><b>Assigned:</b> {request.assigned}</Typography>
          </Box>
        </Box>
        <Typography variant="body2"><b>Due:</b> {request.due}</Typography>
        <Typography variant="body2"><b>Created:</b> {request.created}</Typography>
      </CardContent>
    </Card>
  );
}

const InformationRequests = () => {
  const [view, setView] = useState('table');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const navigate = useNavigate();

  const handleOptionsClick = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleCardClick = (request) => {
    navigate('/pdf-details/1');
  };

  const handleDetailClose = () => {
    setDetailOpen(false);
    setSelectedRequest(null);
  };

  return (
    <Box sx={{ p: { xs: 1, md: 3 }, bgcolor: '#f7f7f7', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2, mb:3 }}>
        <Typography variant="h5" fontWeight={700}>
          Information requests
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button variant="contained" color="warning" onClick={() => {/* your remove filter logic */}}>
            Remove filter
          </Button>
          <IconButton onClick={handleOptionsClick}>
            <MoreVertIcon />
          </IconButton>
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={(_, nextView) => nextView && setView(nextView)}
            size="small"
          >
            <ToggleButton value="table" aria-label="Table view">
              <TableRowsIcon />
            </ToggleButton>
            <ToggleButton value="card" aria-label="Card view">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <FilterDrawer open={drawerOpen} onClose={handleDrawerClose} />
      {view === 'table' ? (
        <Box sx={{ bgcolor: '#fff', borderRadius: 3, boxShadow: 2, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            checkboxSelection
            disableRowSelectionOnClick
            rowHeight={90}
            onRowClick={() => navigate('/pdf-details/1')}
            sx={{
              border: 0,
              width: '100%',
              '& .MuiDataGrid-columnHeaders': { background: '#f5f2fa', fontWeight: 700, fontSize: 15 },
              '& .MuiDataGrid-cell': { fontSize: 14 },
              '& .MuiDataGrid-row': { cursor: 'pointer' },
              '& .MuiDataGrid-footerContainer': { background: '#f5f2fa' },
            }}
          />
        </Box>
      ) : (
        <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2 }}>
          {rows.map((row) => (
            <RequestCard key={row.id} request={row} onClick={() => handleCardClick(row)} />
          ))}
        </Box>
      )}
      <Drawer anchor="right" open={detailOpen} onClose={handleDetailClose}>
        <Box sx={{ width: 500, p: 3, maxWidth: '100vw' }}>
          {selectedRequest && (
            <>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>{selectedRequest.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>{selectedRequest.workspace}</Typography>
              <Chip label={selectedRequest.status} color={statusColors[selectedRequest.status] || "default"} size="small" sx={{ fontWeight: 700, mb: 2 }} />
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Progress: {selectedRequest.progress}%</Typography>
                <LinearProgress variant="determinate" value={selectedRequest.progress} sx={{ height: 8, borderRadius: 5, mt: 0.5 }} />
              </Box>
              <Box sx={{ bgcolor: '#f5f5fa', borderRadius: 2, p: 1, mb: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <EmailIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Typography variant="body2"><b>Sent to:</b> {selectedRequest.sentTo}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <VisibilityIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Typography variant="body2"><b>Viewed:</b> {selectedRequest.viewed}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <PersonIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Typography variant="body2"><b>Assigned:</b> {selectedRequest.assigned}</Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ mb: 1 }}><b>Due:</b> {selectedRequest.due}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}><b>Created:</b> {selectedRequest.created}</Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Button variant="contained" sx={{ flex: 1 }}>Share</Button>
                <Button variant="contained" color="primary" sx={{ flex: 1 }}>Download/Edit</Button>
              </Box>
              <Button variant="outlined" color="secondary" onClick={handleDetailClose} sx={{ width: '100%' }}>Close</Button>
            </>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default InformationRequests; 