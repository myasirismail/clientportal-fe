import { enqueueSnackbar } from "notistack";
import { styled } from "@mui/system";
import dayjs from "dayjs";
import Cookies from "js-cookie";

const ssoURL = "https://devapp-sso.lyca.sa/";

export const ShowAlert = {
  success: (message) =>
    enqueueSnackbar(message, {
      variant: "success",
    }),
  failure: (message) =>
    enqueueSnackbar(message, {
      variant: "error",
    }),
  warning: (message) =>
    enqueueSnackbar(message, {
      variant: "warning",
    }),
};

export const RedirectToLogin = () => {
  const pathname = window.location.pathname;
  const search = window.location.search;
  const url = pathname + search;
  Cookies.remove("token");
  localStorage.clear();
  window.location.replace(`${ssoURL}?redirect=cms&url=${url}`);
};
export const RedirectToSSO = () => {
  localStorage.clear();
  Cookies.remove("token");
  window.location.replace("https://devapp-sso.lyca.sa");
};
export const logoutUser = () => {
  // Cookies.remove("token");
  // localStorage.clear();
  window.open("about:blank", "_self");
  window.close();
};
export const RequiredSpan = styled("span")({
  color: "red",
});

export const shortenFileName = (fileName, maxLength = 20) => {
  if (fileName.length <= maxLength) {
    return fileName;
  }

  const extension = fileName.split(".").pop();
  const truncatedName = fileName.slice(0, maxLength - extension.length - 1);

  return `${truncatedName}...${extension}`;
};
export const formatDate = (date) => {
  if (date) {
    return dayjs(date).format("MMM DD YYYY");
  } else {
    return "---";
  }
};
