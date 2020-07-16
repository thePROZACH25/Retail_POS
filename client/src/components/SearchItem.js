import React from "react";
import TextField from "@material-ui/core/TextField";

function SearchItem() {
  return (
    <div>
      <TextField
        id="outlined-full-width"
        label="Search Item"
        style={{ margin: 0 }}
        placeholder="item #"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </div>
  );
}

export default SearchItem;
