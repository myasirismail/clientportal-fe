import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import CircleIcon from "@mui/icons-material/Circle";

export function IconSelector(props) {
  const { length, validatorField } = props;

  if (!length) {
    return <CircleIcon sx={{ color: "#808080" }} />;
  }

  if (validatorField) {
    return <CheckCircleRoundedIcon sx={{ color: "#51c056" }} />;
  } else {
    return <CancelRoundedIcon sx={{ color: "red" }} />;
  }
}
