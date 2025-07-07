import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const AutocompleteInput = ({ options, value, onChange, getOptionLabel,error=false }) => {
  return (
    <Autocomplete
      size="small"
      options={options}
      value={options.find((option) => option.id === value) || null}
      onChange={(e, v) => onChange(v)}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => <TextField {...params} error={error}/>}
    />
  );
};

export default AutocompleteInput;
