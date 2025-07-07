import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  LinearProgress,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import {
  CloudUpload as CloudUploadIcon,
  InsertDriveFile as FileIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

const DocumentUploadForm = ({ formData, onChange, onBack, onSubmit, onSkip }) => {
  const [files, setFiles] = useState(formData.documents || []);
  const [uploadProgress, setUploadProgress] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    const validFiles = acceptedFiles.filter(file => file.size <= MAX_FILE_SIZE);
    const newFiles = validFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      progress: 0,
    }));

    setFiles(prev => [...prev, ...newFiles]);
    onChange({ documents: [...files, ...newFiles] });
  }, [files, onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: MAX_FILE_SIZE,
  });

  const handleRemoveFile = (fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
    onChange({ documents: files.filter(f => f.id !== fileId) });
  };

  const handleUpload = async () => {
    // Simulate file upload progress
    for (const file of files) {
      for (let progress = 0; progress <= 100; progress += 10) {
        setUploadProgress(prev => ({
          ...prev,
          [file.id]: progress,
        }));
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }
    onSubmit();
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Upload Documents (Optional)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        You can upload any documents now or skip this step and upload them later. Maximum file size is 100MB.
      </Typography>

      <Paper
        {...getRootProps()}
        sx={{
          p: 3,
          mb: 3,
          border: '2px dashed',
          borderColor: isDragActive ? 'primary.main' : 'grey.300',
          backgroundColor: isDragActive ? 'action.hover' : 'background.paper',
          cursor: 'pointer',
          textAlign: 'center',
        }}
      >
        <input {...getInputProps()} />
        <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography>
          {isDragActive
            ? 'Drop the files here...'
            : 'Drag and drop files here, or click to select files'}
        </Typography>
      </Paper>

      {files.length > 0 && (
        <List>
          {files.map((file) => (
            <ListItem key={file.id}>
              <ListItemIcon>
                <FileIcon />
              </ListItemIcon>
              <ListItemText
                primary={file.file.name}
                secondary={`${(file.file.size / 1024 / 1024).toFixed(2)} MB`}
              />
              <ListItemSecondaryAction>
                <Box sx={{ width: '100%', mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={uploadProgress[file.id] || 0}
                  />
                </Box>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleRemoveFile(file.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button onClick={onBack}>Back</Button>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            onClick={onSkip}
            sx={{ mr: 2 }}
          >
            Skip
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={files.length === 0}
          >
            Complete Signup
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentUploadForm; 