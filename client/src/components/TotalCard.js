import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "95%",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function TotalCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent style={{ position: "relative", bottom: "-10px" }}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Sub Total:
        </Typography>

        <Typography variant="body2" component="p">
          Tax:
          <br />
          {'"9.75%"'}
        </Typography>
        <br />
        <Typography variant="h5" component="h2">
          Total:
        </Typography>
      </CardContent>
      <br />
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ position: "relative", bottom: "-10px", width: "100%" }}
        >
          Primary
        </Button>
      </CardActions>
    </Card>
  );
}

export default TotalCard;
