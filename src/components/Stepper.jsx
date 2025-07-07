/** @format */

import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import CircleIcon from "@mui/icons-material/Circle";
import { Tooltip, Typography } from "@mui/material";
import HandshakeIcon from '@mui/icons-material/Handshake';


const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	"color": theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
	"display": "flex",
	"background": "#784af4",
	"borderRadius": "50%",
	"width": "35px",
	"height": "35px",
	"justifyContent": "center",
	"alignItems": "center",
	...(ownerState.active && {
		background: "#7F56D9",
		width: "36px",
		height: "36px",
		marginTop: "-5px",
		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
	}),
	...(ownerState.completed && {
		width: "30px",
		height: "30px",
		background: "#7F56D9",
	}),
	"& .QontoStepIcon-completedIcon": {
		color: "white",
		zIndex: 1,
		fontSize: 20,
	},
	"& .QontoStepIcon-handshakeIcon": {
		color: "white",
		zIndex: 1,
		fontSize: 20,
	},
	"& .QontoStepIcon-circle": {
		display: "flex",
		textAlign: "center",
		width: 35,
		height: 35,
		borderRadius: "50%",
		backgroundColor: "#7F56D9",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 10,
		fontWeight: 500,
	},
}));

function QontoStepIcon(props) {
	const { active, completed, className, icon, isLastStep,isCompleted } = props;
	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{isCompleted===true  ? (
				<Check className='QontoStepIcon-completedIcon' />
			)  : isLastStep && active ? ( // Check if it's the last step
				<HandshakeIcon className='QontoStepIcon-handshakeIcon' />
			  ) : (
				<div className='QontoStepIcon-circle'>{icon}</div>
			)}
		</QontoStepIconRoot>
	);
}

QontoStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 12,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			background: "#7F56D9",
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			background: "#7F56D9",
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 2.5,
		border: 0,
		backgroundColor:
			theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	backgroundColor:
		theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
	zIndex: 1,
	color: "#fff",
	width: 29,
	height: 29,
	display: "flex",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	...(ownerState.active && {
		background: "#7F56D9",
		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
	}),
	...(ownerState.completed && {
		background: "#7F56D9",
	}),
}));

function ColorlibStepIcon(props) {
	const { active, completed, className } = props;
	const icons = {
		1: <CircleIcon />,
		2: <CircleIcon />,
		3: <CircleIcon />,
		4: <CircleIcon />,
		5: <CircleIcon />,
		6: <CircleIcon />,
		7: <CircleIcon />,
	};

	return (
		<ColorlibStepIconRoot
			ownerState={{ completed, active }}
			className={className}>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

export default function CustomizedSteppers({
	activeStep,
	steps,
	handleActiveStep,
	left = 195,
	titles = [],
}) {
	return (
		<Stack sx={{ width: "100%", marginLeft: `-${left}px` }}>
			<Stepper
				alternativeLabel
				activeStep={activeStep}
				connector={<ColorlibConnector />}>
				{steps?.map((label, index) => (
					<Step key={index} sx={{minWidth:'200px'}}>
							<Tooltip title={titles[index]?.headingText}>
								<StepLabel
								    
									onClick={() => handleActiveStep(index)}
									StepIconComponent={(props) => (
										<QontoStepIcon {...props} isLastStep={false} isCompleted={titles[index]?.isCompleted===1} />
									  )}
								   >
									<Typography sx={{fontSize:'14px', fontWeight:600}}>{label}</Typography>
								</StepLabel>
							</Tooltip>
					</Step>
				))}
			</Stepper>
		</Stack>
	);
}
