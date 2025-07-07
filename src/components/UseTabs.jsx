import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import activeTab from "/activeTab.svg";
import NonActiveTab from "/nonActive.svg";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  "& .MuiTabs-flexContainer": {
    width: "fit-content",
    padding: "2px 3px",
    borderRadius: 4,
  },
  "& .MuiTabs-flexContainer button:not(:first-of-type)": {
    marginLeft: "-15px !important",
  },
  "& .Mui-selected": {
    color: "white !important",
    backgroundImage: `url(${activeTab}) !important`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontSize: "10px !important",
    minWidth: "180px",
    zIndex: "1 !important",
  },
  "& .MuiButtonBase-root.MuiTab-root": {
    backgroundImage: `url(${NonActiveTab})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "10px",
    fontSize: "10px !important",
    fontFamily: "Poppins",
    minWidth: "180px",
    textAlign: "center",
    display: "flex !important",
    alignItems: "flex-start !important",
    transition: "background-image 0.4s, color 0.7s",
  },
});

const AntTab = (props) => <Tab disableRipple {...props} />;
function UseTabs({ tab, setTab, list }) {
  const handleChange = (e, newValue) => {
    setTab(newValue);
  };
  return (
    <Grid container pt={1} pl={2}>
      <Grid md={12} item>
        <AntTabs
          value={tab}
          onChange={handleChange}
          aria-label="ant example"
          className="tab-top"
        >
          {list.map((lt) => (
            <AntTab key={lt.value} label={lt.label} value={lt.value} />
          ))}
        </AntTabs>
      </Grid>
    </Grid>
  );
}

export default UseTabs;
