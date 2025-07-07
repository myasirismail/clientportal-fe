import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Container, Paper, Stepper, Step, StepLabel, Typography } from '@mui/material';
import PersonalInfoForm from './components/PersonalInfoForm';
import PasswordSetupForm from './components/PasswordSetupForm';
import WelcomeMessage from './components/WelcomeMessage';

const steps = ['Welcome', 'Personal Info', 'Password Setup'];

const SignupPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const invitationToken = searchParams.get('token');

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleFormDataChange = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSignupComplete = async () => {
    try {
      // Here you would typically make an API call to register the user
      // const response = await registerUser(formData);
      
      // For now, we'll just simulate a successful registration
      console.log('Registration data:', formData);
      
      // Navigate to the user dashboard after successful registration
      navigate('/app/user-dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error (show error message, etc.)
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <WelcomeMessage onNext={handleNext} />;
      case 1:
        return (
          <PersonalInfoForm
            formData={formData}
            onChange={handleFormDataChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <PasswordSetupForm
            formData={formData}
            onChange={handleFormDataChange}
            onNext={handleSignupComplete}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4,
          borderRadius: 4,
          '& .MuiStepLabel-root .MuiStepLabel-label': {
            fontSize: '1rem',
          },
          '& .MuiStepIcon-root': {
            fontSize: '2rem',
          },
          '& .MuiStepConnector-line': {
            borderTopWidth: 3,
          }
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Client Portal Signup
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>{renderStepContent(activeStep)}</Box>
      </Paper>
    </Container>
  );
};

export default SignupPage; 