import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function ValidationTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <div>
        <TextField
          error
          id="outlined-error"
          label="Employee #"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Password"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="outlined"
        />
      </div>
    </form>
  );
}

export default ValidationTextFields;