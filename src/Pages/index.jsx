import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setUserProfile } from "../store/reducers/user";
import { RedirectToLogin, ShowAlert } from "../utils";
import CustomBackDrop from "../components/CustomBackDrop";
import { styled } from "@mui/material";
import Cookies from "js-cookie";
import { setFilters } from "../store/reducers/client";
import { getUserProfile } from "../store/thunk/user";

const MessageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "center",
  fontSize: "24px",
  marginTop: "25%",
});

const OnFirst = () => {
  const dispatch = useDispatch();
  const params = useSearchParams();
  const url = params[0].get("url");
  const token = params[0].get("token") || Cookies.get("token");
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setTimeout(() => {
          RedirectToLogin();
        }, 1000);
        return;
      } else {
        localStorage.setItem("token", token);
        await dispatch(getUserProfile());
        // Set initial filters if needed
        dispatch(setFilters({}));
      }
    };

    fetchData();
  }, [token, dispatch]);

  useEffect(() => {
    if (error) {
      ShowAlert.failure("Having issue, please sign in again.", {
        variant: "error",
      });
      RedirectToLogin();
    }
  }, [error]);

  if (!token) {
    return (
      <>
        <CustomBackDrop open={true} />
        <MessageDiv>You are Unauthorized. Please Login First</MessageDiv>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <CustomBackDrop open={true} />
        <MessageDiv>Authenticating the user....</MessageDiv>
      </>
    );
  }

  return <MessageDiv>Redirecting...</MessageDiv>;
};

export default OnFirst;
