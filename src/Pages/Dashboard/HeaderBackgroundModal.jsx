import React, { useState, useEffect } from "react";
import { Box, Typography, Modal, Input, Slider, Stack, Button } from "@mui/material";

function HeaderBackgroundModal({ open, onClose, onSave, initialImage, initialOverlay }) {
  const [image, setImage] = useState(initialImage || "");
  const [overlay, setOverlay] = useState(initialOverlay ?? 0.7);
  const [preview, setPreview] = useState(initialImage || "");

  useEffect(() => {
    setImage(initialImage || "");
    setPreview(initialImage || "");
    setOverlay(initialOverlay ?? 0.7);
  }, [open, initialImage, initialOverlay]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImage(ev.target.result);
        setPreview(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave({ image, overlay });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
        outline: 'none',
      }}>
        <Typography variant="h6" fontWeight={700} mb={2}>Header background</Typography>
        <Typography variant="body2" mb={1}>Upload file</Typography>
        <Input type="file" onChange={handleImageChange} fullWidth sx={{ mb: 2 }} />
        <Typography variant="body2" mb={1}>Overlay transparency</Typography>
        <Slider
          value={overlay}
          min={0}
          max={1}
          step={0.01}
          onChange={(_, v) => setOverlay(v)}
          sx={{ mb: 2 }}
        />
        <Typography variant="body2" mb={1}>Preview</Typography>
        <Box sx={{
          width: '100%',
          height: 80,
          borderRadius: 1,
          mb: 2,
          background: preview
            ? `linear-gradient(90deg, rgba(20,20,40,${overlay}) 0%, rgba(30,30,60,${overlay}) 100%), url('${preview}') center/cover`
            : `linear-gradient(90deg, rgba(20,20,40,${overlay}) 0%, rgba(30,30,60,${overlay}) 100%)`,
        }} />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button onClick={onClose} color="inherit">Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default HeaderBackgroundModal; 