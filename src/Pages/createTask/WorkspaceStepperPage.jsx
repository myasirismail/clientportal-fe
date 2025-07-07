import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CustomizedSteppers from "../../components/Stepper";
import RefreshIcon from "@mui/icons-material/Refresh";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";

const steps = ["Information", "Review", "Share", "Options"];

const defaultReviewItems = [
  "Provide a statement showing the balance at your year-end for any bank accounts that you hold.",
  "Provide a statement showing the balance at your year-end for any business credit card(s).",
  "Do you have any active Loans (including Bounce Back Loans)?",
  "Do you have any cash balances held at year-end?",
  "Confirm the value of stock held at your year-end date.",
  "Has your business taken out any Leases or Hire Purchases in the year?",
  "Do you have any additional business expenses you wish to claim in the accounts year?",
  "Have there been any changes to Shareholdings or Directorships in the year?",
  "Have there been any significant changes to your business trade/activity in the year?",
];

const defaultReminders = [
  { date: "16/05/2024", days: 0, type: "Before" },
  { date: "20/05/2024", days: 4, type: "After" },
  { date: "24/05/2024", days: 8, type: "After" },
  { date: "28/05/2024", days: 12, type: "After" },
  { date: "01/06/2024", days: 16, type: "After" },
];

function getStepContent(step, reviewItems, setReviewItems, drawerState) {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [reminders, setReminders] = useState(defaultReminders);
  const [drawerOpen, setDrawerOpen] = drawerState;
  const [selectedItemIdx, setSelectedItemIdx] = useState(null);
  const [reply, setReply] = useState("");
  const [notApplicable, setNotApplicable] = useState(false);

  const handleDeleteReminder = (index) => {
    setReminders(reminders.filter((_, i) => i !== index));
  };

  switch (step) {
    case 0:
      return (
        <>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
            }}
          >
            {steps[step]}
          </Typography>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 2,
              mb: 2,
              background: "transparent",
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          >
            <FormControl fullWidth sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <TextField
                  select
                  fullWidth
                  placeholder="Select template (optional)"
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#fff",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="template1">Template 1</MenuItem>
                  <MenuItem value="template2">Template 2</MenuItem>
                </TextField>
                <Button
                  size="small"
                  sx={{
                    minWidth: "auto",
                    ml: 1,
                    p: 1,
                    color: "text.secondary",
                  }}
                >
                  <RefreshIcon fontSize="small" />
                </Button>
              </Box>
            </FormControl>

            <Typography variant="subtitle2" sx={{ mb: 1, color: "text.primary" }}>
              What information are you requesting?
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={8}
              placeholder="Enter multiple items on new lines"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fff",
                },
              }}
            />
          </Paper>
        </>
      );
    case 1:
      return (
        <>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
            }}
          >
            {steps[step]}
          </Typography>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, mb: 2, background: "transparent" }}>
            <Typography variant="subtitle1" sx={{ mb: 2, color: "text.primary", fontWeight: 500 }}>
              Click any item below to edit the title or add supporting information
            </Typography>
            <Button variant="outlined" sx={{ mb: 2, borderRadius: 2, textTransform: "none", px: 3 }}>
              Add item(s)
            </Button>
            <List sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 1, border: "1px solid #eee" }}>
              {reviewItems.map((item, idx) => (
                <ListItem
                  key={idx}
                  divider={idx !== reviewItems.length - 1}
                  secondaryAction={
                    <Box>
                      <IconButton edge="end" aria-label="edit" size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete" size="small" sx={{ ml: 1 }}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  }
                  sx={{ pl: 0, pr: 1, cursor: "pointer" }}
                  onClick={() => {
                    setSelectedItemIdx(idx);
                    setDrawerOpen(true);
                  }}
                >
                  <DragIndicatorIcon sx={{ color: "text.disabled", mr: 1, cursor: "grab" }} />
                  <ListItemText primary={item} primaryTypographyProps={{ fontSize: 15 }} />
                </ListItem>
              ))}
            </List>
          </Paper>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ sx: { width: 420, maxWidth: "100vw", p: 0, bgcolor: "#fff" } }}
          >
            <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar sx={{ width: 36, height: 36, mr: 1 }} src="https://randomuser.me/api/portraits/women/44.jpg" />
                <Typography sx={{ flex: 1, fontWeight: 600, fontSize: 16, color: "#002" }}>
                  {selectedItemIdx !== null ? reviewItems[selectedItemIdx] : ""}
                </Typography>
                <IconButton onClick={() => setDrawerOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Checkbox
                  checked={notApplicable}
                  onChange={(e) => setNotApplicable(e.target.checked)}
                  sx={{ p: 0, mr: 1 }}
                />
                <Typography component="span" fontSize={15} sx={{ verticalAlign: "middle", color: "#002" }}>
                  Mark not applicable
                </Typography>
              </Box>
              <TextField
                multiline
                minRows={4}
                fullWidth
                placeholder="Type your reply..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<AttachFileIcon />}
                  component="label"
                  sx={{ borderRadius: 2, textTransform: "none", fontWeight: 400 }}
                >
                  Attach files
                  <input type="file" hidden multiple />
                </Button>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  or drag and drop them here
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                variant="contained"
                sx={{ borderRadius: 2, textTransform: "none", fontWeight: 500, width: "100%" }}
                disabled={!reply && !notApplicable}
              >
                Submit
              </Button>
            </Box>
          </Drawer>
        </>
      );
    case 2:
      return (
        <>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
            }}
          >
            {steps[step]}
          </Typography>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, mb: 2, background: "transparent" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: "text.primary" }}>
                Who would you like to send this request to?
              </Typography>
              <TextField
                fullWidth
                placeholder="Select member or enter email"
                size="small"
                sx={{ background: "#fff" }}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: "text.primary" }}>
                Email notification subject
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="Year End Accounts Information Request"
                sx={{ background: "#fff" }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, color: "text.primary" }}>
                Email notification message
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={4}
                defaultValue={"Hello,\nKayleigh Lang from ABC Accounting Firm has requested information from you."}
                sx={{ background: "#fff" }}
              />
            </Box>
          </Paper>
        </>
      );
    case 3:
      return (
        <>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
            }}
          >
            {steps[step]}
          </Typography>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, mb: 2, background: "transparent" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: "text.primary" }}>
                Response due by (optional)
              </Typography>
              <TextField fullWidth size="small" value="ASAP" disabled sx={{ background: "#f5f5f5" }} />
            </Box>
            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={<Typography variant="body2">Send overdue reminders</Typography>}
                sx={{ mb: 1 }}
              />
              <Box sx={{ display: "flex", alignItems: "center", ml: 3, mb: 1 }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  Send a reminder every
                </Typography>
                <TextField
                  type="number"
                  size="small"
                  defaultValue={4}
                  inputProps={{ min: 1, style: { width: 40, padding: 4, textAlign: "center" } }}
                  sx={{ mx: 1, background: "#fff" }}
                />
                <Typography variant="body2" sx={{ mr: 2 }}>
                  days
                </Typography>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  End after
                </Typography>
                <TextField
                  type="number"
                  size="small"
                  defaultValue={3}
                  inputProps={{ min: 1, style: { width: 40, padding: 4, textAlign: "center" } }}
                  sx={{ mx: 1, background: "#fff" }}
                />
                <Typography variant="body2">times</Typography>
              </Box>
              <Box sx={{ ml: 3, mb: 1 }}>
                <Typography
                  variant="body2"
                  component="span"
                  onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                  sx={{
                    color: "#1976d2",
                    textDecoration: "underline",
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Advanced reminder options
                </Typography>
              </Box>
              {showAdvancedOptions && (
                <Box sx={{ ml: 3, mt: 2, border: "1px solid #e0e0e0", borderRadius: 1, p: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {reminders.map((reminder, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
                        <Typography variant="body2" sx={{ minWidth: 100 }}>
                          Send reminder
                        </Typography>
                        <TextField
                          size="small"
                          value={reminder.date}
                          sx={{
                            width: 120,
                            "& .MuiOutlinedInput-root": {
                              backgroundColor: "#fff",
                            },
                          }}
                        />
                        <Typography variant="body2" sx={{ mx: 1 }}>
                          or
                        </Typography>
                        <Select
                          size="small"
                          value={reminder.days}
                          sx={{
                            width: 70,
                            backgroundColor: "#fff",
                          }}
                        >
                          {[...Array(21)].map((_, i) => (
                            <MenuItem key={i} value={i}>
                              {i}
                            </MenuItem>
                          ))}
                        </Select>
                        <Select
                          size="small"
                          value="Day(s)"
                          sx={{
                            width: 90,
                            backgroundColor: "#fff",
                          }}
                        >
                          <MenuItem value="Day(s)">Day(s)</MenuItem>
                        </Select>
                        <Select
                          size="small"
                          value={reminder.type}
                          sx={{
                            width: 90,
                            backgroundColor: "#fff",
                          }}
                        >
                          <MenuItem value="Before">Before</MenuItem>
                          <MenuItem value="After">After</MenuItem>
                        </Select>
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          due date
                        </Typography>
                        <Button
                          size="small"
                          sx={{
                            ml: 1,
                            color: "#1976d2",
                            textTransform: "none",
                            fontSize: 14,
                            minWidth: "auto",
                            p: 0,
                            "&:hover": {
                              background: "none",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Add custom message
                        </Button>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteReminder(index)}
                          sx={{ color: "text.secondary" }}
                        >
                          <DeleteOutlineIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    ))}
                  </LocalizationProvider>
                </Box>
              )}
            </Box>
            <Box sx={{ mb: 1 }}>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography variant="body2">Enable recipient verification using a One Time Password.</Typography>
                }
              />
            </Box>
            <Box>
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography variant="body2">Send SMS reminders too</Typography>}
              />
            </Box>
          </Paper>
        </>
      );
    default:
      return <Typography>Unknown step</Typography>;
  }
}

const WorkspaceStepperPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [reviewItems, setReviewItems] = useState(defaultReviewItems);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleActiveStep = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", height: "90%", padding: "10px 20px", backgroundColor: "#F8F9FF" }}>
      <Paper
        elevation={0}
        sx={{
          mt: 2,
          padding: "12px 20px",
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <CustomizedSteppers steps={steps} handleActiveStep={handleActiveStep} activeStep={activeStep} left={55} />
      </Paper>
      <Paper
        elevation={0}
        sx={{
          mt: 2,
          padding: "20px",
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          minHeight: "58vh",
        }}
      >
        {activeStep === steps.length ? (
          <Box sx={{ textAlign: "center", pt: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: "success.main",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Workspace Created Successfully!
            </Typography>
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                px: 4,
              }}
            >
              Create Another Workspace
            </Button>
          </Box>
        ) : (
          getStepContent(activeStep, reviewItems, setReviewItems, [drawerOpen, setDrawerOpen])
        )}
      </Paper>
      {activeStep !== steps.length && (
        <Paper
          elevation={0}
          sx={{
            mt: 2,
            padding: "12px 20px",
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              px: 4,
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              px: 4,
            }}
          >
            {activeStep === steps.length - 1 ? "Create Workspace" : "Next"}
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default WorkspaceStepperPage;
