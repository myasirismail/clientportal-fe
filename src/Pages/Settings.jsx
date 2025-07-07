import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Paper, Divider, Avatar, Switch, FormControlLabel, Stack, Card, CardContent, Grid
} from '@mui/material';

const Settings = () => {
  const [orgName, setOrgName] = useState('Pix AVR');
  const [logo, setLogo] = useState(null);
  const [primaryColor, setPrimaryColor] = useState('#2196f3');
  const [highlightColor, setHighlightColor] = useState('#2196f3');
  const [navTextColor, setNavTextColor] = useState('#000000');
  const [secondaryTextColor, setSecondaryTextColor] = useState('#ffffff');
  const [showDashboardBanner, setShowDashboardBanner] = useState(true);
  const [whiteLabel, setWhiteLabel] = useState(false);

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleResetColors = () => {
    setPrimaryColor('#2196f3');
    setHighlightColor('#2196f3');
    setNavTextColor('#000000');
    setSecondaryTextColor('#ffffff');
  };

  const handleResetAll = () => {
    setOrgName('Pix AVR');
    setLogo(null);
    handleResetColors();
    setShowDashboardBanner(true);
    setWhiteLabel(false);
  };

  return (
    <Box sx={{ p: { xs: 1, md: 4 }, pt: 0, alignItems: 'flex-start' }}>
      <Typography variant="h4" fontWeight={800} mb={3} color="primary.main" sx={{ mt: 0, textAlign: 'left' }}>Settings</Typography>
      
      {/* Branding Card */}
      <Card 
        sx={{ 
          mb: 3, 
          borderRadius: 2,
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.05)',
          border: 'none',
          background: 'linear-gradient(to bottom right, #ffffff, #fafafa)'
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={700} mb={3} color="primary.main">Brand Identity</Typography>
          
          {/* Logo Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2} color="text.secondary">Logo & Visual Identity</Typography>
            <Box sx={{ 
              p: 3, 
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
              mb: 3
            }}>
              <Typography fontWeight={500} mb={2}>Organisation Logo</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={{ 
                  width: 100, 
                  height: 100, 
                  bgcolor: '#f5f5f5',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)'
                }}>
                  {logo ? (
                    <img 
                      src={logo} 
                      alt="Organization Logo" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }} 
                    />
                  ) : (
                    <Typography color="text.secondary">No Logo</Typography>
                  )}
                </Box>
                <Box>
                  <Button 
                    variant="contained" 
                    component="label"
                    sx={{ 
                      borderRadius: 2,
                      mb: 1,
                      textTransform: 'none',
                      boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)'
                    }}
                  >
                    Upload Logo
                    <input type="file" accept="image/*" hidden onChange={handleLogoChange} />
                  </Button>
                  <Typography variant="caption" color="text.secondary" display="block">
                    Recommended: 200px × 55px
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Brand Details in Column */}
            <Box sx={{ 
              p: 3, 
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)'
            }}>
              <Typography fontWeight={500} mb={3}>Brand Details</Typography>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="body2" color="text.secondary" mb={1}>Organisation Name</Typography>
                  <TextField 
                    fullWidth 
                    value={orgName} 
                    onChange={e => setOrgName(e.target.value)}
                    sx={{ 
                      '& .MuiOutlinedInput-root': { 
                        borderRadius: 2,
                        bgcolor: '#fafafa',
                        '&:hover': {
                          bgcolor: '#f5f5f5'
                        }
                      }
                    }}
                    placeholder="Enter organization name"
                  />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" mb={1}>Brand Slogan</Typography>
                  <TextField 
                    fullWidth 
                    multiline
                    rows={3}
                    placeholder="Enter your brand slogan or tagline"
                    sx={{ 
                      '& .MuiOutlinedInput-root': { 
                        borderRadius: 2,
                        bgcolor: '#fafafa',
                        '&:hover': {
                          bgcolor: '#f5f5f5'
                        }
                      }
                    }}
                  />
                </Box>
              </Stack>
            </Box>
          </Box>

          {/* Brand Guidelines Preview */}
          <Box sx={{ 
            p: 3, 
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)'
          }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2} color="text.secondary">Brand Preview</Typography>
            <Box sx={{ 
              p: 3, 
              borderRadius: 2,
              bgcolor: '#fafafa',
              display: 'flex',
              alignItems: 'center',
              gap: 3
            }}>
              <Box sx={{ 
                width: 80, 
                height: 80, 
                bgcolor: '#f5f5f5',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {logo ? (
                  <img 
                    src={logo} 
                    alt="Organization Logo" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain' 
                    }} 
                  />
                ) : (
                  <Typography color="text.secondary">Logo</Typography>
                )}
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600} mb={0.5}>{orgName}</Typography>
                <Typography variant="body2" color="text.secondary">Your brand slogan will appear here</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Navigation Bar Card */}
      <Card variant="outlined" sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} mb={3}>Theme Colors</Typography>
          
          {/* Organization Colors Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2} color="text.secondary">Organization Colors</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  p: 2, 
                  border: '1px solid', 
                  borderColor: 'divider', 
                  borderRadius: 2,
                  bgcolor: 'background.paper'
                }}>
                  <Typography variant="body2" fontWeight={500} mb={1}>Primary Color</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      bgcolor: primaryColor, 
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider'
                    }} />
                    <TextField 
                      value={primaryColor}
                      onChange={e => setPrimaryColor(e.target.value)}
                      size="small"
                      sx={{ 
                        width: 100,
                        '& .MuiOutlinedInput-root': { borderRadius: 2 }
                      }}
                      InputProps={{
                        startAdornment: <Typography variant="caption" sx={{ mr: 1 }}>#</Typography>
                      }}
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary">Used for primary buttons and main brand elements</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  p: 2, 
                  border: '1px solid', 
                  borderColor: 'divider', 
                  borderRadius: 2,
                  bgcolor: 'background.paper'
                }}>
                  <Typography variant="body2" fontWeight={500} mb={1}>Highlight Color</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      bgcolor: highlightColor, 
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider'
                    }} />
                    <TextField 
                      value={highlightColor}
                      onChange={e => setHighlightColor(e.target.value)}
                      size="small"
                      sx={{ 
                        width: 100,
                        '& .MuiOutlinedInput-root': { borderRadius: 2 }
                      }}
                      InputProps={{
                        startAdornment: <Typography variant="caption" sx={{ mr: 1 }}>#</Typography>
                      }}
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary">Used for hover states and secondary elements</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Text Colors Section */}
          <Box>
            <Typography variant="subtitle1" fontWeight={600} mb={2} color="text.secondary">Text Colors</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  p: 2, 
                  border: '1px solid', 
                  borderColor: 'divider', 
                  borderRadius: 2,
                  bgcolor: 'background.paper'
                }}>
                  <Typography variant="body2" fontWeight={500} mb={1}>Primary Text</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      bgcolor: navTextColor, 
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider'
                    }} />
                    <TextField 
                      value={navTextColor}
                      onChange={e => setNavTextColor(e.target.value)}
                      size="small"
                      sx={{ 
                        width: 100,
                        '& .MuiOutlinedInput-root': { borderRadius: 2 }
                      }}
                      InputProps={{
                        startAdornment: <Typography variant="caption" sx={{ mr: 1 }}>#</Typography>
                      }}
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary">Used for main navigation text</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  p: 2, 
                  border: '1px solid', 
                  borderColor: 'divider', 
                  borderRadius: 2,
                  bgcolor: 'background.paper'
                }}>
                  <Typography variant="body2" fontWeight={500} mb={1}>Secondary Text</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      bgcolor: secondaryTextColor, 
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider'
                    }} />
                    <TextField 
                      value={secondaryTextColor}
                      onChange={e => setSecondaryTextColor(e.target.value)}
                      size="small"
                      sx={{ 
                        width: 100,
                        '& .MuiOutlinedInput-root': { borderRadius: 2 }
                      }}
                      InputProps={{
                        startAdornment: <Typography variant="caption" sx={{ mr: 1 }}>#</Typography>
                      }}
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary">Used for secondary navigation text</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Preview Section */}
          <Box sx={{ mt: 4, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>Color Preview</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: primaryColor, 
                  color: secondaryTextColor,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: highlightColor
                  }
                }}
              >
                Primary Button
              </Button>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: primaryColor,
                  color: navTextColor,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: highlightColor,
                    color: highlightColor
                  }
                }}
              >
                Secondary Button
              </Button>
            </Box>
          </Box>

          <Box mt={3}>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={handleResetColors}
              sx={{ borderRadius: 2 }}
            >
              Reset to Default Colors
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Dashboard Card */}
      <Card variant="outlined" sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} mb={2}>Dashboard</Typography>
          <FormControlLabel 
            control={<Switch checked={showDashboardBanner} onChange={e => setShowDashboardBanner(e.target.checked)} />} 
            label="Show extra dashboard banner" 
          />
        </CardContent>
      </Card>

      {/* White Label Card */}
      <Card variant="outlined" sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} mb={2}>White label account</Typography>
          <FormControlLabel 
            control={<Switch checked={whiteLabel} onChange={e => setWhiteLabel(e.target.checked)} />} 
            label="Remove all references to Glasscubes from account" 
          />
        </CardContent>
      </Card>

      {/* Global Actions */}
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary"
          sx={{ borderRadius: 2 }}
        >
          Save All Changes
        </Button>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={handleResetAll}
          sx={{ borderRadius: 2 }}
        >
          Reset All Settings
        </Button>
      </Box>
    </Box>
  );
};

export default Settings; 